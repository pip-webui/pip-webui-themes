(function () {
    'use strict';
    var thisModule = angular.module('pipTheme.Factory', ['ngMaterial']);
    
    thisModule.factory('pipTheme', ThemeFactory);
    
    function ThemeFactory(localStorageService, $mdTheming, $rootScope, $timeout, $state, $stateParams) {
        return {
            /**
             * Set current theme
             * @param {String} theme - theme name
             * @param {String}
             * @throws {Error} 'Theme is not specified' in case if theme is not defined
             * @throws {Error} 'Theme XXX is not registered. Please, register it first with $mdThemingProvider' if theme is not registered
             */
            setCurrentTheme: function (theme) {
                if (theme == null || theme === '') {
                    throw new Error('Theme is not specified');
                }

                if (localStorageService.get('theme') == theme && $rootScope.$theme == theme) {
                    return;
                }

                if (!(theme in $mdTheming.THEMES)) {
                    throw new Error('Theme ' + theme + ' is not registered. Please, register it first with $mdThemingProvider');
                }
                localStorageService.set('theme', theme);
                $rootScope.$theme = theme;
            },

            /** Add attribute 'md-theme' with value current theme
             *  Add current theme class
             */
            initializeTheme: function (theme) {
                if (theme == null || theme === '') {
                    throw new Error('Theme is not specified');
                }

                if (!(theme in $mdTheming.THEMES)) {
                    throw new Error('Theme ' + theme + ' is not registered. Please, register it first with $mdThemingProvider');
                }

                $rootScope.$theme = theme;
                $('body').attr('md-theme', '{{ $theme }}').addClass('{{ $theme }}');
            }
        };
    }
})();
