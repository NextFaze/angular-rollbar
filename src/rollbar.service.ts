import {ErrorHandler, Injectable} from '@angular/core';
import * as Rollbar from 'rollbar';

import {RollbarConfig} from './rollbar.config';

@Injectable()
/**
 * Rollbar Logging Service.
 *
 * Wraps the logging functions of Rollbar in an Angular 2+ service to make
 * things a little smoother.
 * Follows the Rollbar browser API as closely as possible.
 */
export class RollbarService implements ErrorHandler {
  private rollbar: any;

  /**
   * Creates an instance of RollbarService.
   *
   * @param {RollbarConfig} options The configuration options for your Rollbar
   * account.
   *
   * @memberOf RollbarService
   */
  constructor(options: RollbarConfig) {
    this.rollbar = new Rollbar(options);
  }

  /**
   * Sets Rollbar configuration options at runtime.
   *
   * @param options A partial configuration object
   */
  public configure(options: RollbarConfig) {
    return this.rollbar.configure(options);
  }

  public handleError(err: any): void {
    this.rollbar.error(err.originalError || err);
  }

  /**
     * Logs a message to Rollbar at the default log level
     * 
     * @param {String} message The content of the message
     * @param {Error} [error] An exception to pass along with the message
     * @param {Object} [data] Custom data object to log with the message
     * @param {Function} [callback] If you aren't into promises, provide a callback.
     * @returns 
     * 
     * @memberOf RollbarService
     */
  public log(message: String, error?: Error, data?: Object, callback?: Function): Promise<any> {
    return this.rollbar.log(message, error, data, callback);
  }

  /**
     * Logs an info level log message to Rollbar
     * 
     * @param {String} message The content of the message
     * @param {Error} [error] An exception to pass along with the message
     * @param {Object} [data] Custom data object to log with the message
     * @param {Function} [callback] If you aren't into promises, provide a callback.
     * @returns 
     * 
     * @memberOf RollbarService
     */
  public info(message: String, error?: Error, data?: Object, callback?: Function): Promise<any> {
    return this.rollbar.info(message, error, data, callback);
  }

  /**
     * Logs a WARN level log message to Rollbar
     * 
     * @param {String} message The content of the message
     * @param {Error} [error] An exception to pass along with the message
     * @param {Object} [data] Custom data object to log with the message
     * @param {Function} [callback] If you aren't into promises, provide a callback.
     * @returns 
     * 
     * @memberOf RollbarService
     */
  public warn(message: String, error?: Error, data?: Object, callback?: Function): Promise<any> {
    return this.rollbar.warn(message, error, data, callback);
  }

  /**
     * Logs an ERROR level log message to Rollbar
     * 
     * @param {String} message The content of the message
     * @param {Error} [error] An exception to pass along with the message
     * @param {Object} [data] Custom data object to log with the message
     * @param {Function} [callback] If you aren't into promises, provide a callback.
     * @returns 
     * 
     * @memberOf RollbarService
     */
  public error(message: String, error?: Error, data?: Object, callback?: Function): Promise<any> {
    return this.rollbar.error(message, error, data, callback);
  }

  /**
     * Logs a CRITICAL ERROR log message to Rollbar
     * 
     * @param {String} message The content of the message
     * @param {Error} [error] An exception to pass along with the message
     * @param {Object} [data] Custom data object to log with the message
     * @param {Function} [callback] If you aren't into promises, provide a callback.
     * @returns 
     * 
     * @memberOf RollbarService
     */
  public critical(message: String, error?: Error, data?: Object, callback?: Function):
      Promise<any> {
    return this.rollbar.critical(message, error, data, callback);
  }
}