Simple Angular 2+ Questions

Q1. What is the difference between imports, declarations, and providers?

Ans 1. Declarations, imports and providers are a attributes of the configuration object passed to the @NgModule decorator, however they represent different things.

Declarations is an array of the components, directives and pipes that our application module has defined. We basically register all the components with the app module via the Declarations array.

Imports is an array of angular modules that our application depends on. Via imports we are specifying the dependencies of our app module.

Providers is an array of services that are a part of our app module. This is where we register services with the module injector.

Q2. What is the difference between components, directives, models, modules, and services?
Ans 2. Components: very similar to element level directives of AngularJS. They are tags that encompass html and backing functionality.

Directives: are attribute level. they attach to an element and usually would manipulate DOM. for instance ngFor, ngIf are directives

Models: are more like data structures. Classes interfaces etc fall under this category

Modules: are logical groupings of components, directives, providers etc into a package of functionality. A module can be a stand-alone angular app or a dependency in a application.

services: Services is where we usually write our business logic. They are singletons that are managed by angular's dependency injection and hence can be inject and used in various components across the application. for instance httpclient is a service.


# Seven Segment Display

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
