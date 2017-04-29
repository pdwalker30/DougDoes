interface System {
    import: (name: string) => {
        then: (successCallback: Function, failCallback?: Function) => void;
    }
    config: (cfg: any) => void;
}

var System: System;

(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },

        // map tells the System loader where to look for things
        map: {

            // our app is within the app folder
            app: 'app',

            // angular bundles
            '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.js',
            '@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.js',
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',
            '@angular/material': 'npm:@angular/material/bundles/material.umd.js',

            // other libraries
            'rxjs': 'npm:rxjs',
            'angular-in-memory-web-api': 'npm:angular-in-memory-web-api'
            , 'angular2-busy': 'npm:angular2-busy'
            , 'angular2-dynamic-component': 'npm:angular2-dynamic-component'
            , 'ts-metadata-helper': 'npm:ts-metadata-helper'
            , 'core-js': 'npm:core-js'
            , 'd3': 'npm:d3'
            , 'angular2-highcharts': 'npm:angular2-highcharts',
            'highcharts': 'npm:highcharts'
        },

        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            'angular-in-memory-web-api': {
                main: './index.js',
                defaultExtension: 'js'
            },
            'angular2-busy': {
                main: 'index.js',
                defaultExtension: 'js'
            }
            , 'angular2-dynamic-component': {
                main: 'index.js',
                defaultExtension: 'js'
            }
            , 'ts-metadata-helper': {
                main: 'index.js',
                defaultExtension: 'js'
            }
            , 'core-js': {
                main: 'index.js',
                defaultExtension: 'js'
            }
            , 'd3': {
                main: 'build/d3.js',
                defaultExtension: 'js'
            }
            , highcharts: {
                main: './highcharts.js',
                defaultExtension: 'js'
            },
            'angular2-highcharts': {
                main: './index.js',
                defaultExtension: 'js'
            }
        }
    });

    //#################   
    global.PreBootstrapHandler = null;

    global.applicationbootstrapping = System
        .import("app")
        .then(
        function handleResolve(app: any) {
        },
        function handleReject(error: any) {
            console.warn("System.js could not bootstrap the app.");
            console.error(`System.js error:[${error}]`);
            return (Promise.reject(error));
        });

})(this);