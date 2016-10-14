(function () {
    'use strict';
    var thisModule = angular.module('pipTheme.Bootbarn.Warm', ['ngMaterial']);

    thisModule.config(config);

    function config($mdThemingProvider, pipTranslateProvider) {
        pipTranslateProvider.translations('en', {
            THEME: 'Theme',
            'bootbarn-warm': 'Warm'
        });

        pipTranslateProvider.translations('ru', {
            THEME: 'Тема',
            'bootbarn-warm': 'Коричневая'
        });

        $mdThemingProvider.alwaysWatchTheme(true);

        var warmBackgroundPalette = $mdThemingProvider.extendPalette('grey', {
                'A100': 'rgba(250, 250, 250, 1)',
                'A200': 'rgba(177, 55, 34, 1)'
            })
            ;
        $mdThemingProvider.definePalette('bootbarn-warm-background', warmBackgroundPalette);

        var warmPrimaryPalette = $mdThemingProvider.extendPalette('brown', {
            '300': 'rgba(177, 55, 34, .54)',
            '500': 'rgba(177, 55, 34, 1)',
            'contrastLightColors': ['500', '300']
        });
        $mdThemingProvider.definePalette('bootbarn-warm-primary', warmPrimaryPalette);


        var warmAccentPalette = $mdThemingProvider.extendPalette('amber', {
            'A700': 'rgba(127, 148, 92, 1)',
            'contrastLightColors': ['A700']
        });
        $mdThemingProvider.definePalette('bootbarn-warm-accent', warmAccentPalette);

        $mdThemingProvider.theme('bootbarn-warm')
            .primaryPalette('bootbarn-warm-primary', {
                'default': '500',
                'hue-1': '300'
            })
            .backgroundPalette('bootbarn-warm-background', {
                'default': '50',  // background
                'hue-1': 'A200',  // tiles dialog
                'hue-2': 'A700'   // app bar
            })
            .warnPalette('red', {
                'default': 'A200'
            })
            .accentPalette('bootbarn-warm-accent', {
                'default': 'A700'
            });
    }
})();
