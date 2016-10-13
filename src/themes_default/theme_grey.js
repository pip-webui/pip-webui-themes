(function () {
    'use strict';
    var thisModule = angular.module('pipTheme.Grey', ['ngMaterial']);

    thisModule.config(config);

    function config($mdThemingProvider, pipTranslateProvider) {
        pipTranslateProvider.translations('en', {
            THEME: 'Theme',
            grey: 'Grey'
        });
        
        pipTranslateProvider.translations('ru', {
            THEME: 'Тема',
            grey: 'Серая'
        });

        registerGreyTheme('grey');
        $mdThemingProvider.alwaysWatchTheme(true);

        function registerGreyTheme(themeName) {
            var thirdPartyPalette = $mdThemingProvider.extendPalette('grey', {
                'A100': 'rgba(231, 231, 231, 1)',
                'A200': 'rgba(255, 152, 0, 1)',
                'A400': '#a9b9c0',
                '500': '#607D8B',
                'A700': '#90A4AE',
                //'800': '',
                'contrastDefaultColor': 'dark',
                'contrastLightColors': ['300', '400', '500', '600', '700', '800', '900', 'A700']
            });
            $mdThemingProvider.definePalette('third-party', thirdPartyPalette);


            $mdThemingProvider.theme(themeName)
                .primaryPalette('third-party', {
                    'default': '500',
                    'hue-1': 'A400'
                })
                .backgroundPalette('third-party', {
                    'default': '50',  // background
                    'hue-1': '500',  // tiles dialog
                    'hue-2': 'A700'   // app bar
                })
                .warnPalette('red', {
                    'default': 'A200'
                })
                .accentPalette('third-party', {
                    'default': 'A700'
                });
        }
    }
})();
