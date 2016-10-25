(function () {
    'use strict';
    var thisModule = angular.module('pipTheme.Blue', ['ngMaterial']);

    thisModule.config(config);

    function config($mdThemingProvider) {
        // pipTranslateProvider.translations('en', {
        //     THEME: 'Theme',
        //     blue: 'Blue',
        // });
        // pipTranslateProvider.translations('ru', {
        //     THEME: 'Тема',
        //     blue: 'Голубая'
        // });

        registerBlueTheme('default');
        registerBlueTheme('blue');

        $mdThemingProvider.setDefaultTheme('default');
        $mdThemingProvider.alwaysWatchTheme(true);

        function registerBlueTheme(themeName) {
            var bluePrimaryPalette = $mdThemingProvider.extendPalette('blue', {
                'contrastDefaultColor': 'light',
                'contrastDarkColors': undefined
            });
            $mdThemingProvider.definePalette('blue-primary', bluePrimaryPalette);

            var blueBackgroundPalette = $mdThemingProvider.extendPalette('grey', {
                'A100': 'rgba(250, 250, 250, 1)',
                'A200': 'rgba(33, 150, 243, 1)'
            });
            $mdThemingProvider.definePalette('blue-background', blueBackgroundPalette);

            var blueAccentPalette = $mdThemingProvider.extendPalette('green', {
                '600': 'rgba(0, 200, 83, 1)'
            });
            $mdThemingProvider.definePalette('blue-accent', blueAccentPalette);

            $mdThemingProvider.theme(themeName)
                .primaryPalette('blue-primary', {
                    'default': '500',
                    'hue-1': '300'
                })
                .backgroundPalette('blue-background', {
                    'default': '50',  // background
                    'hue-1': 'A200',  // tiles dialog
                    'hue-2': 'A700'   // app bar
                })
                .warnPalette('red', {
                    'default': 'A200'
                })
                .accentPalette('blue-accent', {
                    'default': '600'
                });
        }
    }
})();
