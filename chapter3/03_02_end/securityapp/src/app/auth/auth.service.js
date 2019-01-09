"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var appSettingsModule = require("tns-core-modules/application-settings");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
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
        return this.http.post(config_1.Config.apiUrl + "/login", __assign({}, user)).pipe(operators_1.tap(function (result) {
            console.log('token received: ' + result.access_token);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLHlFQUEyRTtBQUczRSw2QkFBc0M7QUFDdEMsNENBQXFDO0FBRXJDLDZDQUFrRDtBQUNsRCxtQ0FBa0M7QUFFbEMsSUFBTSxpQkFBaUIsR0FBRyxtQkFBbUIsQ0FBQztBQUc5QztJQVVJLHFCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUksQ0FBQztJQVJ6QyxzQkFBVyx3Q0FBZTthQUExQjtZQUNJLE9BQU8saUJBQWlCLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDM0QsQ0FBQzthQUVELFVBQTJCLEdBQVk7WUFDbkMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3pELENBQUM7OztPQUpBO0lBUU0sMkJBQUssR0FBWixVQUFhLElBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBSSxlQUFNLENBQUMsTUFBTSxXQUFRLGVBQ3ZDLElBQUksRUFDVCxDQUFDLElBQUksQ0FDSCxlQUFHLENBQUMsVUFBQSxNQUFNO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDekQsQ0FBQyxDQUFDLENBQ0wsQ0FBQztJQUNOLENBQUM7SUFFTSw0QkFBTSxHQUFiLFVBQWMsSUFBYztRQUN4QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFJLGVBQU0sQ0FBQyxNQUFNLGNBQVcsZUFDMUMsSUFBSSxFQUNULENBQUM7SUFDUCxDQUFDO0lBRU0sNEJBQU0sR0FBYjtRQUNJLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQzdCLE9BQU8sU0FBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUEvQlEsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQVdpQixpQkFBVTtPQVYzQixXQUFXLENBZ0N2QjtJQUFELGtCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7QUFoQ1ksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzTW9kdWxlIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3MnO1xuXG5pbXBvcnQgeyBBdXRoVXNlciB9IGZyb20gJy4uL3NoYXJlZC9tb2RlbHMvdXNlci5tb2RlbCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnfi9jb25maWcnO1xuXG5jb25zdCBBVVRIRU5USUNBVEVEX0tFWSA9ICdBVVRIRU5USUNBVEVEX0tFWSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG5cbiAgICBwdWJsaWMgZ2V0IGlzQXV0aGVudGljYXRlZCgpIHtcbiAgICAgICAgcmV0dXJuIGFwcFNldHRpbmdzTW9kdWxlLmdldEJvb2xlYW4oQVVUSEVOVElDQVRFRF9LRVkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgaXNBdXRoZW50aWNhdGVkKHZhbDogYm9vbGVhbikge1xuICAgICAgICBhcHBTZXR0aW5nc01vZHVsZS5zZXRCb29sZWFuKEFVVEhFTlRJQ0FURURfS0VZLCB2YWwpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG5cbiAgICBwdWJsaWMgbG9naW4odXNlcjogQXV0aFVzZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7Q29uZmlnLmFwaVVybH0vbG9naW5gLCB7XG4gICAgICAgICAgICAuLi51c2VyXG4gICAgICAgIH0pLnBpcGUoXG4gICAgICAgICAgICB0YXAocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndG9rZW4gcmVjZWl2ZWQ6ICcgKyByZXN1bHQuYWNjZXNzX3Rva2VuKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2lnblVwKHVzZXI6IEF1dGhVc2VyKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke0NvbmZpZy5hcGlVcmx9L3JlZ2lzdGVyYCwge1xuICAgICAgICAgICAgLi4udXNlclxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9nb3V0KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBvZihudWxsKTtcbiAgICB9XG59XG4iXX0=