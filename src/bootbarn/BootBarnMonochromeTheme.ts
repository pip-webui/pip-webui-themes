function configureBootBarnMonochromeTheme($mdThemingProvider: ng.material.IThemingProvider) {
    // pipTranslateProvider.translations('en', {
    //     THEME: 'Theme',
    //     'bootbarn-monochrome': 'Monochrome'
    // });

    // pipTranslateProvider.translations('ru', {
    //     THEME: 'Тема',
    //     'bootbarn-monochrome': ''
    // });
    
    let monochromeBackgroundPalette = $mdThemingProvider.extendPalette('grey', {
        'A100': 'rgba(250, 250, 250, 1)',
        'A200': 'rgba(38, 50, 56, 1)'
    });
    $mdThemingProvider.definePalette('bootbarn-monochrome-background', monochromeBackgroundPalette);

    let monochromePrimaryPalette = $mdThemingProvider.extendPalette('grey', {
        '300': 'rgba(38, 50, 56, .54)',
        '500': 'rgba(38, 50, 56, 1)',
        'contrastLightColors': ['500', '300']
    });
    $mdThemingProvider.definePalette('bootbarn-monochrome-primary', monochromePrimaryPalette);

    let monochromeAccentPalette = $mdThemingProvider.extendPalette('green', {
        'A700': 'rgba(76, 175, 80, 1)',
        'contrastLightColors': ['A700']
    });
    $mdThemingProvider.definePalette('bootbarn-monochrome-accent', monochromeAccentPalette);

    $mdThemingProvider.theme('bootbarn-monochrome')
        .primaryPalette('bootbarn-monochrome-primary', {
            'default': '500',
            'hue-1': '300'
        })
        .backgroundPalette('bootbarn-monochrome-background', {
            'default': '50',  // background
            'hue-1': 'A200',  // tiles dialog
            'hue-2': 'A700'   // app bar
        })
        .warnPalette('red', {
            'default': 'A200'
        })
        .accentPalette('bootbarn-monochrome-accent', {
            'default': 'A700'
        });

    $mdThemingProvider.alwaysWatchTheme(true);
}

angular
    .module('pipTheme.BootBarn.Monochrome', [ 'ngMaterial' ])
    .config(configureBootBarnMonochromeTheme);
