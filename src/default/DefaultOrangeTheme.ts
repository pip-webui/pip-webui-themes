{

function configureDefaultOrangeTheme($mdThemingProvider: ng.material.IThemingProvider) {
    // pipTranslateProvider.translations('en', {
    //     THEME: 'Theme',
    //     orange: 'Orange'
    // });

    // pipTranslateProvider.translations('ru', {
    //     THEME: 'Тема',
    //     orange: 'Оранжевая'
    // });

    let RedBackgroundPalette = $mdThemingProvider.extendPalette('grey', {
        'A100': 'rgba(250, 250, 250, 1)',
        'A200': 'rgba(255, 112, 67, 1)',
        'contrastLightColors': ['600', '700', '800', '900', 'A200']
    });
    $mdThemingProvider.definePalette('red-background', RedBackgroundPalette);

    let RedPrimaryPalette = $mdThemingProvider.extendPalette('orange', {
        '800': 'rgba(255, 112, 67, 1)',
        '900': 'rgba(255, 152, 67, .54)',
        'A100': 'rgba(255, 171, 64, 1)',
        'contrastLightColors': ['800', '900', 'A100']
    });
    $mdThemingProvider.definePalette('red-primary', RedPrimaryPalette);

    $mdThemingProvider.theme('orange')
        .primaryPalette('red-primary', {
            'default': '800',
            'hue-1': '900'
        })
        .backgroundPalette('red-background', {
            'default': '50',  // background
            'hue-1': 'A200',  // tiles dialog
            'hue-2': 'A700'   // app bar
        })
        .warnPalette('red', {
            'default': 'A200'
        })
        .accentPalette('red-primary', {
            'default': 'A100'
        });
    $mdThemingProvider.alwaysWatchTheme(true);
}

angular
    .module('pipTheme.Orange', [ 'ngMaterial' ])
    .config(configureDefaultOrangeTheme);

}