export interface IThemeService {
    theme: string;
    use(language: string): string;
}

export interface IThemeProvider extends IThemeService, ng.IServiceProvider {
    setRootVar: boolean;
    persist: boolean;
}
