/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module('appThemesDefault', [ 'pipTheme.Default',  'pipTheme']);

    thisModule.controller('ThemesController',
        function ($scope, $mdTheming, pipTheme, $state, $rootScope, localStorageService, $timeout) {

            $rootScope.$theme = localStorageService.get('theme');
            var allThemes = _.keys(_.omit($mdTheming.THEMES, 'default'));
            $scope.themes = [];
            _.each(allThemes, function (theme) {
                if (theme.indexOf('bootbarn') == -1) {
                    $scope.themes.push(theme);
                }
            })
            $scope.saveChanges = saveSettings;
            $scope.localTheme = $rootScope.$theme;

            return;


            function saveSettings(theme) {
                console.log(theme);
                $rootScope.$theme = theme;
                pipTheme.use(theme, false, false);
            };
        })


})();
