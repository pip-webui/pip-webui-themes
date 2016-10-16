(function () {
    'use strict';
    var thisModule = angular.module('pipTheme', ['LocalStorageModule', 'ngMaterial']);
    
    thisModule.provider('pipTheme', function() {
        var 
            theme = 'blue',
            persist = true,
            setRoot = true;

        this.use = initTheme;
        this.init = initTheme;
        this.persist = initPersist;
        this.setRoot = initSetRoot;

        this.$get = function ($rootScope, $timeout, localStorageService, $mdTheming) {
            // Read language from persistent storage
            if (persist)
                theme = localStorageService.get('theme') || theme;

            // Set root variable
            if (setRoot) 
                $rootScope.$theme = theme;

            // Switch material theme
            $('body').attr('md-theme', '{{ $theme }}').addClass('{{ $theme }}');
            
            // Resetting root scope to force update language on the screen
            function resetContent(fullReset, partialReset) {
                fullReset = fullReset !== undefined ? !!fullReset : true;
                partialReset = partialReset !== undefined ? !!partialReset : true;

                $rootScope.$reset = fullReset;
                $rootScope.$partialReset = partialReset;
                $timeout(function() {
                    $rootScope.$reset = false;
                    $rootScope.$partialReset = false;
                }, 0);
            }

            function getOrSetTheme(newTheme, fullReset, partialReset) {
                if (newTheme != null && newTheme != theme) {
                    if (!(theme in $mdTheming.THEMES))
                        throw new Error('Theme ' + theme + ' is not registered. Please, register it first with $mdThemingProvider');

                    theme = newTheme;
                    
                    if (persist)
                        localStorageService.set('theme', theme);
                    if (setRoot)
                        $rootScope.$language = theme;
                    
                    // Switch material theme
                    $('body').attr('md-theme', '{{ $theme }}').addClass('{{ $theme }}');

                    // Resetting content.
                    resetContent(fullReset, partialReset);

                    // Sending notification
                    $rootScope.$broadcast('pipThemeChanged', newTheme);
                }
                return theme;
            }

            return {
                use: getOrSetTheme,
                theme: getOrSetTheme
            }
        };

        // Initialize theme selection
        function initTheme(newTheme) {
            if (newTheme != null)
                theme = newTheme;
            return theme;
        }

        // Initialize persistence flag
        function initPersist(newPersist) {
            if (newPersist != null)
                persist = newPersist;
            return persist;
        }

        // Initialize set root flag
        function initSetRoot(newSetRoot) {
            if (newSetRoot != null)
                setRoot = newSetRoot;
            return setRoot;  
        }

    });
    
})();
