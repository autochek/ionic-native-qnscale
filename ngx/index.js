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
    AprilisDeviceQnscale.prototype.connect = function (deviceId, connectionTimeoutSec, userId, gender, year, height) { return cordova(this, "connect", {}, arguments); };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FwcmlsaXMtZGV2aWNlLXFuc2NhbGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVlBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUFZUSx3Q0FBaUI7Ozs7SUFZekQsc0NBQU8sYUFDTCxRQUFnQixFQUNoQixvQkFBNEIsRUFDNUIsTUFBYyxFQUNkLE1BQXlCLEVBQ3pCLElBQVksRUFDWixNQUFjO0lBV2hCLHVDQUFRO0lBU1IseUNBQVU7Ozs7Ozs7OytCQS9EWjtFQXlCMEMsaUJBQWlCO1NBQTlDLG9CQUFvQjs7Ozt1Q0F6QmpDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIGlzIGEgdGVtcGxhdGUgZm9yIG5ldyBwbHVnaW4gd3JhcHBlcnNcbiAqXG4gKiBUT0RPOlxuICogLSBBZGQvQ2hhbmdlIGluZm9ybWF0aW9uIGJlbG93XG4gKiAtIERvY3VtZW50IHVzYWdlIChpbXBvcnRpbmcsIGV4ZWN1dGluZyBtYWluIGZ1bmN0aW9uYWxpdHkpXG4gKiAtIFJlbW92ZSBhbnkgaW1wb3J0cyB0aGF0IHlvdSBhcmUgbm90IHVzaW5nXG4gKiAtIFJlbW92ZSBhbGwgdGhlIGNvbW1lbnRzIGluY2x1ZGVkIGluIHRoaXMgdGVtcGxhdGUsIEVYQ0VQVCB0aGUgQFBsdWdpbiB3cmFwcGVyIGRvY3MgYW5kIGFueSBvdGhlciBkb2NzIHlvdSBhZGRlZFxuICogLSBSZW1vdmUgdGhpcyBub3RlXG4gKlxuICovXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdjb3Jkb3ZhLXBsdWdpbi1hcHJpbGlzLWRldmljZS1xbnNjYWxlJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYXByaWxpcy1kZXZpY2UtcW5zY2FsZScsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5hcHJpbGlzLmRldmljZS5xbnNjYWxlJyxcbiAgcmVwbzogJycsIC8vIHRoZSBnaXRodWIgcmVwb3NpdG9yeSBVUkwgZm9yIHRoZSBwbHVnaW5cbiAgaW5zdGFsbDogJycsIC8vIE9QVElPTkFMIGluc3RhbGwgY29tbWFuZCwgaW4gY2FzZSB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xuICBpbnN0YWxsVmFyaWFibGVzOiBbXSwgLy8gT1BUSU9OQUwgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFwcmlsaXNEZXZpY2VRbnNjYWxlIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIC8qKlxuICAgKiDsnqXsuZjsmYAg7Jew6rKw7ZWc64ukLlxuICAgKiBAcGFyYW0gZGV2aWNlSWQg7J6l7LmYIOyVhOydtOuUlCAo7JWI65Oc66Gc7J2065OcIDog66el7KO87IaMLCBpb3MgOiB1dWlkKVxuICAgKiBAcGFyYW0gY29ubmVjdGlvblRpbWVvdXRTZWMg7Jew6rKwIO2DgOyehOyVhOybgyDsi5zqsIQgKOy0iClcbiAgICogQHBhcmFtIHVzZXJJZCDsgqzsmqnsnpAg7JWE7J2065SUXG4gICAqIEBwYXJhbSBnZW5kZXIg7ISx67OEXG4gICAqIEBwYXJhbSB5ZWFyIOyDneuFhFxuICAgKiBAcGFyYW0gaGVpZ2h0IO2CpFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjb25uZWN0KFxuICAgIGRldmljZUlkOiBzdHJpbmcsXG4gICAgY29ubmVjdGlvblRpbWVvdXRTZWM6IG51bWJlcixcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBnZW5kZXI6ICdtYWxlJyB8ICdmZW1hbGUnLFxuICAgIHllYXI6IG51bWJlcixcbiAgICBoZWlnaHQ6IG51bWJlcixcbiAgKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG5cbiAgLyoqXG4gICAqIOyepey5mOyZgCDrjbDsnbTthLDrpbwg64+Z6riw7ZmUIO2VnOuLpC5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICB9KVxuICBzeW5jRGF0YSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cblxuICAvKipcbiAgICog7J6l7LmY7JmA7J2YIOyXsOqysOydhCDtlbTsoJztlZzri6QuXG4gICAqIEBwYXJhbSBkZXZpY2VJZCDsnqXsuZgg7JWE7J2065SUICjslYjrk5zroZzsnbTrk5wgOiDrp6Xso7zshowsIGlvcyA6IHV1aWQpXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGRpc2Nvbm5lY3QoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xuICB9XG59XG5cbi8qKlxuICog7J2R64u1IO2BtOuemOyKpFxuICovXG5leHBvcnQgY2xhc3MgQXByaWxpc0RldmljZVFuc2NhbGVSZXNwb25zZSB7XG4gIHJlc3VsdDogYm9vbGVhbjtcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBkYXRhOiBhbnk7XG59XG4iXX0=