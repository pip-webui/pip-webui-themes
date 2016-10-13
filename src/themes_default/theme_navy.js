(function () {
    'use strict';
    var thisModule = angular.module('pipTheme.Navy', ['ngMaterial']);

    thisModule.config(config);

    function config($mdThemingProvider, pipTranslateProvider) {
        pipTranslateProvider.translations('en', {
            THEME: 'Theme',
            navy: 'Navy'
        });
        pipTranslateProvider.translations('ru', {
            THEME: 'Тема',
            navy: 'Сине-серая'
        });

        registerNavyTheme('navy');
        $mdThemingProvider.alwaysWatchTheme(true);

        function registerNavyTheme(themeName) {
            var greyPalette = $mdThemingProvider.extendPalette('grey', {
                '700': 'rgba(86, 97, 125, 1)',
                '800': 'rgba(86, 97, 125, .54)',
                'A100': 'rgba(231, 231, 231, 1)'
            });
            $mdThemingProvider.definePalette('grey', greyPalette);

            var tealPalette = $mdThemingProvider.extendPalette('teal', {
                'contrastLightColors': ['500', '600', '700', '800', '900', 'A700']
            });
            $mdThemingProvider.definePalette('teal', tealPalette);

            $mdThemingProvider.theme(themeName)
                .primaryPalette('grey', {
                    'default': '700',
                    'hue-1': '800'
                })
                .backgroundPalette('grey', {
                    'default': '50',  // background
                    'hue-1': '700',  // tiles dialog
                    'hue-2': 'A700'   // app bar
                })
                .warnPalette('red', {
                    'default': 'A200'
                })
                .accentPalette('teal', {
                    'default': 'A700'
                });
        }
    }
})();
