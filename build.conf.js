module.exports = {
    module: {
        name: 'pipThemes',
        styles: 'theme',
        export: 'pip.themes',
        standalone: 'pip.themes'
    },
    build: {
        js: false,
        ts: false,
        tsd: true,
        bundle: true,
        html: false,
        less: true,
        lib: true,
        images: false,
        dist: false
    },
    file: {
        lib: [
            //'../pip-webui-test/dist/**/*',
            '../pip-webui-lib/dist/**/*',
            //'../pip-webui-services/dist/**/*',
            //'../pip-webui-css/dist/**/*',
            //'../pip-webui-services/dist/**/*',
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
