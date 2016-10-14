# Pip.WebUI.Themes User's Guide

## <a name="contents"></a> Contents
- [Installing](#install)
- [Typography styles and mixins](#typography)
- [Questions and bugs](#issues)


## <a name="install"></a> Installing

Add dependency to **pip-webui** into your **bower.json** or **package.json** file depending what you use.
```javascript
"dependencies": {
  ...
  "pip-webui": "*"
  ...
}
```

Alternatively you can install **pip-webui** manually using **bower**:
```bash
bower install pip-webui
```

or install it using **npm**:
```bash
npm install pip-webui
```

Include **pip-webui** files into your web application.
```html
<link rel="stylesheet" href=".../pip-webui-lib.min.css"/>
<link rel="stylesheet" href=".../pip-webui.min.css"/>
...
<script src=".../pip-webui-lib.min.js"></script>
```

Register **pipTheme** module in angular module dependencies.
```javascript
angular.module('myApp',[..., 'pipTheme']);
```

If you want add default themes add **pipTheme.Default** module in angular module dependencies.
```javascript
angular.module('myApp',[..., 'pipTheme.Default', 'pipTheme']);
```

If you want add bootbarn themes add **pipTheme.Bootbarn** module in angular module dependencies.
```javascript
angular.module('myApp',[..., 'pipTheme.Bootbarn', 'pipTheme']);
```

## <a name="issues"></a> Questions and bugs

If you have any questions regarding the module, you can ask them using our 
[discussion forum](https://groups.google.com/forum/#!forum/pip-webui).

Bugs related to this module can be reported using [github issues](https://github.com/pip-webui/pip-webui-themes/issues).
