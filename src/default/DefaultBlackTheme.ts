(() => {
function configureDefaultBlackTheme($mdThemingProvider: ng.material.IThemingProvider) {
    // pipTranslateProvider.translations('en', {
    //     THEME: 'Theme',
    // });
    // pipTranslateProvider.translations('ru', {
    //     THEME: 'Тема'
    // });
    
    registerDarkTheme('dark');
    registerBlackTheme('black');
    $mdThemingProvider.alwaysWatchTheme(true);

    function registerDarkTheme(themeName) {
        let darkBackgroundPalette = $mdThemingProvider.extendPalette('grey', {
            '600': 'rgba(48, 48, 48, 1)',
            '700': 'rgba(255, 255, 255, 0.54)',
            '800': 'rgba(66, 66, 66, 1)'
        });
        $mdThemingProvider.definePalette('dark-background', darkBackgroundPalette);

        let darkAccentPalette = $mdThemingProvider.extendPalette('green', {
            '600': 'rgba(0, 200, 83, 1)'
        });
        $mdThemingProvider.definePalette('dark-accent', darkAccentPalette);

        $mdThemingProvider.theme(themeName)
            .primaryPalette('dark-background', {
                'default': '900',
                'hue-1': '700'
            })
            .backgroundPalette('dark-background', {
                'default': '800',  // background
                'hue-1': '900',  // tiles dialog
                'hue-2': 'A700'   // app bar
            })
            .warnPalette('red', {
                'default': 'A200'
            })
            .accentPalette('dark-accent', {
                'default': '600'
            });
    }

    function registerBlackTheme(themeName) {
        let blackBackgroundPalette = $mdThemingProvider.extendPalette('grey', {
            '600': 'rgba(48, 48, 48, 1)',
            '700': 'rgba(255, 255, 255, 0.54)',
            '800': 'rgba(66, 66, 66, 1)',
            '500': 'rgba(38, 50, 56, 1)'
        });
        $mdThemingProvider.definePalette('black-background', blackBackgroundPalette);

        let blackAccentPalette = $mdThemingProvider.extendPalette('blue-grey', {
            '700': 'rgba(255, 255, 255, 0.54)'
        });
        $mdThemingProvider.definePalette('black-accent', blackAccentPalette);

        $mdThemingProvider.theme(themeName)
            .primaryPalette('black-accent', {
                'default': '900',
                'hue-1': '700'
            })
            .backgroundPalette('black-background', {
                'default': '800',  // background
                'hue-1': '500',  // tiles dialog
                'hue-2': '800'   // app bar
            })
            .warnPalette('red', {
                'default': 'A200'
            })
            .accentPalette('black-accent', {
                'default': '600'
            });
    }
}

angular
    .module('pipTheme.Black', [ 'ngMaterial' ])
    .config(configureDefaultBlackTheme);
})();