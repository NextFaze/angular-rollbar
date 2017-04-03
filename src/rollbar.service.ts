import { Injectable } from '@angular/core';
import { RollbarConfig } from './rollbar.config';
import *  as Rollbar from 'rollbar-browser';

@Injectable()
export class RollbarService {

    private rollbar: any;

    constructor(options: RollbarConfig) {
        this.rollbar = Rollbar.init(options);
    }

    public info(message: String, error?: Error, data?: Object, callback?: Function) {
        return this.rollbar.info(message, error, data, callback);
    }

    public warn(message: String, error: Error, data: Object, callback: Function) {
        return this.rollbar.warn(message, error, data, callback);
    }

    public error(message: String, error?: Error, data?: Object, callback?: Function) {
        return this.rollbar.error(message, error, data, callback);
    }

    public critical(message: String, error: Error, data: Object, callback: Function) {
        return this.rollbar.critical(message, error, data, callback);
    }
}