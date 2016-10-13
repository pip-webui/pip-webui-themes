/* global angular */

(function () {
    'use strict';

    var thisModule = angular.module('appThemesDefault', ['pipCore' , 'pipTheme']);

    thisModule.controller('ThemesController',
        function ($scope, $mdTheming, pipTheme, $state, $rootScope, $timeout) {

            $scope.themes = _.keys(_.omit($mdTheming.THEMES, 'default'));
            $scope.saveChanges = saveSettings;
            $scope.localTheme = $rootScope.$theme;

            return;

            function saveSettings(theme) {
                pipTheme.setCurrentTheme(theme);
            };
        })


})();
