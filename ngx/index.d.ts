import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name qnscale
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { foodlens } from '@ionic-native/foodlens';
 *
 *
 * constructor(private foodlens: foodlens) { }
 *
 * ...
 *
 *
 * this.foodlens.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class Qnscale extends IonicNativePlugin {
    connect(deviceId: string, connectionTimeoutSec: number, userId: string, height: number, gender: 'male' | 'female', year: number, month: number, day: number): Promise<any>;
    syncData(): Promise<any>;
    disconnect(): Promise<any>;
}
