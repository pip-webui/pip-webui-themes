(function () {
    'use strict';
    var thisModule = angular.module('pipTheme.Bootbarn.Brown', ['ngMaterial']);

    thisModule.config(config);

    function config($mdThemingProvider, pipTranslateProvider) {
        pipTranslateProvider.translations('en', {
            THEME: 'Theme',
            'bootbarn-brown': 'Brown'
        });

        pipTranslateProvider.translations('ru', {
            THEME: 'Тема',
            'bootbarn-brown': 'Brown'
        });

        registerBrownTheme('bootbarn-brown');
        $mdThemingProvider.alwaysWatchTheme(true);

        function registerBrownTheme(themeName) {
            var brownBackgroundPalette = $mdThemingProvider.extendPalette('grey', {
                'A100': 'rgba(177, 55, 34, 1)',
                'A200': 'rgba(177, 55, 34, 1)'
            });
            $mdThemingProvider.definePalette('brown-background', brownBackgroundPalette);

            var brownPrimaryPalette = $mdThemingProvider.extendPalette('brown', {
                '300': 'rgba(177, 55, 34, .54)',
                '500': 'rgba(177, 55, 34, 1)',
                'contrastLightColors': ['500', '300']
            });
            $mdThemingProvider.definePalette('brown-primary', brownPrimaryPalette);


            var brownAccentPalette = $mdThemingProvider.extendPalette('amber', {
                'A700': 'rgba(127, 148, 92, 1)',
                'contrastLightColors': ['A700']
            });
            $mdThemingProvider.definePalette('brown-accent', brownAccentPalette);

            $mdThemingProvider.theme(themeName)
                .primaryPalette('brown-primary', {
                    'default': '500',
                    'hue-1': '300'
                })
                .backgroundPalette('brown-background', {
                    'default': '50',  // background
                    'hue-1': 'A200',  // tiles dialog
                    'hue-2': 'A700'   // app bar
                })
                .warnPalette('red', {
                    'default': 'A200'
                })
                .accentPalette('brown-accent', {
                    'default': 'A700'
                });
        }
    }
})();
