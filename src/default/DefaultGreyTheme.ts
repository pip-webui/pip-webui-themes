{

function configureDefaultGreyTheme($mdThemingProvider: ng.material.IThemingProvider) {
    // pipTranslateProvider.translations('en', {
    //     THEME: 'Theme',
    //     grey: 'Grey'
    // });
    
    // pipTranslateProvider.translations('ru', {
    //     THEME: 'Тема',
    //     grey: 'Серая'
    // });

    let thirdPartyPalette = $mdThemingProvider.extendPalette('grey', {
        'A100': 'rgba(250, 250, 250, 1)',
        'A200': 'rgba(255, 152, 0, 1)',
        'A400': '#a9b9c0',
        '500': '#607D8B',
        'A700': '#90A4AE',
        //'800': '',
        'contrastDefaultColor': 'dark',
        'contrastLightColors': ['300', '400', '500', '600', '700', '800', '900', 'A700']
    });
    $mdThemingProvider.definePalette('third-party', thirdPartyPalette);


    $mdThemingProvider.theme('grey')
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
    
    $mdThemingProvider.alwaysWatchTheme(true);
}


angular
    .module('pipTheme.Grey', [ 'ngMaterial' ])
    .config(configureDefaultGreyTheme);

}