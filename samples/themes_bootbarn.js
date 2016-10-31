/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module('appThemesBootBarn', ['pipTheme.BootBarn', 'pipTheme']);

    thisModule.controller('ThemesBootBarnController',
        function ($scope, $mdTheming, pipTheme, $rootScope) {

            var allThemes = _.keys(_.omit($mdTheming.THEMES, 'default'));
            $scope.themes = [];
            _.each(allThemes, function (theme) {
                if (theme.indexOf('bootbarn') !== -1) {
                    $scope.themes.push(theme);
                }
            })
            $scope.saveChanges = saveSettings;
            $scope.localTheme = $rootScope.$theme;

            return;

            function saveSettings(theme) {
                pipTheme.use(theme);
            };
        })

})();
