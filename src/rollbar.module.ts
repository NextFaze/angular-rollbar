import { ModuleWithProviders, NgModule } from "@angular/core";
import { Configuration } from "rollbar";
import { RollbarService, ROLLBAR_CONFIGURATION } from "./rollbar.service";

@NgModule({
  providers: [RollbarService],
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
  static forRoot(config: Configuration): ModuleWithProviders<RollbarModule> {
    return {
      ngModule: RollbarModule,
      providers: [{ provide: ROLLBAR_CONFIGURATION, useValue: config }],
    };
  }
}
