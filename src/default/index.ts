import './DefaultBlueTheme';
import './DefaultPinkTheme';
import './DefaultAmberTheme';
import './DefaultOrangeTheme';
import './DefaultGreenTheme';
import './DefaultNavyTheme';
import './DefaultGreyTheme';

function configureDefaultTheme($mdThemingProvider) {
    $mdThemingProvider.setDefaultTheme('default');
    $mdThemingProvider.alwaysWatchTheme(true);
}

angular.module('pipTheme.Default', [
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
