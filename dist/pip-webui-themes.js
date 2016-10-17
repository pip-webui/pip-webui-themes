(function () {
    'use strict';
    run.$inject = ['localStorageService', '$rootScope'];
    var thisModule = angular.module('pipTheme', ['LocalStorageModule', 'ngMaterial']);

    thisModule.run(run);

    function run(localStorageService, $rootScope) {
        try {
            $rootScope.$theme =  localStorageService.get('theme');
            
        } catch (ex) {
            //pipTheme.initializeTheme('blue');
        }
    }
    
    thisModule.provider('pipTheme', function() {
        var 
            theme = 'blue',
            persist = true,
            setRoot = true;

        this.use = initTheme;
        this.init = initTheme;
        this.persist = initPersist;
        this.setRoot = initSetRoot;

        this.$get = ['$rootScope', '$timeout', 'localStorageService', '$mdTheming', function ($rootScope, $timeout, localStorageService, $mdTheming) {
            // Read theme from persistent storage
            if (persist)
                theme = localStorageService.get('theme') || theme;

            // Set root variable
            if (setRoot) 
                $rootScope.$theme = theme;

            // Switch material theme
            //$('body').attr('md-theme',  $rootScope.$theme).addClass("{{ $theme }}");
            
            // Resetting root scope to force update language on the screen
            function resetContent(fullReset, partialReset) {
                fullReset = fullReset !== undefined ? !!fullReset : true;
                partialReset = partialReset !== undefined ? !!partialReset : true;

                $rootScope.$reset = fullReset;
                $rootScope.$partialReset = partialReset;
                $timeout(function() {
                    $rootScope.$reset = false;
                    $rootScope.$partialReset = false;
                }, 0);
            }

            function getOrSetTheme(newTheme, fullReset, partialReset) {
                if (newTheme != null && newTheme != theme) {
                    if (!(theme in $mdTheming.THEMES))
                        throw new Error('Theme ' + theme + ' is not registered. Please, register it first with $mdThemingProvider');

                    theme = newTheme;
                    
                    if (persist)
                        localStorageService.set('theme', theme);
                    if (setRoot)
                        $rootScope.$theme = theme;
                    
                    // Switch material theme
                    //$('body').attr('md-theme', "{{ $theme }}").addClass("{{ $theme }}");

                    // Resetting content.
                    resetContent(fullReset, partialReset);

                    // Sending notification
                    $rootScope.$broadcast('pipThemeChanged', newTheme);
                }
                return theme;
            }

            return {
                use: getOrSetTheme,
                theme: getOrSetTheme
            }
        }];

        // Initialize theme selection
        function initTheme(newTheme) {
            if (newTheme != null)
                theme = newTheme;
            return theme;
        }

        // Initialize persistence flag
        function initPersist(newPersist) {
            if (newPersist != null)
                persist = newPersist;
            return persist;
        }

        // Initialize set root flag
        function initSetRoot(newSetRoot) {
            if (newSetRoot != null)
                setRoot = newSetRoot;
            return setRoot;  
        }

    });
    
})();

(function () {
    'use strict';
    angular.module('pipTheme.Bootbarn', [
        'pipTheme.Bootbarn.Warm',
        'pipTheme.Bootbarn.Cool',
        'pipTheme.Bootbarn.Monochrome'
    ]);
})();

(function () {
    'use strict';
    config.$inject = ['$mdThemingProvider'];
    var thisModule = angular.module('pipTheme.Bootbarn.Cool', ['ngMaterial']);

    thisModule.config(config);

    function config($mdThemingProvider) {
        // pipTranslateProvider.translations('en', {
        //     THEME: 'Theme',
        //     'bootbarn-cool': 'Cool'
        // });

        // pipTranslateProvider.translations('ru', {
        //     THEME: 'Тема',
        //     'bootbarn-cool': ''
        // });
        
        var coolBackgroundPalette = $mdThemingProvider.extendPalette('grey', {
            'A100': 'rgba(250, 250, 250, 1)',
            'A200': 'rgba(69, 90, 100, 1)'
        });
        $mdThemingProvider.definePalette('bootbarn-cool-background', coolBackgroundPalette);

        var coolPrimaryPalette = $mdThemingProvider.extendPalette('grey', {
            '300': 'rgba(69, 90, 100, .54)',
            '500': 'rgba(69, 90, 100, 1)',
            'contrastLightColors': ['500', '300']
        });
        $mdThemingProvider.definePalette('bootbarn-cool-primary', coolPrimaryPalette);


        var coolAccentPalette = $mdThemingProvider.extendPalette('green', {
            'A700': 'rgba(76, 175, 80, 1)',
            'contrastLightColors': ['A700']
        });
        $mdThemingProvider.definePalette('bootbarn-cool-accent', coolAccentPalette);

        $mdThemingProvider.theme('bootbarn-cool')
            .primaryPalette('bootbarn-cool-primary', {
                'default': '500',
                'hue-1': '300'
            })
            .backgroundPalette('bootbarn-cool-background', {
                'default': '50',  // background
                'hue-1': 'A200',  // tiles dialog
                'hue-2': 'A700'   // app bar
            })
            .warnPalette('red', {
                'default': 'A200'
            })
            .accentPalette('bootbarn-cool-accent', {
                'default': 'A700'
            });

        $mdThemingProvider.alwaysWatchTheme(true);

    }
})();

(function () {
    'use strict';
    config.$inject = ['$mdThemingProvider'];
    var thisModule = angular.module('pipTheme.Bootbarn.Monochrome', ['ngMaterial']);

    thisModule.config(config);

    function config($mdThemingProvider) {
        // pipTranslateProvider.translations('en', {
        //     THEME: 'Theme',
        //     'bootbarn-monochrome': 'Monochrome'
        // });

        // pipTranslateProvider.translations('ru', {
        //     THEME: 'Тема',
        //     'bootbarn-monochrome': ''
        // });
        
        var monochromeBackgroundPalette = $mdThemingProvider.extendPalette('grey', {
            'A100': 'rgba(250, 250, 250, 1)',
            'A200': 'rgba(38, 50, 56, 1)'
        });
        $mdThemingProvider.definePalette('bootbarn-monochrome-background', monochromeBackgroundPalette);

        var monochromePrimaryPalette = $mdThemingProvider.extendPalette('grey', {
            '300': 'rgba(38, 50, 56, .54)',
            '500': 'rgba(38, 50, 56, 1)',
            'contrastLightColors': ['500', '300']
        });
        $mdThemingProvider.definePalette('bootbarn-monochrome-primary', monochromePrimaryPalette);


        var monochromeAccentPalette = $mdThemingProvider.extendPalette('green', {
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
})();

(function () {
    'use strict';
    config.$inject = ['$mdThemingProvider'];
    var thisModule = angular.module('pipTheme.Bootbarn.Warm', ['ngMaterial']);

    thisModule.config(config);

    function config($mdThemingProvider) {
        // pipTranslateProvider.translations('en', {
        //     THEME: 'Theme',
        //     'bootbarn-warm': 'Warm'
        // });

        // pipTranslateProvider.translations('ru', {
        //     THEME: 'Тема',
        //     'bootbarn-warm': 'Коричневая'
        // });

        $mdThemingProvider.alwaysWatchTheme(true);

        var warmBackgroundPalette = $mdThemingProvider.extendPalette('grey', {
                'A100': 'rgba(250, 250, 250, 1)',
                'A200': 'rgba(177, 55, 34, 1)'
            })
            ;
        $mdThemingProvider.definePalette('bootbarn-warm-background', warmBackgroundPalette);

        var warmPrimaryPalette = $mdThemingProvider.extendPalette('brown', {
            '300': 'rgba(177, 55, 34, .54)',
            '500': 'rgba(177, 55, 34, 1)',
            'contrastLightColors': ['500', '300']
        });
        $mdThemingProvider.definePalette('bootbarn-warm-primary', warmPrimaryPalette);


        var warmAccentPalette = $mdThemingProvider.extendPalette('amber', {
            'A700': 'rgba(127, 148, 92, 1)',
            'contrastLightColors': ['A700']
        });
        $mdThemingProvider.definePalette('bootbarn-warm-accent', warmAccentPalette);

        var warmErrorPalette = $mdThemingProvider.extendPalette('red', {
            'A200': 'rgba(255, 87, 34, 1)',
            'contrastLightColors': ['A200']
        });
        $mdThemingProvider.definePalette('bootbarn-warm-error', warmErrorPalette);

        $mdThemingProvider.theme('bootbarn-warm')
            .primaryPalette('bootbarn-warm-primary', {
                'default': '500',
                'hue-1': '300'
            })
            .backgroundPalette('bootbarn-warm-background', {
                'default': '50',  // background
                'hue-1': 'A200',  // tiles dialog
                'hue-2': 'A700'   // app bar
            })
            .warnPalette('bootbarn-warm-error', {
                'default': 'A200'
            })
            .accentPalette('bootbarn-warm-accent', {
                'default': 'A700'
            });
    }
})();

(function () {
    'use strict';
    config.$inject = ['$mdThemingProvider'];
    var thisModule = angular.module('pipTheme.Default', ['pipTheme.Blue', 'pipTheme.Pink',
        'pipTheme.Amber', 'pipTheme.Orange', 'pipTheme.Green', 'pipTheme.Navy', 'pipTheme.Grey']);

    thisModule.config(config);

    function config($mdThemingProvider) {
        // pipTranslateProvider.translations('en', {
        //     THEME: 'Theme'
        // });
        // pipTranslateProvider.translations('ru', {
        //     THEME: 'Тема'
        // });

        $mdThemingProvider.setDefaultTheme('default');
        $mdThemingProvider.alwaysWatchTheme(true);

    }
})();

(function () {
    'use strict';
    config.$inject = ['$mdThemingProvider'];
    var thisModule = angular.module('pipTheme.Amber', ['ngMaterial']);

    thisModule.config(config);

    function config($mdThemingProvider) {
        // pipTranslateProvider.translations('en', {
        //     THEME: 'Theme',
        //     amber: 'Amber'
        // });
        // pipTranslateProvider.translations('ru', {
        //     THEME: 'Тема',
        //     amber: 'Янтарная'
        // });

        var orangeBackgroundPalette = $mdThemingProvider.extendPalette('grey', {
            'A100': 'rgba(250, 250, 250, 1)',
            'A200': 'rgba(255, 152, 0, 1)'
        });
        $mdThemingProvider.definePalette('orange-background', orangeBackgroundPalette);

        var orangePrimaryPalette = $mdThemingProvider.extendPalette('orange', {
            '800': 'rgba(255, 152, 0, 1)',
            '900': 'rgba(255, 152, 0, .54);'
        });
        $mdThemingProvider.definePalette('orange-primary', orangePrimaryPalette);

        $mdThemingProvider.theme('amber')
            .primaryPalette('orange-primary', {
                'default': '800',
                'hue-1': '900'
            })
            .backgroundPalette('orange-background', {
                'default': '50',  // background
                'hue-1': 'A200',  // tiles dialog
                'hue-2': 'A700'   // app bar
            })
            .warnPalette('red', {
                'default': 'A200'
            })
            .accentPalette('orange', {
                'default': '900'
            });
        $mdThemingProvider.alwaysWatchTheme(true);
        
    }
})();

(function () {
    'use strict';
    config.$inject = ['$mdThemingProvider'];
    var thisModule = angular.module('pipTheme.Black', ['ngMaterial']);

    thisModule.config(config);

    function config($mdThemingProvider) {
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
            var darkBackgroundPalette = $mdThemingProvider.extendPalette('grey', {
                '600': 'rgba(48, 48, 48, 1)',
                '700': 'rgba(255, 255, 255, 0.54)',
                '800': 'rgba(66, 66, 66, 1)'
            });
            $mdThemingProvider.definePalette('dark-background', darkBackgroundPalette);

            var darkAccentPalette = $mdThemingProvider.extendPalette('green', {
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
            var blackBackgroundPalette = $mdThemingProvider.extendPalette('grey', {
                '600': 'rgba(48, 48, 48, 1)',
                '700': 'rgba(255, 255, 255, 0.54)',
                '800': 'rgba(66, 66, 66, 1)',
                '500': 'rgba(38, 50, 56, 1)'
            });
            $mdThemingProvider.definePalette('black-background', blackBackgroundPalette);

            var blackAccentPalette = $mdThemingProvider.extendPalette('blue-grey', {
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
})();

(function () {
    'use strict';
    config.$inject = ['$mdThemingProvider'];
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

(function () {
    'use strict';
    config.$inject = ['$mdThemingProvider'];
    var thisModule = angular.module('pipTheme.Green', ['ngMaterial']);

    thisModule.config(config);

    function config($mdThemingProvider) {
        // pipTranslateProvider.translations('en', {
        //     THEME: 'Theme',
        //     green: 'Green'
        // });

        // pipTranslateProvider.translations('ru', {
        //     THEME: 'Тема',
        //     green: 'Зеленая'
        // });

        var greenBackgroundPalette = $mdThemingProvider.extendPalette('grey', {
            'A100': 'rgba(250, 250, 250, 1)',
            'A200': 'rgba(76, 175, 80, 1)'
        });
        $mdThemingProvider.definePalette('green-background', greenBackgroundPalette);

        var greenPrimaryPalette = $mdThemingProvider.extendPalette('green', {
            '300': '#9ed4a1',
            'contrastLightColors': ['500', '300']
        });
        $mdThemingProvider.definePalette('green-primary', greenPrimaryPalette);


        var greenAccentPalette = $mdThemingProvider.extendPalette('amber', {
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
})();

(function () {
    'use strict';
    config.$inject = ['$mdThemingProvider'];
    var thisModule = angular.module('pipTheme.Grey', ['ngMaterial']);

    thisModule.config(config);

    function config($mdThemingProvider) {
        // pipTranslateProvider.translations('en', {
        //     THEME: 'Theme',
        //     grey: 'Grey'
        // });
        
        // pipTranslateProvider.translations('ru', {
        //     THEME: 'Тема',
        //     grey: 'Серая'
        // });

        var thirdPartyPalette = $mdThemingProvider.extendPalette('grey', {
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
})();

(function () {
    'use strict';
    config.$inject = ['$mdThemingProvider'];
    var thisModule = angular.module('pipTheme.Navy', ['ngMaterial']);

    thisModule.config(config);

    function config($mdThemingProvider) {
        // pipTranslateProvider.translations('en', {
        //     THEME: 'Theme',
        //     navy: 'Navy'
        // });
        // pipTranslateProvider.translations('ru', {
        //     THEME: 'Тема',
        //     navy: 'Сине-серая'
        // });

        var greyPalette = $mdThemingProvider.extendPalette('grey', {
            '700': 'rgba(86, 97, 125, 1)',
            '800': 'rgba(86, 97, 125, .54)',
            'A100': 'rgba(250, 250, 250, 1)',
        });
        $mdThemingProvider.definePalette('grey', greyPalette);

        var tealPalette = $mdThemingProvider.extendPalette('teal', {
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
})();

(function () {
    'use strict';
    config.$inject = ['$mdThemingProvider'];
    var thisModule = angular.module('pipTheme.Orange', ['ngMaterial']);

    thisModule.config(config);

    function config($mdThemingProvider) {
        // pipTranslateProvider.translations('en', {
        //     THEME: 'Theme',
        //     orange: 'Orange'
        // });

        // pipTranslateProvider.translations('ru', {
        //     THEME: 'Тема',
        //     orange: 'Оранжевая'
        // });

        var RedBackgroundPalette = $mdThemingProvider.extendPalette('grey', {
            'A100': 'rgba(250, 250, 250, 1)',
            'A200': 'rgba(255, 112, 67, 1)',
            'contrastLightColors': ['600', '700', '800', '900', 'A200']
        });
        $mdThemingProvider.definePalette('red-background', RedBackgroundPalette);

        var RedPrimaryPalette = $mdThemingProvider.extendPalette('orange', {
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
})();

(function () {
    'use strict';
    config.$inject = ['$mdThemingProvider'];
    var thisModule = angular.module('pipTheme.Pink', ['ngMaterial']);

    thisModule.config(config);

    function config($mdThemingProvider) {
        // pipTranslateProvider.translations('en', {
        //     THEME: 'Theme',
        //     pink: 'Pink'
        // });
        // pipTranslateProvider.translations('ru', {
        //     THEME: 'Тема',
        //     pink: 'Розовая',

        // });

        var PinkBackgroundPalette = $mdThemingProvider.extendPalette('grey', {
            'A100': 'rgba(250, 250, 250, 1)',
            'A200': 'rgba(188, 86, 121, 1)',
            'contrastDefaultColor': 'dark',
            'contrastLightColors': ['A200', 'A700']
        });
        $mdThemingProvider.definePalette('pink-background', PinkBackgroundPalette);

        var PinkPrimaryPalette = $mdThemingProvider.extendPalette('pink', {
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
})();

//# sourceMappingURL=pip-webui-themes.js.map
