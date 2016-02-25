console.log("init map");
$(window).load(function(){
    console.log("init map");
    issTracker_init();
});

$(window).on('resize', function(){
    console.log("subscribing to resize");
    issTrackerResize();
});

