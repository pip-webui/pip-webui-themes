'use strict';

import './DefaultBlueTheme';
import './DefaultPinkTheme';
import './DefaultAmberTheme';
import './DefaultOrangeTheme';
import './DefaultGreenTheme';
import './DefaultNavyTheme';
import './DefaultGreyTheme';


angular
    .module('pipTheme.Default', [
        'ngMaterial',
        'pipTheme.Blue', 
        'pipTheme.Pink',
        'pipTheme.Amber', 
        'pipTheme.Orange', 
        'pipTheme.Green', 
        'pipTheme.Navy', 
        'pipTheme.Grey'
    ])
    .config(configureDefaultTheme);

function configureDefaultTheme($mdThemingProvider) {
    $mdThemingProvider.setDefaultTheme('default');
    $mdThemingProvider.alwaysWatchTheme(true);
}
