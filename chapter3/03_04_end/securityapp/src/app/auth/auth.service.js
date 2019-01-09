"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var appSettingsModule = require("tns-core-modules/application-settings");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var http_1 = require("@angular/common/http");
var config_1 = require("~/config");
var AUTHENTICATED_KEY = 'AUTHENTICATED_KEY';
var ACCESS_TOKEN_KEY = 'ACCESS_TOKEN_KEY';
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
    AuthService.prototype.setToken = function (accessToken) {
        appSettingsModule.setString(ACCESS_TOKEN_KEY, accessToken);
    };
    AuthService.prototype.getToken = function () {
        return appSettingsModule.getString(ACCESS_TOKEN_KEY);
    };
    AuthService.prototype.login = function (user) {
        var _this = this;
        return this.http.post(config_1.Config.apiUrl + "/login", __assign({}, user)).pipe(operators_1.tap(function (result) {
            console.log('token received: ' + result.access_token);
            _this.setToken(result.access_token);
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLHlFQUEyRTtBQUczRSw2QkFBc0M7QUFDdEMsNENBQXFDO0FBRXJDLDZDQUFrRDtBQUNsRCxtQ0FBa0M7QUFFbEMsSUFBTSxpQkFBaUIsR0FBRyxtQkFBbUIsQ0FBQztBQUM5QyxJQUFNLGdCQUFnQixHQUFHLGtCQUFrQixDQUFDO0FBRzVDO0lBa0JJLHFCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUksQ0FBQztJQWhCekMsc0JBQVcsd0NBQWU7YUFBMUI7WUFDSSxPQUFPLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzNELENBQUM7YUFFRCxVQUEyQixHQUFZO1lBQ25DLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN6RCxDQUFDOzs7T0FKQTtJQU1PLDhCQUFRLEdBQWhCLFVBQWlCLFdBQW1CO1FBQ2hDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRU0sOEJBQVEsR0FBZjtRQUNJLE9BQU8saUJBQWlCLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDekQsQ0FBQztJQUlNLDJCQUFLLEdBQVosVUFBYSxJQUFjO1FBQTNCLGlCQVNDO1FBUkcsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBSSxlQUFNLENBQUMsTUFBTSxXQUFRLGVBQ3ZDLElBQUksRUFDVCxDQUFDLElBQUksQ0FDSCxlQUFHLENBQUMsVUFBQSxNQUFNO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDdEQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQ0wsQ0FBQztJQUNOLENBQUM7SUFFTSw0QkFBTSxHQUFiLFVBQWMsSUFBYztRQUN4QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFJLGVBQU0sQ0FBQyxNQUFNLGNBQVcsZUFDMUMsSUFBSSxFQUNULENBQUM7SUFDUCxDQUFDO0lBRU0sNEJBQU0sR0FBYjtRQUNJLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQzdCLE9BQU8sU0FBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUF4Q1EsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQW1CaUIsaUJBQVU7T0FsQjNCLFdBQVcsQ0F5Q3ZCO0lBQUQsa0JBQUM7Q0FBQSxBQXpDRCxJQXlDQztBQXpDWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0ICogYXMgYXBwU2V0dGluZ3NNb2R1bGUgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5ncyc7XG5cbmltcG9ydCB7IEF1dGhVc2VyIH0gZnJvbSAnLi4vc2hhcmVkL21vZGVscy91c2VyLm1vZGVsJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICd+L2NvbmZpZyc7XG5cbmNvbnN0IEFVVEhFTlRJQ0FURURfS0VZID0gJ0FVVEhFTlRJQ0FURURfS0VZJztcbmNvbnN0IEFDQ0VTU19UT0tFTl9LRVkgPSAnQUNDRVNTX1RPS0VOX0tFWSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG5cbiAgICBwdWJsaWMgZ2V0IGlzQXV0aGVudGljYXRlZCgpIHtcbiAgICAgICAgcmV0dXJuIGFwcFNldHRpbmdzTW9kdWxlLmdldEJvb2xlYW4oQVVUSEVOVElDQVRFRF9LRVkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaXNBdXRoZW50aWNhdGVkKHZhbDogYm9vbGVhbikge1xuICAgICAgICBhcHBTZXR0aW5nc01vZHVsZS5zZXRCb29sZWFuKEFVVEhFTlRJQ0FURURfS0VZLCB2YWwpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0VG9rZW4oYWNjZXNzVG9rZW46IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBhcHBTZXR0aW5nc01vZHVsZS5zZXRTdHJpbmcoQUNDRVNTX1RPS0VOX0tFWSwgYWNjZXNzVG9rZW4pO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRUb2tlbigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYXBwU2V0dGluZ3NNb2R1bGUuZ2V0U3RyaW5nKEFDQ0VTU19UT0tFTl9LRVkpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG5cbiAgICBwdWJsaWMgbG9naW4odXNlcjogQXV0aFVzZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7Q29uZmlnLmFwaVVybH0vbG9naW5gLCB7XG4gICAgICAgICAgICAuLi51c2VyXG4gICAgICAgIH0pLnBpcGUoXG4gICAgICAgICAgICB0YXAocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndG9rZW4gcmVjZWl2ZWQ6ICcgKyByZXN1bHQuYWNjZXNzX3Rva2VuKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFRva2VuKHJlc3VsdC5hY2Nlc3NfdG9rZW4pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2lnblVwKHVzZXI6IEF1dGhVc2VyKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke0NvbmZpZy5hcGlVcmx9L3JlZ2lzdGVyYCwge1xuICAgICAgICAgICAgLi4udXNlclxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9nb3V0KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBvZihudWxsKTtcbiAgICB9XG59XG4iXX0=