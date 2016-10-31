'use strict';

import { assert } from 'chai';
import { ngMock } from '../browser';

import { IThemeService } from '../../src/common';

import '../../src/common';
import '../../src/default';

suite('pipTheme', () => {
    let _rootScope: ng.IRootScopeService;
    let _themeService;

    setup(ngMock.module('pipTheme'));
    setup(ngMock.module('pipTheme.Default'));

    setup(ngMock.inject((pipTheme, $rootScope) => {
        _themeService = pipTheme;
        _rootScope = $rootScope;
    }));

    test('change theme', () => {
        let theme = _themeService.theme;

        _themeService.use('blue');
        assert.equal("blue", _themeService.theme);
    });

});