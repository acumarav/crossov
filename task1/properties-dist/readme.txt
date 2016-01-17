
1. Defenition of the supported properties and their Types are static and located in the TrialAppProperties class constructor (Can be moved to bean configuration xml).
Sample: knownProperties.add(new StringProperty("jdbc_driver"));

2. In my design string values should be injected to TrialAppProperties through constructor, so there is not way to reinitialise  after clear method call or add something after instance has been created.


P.S.
Initially I choose the wrong way and tried to implement evristic analyser which try to guess property type on the fly but lost a lot of time and quit this idea.
Part of requirements is defined on web page and another part in the interface comments so it caused some problems  in my case.

Regards,
Alex Tsumarau

