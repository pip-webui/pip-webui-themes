'use strict';

function configureDefaultPinkTheme($mdThemingProvider: ng.material.IThemingProvider) {
    // pipTranslateProvider.translations('en', {
    //     THEME: 'Theme',
    //     pink: 'Pink'
    // });
    // pipTranslateProvider.translations('ru', {
    //     THEME: 'Тема',
    //     pink: 'Розовая',

    // });

    let PinkBackgroundPalette = $mdThemingProvider.extendPalette('grey', {
        'A100': 'rgba(250, 250, 250, 1)',
        'A200': 'rgba(188, 86, 121, 1)',
        'contrastDefaultColor': 'dark',
        'contrastLightColors': ['A200', 'A700']
    });
    $mdThemingProvider.definePalette('pink-background', PinkBackgroundPalette);

    let PinkPrimaryPalette = $mdThemingProvider.extendPalette('pink', {
        '600': 'rgba(255, 128, 171, 1)',
        '700': 'rgba(188, 86, 121, .54)',
        '900': 'rgba(188, 86, 121, 1)',
        'contrastDefaultColor': 'light'
    });
    $mdThemingProvider.definePalette('pink-primary', PinkPrimaryPalette);

    $mdThemingProvider.theme('pink')
        .primaryPalette('pink-primary', {
            'default': '900',
            'hue-1': '700'
        })
        .backgroundPalette('pink-background', {
            'default': '50',  // background
            'hue-1': 'A200',  // tiles dialog
            'hue-2': 'A700'   // app bar
        })
        .warnPalette('red', {
            'default': 'A200'
        })
        .accentPalette('pink-primary', {
            'default': '600'
        });
    $mdThemingProvider.alwaysWatchTheme(true);
}

angular
    .module('pipTheme.Pink', [ 'ngMaterial' ])
    .config(configureDefaultPinkTheme);
