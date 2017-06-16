# Angular (2+) Rollbar Integration

[![Build Status](https://travis-ci.org/NextFaze/angular-rollbar.svg?branch=master)](https://travis-ci.org/NextFaze/angular-rollbar) [![Coverage Status](https://coveralls.io/repos/github/NextFaze/angular-rollbar/badge.svg?branch=master)](https://coveralls.io/github/NextFaze/angular-rollbar?branch=master)

This package provides an Angular 2+ service for logging to Rollbar.

## Installation

    npm install angular-rollbar

### Dependencies

This module relies on the official `rollbar-browser` npm package. In addition, it has Angular >= 2 as a peer dependency.

## Usage

### Bootstrap the module

```ts
import { RollbarModule, RollbarService } from 'angular-rollbar'

NgModule({
    imports: [
        RollbarModule.forRoot({
            accessToken: 'YOUR ROLLBAR CLIENT TOKEN'
        })
    ],
    providers: [
        { provide: ErrorHandler, useClass: RollbarService }
    ]
})
export class MyAngularApp {}

```

### Use the service

Let the Angular DI do all the magic for you.

```ts
import { Component } from '@angular/core'
import { RollbarService } from 'angular-rollbar';

@Component(...)
export class MyComponent {

    constructor (rollbar: RollbarService) {
        rollbar.info('Logging to Rollbar!');
    }
}
```

## Development

We are using Angular CLI to make things a little bearable.

```sh
npm install
npm test
```

## Disclaimer

This project is not affiliated in anyway with Rollbar Inc. We do like their
service though.
