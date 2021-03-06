/* global angular */

(function () {
    'use strict';

    var content = [
        { title: 'Default', state: 'default', url: '/default', controller: 'ThemesController', templateUrl: 'themes_default.html' },
        { title: 'Bootbarn', state: 'bootbarn', url: '/bootbarn', controller: 'ThemesBootBarnController', templateUrl: 'themes_default.html'}
    ];


    var thisModule = angular.module('app', [
        'ngMaterial',
        'ui.router', 
        'ui.utils',
        
        'appThemesDefault', 
        'appThemesBootBarn',
        'appTranslate'
    ]);

    thisModule.config(function ($stateProvider, $urlRouterProvider,
                                $mdThemingProvider, $mdIconProvider) {

         $mdIconProvider.iconSet('icons', 'images/icons.svg', 512);
            for (var i = 0; i < content.length; i++) {
                var contentItem = content[i];
                $stateProvider.state(contentItem.state, contentItem);
            }
            $urlRouterProvider.otherwise('/default');
        } 
    );

    thisModule.controller('AppController', 
        function ($scope, $rootScope, $state, $mdSidenav, $injector, $timeout) {
            
            var pipTranslate = $injector.has('pipTranslate') ? $injector.get('pipTranslate') : null;
            if (pipTranslate) {
                pipTranslate.translations('en', {
                    'THEME': 'Theme'
                });
                pipTranslate.translations('ru', {
                    'THEME': 'Тема'
                });
            }
            $scope.content = content;
            $scope.onThemeClick = function(theme) {
            };

            // Update page after language changed
            $rootScope.$on('pipLanguageChanged', function(event) {
                console.log('Reloading...');
                console.log($state.current);
                console.log($state.params);

                $state.reload();
            });

            // Update page after theme changed
            $rootScope.$on('pipThemeChanged', function(event) {
                //$state.reload();
                // $rootScope.$reset = true;

                // $timeout(function() {
                //     $rootScope.$reset = false;
                // }, 0);
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
