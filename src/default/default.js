(function () {
    'use strict';
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
