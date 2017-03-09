import './BootBarnCoolTheme';
import './BootBarnWarmTheme';
import './BootBarnMonochromeTheme';

angular.module('pipTheme.BootBarn', [
    'ngMaterial',
    'pipTheme.BootBarn.Warm',
    'pipTheme.BootBarn.Cool',
    'pipTheme.BootBarn.Monochrome',
]);
