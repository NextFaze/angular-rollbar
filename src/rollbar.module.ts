import { RollbarConfig } from './rollbar.config';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RollbarService } from './rollbar.service';

@NgModule({
    providers: [
        RollbarService 
    ],
})
export class RollbarModule {

    static forRoot(config: RollbarConfig): ModuleWithProviders {

        return {
            ngModule: RollbarModule,
            providers: [
                {provide: RollbarConfig, useValue: config}
            ],
        }
    }
}