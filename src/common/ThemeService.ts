'use strict';

export let ThemeRootVar = "$theme";
export let ThemeChangedEvent = "pipThemeChanged";    
export let ThemeResetPage = "pipResetPage";    

export interface IThemeService {
    theme: string;
    use(language: string): string;
}

export interface IThemeProvider extends IThemeService, ng.IServiceProvider {
    setRootVar: boolean;
    persist: boolean;
}

class ThemeConfig {
    public theme: string;
}

class ThemeService implements IThemeService {
    private _config: ThemeConfig;
    private _setRootVar: boolean;
    private _persist: boolean;
    private _rootScope: ng.IRootScopeService;
    private _log: ng.ILogService;
    private _window: ng.IWindowService;
    private _theming: any;
    private _currentTheme: string = null;

    public constructor(
        config: ThemeConfig,
        setRootVar: boolean,
        persist: boolean,
        $rootScope: ng.IRootScopeService,
        $log: ng.ILogService,
        $window: ng.IWindowService,
        $mdTheming: any
    ) {
        this._setRootVar = setRootVar;
        this._persist = persist;
        this._config = config;
        this._rootScope = $rootScope;
        this._log = $log;
        this._window = $window;
        this._theming = $mdTheming;

        if (this._persist && this._window.localStorage && this._config.theme == "default")
            this._config.theme = this._window.localStorage.getItem('theme') || this._config.theme;

        this._log.debug("Set theme to " + this._config.theme);

        // Define theme for angular material 
        $('body').attr('md-theme', '{{' + ThemeRootVar + '}}');
        this.save();
    }

    private save(): void {
        let body = $('body');
        let newTheme = this._config.theme;

        // Switch material theme
        // body.attr('md-theme', newTheme);

        // Change custom theme
        body.addClass(newTheme);
        if (this._currentTheme != null && this._currentTheme != newTheme)
            body.removeClass(this._currentTheme);            

        this._currentTheme = newTheme;

        // Set root scope variable
        if (this._setRootVar)
            this._rootScope[ThemeRootVar] = this._config.theme;

        // Save in local storage
        if (this._persist && this._window.localStorage != null)
            this._window.localStorage.setItem('theme', this._config.theme);
    }

    public get theme(): string {
        return this._config.theme;
    }

    public set theme(value: string) {
        if (value != this._config.theme) {
            if (!(value in this._theming.THEMES))
                throw new Error('Theme ' + value + ' is not defined. Please, register it first with $mdThemingProvider');

            this._config.theme = value;
            
            this._log.debug("Changing theme to " + value);

            this.save();                

            this._rootScope.$emit(ThemeChangedEvent, value);
            this._rootScope.$emit(ThemeResetPage);
        }
    }

    public use(theme: string): string {
        if (theme != null)
            this.theme = theme;
        return this.theme;
    }

}

class ThemeProvider implements IThemeProvider {
    private _config: ThemeConfig = new ThemeConfig();
    private _setRootVar: boolean = true;
    private _persist: boolean = true;
    private _service: ThemeService;
    
    public constructor() {
        this._config.theme = "default";
    }

    public get setRootVar(): boolean {
        return this._setRootVar;  
    }

    public set setRootVar(value: boolean) {
        this._setRootVar = !!value;
    }

    public get persist(): boolean {
        return this._persist;  
    }

    public set persist(value: boolean) {
        this._persist = !!value;
    }

    public get theme(): string {
        return this._config.theme;
    }

    public set theme(value: string) {
        this._config.theme = value;
    }

    public use(theme: string): string {
        if (theme != null)
            this.theme = theme;
        return this.theme;
    }

    public $get(
        $rootScope: ng.IRootScopeService,
        $log: ng.ILogService, 
        $window: ng.IWindowService,
        $mdTheming: any
    ): any {
        "ngInject";

        if (this._service == null) 
            this._service = new ThemeService(this._config, this._setRootVar, this._persist, $rootScope, $log, $window, $mdTheming);

        return this._service;
    }
}

function initTheme(pipTheme: IThemeService) {
    pipTheme.theme;
}

angular
    .module('pipTheme')
    .provider('pipTheme', ThemeProvider)
    .run(initTheme);
