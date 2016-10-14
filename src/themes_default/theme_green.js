(function () {
    'use strict';
    var thisModule = angular.module('pipTheme.Green', ['ngMaterial']);

    thisModule.config(config);

    function config($mdThemingProvider, pipTranslateProvider) {
        pipTranslateProvider.translations('en', {
            THEME: 'Theme',
            green: 'Green'
        });

        pipTranslateProvider.translations('ru', {
            THEME: 'Тема',
            green: 'Зеленая'
        });

        var greenBackgroundPalette = $mdThemingProvider.extendPalette('grey', {
            'A100': 'rgba(231, 231, 231, 1)',
            'A200': 'rgba(76, 175, 80, 1)'
        });
        $mdThemingProvider.definePalette('green-background', greenBackgroundPalette);

        var greenPrimaryPalette = $mdThemingProvider.extendPalette('green', {
            '300': '#9ed4a1',
            'contrastLightColors': ['500', '300']
        });
        $mdThemingProvider.definePalette('green-primary', greenPrimaryPalette);


        var greenAccentPalette = $mdThemingProvider.extendPalette('amber', {
            'contrastLightColors': ['A700']
        });
        $mdThemingProvider.definePalette('green-accent', greenAccentPalette);

        $mdThemingProvider.theme('green')
            .primaryPalette('green-primary', {
                'default': '500',
                'hue-1': '300'
            })
            .backgroundPalette('green-background', {
                'default': '50',  // background
                'hue-1': 'A200',  // tiles dialog
                'hue-2': 'A700'   // app bar
            })
            .warnPalette('red', {
                'default': 'A200'
            })
            .accentPalette('green-accent', {
                'default': 'A700'
            });
        $mdThemingProvider.alwaysWatchTheme(true);
    }
})();
