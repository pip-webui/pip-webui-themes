module.exports = {
    module: {
        name: 'pipThemes',
        styles: 'index',
        export: 'pip.themes',
        standalone: 'pip.themes'
    },
    
    build: {
        js: false,
        ts: false,
        tsd: true,
        bundle: true,
        html: false,
        sass: true,
        lib: true,
        images: false,
        dist: false
    },

    file: {
        lib: [
            '../pip-webui-lib/dist/**/*',
        ]
    },

    browserify: {
        entries: [ './src/index.ts' ]
    },

    samples: {
        port: 8040
    },
    api: {
        port: 8041
    }
};
