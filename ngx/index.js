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
var AprilisDeviceQnscale = /** @class */ (function (_super) {
    __extends(AprilisDeviceQnscale, _super);
    function AprilisDeviceQnscale() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AprilisDeviceQnscale.prototype.connect = function (deviceId, connectionTimeoutSec, userId, gender, year, height) { return cordova(this, "connect", {}, arguments); };
    AprilisDeviceQnscale.prototype.syncData = function () { return cordova(this, "syncData", {}, arguments); };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FwcmlsaXMtZGV2aWNlLXFuc2NhbGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBWTlCLHdDQUFpQjs7OztJQVl6RCxzQ0FBTyxhQUNMLFFBQWdCLEVBQ2hCLG9CQUE0QixFQUM1QixNQUFjLEVBQ2QsTUFBeUIsRUFDekIsSUFBWSxFQUNaLE1BQWM7SUFTaEIsdUNBQVE7SUFRUix5Q0FBVTs7Ozs7Ozs7K0JBaERaO0VBYTBDLGlCQUFpQjtTQUE5QyxvQkFBb0I7Ozs7dUNBYmpDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnY29yZG92YS1wbHVnaW4tYXByaWxpcy1kZXZpY2UtcW5zY2FsZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWFwcmlsaXMtZGV2aWNlLXFuc2NhbGUnLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuYXByaWxpcy5kZXZpY2UucW5zY2FsZScsXG4gIHJlcG86ICcnLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXG4gIGluc3RhbGw6ICcnLCAvLyBPUFRJT05BTCBpbnN0YWxsIGNvbW1hbmQsIGluIGNhc2UgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcbiAgaW5zdGFsbFZhcmlhYmxlczogW10sIC8vIE9QVElPTkFMIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcHJpbGlzRGV2aWNlUW5zY2FsZSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICAvKipcbiAgICog7J6l7LmY7JmAIOyXsOqysO2VnOuLpC5cbiAgICogQHBhcmFtIGRldmljZUlkIOyepey5mCDslYTsnbTrlJQgKOyViOuTnOuhnOydtOuTnCA6IOunpeyjvOyGjCwgaW9zIDogdXVpZClcbiAgICogQHBhcmFtIGNvbm5lY3Rpb25UaW1lb3V0U2VjIOyXsOqysCDtg4DsnoTslYTsm4Mg7Iuc6rCEICjstIgpXG4gICAqIEBwYXJhbSB1c2VySWQg7IKs7Jqp7J6QIOyVhOydtOuUlFxuICAgKiBAcGFyYW0gZ2VuZGVyIOyEseuzhFxuICAgKiBAcGFyYW0geWVhciDsg53rhYRcbiAgICogQHBhcmFtIGhlaWdodCDtgqRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgY29ubmVjdChcbiAgICBkZXZpY2VJZDogc3RyaW5nLFxuICAgIGNvbm5lY3Rpb25UaW1lb3V0U2VjOiBudW1iZXIsXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgZ2VuZGVyOiAnbWFsZScgfCAnZmVtYWxlJyxcbiAgICB5ZWFyOiBudW1iZXIsXG4gICAgaGVpZ2h0OiBudW1iZXIsXG4gICk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcbiAgfVxuXG4gIC8qKlxuICAgKiDsnqXsuZjsmYAg642w7J207YSw66W8IOuPmeq4sO2ZlCDtlZzri6QuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHN5bmNEYXRhKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcbiAgfVxuXG4gIC8qKlxuICAgKiDsnqXsuZjsmYDsnZgg7Jew6rKw7J2EIO2VtOygnO2VnOuLpC5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZGlzY29ubmVjdCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXG4gIH1cbn1cblxuLyoqXG4gKiDsnZHri7Ug7YG0656Y7IqkXG4gKi9cbmV4cG9ydCBjbGFzcyBBcHJpbGlzRGV2aWNlUW5zY2FsZVJlc3BvbnNlIHtcbiAgcmVzdWx0OiBib29sZWFuO1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIGRhdGE6IGFueTtcbn1cbiJdfQ==