"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var appSettingsModule = require("tns-core-modules/application-settings");
var rxjs_1 = require("rxjs");
var http_1 = require("@angular/common/http");
var config_1 = require("~/config");
var AUTHENTICATED_KEY = 'AUTHENTICATED_KEY';
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    Object.defineProperty(AuthService.prototype, "isAuthenticated", {
        get: function () {
            return appSettingsModule.getBoolean(AUTHENTICATED_KEY);
        },
        set: function (val) {
            appSettingsModule.setBoolean(AUTHENTICATED_KEY, val);
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.login = function (user) {
        return this.http.post(config_1.Config.apiUrl + "/login", __assign({}, user));
    };
    AuthService.prototype.signUp = function (user) {
        return this.http.post(config_1.Config.apiUrl + "/register", __assign({}, user));
    };
    AuthService.prototype.logout = function () {
        this.isAuthenticated = false;
        return rxjs_1.of(null);
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLHlFQUEyRTtBQUczRSw2QkFBc0M7QUFDdEMsNkNBQWtEO0FBQ2xELG1DQUFrQztBQUVsQyxJQUFNLGlCQUFpQixHQUFHLG1CQUFtQixDQUFDO0FBRzlDO0lBVUkscUJBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFBSSxDQUFDO0lBUnpDLHNCQUFXLHdDQUFlO2FBQTFCO1lBQ0ksT0FBTyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMzRCxDQUFDO2FBRUQsVUFBMkIsR0FBWTtZQUNuQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDekQsQ0FBQzs7O09BSkE7SUFRTSwyQkFBSyxHQUFaLFVBQWEsSUFBYztRQUN2QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFJLGVBQU0sQ0FBQyxNQUFNLFdBQVEsZUFDdkMsSUFBSSxFQUNULENBQUM7SUFDUCxDQUFDO0lBRU0sNEJBQU0sR0FBYixVQUFjLElBQWM7UUFDeEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBSSxlQUFNLENBQUMsTUFBTSxjQUFXLGVBQzFDLElBQUksRUFDVCxDQUFDO0lBQ1AsQ0FBQztJQUVNLDRCQUFNLEdBQWI7UUFDSSxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUM3QixPQUFPLFNBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBM0JRLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FXaUIsaUJBQVU7T0FWM0IsV0FBVyxDQTRCdkI7SUFBRCxrQkFBQztDQUFBLEFBNUJELElBNEJDO0FBNUJZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgKiBhcyBhcHBTZXR0aW5nc01vZHVsZSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzJztcblxuaW1wb3J0IHsgQXV0aFVzZXIgfSBmcm9tICcuLi9zaGFyZWQvbW9kZWxzL3VzZXIubW9kZWwnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICd+L2NvbmZpZyc7XG5cbmNvbnN0IEFVVEhFTlRJQ0FURURfS0VZID0gJ0FVVEhFTlRJQ0FURURfS0VZJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcblxuICAgIHB1YmxpYyBnZXQgaXNBdXRoZW50aWNhdGVkKCkge1xuICAgICAgICByZXR1cm4gYXBwU2V0dGluZ3NNb2R1bGUuZ2V0Qm9vbGVhbihBVVRIRU5USUNBVEVEX0tFWSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpc0F1dGhlbnRpY2F0ZWQodmFsOiBib29sZWFuKSB7XG4gICAgICAgIGFwcFNldHRpbmdzTW9kdWxlLnNldEJvb2xlYW4oQVVUSEVOVElDQVRFRF9LRVksIHZhbCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cblxuICAgIHB1YmxpYyBsb2dpbih1c2VyOiBBdXRoVXNlcik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHtDb25maWcuYXBpVXJsfS9sb2dpbmAsIHtcbiAgICAgICAgICAgIC4uLnVzZXJcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNpZ25VcCh1c2VyOiBBdXRoVXNlcik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHtDb25maWcuYXBpVXJsfS9yZWdpc3RlcmAsIHtcbiAgICAgICAgICAgIC4uLnVzZXJcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvZ291dCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gb2YobnVsbCk7XG4gICAgfVxufVxuIl19