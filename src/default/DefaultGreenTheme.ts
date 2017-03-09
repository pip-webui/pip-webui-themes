(() => {

function configureDefaultGreenTheme($mdThemingProvider: ng.material.IThemingProvider) {
    // pipTranslateProvider.translations('en', {
    //     THEME: 'Theme',
    //     green: 'Green'
    // });

    // pipTranslateProvider.translations('ru', {
    //     THEME: 'Тема',
    //     green: 'Зеленая'
    // });

    let greenBackgroundPalette = $mdThemingProvider.extendPalette('grey', {
        'A100': 'rgba(250, 250, 250, 1)',
        'A200': 'rgba(76, 175, 80, 1)'
    });
    $mdThemingProvider.definePalette('green-background', greenBackgroundPalette);

    let greenPrimaryPalette = $mdThemingProvider.extendPalette('green', {
        '300': '#9ed4a1',
        'contrastLightColors': ['500', '300']
    });
    $mdThemingProvider.definePalette('green-primary', greenPrimaryPalette);


    let greenAccentPalette = $mdThemingProvider.extendPalette('amber', {
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

angular
    .module('pipTheme.Green', [ 'ngMaterial' ])
    .config(configureDefaultGreenTheme);
})();