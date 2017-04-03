import { RollbarConfig } from './rollbar.config';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RollbarService } from './rollbar.service';

@NgModule({
    providers: [
        RollbarService 
    ],
})
/**
 * Rollbar Logging support for Angular 2.
 */
export class RollbarModule {

    /**
     * 
     * Setup the module in your application's root bootstrap.
     * 
     * @static
     * @param {RollbarConfig} config The configuration for Rollbar logging
     * @returns {ModuleWithProviders} The module ready for your bootstrap
     * 
     * @memberOf RollbarModule
     */
    static forRoot(config: RollbarConfig): ModuleWithProviders {

        return {
            ngModule: RollbarModule,
            providers: [
                {provide: RollbarConfig, useValue: config}
            ],
        }
    }
}