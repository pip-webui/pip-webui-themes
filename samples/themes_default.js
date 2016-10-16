/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module('appThemesDefault', ['pipServices' , 'pipTheme.Default',  'pipTheme']);

    thisModule.controller('ThemesController',
        function ($scope, $mdTheming, pipTheme, $state, $rootScope, $timeout) {

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
                pipTheme.setCurrentTheme(theme);
            };
        })


})();
