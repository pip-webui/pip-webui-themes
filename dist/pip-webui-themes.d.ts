declare module pip.themes {
import './common';
import './default';
import './bootbarn';

function configureBootBarnCoolTheme($mdThemingProvider: ng.material.IThemingProvider): void;

function configureBootBarnMonochromeTheme($mdThemingProvider: ng.material.IThemingProvider): void;

function configureBootBarnWarmTheme($mdThemingProvider: any): void;

import './BootBarnCoolTheme';
import './BootBarnWarmTheme';
import './BootBarnMonochromeTheme';

import './ThemeService';

export let ThemeRootVar: string;
export let ThemeChangedEvent: string;
export let ThemeResetPage: string;
export interface IThemeService {
    theme: string;
    use(language: string): string;
}
export interface IThemeProvider extends IThemeService, ng.IServiceProvider {
    setRootVar: boolean;
    persist: boolean;
}

function configureDefaultAmberTheme($mdThemingProvider: ng.material.IThemingProvider): void;

function configureDefaultBlackTheme($mdThemingProvider: ng.material.IThemingProvider): void;

function configureDefaultBlueTheme($mdThemingProvider: ng.material.IThemingProvider): void;

function configureDefaultGreenTheme($mdThemingProvider: ng.material.IThemingProvider): void;

function configureDefaultGreyTheme($mdThemingProvider: ng.material.IThemingProvider): void;

function configureDefaultNavyTheme($mdThemingProvider: ng.material.IThemingProvider): void;

function configureDefaultOrangeTheme($mdThemingProvider: ng.material.IThemingProvider): void;

function configureDefaultPinkTheme($mdThemingProvider: ng.material.IThemingProvider): void;

import './DefaultBlueTheme';
import './DefaultPinkTheme';
import './DefaultAmberTheme';
import './DefaultOrangeTheme';
import './DefaultGreenTheme';
import './DefaultNavyTheme';
import './DefaultGreyTheme';

}
