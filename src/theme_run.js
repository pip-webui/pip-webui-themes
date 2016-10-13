

(function () {
    'use strict';
    var thisModule = angular.module('pipTheme.Run', []);

    thisModule.run(run);
    
    function run(localStorageService, pipTheme, $rootScope) {
        try {
            var currentTheme = ($rootScope.$user && $rootScope.$user.theme) ?
                $rootScope.$user.theme : localStorageService.get('theme');

            pipTheme.initializeTheme(currentTheme);
        } catch (ex) {
            pipTheme.initializeTheme('blue');
        }
    }
})();
