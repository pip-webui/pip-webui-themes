(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.pip || (g.pip = {})).themes = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function () {
    'use strict';
    angular.module('pipTheme.Bootbarn', [
        'pipTheme.Bootbarn.Warm',
        'pipTheme.Bootbarn.Cool',
        'pipTheme.Bootbarn.Monochrome'
    ]);
})();
},{}],2:[function(require,module,exports){
(function () {
    'use strict';
    config.$inject = ['$mdThemingProvider'];
    var thisModule = angular.module('pipTheme.Bootbarn.Cool', ['ngMaterial']);
    thisModule.config(config);
    function config($mdThemingProvider) {
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
            'default': '50',
            'hue-1': 'A200',
            'hue-2': 'A700'
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
},{}],3:[function(require,module,exports){
(function () {
    'use strict';
    config.$inject = ['$mdThemingProvider'];
    var thisModule = angular.module('pipTheme.Bootbarn.Monochrome', ['ngMaterial']);
    thisModule.config(config);
    function config($mdThemingProvider) {
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
            'default': '50',
            'hue-1': 'A200',
            'hue-2': 'A700'
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
},{}],4:[function(require,module,exports){
(function () {
    'use strict';
    config.$inject = ['$mdThemingProvider'];
    var thisModule = angular.module('pipTheme.Bootbarn.Warm', ['ngMaterial']);
    thisModule.config(config);
    function config($mdThemingProvider) {
        $mdThemingProvider.alwaysWatchTheme(true);
        var warmBackgroundPalette = $mdThemingProvider.extendPalette('grey', {
            'A100': 'rgba(250, 250, 250, 1)',
            'A200': 'rgba(177, 55, 34, 1)'
        });
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
            'default': '50',
            'hue-1': 'A200',
            'hue-2': 'A700'
        })
            .warnPalette('bootbarn-warm-error', {
            'default': 'A200'
        })
            .accentPalette('bootbarn-warm-accent', {
            'default': 'A700'
        });
    }
})();
},{}],5:[function(require,module,exports){
(function () {
    'use strict';
    config.$inject = ['$mdThemingProvider'];
    var thisModule = angular.module('pipTheme.Default', ['pipTheme.Blue', 'pipTheme.Pink',
        'pipTheme.Amber', 'pipTheme.Orange', 'pipTheme.Green', 'pipTheme.Navy', 'pipTheme.Grey']);
    thisModule.config(config);
    function config($mdThemingProvider) {
        $mdThemingProvider.setDefaultTheme('default');
        $mdThemingProvider.alwaysWatchTheme(true);
    }
})();
},{}],6:[function(require,module,exports){
(function () {
    'use strict';
    config.$inject = ['$mdThemingProvider'];
    var thisModule = angular.module('pipTheme.Amber', ['ngMaterial']);
    thisModule.config(config);
    function config($mdThemingProvider) {
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
            'default': '50',
            'hue-1': 'A200',
            'hue-2': 'A700'
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
},{}],7:[function(require,module,exports){
(function () {
    'use strict';
    config.$inject = ['$mdThemingProvider'];
    var thisModule = angular.module('pipTheme.Black', ['ngMaterial']);
    thisModule.config(config);
    function config($mdThemingProvider) {
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
                'default': '800',
                'hue-1': '900',
                'hue-2': 'A700'
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
                'default': '800',
                'hue-1': '500',
                'hue-2': '800'
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
},{}],8:[function(require,module,exports){
(function () {
    'use strict';
    config.$inject = ['$mdThemingProvider'];
    var thisModule = angular.module('pipTheme.Blue', ['ngMaterial']);
    thisModule.config(config);
    function config($mdThemingProvider) {
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
                'default': '50',
                'hue-1': 'A200',
                'hue-2': 'A700'
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
},{}],9:[function(require,module,exports){
(function () {
    'use strict';
    config.$inject = ['$mdThemingProvider'];
    var thisModule = angular.module('pipTheme.Green', ['ngMaterial']);
    thisModule.config(config);
    function config($mdThemingProvider) {
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
            'default': '50',
            'hue-1': 'A200',
            'hue-2': 'A700'
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
},{}],10:[function(require,module,exports){
(function () {
    'use strict';
    config.$inject = ['$mdThemingProvider'];
    var thisModule = angular.module('pipTheme.Grey', ['ngMaterial']);
    thisModule.config(config);
    function config($mdThemingProvider) {
        var thirdPartyPalette = $mdThemingProvider.extendPalette('grey', {
            'A100': 'rgba(250, 250, 250, 1)',
            'A200': 'rgba(255, 152, 0, 1)',
            'A400': '#a9b9c0',
            '500': '#607D8B',
            'A700': '#90A4AE',
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
            'default': '50',
            'hue-1': '500',
            'hue-2': 'A700'
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
},{}],11:[function(require,module,exports){
(function () {
    'use strict';
    config.$inject = ['$mdThemingProvider'];
    var thisModule = angular.module('pipTheme.Navy', ['ngMaterial']);
    thisModule.config(config);
    function config($mdThemingProvider) {
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
            'default': '50',
            'hue-1': '700',
            'hue-2': 'A700'
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
},{}],12:[function(require,module,exports){
(function () {
    'use strict';
    config.$inject = ['$mdThemingProvider'];
    var thisModule = angular.module('pipTheme.Orange', ['ngMaterial']);
    thisModule.config(config);
    function config($mdThemingProvider) {
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
            'default': '50',
            'hue-1': 'A200',
            'hue-2': 'A700'
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
},{}],13:[function(require,module,exports){
(function () {
    'use strict';
    config.$inject = ['$mdThemingProvider'];
    var thisModule = angular.module('pipTheme.Pink', ['ngMaterial']);
    thisModule.config(config);
    function config($mdThemingProvider) {
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
            'default': '50',
            'hue-1': 'A200',
            'hue-2': 'A700'
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
},{}],14:[function(require,module,exports){
(function () {
    'use strict';
    run.$inject = ['pipTheme'];
    var thisModule = angular.module('pipTheme', ['LocalStorageModule', 'ngMaterial']);
    thisModule.run(run);
    function run(pipTheme) {
        pipTheme.theme();
    }
    thisModule.provider('pipTheme', function () {
        var theme = 'default', persist = true, setRoot = true;
        this.use = initTheme;
        this.init = initTheme;
        this.persist = initPersist;
        this.setRoot = initSetRoot;
        this.$get = ['$rootScope', '$timeout', 'localStorageService', '$mdTheming', function ($rootScope, $timeout, localStorageService, $mdTheming) {
            if (persist)
                theme = localStorageService.get('theme') || theme;
            if (setRoot)
                $rootScope.$theme = theme;
            function resetContent(fullReset, partialReset) {
                fullReset = fullReset !== undefined ? !!fullReset : false;
                partialReset = partialReset !== undefined ? !!partialReset : false;
                $rootScope.$reset = fullReset;
                $rootScope.$partialReset = partialReset;
                $timeout(function () {
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
                    resetContent(fullReset, partialReset);
                    $rootScope.$broadcast('pipThemeChanged', newTheme);
                }
                return theme;
            }
            return {
                use: getOrSetTheme,
                theme: getOrSetTheme
            };
        }];
        function initTheme(newTheme) {
            if (newTheme != null)
                theme = newTheme;
            return theme;
        }
        function initPersist(newPersist) {
            if (newPersist != null)
                persist = newPersist;
            return persist;
        }
        function initSetRoot(newSetRoot) {
            if (newSetRoot != null)
                setRoot = newSetRoot;
            return setRoot;
        }
    });
})();
},{}]},{},[2,3,4,1,6,7,8,9,10,11,12,13,5,14])(14)
});


//# sourceMappingURL=pip-webui-themes.js.map
