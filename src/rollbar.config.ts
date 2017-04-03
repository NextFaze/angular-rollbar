import { Injectable } from '@angular/core'

@Injectable()
export class RollbarConfig {
    accessToken: string;
    captureUncaught? : boolean;
    captureUnandledRejections? : boolean
}
