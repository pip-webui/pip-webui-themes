(() => {
    function configureDefaultNavyTheme($mdThemingProvider: ng.material.IThemingProvider) {
    // pipTranslateProvider.translations('en', {
    //     THEME: 'Theme',
    //     navy: 'Navy'
    // });
    // pipTranslateProvider.translations('ru', {
    //     THEME: 'Тема',
    //     navy: 'Сине-серая'
    // });

    let greyPalette = $mdThemingProvider.extendPalette('grey', {
        '700': 'rgba(86, 97, 125, 1)',
        '800': 'rgba(86, 97, 125, .54)',
        'A100': 'rgba(250, 250, 250, 1)',
    });
    $mdThemingProvider.definePalette('grey', greyPalette);

    let tealPalette = $mdThemingProvider.extendPalette('teal', {
        'contrastLightColors': ['500', '600', '700', '800', '900', 'A700']
    });
    $mdThemingProvider.definePalette('teal', tealPalette);

    $mdThemingProvider.theme('navy')
        .primaryPalette('grey', {
            'default': '700',
            'hue-1': '800'
        })
        .backgroundPalette('grey', {
            'default': '50',  // background
            'hue-1': '700',  // tiles dialog
            'hue-2': 'A700'   // app bar
        })
        .warnPalette('red', {
            'default': 'A200'
        })
        .accentPalette('teal', {
            'default': 'A700'
        });
    $mdThemingProvider.alwaysWatchTheme(true);
}

angular
    .module('pipTheme.Navy', [ 'ngMaterial' ])
    .config(configureDefaultNavyTheme);
})();