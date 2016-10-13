/* global angular */

(function () {
    'use strict';

    var content = [
        { title: 'Default', state: 'default', url: '/default', controller: 'ThemesController', templateUrl: 'themes_default.html' },
        { title: 'Bootbarn colors', state: 'bootbarn', url: '/bootbarn', controller: 'ThemesController', templateUrl: 'themes_default.html'}
    ];


    var thisModule = angular.module('app', ['ngMaterial', 'appThemesDefault']);

    thisModule.config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider, $mdIconProvider) {

         //$mdIconProvider.iconSet('icons', '../../dist/images/icons.svg', 512);
        
            for (var i = 0; i < content.length; i++) {
                var contentItem = content[i];
                $stateProvider.state(contentItem.state, contentItem);
            }
                
            $urlRouterProvider.otherwise('/default');
        } 
    );

    thisModule.controller('AppController', 
        function ($scope, $rootScope, $state, $mdSidenav) {
            
            $scope.onThemeClick = function(theme) {
                $rootScope.$theme = theme;
            };

            // Update page after language changed
            $rootScope.$on('languageChanged', function(event) {
                console.log('Reloading...');
                console.log($state.current);
                console.log($state.params);

                $state.reload();
            });

            // Update page after theme changed
            $rootScope.$on('themeChanged', function(event) {
                $state.reload();
            });
                        
            $scope.onSwitchPage = function(state) {
                $mdSidenav('left').close();
                $state.go(state);
            };
            
            $scope.onToggleMenu = function() {
                $mdSidenav('left').toggle();
            };
                        
            $scope.isActiveState = function(state) {
                return $state.current.name == state;  
            };
        }
    );

})();
