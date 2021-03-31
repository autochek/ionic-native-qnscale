var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Observable } from 'rxjs';
var AprilisDeviceQnscale = /** @class */ (function (_super) {
    __extends(AprilisDeviceQnscale, _super);
    function AprilisDeviceQnscale() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AprilisDeviceQnscale.prototype.connect = function (deviceId, connectionTimeoutSec, userId, gender, year, month) { return cordova(this, "connect", {}, arguments); };
    AprilisDeviceQnscale.prototype.syncData = function () { return cordova(this, "syncData", { "observable": true }, arguments); };
    AprilisDeviceQnscale.prototype.disconnect = function () { return cordova(this, "disconnect", {}, arguments); };
    AprilisDeviceQnscale.pluginName = "cordova-plugin-aprilis-device-qnscale";
    AprilisDeviceQnscale.plugin = "cordova-plugin-aprilis-device-qnscale";
    AprilisDeviceQnscale.pluginRef = "cordova.plugins.aprilis.device.qnscale";
    AprilisDeviceQnscale.repo = "";
    AprilisDeviceQnscale.install = "";
    AprilisDeviceQnscale.installVariables = [];
    AprilisDeviceQnscale.platforms = ["Android", "iOS"];
    return AprilisDeviceQnscale;
}(IonicNativePlugin));
export { AprilisDeviceQnscale };
var AprilisDeviceQnscaleResponse = /** @class */ (function () {
    function AprilisDeviceQnscaleResponse() {
    }
    return AprilisDeviceQnscaleResponse;
}());
export { AprilisDeviceQnscaleResponse };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FwcmlsaXMtZGV2aWNlLXFuc2NhbGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVlBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUFZUSx3Q0FBaUI7Ozs7SUFjekQsc0NBQU8sYUFDTCxRQUFnQixFQUNoQixvQkFBNEIsRUFDNUIsTUFBYyxFQUNkLE1BQXlCLEVBQ3pCLElBQVksRUFDWixLQUFhO0lBV2YsdUNBQVE7SUFTUix5Q0FBVTs7Ozs7Ozs7K0JBakVaO0VBeUIwQyxpQkFBaUI7U0FBOUMsb0JBQW9COzs7O3VDQXpCakMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgaXMgYSB0ZW1wbGF0ZSBmb3IgbmV3IHBsdWdpbiB3cmFwcGVyc1xuICpcbiAqIFRPRE86XG4gKiAtIEFkZC9DaGFuZ2UgaW5mb3JtYXRpb24gYmVsb3dcbiAqIC0gRG9jdW1lbnQgdXNhZ2UgKGltcG9ydGluZywgZXhlY3V0aW5nIG1haW4gZnVuY3Rpb25hbGl0eSlcbiAqIC0gUmVtb3ZlIGFueSBpbXBvcnRzIHRoYXQgeW91IGFyZSBub3QgdXNpbmdcbiAqIC0gUmVtb3ZlIGFsbCB0aGUgY29tbWVudHMgaW5jbHVkZWQgaW4gdGhpcyB0ZW1wbGF0ZSwgRVhDRVBUIHRoZSBAUGx1Z2luIHdyYXBwZXIgZG9jcyBhbmQgYW55IG90aGVyIGRvY3MgeW91IGFkZGVkXG4gKiAtIFJlbW92ZSB0aGlzIG5vdGVcbiAqXG4gKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ2NvcmRvdmEtcGx1Z2luLWFwcmlsaXMtZGV2aWNlLXFuc2NhbGUnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1hcHJpbGlzLWRldmljZS1xbnNjYWxlJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLmFwcmlsaXMuZGV2aWNlLnFuc2NhbGUnLFxuICByZXBvOiAnJywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxuICBpbnN0YWxsOiAnJywgLy8gT1BUSU9OQUwgaW5zdGFsbCBjb21tYW5kLCBpbiBjYXNlIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG4gIGluc3RhbGxWYXJpYWJsZXM6IFtdLCAvLyBPUFRJT05BTCB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXByaWxpc0RldmljZVFuc2NhbGUgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cbiAgLyoqXG4gICAqIOyepey5mOyZgCDsl7DqsrDtlZzri6QuXG4gICAqIEBwYXJhbSBkZXZpY2VJZCDsnqXsuZgg7JWE7J2065SUICjslYjrk5zroZzsnbTrk5wgOiDrp6Xso7zshowsIGlvcyA6IHV1aWQpXG4gICAqIEBwYXJhbSBjb25uZWN0aW9uVGltZW91dFNlYyDsl7DqsrAg7YOA7J6E7JWE7JuDIOyLnOqwhCAo7LSIKVxuICAgKiBAcGFyYW0gdXNlcklkIOyCrOyaqeyekCDslYTsnbTrlJRcbiAgICogQHBhcmFtIGdlbmRlciDshLHrs4RcbiAgICogQHBhcmFtIHllYXIg7IOd64WEXG4gICAqIEBwYXJhbSBtb250aCDsm5RcbiAgICogQHBhcmFtIGRheSDsnbxcbiAgICogQHBhcmFtIGhlaWdodCDtgqRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgY29ubmVjdChcbiAgICBkZXZpY2VJZDogc3RyaW5nLFxuICAgIGNvbm5lY3Rpb25UaW1lb3V0U2VjOiBudW1iZXIsXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgZ2VuZGVyOiAnbWFsZScgfCAnZmVtYWxlJyxcbiAgICB5ZWFyOiBudW1iZXIsXG4gICAgbW9udGg6IG51bWJlcixcbiAgKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG5cbiAgLyoqXG4gICAqIOyepey5mOyZgCDrjbDsnbTthLDrpbwg64+Z6riw7ZmUIO2VnOuLpC5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICB9KVxuICBzeW5jRGF0YSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cblxuICAvKipcbiAgICog7J6l7LmY7JmA7J2YIOyXsOqysOydhCDtlbTsoJztlZzri6QuXG4gICAqIEBwYXJhbSBkZXZpY2VJZCDsnqXsuZgg7JWE7J2065SUICjslYjrk5zroZzsnbTrk5wgOiDrp6Xso7zshowsIGlvcyA6IHV1aWQpXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGRpc2Nvbm5lY3QoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG59XG5cbi8qKlxuICog7J2R64u1IO2BtOuemOyKpFxuICovXG5leHBvcnQgY2xhc3MgQXByaWxpc0RldmljZVFuc2NhbGVSZXNwb25zZSB7XG4gIHJlc3VsdDogYm9vbGVhbjtcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBkYXRhOiBhbnk7XG59XG4iXX0=