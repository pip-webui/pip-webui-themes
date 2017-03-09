import { IThemeService, IThemeProvider } from './IThemeService';

export let ThemeRootVar = "$theme";
export let ThemeChangedEvent = "pipThemeChanged";    
export let ThemeResetPage = "pipResetPage";    

class ThemeConfig {
    public theme: string;
}

class ThemeService implements IThemeService {
    private _config: ThemeConfig;
    private _setRootVar: boolean;
    private _persist: boolean;
    private _currentTheme: string = null;

    public constructor(
        private $log: ng.ILogService,
        private $rootScope: ng.IRootScopeService,
        private $window: ng.IWindowService,
        private $mdTheming,
        config: ThemeConfig,
        setRootVar: boolean,
        persist: boolean,
    ) {
        this._setRootVar = setRootVar;
        this._persist = persist;
        this._config = config;

        //if (this._persist && this.$window.localStorage && this._config.theme == "default")
        this._config.theme = this.$window.localStorage.getItem('theme') || this._config.theme || 'default';

        this.$log.debug("Set theme to " + this._config.theme);

        // Define theme for angular material 
        $('body').attr('md-theme', '{{' + ThemeRootVar + '}}');
        this.save();
    }

    private save(): void {
        let body = $('body');
        let newTheme: string = this._config.theme;

        // Switch material theme
        // body.attr('md-theme', newTheme);

        // Change custom theme
        body.addClass(newTheme);
        if (this._currentTheme != null && this._currentTheme != newTheme)
            body.removeClass(this._currentTheme);            

        this._currentTheme = newTheme;

        // Set root scope variable
        if (this._setRootVar)
            this.$rootScope[ThemeRootVar] = this._config.theme;

        // Save in local storage
        if (this._persist && this.$window.localStorage != null)
            this.$window.localStorage.setItem('theme', this._config.theme);
    }

    public get theme(): string {
        return this._config.theme;
    }

    public set theme(value: string) {
        if (value != this._config.theme) {
            if (!(value in this.$mdTheming.THEMES))
                throw new Error('Theme ' + value + ' is not defined. Please, register it first with $mdThemingProvider');

            this._config.theme = value;
            
            this.$log.debug("Changing theme to " + value);

            this.save();                

            this.$rootScope.$emit(ThemeChangedEvent, value);
            this.$rootScope.$emit(ThemeResetPage);
        }
    }

    public use(theme: string): string {
        if (theme != null) {
            this._config.theme = theme;
            this.save();    
        }     
        return this._config.theme;
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
        if (theme != null) {
            this._config.theme = theme;
            let body = $('body');
            body.addClass(this._config.theme);
        }
        return this._config.theme;
    }

    public $get(
        $rootScope: ng.IRootScopeService,
        $log: ng.ILogService, 
        $window: ng.IWindowService,
        $mdTheming: any
    ): ThemeService {
        "ngInject";
        if (_.isUndefined(this._service) || _.isNull(this._service))  {
            this._service = new ThemeService($log, $rootScope, $window, this._config,  $mdTheming, this._setRootVar, this._persist);
        }
         
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
