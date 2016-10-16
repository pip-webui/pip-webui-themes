(function () {
    'use strict';
    var thisModule = angular.module('pipTheme.Amber', ['ngMaterial']);

    thisModule.config(config);

    function config($mdThemingProvider) {
        // pipTranslateProvider.translations('en', {
        //     THEME: 'Theme',
        //     amber: 'Amber'
        // });
        // pipTranslateProvider.translations('ru', {
        //     THEME: 'Тема',
        //     amber: 'Янтарная'
        // });

        var orangeBackgroundPalette = $mdThemingProvider.extendPalette('grey', {
            'A100': 'rgba(250, 250, 250, 1)',
            'A200': 'rgba(255, 152, 0, 1)'
        });
        $mdThemingProvider.definePalette('orange-background', orangeBackgroundPalette);

        var orangePrimaryPalette = $mdThemingProvider.extendPalette('orange', {
            '800': 'rgba(255, 152, 0, 1)',
            '900': 'rgba(255, 152, 0, .54);'
        });
        $mdThemingProvider.definePalette('orange-primary', orangePrimaryPalette);

        $mdThemingProvider.theme('amber')
            .primaryPalette('orange-primary', {
                'default': '800',
                'hue-1': '900'
            })
            .backgroundPalette('orange-background', {
                'default': '50',  // background
                'hue-1': 'A200',  // tiles dialog
                'hue-2': 'A700'   // app bar
            })
            .warnPalette('red', {
                'default': 'A200'
            })
            .accentPalette('orange', {
                'default': '900'
            });
        $mdThemingProvider.alwaysWatchTheme(true);
        
    }
})();
