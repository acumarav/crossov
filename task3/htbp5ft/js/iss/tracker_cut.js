
var isst_xmlhttp = null;
var isst_ld_steps = 0;
var isst_ld_progress = 0;
var isst_ready = false;
var lastUpdate = 0;
var nextUpdateStep = 60000.0 * 1440.0;
var isst_tle = {sat: "", L1: "", L2: ""};
var SGP4 = {
    CanPropagate: false,
    kUnits: 1.0,
    EpochTLE: 0,
    EpochNow: 0,
    IFLAG: 0,
    XMO: 0,
    XNODEO: 0,
    OMEGAO: 0,
    EO: 0,
    XINCL: 0,
    XNO: 0,
    XNDT2O: 0,
    XNDD6O: 0,
    BSTAR: 0,
    DE2RA: Math["PI"] / 180.0,
    PIO2: Math["PI"] / 2.0,
    X3PIO2: Math["PI"] * 1.5,
    TWOPI: Math["PI"] * 2.0,
    E6A: 1.0E-6,
    TOTHRD: 2.0 / 3.0,
    XJ3: -0.253881e-5,
    XKMPER: 6378.135,
    XMNPDA: 1440.0,
    AE: 1.0,
    CK2: 5.413080E-4,
    CK4: 0.62098875E-6,
    S: 1.0122292801892716,
    QOMS2T: 1.8802791590152709e-9,
    XKE: 0.074366916133173408,
    TIMCON: 3600 * 24 * 1000,
    SECDAY: 86400.0,
    OMEGAE: 1.00273790934,
    X: 0,
    Y: 0,
    Z: 0,
    XDOT: 0,
    YDOT: 0,
    ZDOT: 0,
    Latitude: 0,
    Longitude: 0,
    Altitude: 0,
    Speed: 0,
    LatitudeLabel: "",
    LongitudeLabel: "",
    AltitudeLabel: "",
    SpeedLabel: "",
    TimeLabel: "",
    A1: 0,
    COSIO: 0,
    THETA2: 0,
    X3THM1: 0,
    EOSQ: 0,
    BETAO2: 0,
    BETAO: 0,
    DEL1: 0,
    AO: 0,
    DELO: 0,
    XNODP: 0,
    AODP: 0,
    ISIMP: 0,
    S4: 0,
    QOMS24: 0,
    PERIGE: 0,
    PINVSQ: 0,
    TSI: 0,
    ETA: 0,
    EETA: 0,
    ETASQ: 0,
    COEF: 0,
    COEF1: 0,
    PSISQ: 0,
    C1: 0,
    C2: 0,
    C3: 0,
    SINIO: 0,
    A3OVK2: 0,
    C4: 0,
    C5: 0,
    X1MTH2: 0,
    THETA4: 0,
    TEMP1: 0,
    TEMP2: 0,
    TEMP3: 0,
    XMDOT: 0,
    X1M5TH: 0,
    OMGDOT: 0,
    XHDOT1: 0,
    OMGCOF: 0,
    XMCOF: 0,
    XNODOT: 0,
    XNODCF: 0,
    T2COF: 0,
    XLCOF: 0,
    AYCOF: 0,
    DELMO: 0,
    SINMO: 0,
    X7THM1: 0,
    C1SQ: 0,
    D2: 0,
    TEMP: 0,
    D3: 0,
    D4: 0,
    T3COF: 0,
    T4COF: 0,
    T5COF: 0,
    init: function (_0xbf08x9, _0xbf08xa) {
        var _0xbf08xb;
        var _0xbf08xc;
        var _0xbf08xd;
        var _0xbf08xe = 0;
        var _0xbf08xf = _0xbf08x9["split"](" ");
        var _0xbf08x10 = _0xbf08xa["split"](" ");
        var _0xbf08x11;
        var _0xbf08x12 = "";
        var _0xbf08x13;
        _0xbf08xf = this["trim_vector"](_0xbf08xf);
        _0xbf08x10 = this["trim_vector"](_0xbf08x10);
        this["XMO"] = this["DE2RA"] * (_0xbf08x10[6] * 1.0);
        this["XNODEO"] = this["DE2RA"] * (_0xbf08x10[3] * 1.0);
        this["OMEGAO"] = this["DE2RA"] * (_0xbf08x10[5] * 1.0);
        this["XINCL"] = this["DE2RA"] * (_0xbf08x10[2] * 1.0);
        this["EO"] = ("0." + _0xbf08x10[4]) * 1.0;
        _0xbf08x11 = _0xbf08x10[7] * 1.0;
        this["XNO"] = _0xbf08x11 * this["TWOPI"] / 1440.0;
        this["XNDT2O"] = (_0xbf08xf[4] * 1.0) * this["TWOPI"] / (1440.0 * 1440.0);
        this["XNDD6O"] = this["tleExp2Num"](_0xbf08xf[5]) * this["TWOPI"] / (1440.0 * 1440.0 * 1440.0);
        this["BSTAR"] = this["tleExp2Num"](_0xbf08xf[6]);
        _0xbf08xb = _0xbf08xf[3]["substr"](0, 2) * 1.0;
        _0xbf08xc = _0xbf08xf[3]["substr"](2) * 1.0;
        var _0xbf08x14 = new Date(Date.UTC(2000 + _0xbf08xb, 0, 1, 0, 0, 0, 0));
        this["EpochTLE"] = (_0xbf08xc - 1.0) + _0xbf08x14["getTime"]() / this["TIMCON"];
        this["IFLAG"] = 1;
        this["CanPropagate"] = true;
        this["propagate"]();
    },
    propagate: function () {
        if (!this["CanPropagate"]) {
            return
        }
        ;
        var _0xbf08x15 = new Date();
        this["EpochNow"] = _0xbf08x15["getTime"]() / this["TIMCON"];
        this._propagate(this.EpochNow);
    },
    _propagate: function (_0xbf08x16) {
        var _0xbf08x17 = (_0xbf08x16 - this["EpochTLE"]) * 1440.0;
        var _0xbf08x18;
        var _0xbf08x19;
        var _0xbf08x1a;
        var _0xbf08x1b;
        var _0xbf08x1c;
        var _0xbf08x1d;
        var _0xbf08x1e;
        var _0xbf08x1f;
        var _0xbf08x20;
        var _0xbf08x21;
        var _0xbf08x22;
        var _0xbf08x23;
        var _0xbf08x24;
        var _0xbf08x25;
        var _0xbf08x26;
        var _0xbf08x27;
        var _0xbf08x28;
        var _0xbf08x29;
        var _0xbf08x2a;
        var _0xbf08x2b;
        var _0xbf08x2c;
        var _0xbf08x2d;
        var _0xbf08x2e;
        var _0xbf08x2f;
        var _0xbf08x30;
        var _0xbf08x31;
        var _0xbf08x32;
        var _0xbf08x33;
        var _0xbf08x34;
        var _0xbf08x35;
        var _0xbf08x36;
        var _0xbf08x37;
        var _0xbf08x38;
        var _0xbf08x39;
        var _0xbf08x3a;
        var _0xbf08x3b;
        var _0xbf08x3c;
        var _0xbf08x3d;
        var _0xbf08x3e;
        var _0xbf08x3f;
        var _0xbf08x40;
        var _0xbf08x41;
        var _0xbf08x42;
        var _0xbf08x43;
        var _0xbf08x44;
        var _0xbf08x45;
        var _0xbf08x46;
        var _0xbf08x47;
        var _0xbf08x48;
        var _0xbf08x49;
        var _0xbf08x4a;
        var _0xbf08x4b;
        var _0xbf08x4c;
        var _0xbf08x4d;
        var _0xbf08x4e;
        var _0xbf08x4f;
        var _0xbf08x50;
        var _0xbf08x51;
        var _0xbf08x52;
        var _0xbf08x53;
        var _0xbf08x54;
        var _0xbf08x55;
        var _0xbf08x56;
        var _0xbf08x57;
        var _0xbf08x58;
        var _0xbf08x59;
        var _0xbf08x5a;
        if (this["IFLAG"] != 0) {
            this["A1"] = Math["pow"]((this["XKE"] / this["XNO"]), this.TOTHRD);
            this["COSIO"] = Math["cos"](this.XINCL);
            this["THETA2"] = this["COSIO"] * this["COSIO"];
            this["X3THM1"] = 3.0 * this["THETA2"] - 1;
            this["EOSQ"] = this["EO"] * this["EO"];
            this["BETAO2"] = 1.0 - this["EOSQ"];
            this["BETAO"] = Math["sqrt"](this.BETAO2);
            this["DEL1"] = 1.5 * this["CK2"] * this["X3THM1"] / (this["A1"] * this["A1"] * this["BETAO"] * this["BETAO2"]);
            this["AO"] = this["A1"] * (1.0 - this["DEL1"] * (0.5 * this["TOTHRD"] + this["DEL1"] * (1.0 + 134.0 / 81.0 * this["DEL1"])));
            this["DELO"] = 1.5 * this["CK2"] * this["X3THM1"] / (this["AO"] * this["AO"] * this["BETAO"] * this["BETAO2"]);
            this["XNODP"] = this["XNO"] / (1.0 + this["DELO"]);
            this["AODP"] = this["AO"] / (1.0 - this["DELO"]);
            this["ISIMP"] = 0;
            if ((this["AODP"] * (1.0 - this["EO"]) / this["AE"]) < (220.0 / this["XKMPER"] + this["AE"])) {
                this["ISIMP"] = 1
            }
            ;
            this["S4"] = this["S"];
            this["QOMS24"] = this["QOMS2T"];
            this["PERIGE"] = (this["AODP"] * (1.0 - this["EO"]) - this["AE"]) * this["XKMPER"];
            if (this["PERIGE"] < 156.0) {
                S4 = this["PERIGE"] - 78.0;
                if (this["PERIGE"] <= 98.0) {
                    S4 = 20.0
                }
                ;
                QOMS24 = Math["pow"](((120.0 - S4) * AE / XKMPER), 4);
                S4 = S4 / XKMPER + AE;
            }
            ;
            this["PINVSQ"] = 1.0 / (this["AODP"] * this["AODP"] * this["BETAO2"] * this["BETAO2"]);
            this["TSI"] = 1.0 / (this["AODP"] - this["S4"]);
            this["ETA"] = this["AODP"] * this["EO"] * this["TSI"];
            this["ETASQ"] = this["ETA"] * this["ETA"];
            this["EETA"] = this["EO"] * this["ETA"];
            this["PSISQ"] = Math["abs"](1.0 - this["ETASQ"]);
            this["COEF"] = this["QOMS24"] * Math["pow"](this.TSI, 4);
            this["COEF1"] = this["COEF"] / Math["pow"](this.PSISQ, 3.5);
            this["C2"] = this["COEF1"] * this["XNODP"] * (this["AODP"] * (1.0 + 1.5 * this["ETASQ"] + this["EETA"] * (4.0 + this["ETASQ"])) + 0.75 * this["CK2"] * this["TSI"] / this["PSISQ"] * this["X3THM1"] * (8.0 + 3.0 * this["ETASQ"] * (8.0 + this["ETASQ"])));
            this["C1"] = this["BSTAR"] * this["C2"];
            this["SINIO"] = Math["sin"](this.XINCL);
            this["A3OVK2"] = -this["XJ3"] / this["CK2"] * Math["pow"](this.AE, 3);
            this["C3"] = this["COEF"] * this["TSI"] * this["A3OVK2"] * this["XNODP"] * this["AE"] * this["SINIO"] / this["EO"];
            this["X1MTH2"] = 1.0 - this["THETA2"];
            this["C4"] = 2.0 * this["XNODP"] * this["COEF1"] * this["AODP"] * this["BETAO2"] * (this["ETA"] * (2.0 + 0.5 * this["ETASQ"]) + this["EO"] * (0.5 + 2.0 * this["ETASQ"]) - 2.0 * this["CK2"] * this["TSI"] / (this["AODP"] * this["PSISQ"]) * (-3.0 * this["X3THM1"] * (1.0 - 2.0 * this["EETA"] + this["ETASQ"] * (1.5 - 0.5 * this["EETA"])) + 0.75 * this["X1MTH2"] * (2.0 * this["ETASQ"] - this["EETA"] * (1.0 + this["ETASQ"])) * Math["cos"](2.0 * this["OMEGAO"])));
            this["C5"] = 2.0 * this["COEF1"] * this["AODP"] * this["BETAO2"] * (1.0 + 2.75 * (this["ETASQ"] + this["EETA"]) + this["EETA"] * this["ETASQ"]);
            this["THETA4"] = this["THETA2"] * this["THETA2"];
            this["TEMP1"] = 3.0 * this["CK2"] * this["PINVSQ"] * this["XNODP"];
            this["TEMP2"] = this["TEMP1"] * this["CK2"] * this["PINVSQ"];
            this["TEMP3"] = 1.25 * this["CK4"] * this["PINVSQ"] * this["PINVSQ"] * this["XNODP"];
            this["XMDOT"] = this["XNODP"] + 0.5 * this["TEMP1"] * this["BETAO"] * this["X3THM1"] + 0.0920 * this["TEMP2"] * this["BETAO"] * (13.0 - 78.0 * this["THETA2"] + 137.0 * this["THETA4"]);
            this["X1M5TH"] = 1.0 - 5.0 * this["THETA2"];
            this["OMGDOT"] = -0.5 * this["TEMP1"] * this["X1M5TH"] + 0.0920 * this["TEMP2"] * (7.0 - 114.0 * this["THETA2"] + 395.0 * this["THETA4"]) + this["TEMP3"] * (3.0 - 36.0 * this["THETA2"] + 49.0 * this["THETA4"]);
            this["XHDOT1"] = -this["TEMP1"] * this["COSIO"];
            this["XNODOT"] = this["XHDOT1"] + (0.5 * this["TEMP2"] * (4.0 - 19.0 * this["THETA2"]) + 2.0 * this["TEMP3"] * (3.0 - 7.0 * this["THETA2"])) * this["COSIO"];
            this["OMGCOF"] = this["BSTAR"] * this["C3"] * Math["cos"](this.OMEGAO);
            this["XMCOF"] = -this["TOTHRD"] * this["COEF"] * this["BSTAR"] * this["AE"] / this["EETA"];
            this["XNODCF"] = 3.5 * this["BETAO2"] * this["XHDOT1"] * this["C1"];
            this["T2COF"] = 1.5 * this["C1"];
            this["XLCOF"] = 0.125 * this["A3OVK2"] * this["SINIO"] * (3.0 + 5.0 * this["COSIO"]) / (1.0 + this["COSIO"]);
            this["AYCOF"] = 0.25 * this["A3OVK2"] * this["SINIO"];
            this["DELMO"] = Math["pow"](1.0 + this["ETA"] * Math["cos"](this.XMO), 3);
            this["SINMO"] = Math["sin"](this.XMO);
            this["X7THM1"] = 7.0 * this["THETA2"] - 1.0;
            if (this["ISIMP"] != 1) {
                this["C1SQ"] = this["C1"] * this["C1"];
                this["D2"] = 4.0 * this["AODP"] * this["TSI"] * this["C1SQ"];
                this["TEMP"] = this["D2"] * this["TSI"] * this["C1"] / 3.0;
                this["D3"] = (17.0 * this["AODP"] + this["S4"]) * this["TEMP"];
                this["D4"] = 0.5 * this["TEMP"] * this["AODP"] * this["TSI"] * (221.0 * this["AODP"] + 31.0 * this["S4"]) * this["C1"];
                this["T3COF"] = this["D2"] + 2.0 * this["C1SQ"];
                this["T4COF"] = 0.25 * (3.0 * this["D3"] + this["C1"] * (12.0 * this["D2"] + 10.0 * this["C1SQ"]));
                this["T5COF"] = 0.2 * (3.0 * this["D4"] + 12.0 * this["C1"] * this["D3"] + 6.0 * this["D2"] * this["D2"] + 15.0 * this["C1SQ"] * (2.0 * this["D2"] + this["C1SQ"]));
            }
            ;
            this["IFLAG"] = 0;
        }
        ;
        _0xbf08x18 = this["XMO"] + this["XMDOT"] * _0xbf08x17;
        _0xbf08x19 = this["OMEGAO"] + this["OMGDOT"] * _0xbf08x17;
        _0xbf08x1a = this["XNODEO"] + this["XNODOT"] * _0xbf08x17;
        _0xbf08x1b = _0xbf08x19;
        _0xbf08x1c = _0xbf08x18;
        _0xbf08x1e = _0xbf08x17 * _0xbf08x17;
        _0xbf08x1d = _0xbf08x1a + this["XNODCF"] * _0xbf08x1e;
        _0xbf08x1f = 1.0 - this["C1"] * _0xbf08x17;
        _0xbf08x20 = this["BSTAR"] * this["C4"] * _0xbf08x17;
        _0xbf08x21 = this["T2COF"] * _0xbf08x1e;
        if (this["ISIMP"] != 1) {
            _0xbf08x22 = this["OMGCOF"] * _0xbf08x17;
            _0xbf08x23 = this["XMCOF"] * (Math["pow"]((1.0 + this["ETA"] * Math["sin"](_0xbf08x18)), 3) - this["DELMO"]);
            this["TEMP"] = _0xbf08x22 + _0xbf08x23;
            _0xbf08x1c = _0xbf08x18 + this["TEMP"];
            _0xbf08x1b = _0xbf08x19 - this["TEMP"];
            _0xbf08x24 = _0xbf08x1e * _0xbf08x17;
            _0xbf08x25 = _0xbf08x17 * _0xbf08x24;
            _0xbf08x1f = _0xbf08x1f - this["D2"] * _0xbf08x1e - this["D3"] * _0xbf08x24 - this["D4"] * _0xbf08x25;
            _0xbf08x20 = _0xbf08x20 + this["BSTAR"] * this["C5"] * (Math["sin"](_0xbf08x1c) - this["SINMO"]);
            _0xbf08x21 = _0xbf08x21 + this["T3COF"] * _0xbf08x24 + _0xbf08x25 * (this["T4COF"] + _0xbf08x17 * this["T5COF"]);
        }
        ;
        _0xbf08x26 = this["AODP"] * Math["pow"](_0xbf08x1f, 2);
        _0xbf08x27 = this["EO"] - _0xbf08x20;
        _0xbf08x28 = _0xbf08x1c + _0xbf08x1b + _0xbf08x1d + this["XNODP"] * _0xbf08x21;
        _0xbf08x2a = Math["sqrt"](1.0 - _0xbf08x27 * _0xbf08x27);
        _0xbf08x2b = this["XKE"] / Math["pow"](_0xbf08x26, 1.5);
        _0xbf08x2c = _0xbf08x27 * Math["cos"](_0xbf08x1b);
        this["TEMP"] = 1.0 / (_0xbf08x26 * _0xbf08x2a * _0xbf08x2a);
        _0xbf08x2e = this["TEMP"] * this["XLCOF"] * _0xbf08x2c;
        _0xbf08x2f = this["TEMP"] * this["AYCOF"];
        _0xbf08x29 = _0xbf08x28 + _0xbf08x2e;
        _0xbf08x2d = _0xbf08x27 * Math["sin"](_0xbf08x1b) + _0xbf08x2f;
        _0xbf08x30 = this.FMOD2P(_0xbf08x29 - _0xbf08x1d);
        this["TEMP2"] = _0xbf08x30;
        for (_0xbf08x32 = 1;
             _0xbf08x32 <= 10;
             _0xbf08x32++) {
            _0xbf08x33 = Math["sin"](this.TEMP2);
            _0xbf08x34 = Math["cos"](this.TEMP2);
            this["TEMP3"] = _0xbf08x2c * _0xbf08x33;
            _0xbf08x35 = _0xbf08x2d * _0xbf08x34;
            _0xbf08x36 = _0xbf08x2c * _0xbf08x34;
            _0xbf08x37 = _0xbf08x2d * _0xbf08x33;
            _0xbf08x38 = (_0xbf08x30 - _0xbf08x35 + this["TEMP3"] - this["TEMP2"]) / (1.0 - _0xbf08x36 - _0xbf08x37) + this["TEMP2"];
            if (Math["abs"](_0xbf08x38 - this["TEMP2"]) <= this["E6A"]) {
                break
            }
            ;
            this["TEMP2"] = _0xbf08x38;
        }
        ;
        _0xbf08x39 = _0xbf08x36 + _0xbf08x37;
        _0xbf08x3a = this["TEMP3"] - _0xbf08x35;
        _0xbf08x3b = _0xbf08x2c * _0xbf08x2c + _0xbf08x2d * _0xbf08x2d;
        this["TEMP"] = 1.0 - _0xbf08x3b;
        _0xbf08x3c = _0xbf08x26 * this["TEMP"];
        _0xbf08x3d = _0xbf08x26 * (1.0 - _0xbf08x39);
        this["TEMP1"] = 1.0 / _0xbf08x3d;
        _0xbf08x3e = this["XKE"] * Math["sqrt"](_0xbf08x26) * _0xbf08x3a * this["TEMP1"];
        _0xbf08x3f = this["XKE"] * Math["sqrt"](_0xbf08x3c) * this["TEMP1"];
        this["TEMP2"] = _0xbf08x26 * this["TEMP1"];
        _0xbf08x40 = Math["sqrt"](this.TEMP);
        this["TEMP3"] = 1.0 / (1.0 + _0xbf08x40);
        _0xbf08x41 = this["TEMP2"] * (_0xbf08x34 - _0xbf08x2c + _0xbf08x2d * _0xbf08x3a * this["TEMP3"]);
        _0xbf08x42 = this["TEMP2"] * (_0xbf08x33 - _0xbf08x2d - _0xbf08x2c * _0xbf08x3a * this["TEMP3"]);
        _0xbf08x43 = this.AcTan(_0xbf08x42, _0xbf08x41);
        _0xbf08x44 = 2.0 * _0xbf08x42 * _0xbf08x41;
        _0xbf08x45 = 2.0 * _0xbf08x41 * _0xbf08x41 - 1.0;
        this["TEMP"] = 1.0 / _0xbf08x3c;
        this["TEMP1"] = this["CK2"] * this["TEMP"];
        this["TEMP2"] = this["TEMP1"] * this["TEMP"];
        _0xbf08x46 = _0xbf08x3d * (1.0 - 1.5 * this["TEMP2"] * _0xbf08x40 * this["X3THM1"]) + 0.5 * this["TEMP1"] * this["X1MTH2"] * _0xbf08x45;
        _0xbf08x47 = _0xbf08x43 - 0.25 * this["TEMP2"] * this["X7THM1"] * _0xbf08x44;
        _0xbf08x48 = _0xbf08x1d + 1.5 * this["TEMP2"] * this["COSIO"] * _0xbf08x44;
        _0xbf08x49 = this["XINCL"] + 1.5 * this["TEMP2"] * this["COSIO"] * this["SINIO"] * _0xbf08x45;
        _0xbf08x4a = _0xbf08x3e - _0xbf08x2b * this["TEMP1"] * this["X1MTH2"] * _0xbf08x44;
        _0xbf08x59 = _0xbf08x3f + _0xbf08x2b * this["TEMP1"] * (this["X1MTH2"] * _0xbf08x45 + 1.5 * this["X3THM1"]);
        _0xbf08x4b = Math["sin"](_0xbf08x47);
        _0xbf08x4c = Math["cos"](_0xbf08x47);
        _0xbf08x4d = Math["sin"](_0xbf08x49);
        _0xbf08x4e = Math["cos"](_0xbf08x49);
        _0xbf08x4f = Math["sin"](_0xbf08x48);
        _0xbf08x50 = Math["cos"](_0xbf08x48);
        _0xbf08x51 = -_0xbf08x4f * _0xbf08x4e;
        _0xbf08x52 = _0xbf08x50 * _0xbf08x4e;
        _0xbf08x53 = _0xbf08x51 * _0xbf08x4b + _0xbf08x50 * _0xbf08x4c;
        _0xbf08x54 = _0xbf08x52 * _0xbf08x4b + _0xbf08x4f * _0xbf08x4c;
        _0xbf08x55 = _0xbf08x4d * _0xbf08x4b;
        _0xbf08x56 = _0xbf08x51 * _0xbf08x4c - _0xbf08x50 * _0xbf08x4b;
        _0xbf08x57 = _0xbf08x52 * _0xbf08x4c - _0xbf08x4f * _0xbf08x4b;
        _0xbf08x58 = _0xbf08x4d * _0xbf08x4c;
        this["X"] = _0xbf08x46 * _0xbf08x53 * this["XKMPER"];
        this["Y"] = _0xbf08x46 * _0xbf08x54 * this["XKMPER"];
        this["Z"] = _0xbf08x46 * _0xbf08x55 * this["XKMPER"];
        this["XDOT"] = (_0xbf08x4a * _0xbf08x53 + _0xbf08x59 * _0xbf08x56) * this["XKMPER"] * 60;
        this["YDOT"] = (_0xbf08x4a * _0xbf08x54 + _0xbf08x59 * _0xbf08x57) * this["XKMPER"] * 60;
        this["ZDOT"] = (_0xbf08x4a * _0xbf08x55 + _0xbf08x59 * _0xbf08x58) * this["XKMPER"] * 60;
        this["Speed"] = Math["sqrt"](this["XDOT"] * this["XDOT"] + this["YDOT"] * this["YDOT"] + this["ZDOT"] * this["ZDOT"]);
        _0xbf08x5a = Math["sqrt"](this["X"] * this["X"] + this["Y"] * this["Y"] + this["Z"] * this["Z"]);
        var _0xbf08x5b = 3.35281066474748E-3;
        var _0xbf08x5c = Math["atan2"](this.Y, this.X);
        var _0xbf08x5d = this.FMOD2P(_0xbf08x5c - this.ThetaG_JD(this.GetCurrentJulianDate(_0xbf08x16)));
        var _0xbf08x5e = Math["sqrt"](this["X"] * this["X"] + this["Y"] * this["Y"]);
        var _0xbf08x5f = _0xbf08x5b * (2 - _0xbf08x5b);
        var _0xbf08x60 = Math["atan2"](this.Z, _0xbf08x5e);
        var _0xbf08x61;
        while (true) {
            _0xbf08x61 = 1 / Math["sqrt"](1 - _0xbf08x5f * Math["pow"](Math["sin"](_0xbf08x60), 2));
            _0xbf08x60 = Math["atan2"](this["Z"] + this["XKMPER"] * _0xbf08x61 * _0xbf08x5f * Math["sin"](_0xbf08x60), _0xbf08x5e);
            break;
            if (Math["abs"](_0xbf08x60 - _0xbf08x60) < 1E-10) {
                break
            }
            ;
        }
        ;
        var _0xbf08x62 = _0xbf08x5e / Math["cos"](_0xbf08x60) - this["XKMPER"] * _0xbf08x61;
        if (_0xbf08x60 > this["PIO2"]) {
            _0xbf08x60 -= this["TWOPI"]
        }
        ;
        if (_0xbf08x5d > Math["PI"]) {
            _0xbf08x5d -= this["TWOPI"]
        } else {
            if (_0xbf08x5d < -Math["PI"]) {
                _0xbf08x5d += this["TWOPI"]
            }
        }
        ;
        this["Latitude"] = _0xbf08x60 * 180 / Math["PI"];
        this["Longitude"] = _0xbf08x5d * 180 / Math["PI"];
        this["Altitude"] = _0xbf08x62;
        var _0xbf08x63;
        var _0xbf08x64;
        var _0xbf08x65;
        _0xbf08x63 = Math["abs"](this.Latitude);
        _0xbf08x64 = Math["floor"](_0xbf08x63);
        _0xbf08x65 = Math["floor"]((_0xbf08x63 - _0xbf08x64) * 10) + "";
        this["LatitudeLabel"] = Math["abs"](_0xbf08x64) + "," + _0xbf08x65 + " " + ((this["Latitude"] >= 0) ? "N" : "S");
        _0xbf08x63 = Math["abs"](this.Longitude);
        _0xbf08x64 = Math["floor"](_0xbf08x63);
        _0xbf08x65 = Math["floor"]((_0xbf08x63 - _0xbf08x64) * 10) + "";
        this["LongitudeLabel"] = Math["abs"](_0xbf08x64) + "," + _0xbf08x65 + " " + ((this["Longitude"] >= 0) ? "E" : "W");
        this["AltitudeLabel"] = Math["round"](this["Altitude"] * this["kUnits"]) + ((this["kUnits"] == 1.0) ? " km" : " mi");
        _0xbf08x64 = Math["floor"](this["Speed"] * this["kUnits"] / 1000);
        _0xbf08x65 = Math["floor"](this["Speed"] * this["kUnits"] - _0xbf08x64 * 1000) + "";
        this["SpeedLabel"] = _0xbf08x64 + _0xbf08x65 + ((this["kUnits"] == 1.0) ? " km/h" : " mph");
        this["TimeLabel"] = this.EpochToDate(_0xbf08x16);
    },
    trim_vector: function (_0xbf08x66) {
        var _0xbf08x67 = [];
        for (i in _0xbf08x66) {
            if (_0xbf08x66[i] != "") {
                _0xbf08x67["push"](_0xbf08x66[i])
            }
        }
        ;
        return _0xbf08x67;
    },
    tleExp2Num: function (_0xbf08x68) {
        var _0xbf08x69 = 0;
        var _0xbf08x6a = "";
        var _0xbf08x6b = "";
        var _0xbf08x6c = false;
        for (var _0xbf08x6d = 0;
             _0xbf08x6d < _0xbf08x68["length"];
             _0xbf08x6d++) {
            var _0xbf08x6e = _0xbf08x68["charAt"](_0xbf08x6d);
            switch (_0xbf08x69) {
                case 0:
                    if (_0xbf08x6e == "-") {
                        _0xbf08x6c = true
                    } else {
                        if (_0xbf08x6e == "+") {
                            _0xbf08x6c = false
                        } else {
                            _0xbf08x6a = _0xbf08x6a + _0xbf08x6e
                        }
                    }
                    ;
                    _0xbf08x69 = 1;
                    break;
                    ;
                case 1:
                    if ((_0xbf08x6e == "-") || (_0xbf08x6e == "+")) {
                        _0xbf08x6b = _0xbf08x6e;
                        _0xbf08x69 = 2;
                    } else {
                        _0xbf08x6a = _0xbf08x6a + _0xbf08x6e
                    }
                    ;
                    break;
                    ;
                case 2:
                    _0xbf08x6b = _0xbf08x6b + _0xbf08x6e;
                    break;
                    ;
            }
            ;
        }
        ;
        return ("0." + _0xbf08x6a + "e" + _0xbf08x6b) * ((_0xbf08x6c) ? -1.0 : 1.0);
    },
    FMOD2P: function (_0xbf08x6f) {
        var _0xbf08x70 = Math["floor"](_0xbf08x6f / this["TWOPI"]);
        return (_0xbf08x6f - _0xbf08x70 * this["TWOPI"]);
    },
    AcTan: function (_0xbf08x71, _0xbf08x72) {
        if (_0xbf08x72 == 0.0) {
            if (_0xbf08x71 > 0.0) {
                return (this["PIO2"])
            } else {
                return (this["X3PIO2"])
            }
        } else {
            if (_0xbf08x72 > 0.0) {
                if (_0xbf08x71 > 0.0) {
                    return (Math["atan"](_0xbf08x71 / _0xbf08x72))
                } else {
                    return (this["TWOPI"] + Math["atan"](_0xbf08x71 / _0xbf08x72))
                }
            } else {
                return (Math["PI"] + Math["atan"](_0xbf08x71 / _0xbf08x72))
            }
        }
    },
    ThetaG_JD: function (_0xbf08x73) {
        var _0xbf08x74 = this.Frac(_0xbf08x73 + 0.5);
        _0xbf08x73 = _0xbf08x73 - _0xbf08x74;
        var _0xbf08x75 = (_0xbf08x73 - 2451545.0) / 36525;
        var _0xbf08x76 = 24110.54841 + _0xbf08x75 * (8640184.812866 + _0xbf08x75 * (0.093104 - _0xbf08x75 * 6.2E-6));
        _0xbf08x76 = this.Modulus(_0xbf08x76 + this["SECDAY"] * this["OMEGAE"] * _0xbf08x74, this.SECDAY);
        return (this["TWOPI"] * _0xbf08x76 / this["SECDAY"]);
    },
    GetCurrentJulianDate: function (_0xbf08x16) {
        var _0xbf08x77 = new Date();
        _0xbf08x77["setTime"](_0xbf08x16 * this["TIMCON"]);
        var _0xbf08x78 = _0xbf08x77["getUTCFullYear"]() * 1.0;
        var _0xbf08x79 = _0xbf08x77["getUTCMonth"]() * 1.0 + 1;
        var _0xbf08x65 = _0xbf08x77["getUTCDate"]() * 1.0;
        var _0xbf08x7a = _0xbf08x77["getUTCHours"]() * 1.0;
        var _0xbf08x7b = _0xbf08x77["getUTCMinutes"]() * 1.0;
        var _0xbf08x7c = _0xbf08x77["getUTCSeconds"]() * 1.0;
        var _0xbf08x7d;
        var _0xbf08x7e;
        var _0xbf08x7f;
        if (_0xbf08x79 > 2) {
            _0xbf08x7d = _0xbf08x78;
            _0xbf08x7e = _0xbf08x79 + 1;
        } else {
            _0xbf08x7d = _0xbf08x78 - 1;
            _0xbf08x7e = _0xbf08x79 + 13;
        }
        ;
        var _0xbf08x80 = Math["floor"](Math["floor"](365.25 * _0xbf08x7d) + Math["floor"](30.6001 * _0xbf08x7e) + _0xbf08x65 + 1720995);
        var _0xbf08x81 = 15 + 31 * (10 + 12 * 1582);
        if ((_0xbf08x65 + 31 * (_0xbf08x79 + 12 * _0xbf08x78)) >= _0xbf08x81) {
            _0xbf08x7f = Math["floor"](0.01 * _0xbf08x7d);
            _0xbf08x80 += 2 - _0xbf08x7f + Math["floor"](0.25 * _0xbf08x7f);
        }
        ;
        var _0xbf08x82 = _0xbf08x7a / 24.0 - 0.5;
        if (_0xbf08x82 < 0.0) {
            _0xbf08x82 += 1.0;
            --_0xbf08x80;
        }
        ;
        var _0xbf08x83 = _0xbf08x82 + (_0xbf08x7b + _0xbf08x7c / 60.0) / 60.0 / 24.0;
        var _0xbf08x84 = (_0xbf08x80 + _0xbf08x83) * 100000;
        var _0xbf08x73 = Math["floor"](_0xbf08x84);
        if ((_0xbf08x84 - _0xbf08x73) > 0.5) {
            ++_0xbf08x73
        }
        ;
        return (_0xbf08x73 / 100000);
    },
    Frac: function (_0xbf08x85) {
        return (_0xbf08x85 - Math["floor"](_0xbf08x85))
    },
    Modulus: function (_0xbf08x86, _0xbf08x87) {
        var _0xbf08x88 = _0xbf08x86;
        var _0xbf08x6d = Math["floor"](_0xbf08x86 / _0xbf08x87);
        _0xbf08x88 -= Math["floor"](_0xbf08x6d * _0xbf08x87);
        if (_0xbf08x88 < 0.0) {
            _0xbf08x88 += _0xbf08x87
        }
        ;
        return _0xbf08x88;
    },
    EpochToDate: function (_0xbf08x89) {
        var _0xbf08x8a = new Date();
        _0xbf08x8a["setTime"](_0xbf08x89 * this["TIMCON"]);
        var _0xbf08x8b = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return this["twodig"](_0xbf08x8a["getUTCDate"]()) + " " + _0xbf08x8b[_0xbf08x8a["getUTCMonth"]()] + " " + _0xbf08x8a["getUTCFullYear"]() + ", " + this["twodig"](_0xbf08x8a["getUTCHours"]()) + ":" + this["twodig"](_0xbf08x8a["getUTCMinutes"]()) + ":" + this["twodig"](_0xbf08x8a["getUTCSeconds"]());
    },
    twodig: function (_0xbf08x6f) {
        var _0xbf08x8c = "";
        if (_0xbf08x6f < 10) {
            _0xbf08x8c = _0xbf08x8c + "0"
        }
        ;
        _0xbf08x8c = _0xbf08x8c + _0xbf08x6f;
        return _0xbf08x8c;
    },
    setMetric: function () {
        this["kUnits"] = 1.0
    },
    setImperial: function () {
        this["kUnits"] = 0.621371192
    }
};
var isst_nimgs = 0;
var isst_limgs = 0;
var isst_errimgs = 0;
var isst_imgURLs = {
    intro: "",
    earthDay: "imgs/mapday.jpg",
    earthNight: "imgs/mapnight.jpg",
    iss: "imgs/iss.png",
    sun: "imgs/sun.png",
    esaLogo: "imgs/esalogo.png",
    orbitFwd: "imgs/orbitfwd.png",
    orbitBwd: "imgs/orbitbwd.png"
};
var isst_imgs = {
    intro: null,
    earthDay: null,
    earthNight: null,
    iss: null,
    sun: null,
    esaLogo: null,
    esaLabel: null,
    orbitFwd: null,
    orbitBwd: null
};
var ctx = null;
function loadImages(_0xbf08x94, _0xbf08x95) {
    if (!_0xbf08x94 || !_0xbf08x95) {
        return
    }
    ;
    isst_nimgs = isst_limgs = isst_errimgs = 0;
    for (var _0xbf08x96 in isst_imgURLs) {
        if (isst_imgURLs[_0xbf08x96] != "") {
            isst_nimgs++
        }
    }
    ;
    isst_ld_steps = isst_nimgs;
    isst_ld_steps++;
    for (var _0xbf08x96 in isst_imgURLs) {
        if (isst_imgURLs[_0xbf08x96] == "") {
            continue
        }
        ;
        isst_imgs[_0xbf08x96] = new Image;
        isst_imgs[_0xbf08x96]["onload"] = function () {
            loadingStep();
            if (++isst_limgs >= isst_nimgs) {
                if (isst_errimgs == 0) {
                    _0xbf08x94()
                } else {
                    _0xbf08x95()
                }
            }
            ;
        };
        isst_imgs[_0xbf08x96]["onerror"] = function () {
            isst_errimgs++;
            if (++isst_limgs >= isst_nimgs) {
                if (isst_errimgs == 0) {
                    _0xbf08x94()
                } else {
                    _0xbf08x95()
                }
            }
            ;
        };
        isst_imgs[_0xbf08x96]["src"] = isst_imgURLs[_0xbf08x96];
    }
    ;
}
function imagesReady() {
    loadTle(tleReady, tleError)
}
function imagesError() {
    var errMsg = document.getElementById("errmsg");
    errMsg["innerHTML"] = "ERROR: Cannot load images.";
    errMsg["style"]["display"] = "block";
}

function loadTle(_0xbf08x94, _0xbf08x95) {
    isst_xmlhttp = new XMLHttpRequest();
    var onreadystatechange = "onreadystatechange";
    console.log(onreadystatechange);
    console.log("readyState");
    isst_xmlhttp[onreadystatechange] = function () {
        var text = "28-02-2016 16:00:02 ISS (ZARYA)\n1 25544U 98067A   16058.57831793  .00006322  00000-0  10205-3 0  9997\n2 25544  51.6418 249.6253 0003966 172.2334 290.5786 15.54294669987770";
        _0xbf08x94(text);
        if (isst_xmlhttp["readyState"] == 4) {
            switch (isst_xmlhttp['status']) {
                case 0:
                    break;

                case 200:
                    loadingStep();
                    _0xbf08x94(isst_xmlhttp["responseText"]);
                    break;

                default:
                    _0xbf08x95();
            }
        }
    };
//isst_xmlhttp.open('GET','http://space.utema.ru/frame/esa-iss-tracker/tledata.txt'+'?r='+Date.now());
    isst_xmlhttp.open('GET', "http://localhost:8080/tledata.txt" + '?r=' + Date.now());

    isst_xmlhttp['send']();
}
function tleReady(_0xbf08x9c) {
    var _0xbf08x9d = _0xbf08x9c["split"]("\x0A");
    isst_tle["sat"] = _0xbf08x9d[0];
    isst_tle["L1"] = _0xbf08x9d[1];
    isst_tle["L2"] = _0xbf08x9d[2];
    isst_ready = true;
    SGP4["init"](isst_tle.L1, isst_tle.L2);
    lastUpdate = ( new Date())["getTime"]();
    tc = setTimeout(startTracker, 5000);
}
function startTracker() {
    clearTimeout(tc);
    document.getElementById("isst")["style"]["display"] = "block";
    document.getElementById("cover")["style"]["display"] = "none";
    issTrackerResize();
    if (!map) {
        //initializeMap()
    }
    ;
    tc = setTimeout(redrawTrackerTimed, 10);
}
function printData() {
    var _0xbf08xa0 = "&nbsp;&nbsp;&nbsp;";
    document.getElementById("isst_lat")["innerHTML"] = SGP4["LatitudeLabel"];
    document.getElementById("isst_lon")["innerHTML"] = SGP4["LongitudeLabel"];
    document.getElementById("isst_alt")["innerHTML"] = SGP4["AltitudeLabel"];
    document.getElementById("isst_spd")["innerHTML"] = SGP4["SpeedLabel"];
    document.getElementById("isst_tim")["innerHTML"] = SGP4["TimeLabel"];
    var _0xbf08xa1 = isDocumentInFullScreenMode();
    document.getElementById("btn_fs")["style"]["display"] = (_0xbf08xa1) ? "none" : "block";
    document.getElementById("waitmsg")["style"]["display"] = "none";
    var _0xbf08xa2 = 0;
    if (SGP4["kUnits"] != 1.0) {
        _0xbf08xa2 = isst_map_h * 0.04
    }
    ;
    document.getElementById("btn_metric2")["style"]["left"] = _0xbf08xa2 + "px";
    if (!isDocumentInFullScreenMode()) {
        setLatLon(SGP4.Latitude, SGP4.Longitude)
    }
    ;
}
function tleError() {
    var _errMsg = document.getElementById("errmsg");
    _errMsg["innerHTML"] = "ERROR: Cannot load TLE vector.";
    _errMsg["style"]["display"] = "block";
}
function loadingStep() {
    isst_ld_progress++;
    var _0xbf08xa5 = Math["min"](100.0, Math["round"](isst_ld_progress * 100.0 / isst_ld_steps)) + "%";
}
var isst_map_w = 0;
var isst_map_h = 0;
var canDraw = false;
function issTrackerResize() {
    if (!canDraw) {
        return
    };
    isst_map_w = (!isDocumentInFullScreenMode()) ? document.getElementById("isstwp")["offsetWidth"] : screen["width"];
    isst_map_h = Math["round"](isst_map_w * 0.5);
    document["documentElement"]["style"]["fontSize"] = (isst_map_h * 0.03) + "px";
    var isst_ls = document.getElementById("isst_ls");
    while (isst_ls["firstChild"]) {
        isst_ls["removeChild"](isst_ls["firstChild"])
    }
    ;
    document.getElementById("isst_ls")["innerHTML"] = "<canvas id='isst_map' style='z-index:0;' width='" + isst_map_w + "' height='" + isst_map_h + "'></canvas>";
    document.getElementById("isst_ls")["style"]["height"] = isst_map_h + "px";
    var isst_dt = document.getElementById("isst_dt");
    isst_dt["style"]["height"] = (isst_map_w * 0.0624) + "px";
    var waitmsg = document.getElementById("waitmsg");
    waitmsg["style"]["height"] = (isst_map_w * 0.0624) + "px";
    var _waitMsgH = isst_map_h * 0.04;
    waitmsg = document.getElementById("btn_metric");
    waitmsg["style"]["width"] = (2 * _waitMsgH) + "px";
    waitmsg["style"]["height"] = (_waitMsgH) + "px";
    waitmsg = document.getElementById("btn_metric2");
    waitmsg["style"]["width"] = (_waitMsgH) + "px";
    waitmsg["style"]["height"] = (_waitMsgH) + "px";
    waitmsg = document.getElementById("btn_fs");
    waitmsg["style"]["height"] = (isst_map_h * 0.06) + "px";
    var isFullScreen = isDocumentInFullScreenMode();
    waitmsg["style"]["display"] = (isFullScreen) ? "none" : "block";
    var _btnMetric2LeftOffset = 0;
    if (SGP4["kUnits"] != 1.0) {
        _btnMetric2LeftOffset = isst_map_h * 0.04
    }
    ;
    document.getElementById("btn_metric2")["style"]["left"] = _btnMetric2LeftOffset + "px";
    var _height = ((isDocumentInFullScreenMode()) ? ((screen["height"] - isst_map_w / 16.0 * 9.0) * 0.5) : 0) + "px";
    document.getElementById("isstgap")["style"]["height"] = _height;
    document.getElementById("isstgap2")["style"]["height"] = _height;
    if (!isDocumentInFullScreenMode()) {
        debugger;
        //document.getElementById("map_canvas")["style"]["height"] = (220.0 / 920.0 * isst_map_w) + "px";
        //document.getElementById('map_canvas').style.height = (220.0 / 920.0 * isst_map_w) + 'px';
    };
    waitmsg = document.getElementById("cover");
    waitmsg["style"]["maxWidth"] = ((isDocumentInFullScreenMode()) ? screen["width"] : 920) + "px";
    waitmsg["style"]["width"] = isst_map_w + "px";
    waitmsg["style"]["height"] = (isst_map_w * 9.0 / 16.0) + "px";
    ctx = document.getElementById("isst_map")["getContext"]("2d");
    redrawTracker(true);
}
var iss_old_x = 0;
var iss_old_y = 0;
function redrawTracker() {
    if (!canDraw) {
        return
    }
    ;
    if (!ctx) {
        return
    }
    ;
    var _0xbf08xb0;
    var _0xbf08xb1;
    var _0xbf08xb2;
    ctx["drawImage"](isst_imgs["earthDay"], 0, 0, isst_map_w, isst_map_h);
    calculateSunPosition();
    DrawNight();
    ctx["beginPath"]();
    ctx["lineWidth"] = "0.5";
    ctx["strokeStyle"] = "rgba(255,255,255,0.5)";
    var _0xbf08x6d = -150;
    while (_0xbf08x6d < 180) {
        var _0xbf08xb3 = (_0xbf08x6d + 180.0) / 360.0 * isst_map_w;
        ctx["moveTo"](_0xbf08xb3, 0);
        ctx["lineTo"](_0xbf08xb3, isst_map_h);
        _0xbf08x6d += 30;
    }
    ;
    _0xbf08x6d = -60;
    while (_0xbf08x6d < 90) {
        var _0xbf08xb3 = (_0xbf08x6d + 90.0) / 180.0 * isst_map_h;
        ctx["moveTo"](0, _0xbf08xb3);
        ctx["lineTo"](isst_map_w, _0xbf08xb3);
        _0xbf08x6d += 30;
    }
    ;
    ctx["stroke"]();
    ctx["save"]();
    ctx["shadowColor"] = "black";
    ctx["shadowBlur"] = isst_map_w * 0.005;
    ctx["shadowOffsetX"] = ctx["shadowOffsetY"] = 0;
    _0xbf08xb0 = isst_imgs["sun"]["width"];
    _0xbf08xb1 = isst_imgs["sun"]["height"];
    _0xbf08xb2 = _0xbf08xb0 / _0xbf08xb1;
    _0xbf08xb0 = isst_map_w * 0.03;
    _0xbf08xb1 = _0xbf08xb0 / _0xbf08xb2;
    _0xbf08xb3 = LonRadToX(SunLon);
    _0xbf08xb5 = LatRadToY(SunLat);
    ctx["drawImage"](isst_imgs["sun"], _0xbf08xb3, _0xbf08xb5, _0xbf08xb0, _0xbf08xb1);
    var _0xbf08xb4 = DrawOrbit();
    mapCalotta(1800, SGP4["Longitude"] * Math["PI"] / 180, SGP4["Latitude"] * Math["PI"] / 180, "rgba(0,255,0,0.5)");
    _0xbf08xb0 = isst_imgs["iss"]["width"];
    _0xbf08xb1 = isst_imgs["iss"]["height"];
    _0xbf08xb2 = _0xbf08xb0 / _0xbf08xb1;
    _0xbf08xb0 = isst_map_w * 0.04;
    _0xbf08xb1 = _0xbf08xb0 / _0xbf08xb2;
    _0xbf08xb3 = LonRadToX(SGP4["Longitude"] * Math["PI"] / 180.0);
    _0xbf08xb5 = LatRadToY(SGP4["Latitude"] * Math["PI"] / 180.0);
    ctx["save"]();
    ctx["translate"](_0xbf08xb3, _0xbf08xb5);
    ctx["rotate"](_0xbf08xb4);
    ctx["drawImage"](isst_imgs["iss"], -_0xbf08xb0 * 0.5, -_0xbf08xb1 * 0.5, _0xbf08xb0, _0xbf08xb1);
    ctx["restore"]();
    iss_old_x = _0xbf08xb3;
    iss_old_y = _0xbf08xb5;
    _0xbf08xb0 = isst_imgs["esaLogo"]["width"];
    _0xbf08xb1 = isst_imgs["esaLogo"]["height"];
    _0xbf08xb2 = _0xbf08xb0 / _0xbf08xb1;
    _0xbf08xb0 = isst_map_w * 0.15;
    _0xbf08xb1 = _0xbf08xb0 / _0xbf08xb2;
    var _0xbf08xb3 = isst_map_w * 0.84;
    var _0xbf08xb5 = isst_map_h * 0.010;
    ctx["drawImage"](isst_imgs["esaLogo"], _0xbf08xb3, _0xbf08xb5, _0xbf08xb0, _0xbf08xb1);
    ctx["font"] = (isst_map_h * 0.04) + "px NotesEsaBold";
    ctx["fillStyle"] = "white";
    _0xbf08xb3 = isst_map_w * 0.03;
    _0xbf08xb5 = isst_map_h * 0.1;
    ctx["fillText"]("human spaceflight and operations", _0xbf08xb3, _0xbf08xb5);
    ctx["font"] = (isst_map_h * 0.03) + "px NotesEsaRegular";
    _0xbf08xb3 = isst_map_w * 0.03;
    _0xbf08xb5 = isst_map_h * 0.97;
    ctx["fillText"]("TLE vector date: " + getTLEDate(), _0xbf08xb3, _0xbf08xb5);
    _0xbf08xb3 = isst_map_w * 0.81;
    _0xbf08xb5 = isst_map_h * 0.97;
    ctx["fillText"](String["fromCharCode"](0xA9) + " European Space Agency", _0xbf08xb3, _0xbf08xb5);
    ctx["restore"]();
}
function getTLEDate() {
    if (!SGP4["CanPropagate"]) {
        return "- Invalid TLE vector -"
    }
    ;
    return SGP4.EpochToDate(SGP4.EpochTLE);
}
function getDayOfYear(_0xbf08x89) {
    var _0xbf08xb8 = new Date();
    _0xbf08xb8["setTime"](_0xbf08x89 * 3600 * 24 * 1000);
    var _0xbf08xb5 = _0xbf08xb8["getUTCFullYear"]();
    var _0xbf08xb9 = new Date(Date.UTC(_0xbf08xb5, 0, 1));
    return ((_0xbf08xb8["getTime"]() - _0xbf08xb9["getTime"]()) / (1000 * 3600 * 24));
}
var SunLat = 0;
var SunLon = 0;
var SunLatDeg = 0;
var SunLonDeg = 0;
function calculateSunPosition() {
    var _0xbf08xbf = (31 + 28.25 + 21) * 1.0;
    var _0xbf08xc0 = getDayOfYear(SGP4.EpochNow);
    var _0xbf08xc1 = _0xbf08xc0 - Math["floor"](_0xbf08xc0);
    SunLon = Math["PI"] * (1 - 2 * _0xbf08xc1);
    SunLat = (23.5 * Math["PI"] / 180) * Math["sin"](Math["PI"] * 2 / 365.25 * (_0xbf08xc0 - _0xbf08xbf));
    SunLonDeg = SunLon * 180.0 / Math["PI"];
    SunLatDeg = SunLat * 180.0 / Math["PI"];
}
function manageFullScreen() {
    var _0xbf08xc3 = document.getElementById("isstwp");
    if (_0xbf08xc3["requestFullscreen"]) {
        _0xbf08xc3["requestFullscreen"]()
    } else {
        if (_0xbf08xc3["msRequestFullscreen"]) {
            _0xbf08xc3["msRequestFullscreen"]()
        } else {
            if (_0xbf08xc3["mozRequestFullScreen"]) {
                _0xbf08xc3["mozRequestFullScreen"]()
            } else {
                if (_0xbf08xc3["webkitRequestFullscreen"]) {
                    _0xbf08xc3["webkitRequestFullscreen"](Element.ALLOW_KEYBOARD_INPUT)
                }
            }
        }
    }
    ;
}
function isDocumentInFullScreenMode() {
    return ((document["fullScreenElement"] && document["fullScreenElement"] !== null) || document["mozFullScreen"] || document["webkitIsFullscreen"] || (window["innerHeight"] == screen["height"]))
}
function mapCalotta(_0xbf08xc6, _0xbf08xc7, _0xbf08xc8, _0xbf08xc9) {
    if (!ctx) {
        return
    }
    ;
    var _0xbf08xca = 6371.0;
    var _0xbf08xcb = _0xbf08xca * Math["cos"](Math["asin"](_0xbf08xc6 / _0xbf08xca));
    var _0xbf08xcc = 0;
    var _0xbf08xcd = 180;
    var _0xbf08xce = -_0xbf08xc7 * 2;
    var _0xbf08xcf = -_0xbf08xc8 * 2;
    var _0xbf08xd0;
    var _0xbf08xd1;
    var _0xbf08xd2;
    var _0xbf08xd3;
    var _0xbf08xd4;
    var _0xbf08xd5;
    var _0xbf08xd6;
    var _0xbf08xd7;
    var _0xbf08xd8;
    var _0xbf08xd9;
    var _0xbf08xda;
    var _0xbf08xdb;
    var _0xbf08xdc;
    var _0xbf08xdd;
    var _0xbf08x6d;
    var _0xbf08xde;
    var _0xbf08xdf;
    var _0xbf08xe0;
    var _0xbf08xe1;
    var _0xbf08xe2;
    var _0xbf08xe3 = 3;
    _0xbf08xdc = Math["PI"] / 2;
    _0xbf08xe1 = LonRadToX(_0xbf08xc7);
    _0xbf08xe2 = LatRadToY(_0xbf08xc8);
    ctx["beginPath"]();
    ctx["lineWidth"] = Math["max"](1.5, isst_map_w * 0.002);
    ctx["strokeStyle"] = _0xbf08xc9;
    for (_0xbf08x6d = 0;
         _0xbf08x6d < (_0xbf08xcd + 2 - 1);
         _0xbf08x6d++) {
        _0xbf08xcc = (2 * Math["PI"]) / _0xbf08xcd * _0xbf08x6d;
        _0xbf08xd0 = _0xbf08xcb;
        _0xbf08xd1 = _0xbf08xc6 * Math["cos"](_0xbf08xcc);
        _0xbf08xd2 = _0xbf08xc6 * Math["sin"](_0xbf08xcc);
        _0xbf08xd3 = -_0xbf08xc8;
        _0xbf08xd4 = _0xbf08xd0 * Math["cos"](_0xbf08xd3) + _0xbf08xd2 * Math["sin"](_0xbf08xd3);
        _0xbf08xd5 = _0xbf08xd1;
        _0xbf08xd6 = -_0xbf08xd0 * Math["sin"](_0xbf08xd3) + _0xbf08xd2 * Math["cos"](_0xbf08xd3);
        _0xbf08xd0 = _0xbf08xd4;
        _0xbf08xd1 = _0xbf08xd5;
        _0xbf08xd2 = _0xbf08xd6;
        _0xbf08xdd = Math["sqrt"](_0xbf08xd0 * _0xbf08xd0 + _0xbf08xd1 * _0xbf08xd1);
        _0xbf08xd8 = Math["atan2"](_0xbf08xd2, _0xbf08xdd);
        _0xbf08xd7 = Math["atan2"](_0xbf08xd1, _0xbf08xd0);
        _0xbf08xd7 += _0xbf08xc7;
        _0xbf08xe0 = -1;
        if (_0xbf08xd7 < -Math["PI"]) {
            _0xbf08xd7 = (2 * Math["PI"]) + _0xbf08xd7
        }
        ;
        if (_0xbf08xd7 > Math["PI"]) {
            _0xbf08xd7 = _0xbf08xd7 - (2 * Math["PI"])
        }
        ;
        _0xbf08xd9 = LonRadToX(_0xbf08xd7);
        _0xbf08xdb = LatRadToY(_0xbf08xd8);
        _0xbf08xde = (_0xbf08xce == -100) || (Math["abs"](_0xbf08xce - _0xbf08xd7) > _0xbf08xdc) || (Math["abs"](_0xbf08xcf - _0xbf08xd8) > _0xbf08xdc);
        _0xbf08xce = _0xbf08xd7;
        _0xbf08xcf = _0xbf08xd8;
        if ((_0xbf08x6d == 0) || (_0xbf08xde)) {
            ctx["moveTo"](_0xbf08xd9, _0xbf08xdb)
        } else {
            ctx["lineTo"](_0xbf08xd9, _0xbf08xdb)
        }
        ;
        _0xbf08xce = _0xbf08xd7;
        _0xbf08xcf = _0xbf08xd8;
    }
    ;
    ctx["stroke"]();
}
function DrawNight() {
    var _0xbf08xe5 = 40;
    var _0xbf08xe6 = 0;
    var _0xbf08xe7 = isst_map_w;
    var _0xbf08xe8 = isst_map_h;
    var _0xbf08xe9 = _0xbf08xe7 / _0xbf08xe5;
    var _0xbf08xea = Math["PI"] * 0.5;
    var _0xbf08xeb;
    var _0xbf08xec;
    var _0xbf08xed;
    var _0xbf08xee;
    var _0xbf08xef;
    var _0xbf08xf0;
    var _0xbf08xf1;
    var _0xbf08xf2;
    var _0xbf08xa1;
    if (SunLat == 0) {
    } else {
        ctx["save"]();
        ctx["fillStyle"] = "white";
        ctx["beginPath"]();
        var _0xbf08x6d = 0;
        var _0xbf08xf3 = 0;
        while (_0xbf08x6d < _0xbf08xe7) {
            _0xbf08xeb = XToLonRad(_0xbf08x6d);
            if (Math["abs"](_0xbf08xeb - SunLon) == _0xbf08xea) {
                _0xbf08xec = SunLat
            } else {
                _0xbf08xa1 = Math["cos"](Math["abs"](SunLat)) * Math["cos"](_0xbf08xeb - SunLon);
                _0xbf08xec = -Math["atan2"](_0xbf08xa1, Math["sin"](Math["abs"](SunLat)));
                _0xbf08xec = ((SunLat < 0) ? -_0xbf08xec : _0xbf08xec);
            }
            ;
            _0xbf08xed = LatRadToY(_0xbf08xec);
            if (_0xbf08x6d == 0) {
                ctx["moveTo"](_0xbf08x6d, _0xbf08xed);
                _0xbf08xee = _0xbf08x6d;
                _0xbf08xef = _0xbf08xed;
            } else {
                ctx["lineTo"](_0xbf08x6d, _0xbf08xed)
            }
            ;
            _0xbf08x6d += _0xbf08xe9;
            _0xbf08xf3++;
        }
        ;
        _0xbf08xf2 = ((SunLat < 0) ? 0 : _0xbf08xe8 + _0xbf08xe6);
        ctx["lineTo"](_0xbf08xe7 + _0xbf08xe6, _0xbf08xef);
        ctx["lineTo"](_0xbf08xe7 + _0xbf08xe6, _0xbf08xf2);
        ctx["lineTo"](0 - _0xbf08xe6, _0xbf08xf2);
        ctx["lineTo"](0 - _0xbf08xe6, _0xbf08xef);
        ctx["closePath"]();
        ctx["clip"]();
        ctx["drawImage"](isst_imgs["earthNight"], 0, 0, isst_map_w, isst_map_h);
        ctx["restore"]();
    }
    ;
}
function DrawOrbit() {
    var _0xbf08xf5 = 60;
    var _0xbf08xf6 = LonRadToX(SGP4["Longitude"] * Math["PI"] / 180.0);
    var _0xbf08xf7 = LatRadToY(SGP4["Latitude"] * Math["PI"] / 180.0);
    var _0xbf08x89;
    var _0xbf08xf8 = 92 / 1440.0 / _0xbf08xf5;
    ctx["save"]();
    _0xbf08xfb = _0xbf08xf6;
    _0xbf08xfc = _0xbf08xf7;
    var _0xbf08xf9 = [];
    var _0xbf08xfa = [];
    var _0xbf08xfb;
    var _0xbf08xfc;
    _0xbf08x89 = SGP4["EpochNow"];
    for (var _0xbf08x6d = 0;
         _0xbf08x6d < _0xbf08xf5;
         _0xbf08x6d++) {
        SGP4._propagate(_0xbf08x89);
        _0xbf08xf9["push"](LonRadToX(SGP4["Longitude"] * Math["PI"] / 180.0));
        _0xbf08xfa["push"](LatRadToY(SGP4["Latitude"] * Math["PI"] / 180.0));
        _0xbf08x89 += _0xbf08xf8;
    }
    ;
    ctx["strokeStyle"] = "rgba(255,255,255,0.8)";
    ctx["lineWidth"] = Math["max"](1.5, isst_map_w * 0.0015);
    ctx["beginPath"]();
    for (var _0xbf08x6d = 0;
         _0xbf08x6d < _0xbf08xf5;
         _0xbf08x6d++) {
        if (_0xbf08x6d == 0) {
            ctx["moveTo"](_0xbf08xfb = _0xbf08xf9[0], _0xbf08xfc = _0xbf08xfa[0]);
            continue;
        }
        ;
        if (_0xbf08xf9[_0xbf08x6d] < _0xbf08xfb) {
            ctx["lineTo"](_0xbf08xf9[_0xbf08x6d] + isst_map_w, _0xbf08xfa[_0xbf08x6d]);
            ctx["moveTo"](_0xbf08xfb - isst_map_w, _0xbf08xfc);
        }
        ;
        ctx["lineTo"](_0xbf08xfb = _0xbf08xf9[_0xbf08x6d], _0xbf08xfc = _0xbf08xfa[_0xbf08x6d]);
    }
    ;
    ctx["stroke"]();
    var _0xbf08xfd = [];
    var _0xbf08xfe = [];
    _0xbf08x89 = SGP4["EpochNow"] - 92 / 1440 + _0xbf08xf8;
    for (var _0xbf08x6d = 0;
         _0xbf08x6d < _0xbf08xf5;
         _0xbf08x6d++) {
        SGP4._propagate(_0xbf08x89);
        _0xbf08xfd["push"](LonRadToX(SGP4["Longitude"] * Math["PI"] / 180.0));
        _0xbf08xfe["push"](LatRadToY(SGP4["Latitude"] * Math["PI"] / 180.0));
        _0xbf08x89 += _0xbf08xf8;
    }
    ;
    ctx["strokeStyle"] = "rgba(255,255,0,0.8)";
    ctx["beginPath"]();
    for (var _0xbf08x6d = 0;
         _0xbf08x6d < _0xbf08xf5;
         _0xbf08x6d++) {
        if (_0xbf08x6d == 0) {
            ctx["moveTo"](_0xbf08xfb = _0xbf08xfd[0], _0xbf08xfc = _0xbf08xfe[0]);
            continue;
        }
        ;
        if (_0xbf08xfd[_0xbf08x6d] < _0xbf08xfb) {
            ctx["lineTo"](_0xbf08xfd[_0xbf08x6d] + isst_map_w, _0xbf08xfe[_0xbf08x6d]);
            ctx["moveTo"](_0xbf08xfb - isst_map_w, _0xbf08xfc);
        }
        ;
        ctx["lineTo"](_0xbf08xfb = _0xbf08xfd[_0xbf08x6d], _0xbf08xfc = _0xbf08xfe[_0xbf08x6d]);
    }
    ;
    ctx["stroke"]();
    ctx["restore"]();
    SGP4["propagate"]();
    var _0xbf08xff = {iss: 0, head: 0, tail: 0};
    var _0xbf08x100 = 1;
    var _0xbf08xa1 = _0xbf08xf5 - 2;
    var _0xbf08x101 = _0xbf08xf9[_0xbf08x100];
    var _0xbf08x102 = _0xbf08xfd[_0xbf08xa1];
    if (_0xbf08x101 < _0xbf08x102) {
        _0xbf08x101 += isst_map_w
    }
    ;
    _0xbf08xff["iss"] = Math["atan2"](_0xbf08xfa[_0xbf08x100] - _0xbf08xfe[_0xbf08xa1], _0xbf08x101 - _0xbf08x102) + Math["PI"] * 0.5;
    _0xbf08x100 = _0xbf08xf5 - 1;
    _0xbf08xa1 = _0xbf08xf5 - 2;
    _0xbf08x101 = _0xbf08xf9[_0xbf08x100];
    _0xbf08x102 = _0xbf08xf9[_0xbf08xa1];
    if (_0xbf08x101 < _0xbf08x102) {
        _0xbf08x101 += isst_map_w
    }
    ;
    _0xbf08xff["head"] = Math["atan2"](_0xbf08xfa[_0xbf08x100] - _0xbf08xfa[_0xbf08xa1], _0xbf08x101 - _0xbf08x102);
    _0xbf08x100 = 1;
    _0xbf08xa1 = 0;
    _0xbf08x101 = _0xbf08xfd[_0xbf08x100];
    _0xbf08x102 = _0xbf08xfd[_0xbf08xa1];
    if (_0xbf08x101 < _0xbf08x102) {
        _0xbf08x101 += isst_map_w
    }
    ;
    _0xbf08xff["tail"] = Math["atan2"](_0xbf08xfe[_0xbf08x100] - _0xbf08xfe[_0xbf08xa1], _0xbf08x101 - _0xbf08x102);
    var _0xbf08xb0 = isst_imgs["orbitFwd"]["width"];
    var _0xbf08xb1 = isst_imgs["orbitFwd"]["height"];
    var _0xbf08xb2 = _0xbf08xb0 / _0xbf08xb1;
    _0xbf08xb0 = isst_map_w * 0.05;
    _0xbf08xb1 = _0xbf08xb0 / _0xbf08xb2;
    ctx["save"]();
    _0xbf08x100 = _0xbf08xf5 - 1;
    ctx["translate"](_0xbf08xf9[_0xbf08x100], _0xbf08xfa[_0xbf08x100]);
    ctx["rotate"](_0xbf08xff["head"]);
    ctx["drawImage"](isst_imgs["orbitFwd"], -_0xbf08xb0 * 0.9, -_0xbf08xb1 * 0.79, _0xbf08xb0, _0xbf08xb1);
    ctx["restore"]();
    _0xbf08xb0 = isst_imgs["orbitBwd"]["width"];
    _0xbf08xb1 = isst_imgs["orbitBwd"]["height"];
    _0xbf08xb2 = _0xbf08xb0 / _0xbf08xb1;
    _0xbf08xb0 = isst_map_w * 0.05;
    _0xbf08xb1 = _0xbf08xb0 / _0xbf08xb2;
    ctx["save"]();
    _0xbf08x100 = 0;
    ctx["translate"](_0xbf08xfd[_0xbf08x100], _0xbf08xfe[_0xbf08x100]);
    ctx["rotate"](_0xbf08xff["tail"]);
    ctx["drawImage"](isst_imgs["orbitBwd"], -_0xbf08xb0 * 0.1, -_0xbf08xb1 * 0.21, _0xbf08xb0, _0xbf08xb1);
    ctx["restore"]();
    return _0xbf08xff["iss"];
}
function LonRadToX(_0xbf08x104) {
    return (isst_map_w * (0.5 + _0xbf08x104 / (2 * Math["PI"])))
}
function LatRadToY(_0xbf08x106) {
    return (isst_map_h * (0.5 - _0xbf08x106 / Math["PI"]))
}
function YToLatRad(_0xbf08xb5) {
    return (-(_0xbf08xb5 - isst_map_h / 2) * Math["PI"] / isst_map_h)
}
function XToLonRad(_0xbf08xb3) {
    return ((_0xbf08xb3 - isst_map_w / 2.0) * (2 * Math["PI"]) / isst_map_w)
}
var tc = -1;
function redrawTrackerTimed() {
    if (tc != -1) {
        clearTimeout(tc)
    }
    ;
    if (document.getElementById("isst")["style"]["display"] == "none") {
        return
    }
    ;
    var _0xbf08x10b = ( new Date())["getTime"]();
    if ((_0xbf08x10b - lastUpdate) >= nextUpdateStep) {
        lastUpdate = _0xbf08x10b;
        issTracker_init();
        return;
    }
    ;
    SGP4["propagate"]();
    redrawTracker();
    printData();
    tc = setTimeout(redrawTrackerTimed, 5000);
}
function changeMetric() {
    var _0xbf08xa2 = 0;
    if (SGP4["kUnits"] == 1.0) {
        SGP4["setImperial"]();
        _0xbf08xa2 = isst_map_h * 0.04;
    } else {
        SGP4["setMetric"]()
    }
    ;
    document.getElementById("btn_metric2")["style"]["left"] = _0xbf08xa2 + "px";
    document.getElementById("waitmsg")["style"]["display"] = "block";
}
var marker = null;
var map = null;
function setLatLon(_0xbf08x106, _0xbf08x104) {
    //var _0xbf08x110 = new google["maps"].LatLng(_0xbf08x106, _0xbf08x104);
    //if (map) {
    //    map["panTo"](_0xbf08x110)
    //}
    ;
    //if (marker) {
    //    marker["setPosition"](_0xbf08x110)
    //}
    ;
    return 1;
}
function initializeMap() {
    console.log('init map');
    //var _0xbf08x110 = new google["maps"].LatLng(0, 0);
    //var _0xbf08x112 = {zoom: 5, center: _0xbf08x110, mapTypeId: google["maps"]["MapTypeId"]["HYBRID"]};
    //map = new google["maps"].Map(document.getElementById("map_canvas"), _0xbf08x112);
    //marker = new google["maps"].Marker({position: _0xbf08x110, map: map, title: "ISS"});
    //map["streetViewControl"] = false;
    //map["scaleControl"] = true;
}
function showCover() {
    isst_map_w = (!isDocumentInFullScreenMode()) ? document.getElementById("isst")["offsetWidth"] : screen["width"];
    isst_map_h = Math["round"](isst_map_w * 9.0 / 16.0);
    var _0xbf08x114 = isst_map_h;
    document.getElementById("isst")["style"]["display"] = "none";
    document.getElementById("cover")["style"]["display"] = "block";
    document.getElementById("isst")["style"]["display"] = "none";
}
function issTracker_init() {

    showCover();
    if (!!document["createElement"]("canvas")["getContext"]) {
        var cover = document.getElementById("cover");
        debugger;
        cover["style"]["height"] = (cover["offsetWidth"] * 9.0 / 16.0) + "px";
        canDraw = true;
        isst_ready = false;
        isst_ld_progress = isst_ld_steps = 0;
        loadImages(imagesReady, imagesError);
    } else {
        var _errmsg = document.getElementById("errmsg");
        _errmsg["innerHTML"] = "Your browser does not support HTML5";
        _errmsg["style"]["display"] = "block";
    };
}