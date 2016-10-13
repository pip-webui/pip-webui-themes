module.exports = {
    module: {
        name: 'pipCore',
        styles: 'core'
    },
    build: {
        js: true,
        ts: true,
        html: false,
        css: false,
        lib: true,
        images: false,
        dist: false
    },
    file: {
        lib: [
            //'../pip-webui-test/dist/**/*',
            '../pip-webui-lib/dist/**/*',
            '../pip-webui-core/dist/**/*',
            //'../pip-webui-css/dist/**/*',
            //'../pip-webui-core/dist/**/*',
            // '../pip-webui-rest/dist/**/*',
            // '../pip-webui-controls/dist/**/*',
            // '../pip-webui-nav/dist/**/*',
            // '../pip-webui-layouts/dist/**/*',
            // '../pip-webui-pictures/dist/**/*',
            // '../pip-webui-locations/dist/**/*',
            // '../pip-webui-documents/dist/**/*',
            // '../pip-webui-composite/dist/**/*',
            // '../pip-webui-errors/dist/**/*',
            // '../pip-webui-entry/dist/**/*',
            // '../pip-webui-settings/dist/**/*',
            // '../pip-webui-guidance/dist/**/*',
            // '../pip-webui-support/dist/**/*',
            // '../pip-webui-help/dist/**/*'
        ]
    },
    samples: {
        port: 8040
    },
    api: {
        port: 8041
    }
};
