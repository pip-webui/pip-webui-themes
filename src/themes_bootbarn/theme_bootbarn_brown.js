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
                'A100': 'rgba(231, 231, 231, 1)',
                'A200': 'rgba(76, 175, 80, 1)'
            });
            $mdThemingProvider.definePalette('brown-background', brownBackgroundPalette);

            var brownPrimaryPalette = $mdThemingProvider.extendPalette('brown', {
                '300':'#9ed4a1',
                'contrastLightColors': ['500', '300']
            });
            $mdThemingProvider.definePalette('brown-primary', brownPrimaryPalette);


            var brownAccentPalette = $mdThemingProvider.extendPalette('amber', {
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
