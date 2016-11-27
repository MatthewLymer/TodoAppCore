/// <reference path="../node_modules/angular2/core.d.ts"/>
/// <reference path="../node_modules/angular2/typings/es6-promise/es6-promise.d.ts"/>
/// <reference path="../node_modules/angular2/typings/browser.d.ts"/>
/// <reference path="../node_modules/@types/rx/rx.all.d.ts"/>

import {Component, bootstrap} from 'angular2/angular2';

@Component({
    selector: 'hello-world',
    template: `<h1>Hello {{ name }}!</h1>`
})
class HelloWorldComponent {
    name: string;

    constructor() {
        this.name = 'Angular 2';
    }
}

bootstrap(HelloWorldComponent);