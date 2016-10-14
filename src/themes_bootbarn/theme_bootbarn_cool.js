(function () {
    'use strict';
    var thisModule = angular.module('pipTheme.Bootbarn.Cool', ['ngMaterial']);

    thisModule.config(config);

    function config($mdThemingProvider, pipTranslateProvider) {
        pipTranslateProvider.translations('en', {
            THEME: 'Theme',
            'bootbarn-cool': 'Cool'
        });

        pipTranslateProvider.translations('ru', {
            THEME: 'Тема',
            'bootbarn-cool': ''
        });
        
        var coolBackgroundPalette = $mdThemingProvider.extendPalette('grey', {
            'A100': 'rgba(250, 250, 250, 1)',
            'A200': 'rgba(69, 90, 100, 1)'
        });
        $mdThemingProvider.definePalette('bootbarn-cool-background', coolBackgroundPalette);

        var coolPrimaryPalette = $mdThemingProvider.extendPalette('grey', {
            '300': 'rgba(69, 90, 100, .54)',
            '500': 'rgba(69, 90, 100, 1)',
            'contrastLightColors': ['500', '300']
        });
        $mdThemingProvider.definePalette('bootbarn-cool-primary', coolPrimaryPalette);


        var coolAccentPalette = $mdThemingProvider.extendPalette('green', {
            'A700': 'rgba(76, 175, 80, 1)',
            'contrastLightColors': ['A700']
        });
        $mdThemingProvider.definePalette('bootbarn-cool-accent', coolAccentPalette);

        $mdThemingProvider.theme('bootbarn-cool')
            .primaryPalette('bootbarn-cool-primary', {
                'default': '500',
                'hue-1': '300'
            })
            .backgroundPalette('bootbarn-cool-background', {
                'default': '50',  // background
                'hue-1': 'A200',  // tiles dialog
                'hue-2': 'A700'   // app bar
            })
            .warnPalette('red', {
                'default': 'A200'
            })
            .accentPalette('bootbarn-cool-accent', {
                'default': 'A700'
            });

        $mdThemingProvider.alwaysWatchTheme(true);

    }
})();
