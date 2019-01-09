"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var appSettingsModule = require("tns-core-modules/application-settings");
var Https = require("nativescript-https");
var rxjs_1 = require("rxjs");
var http_1 = require("@angular/common/http");
var config_1 = require("~/config");
var ACCESS_TOKEN_KEY = 'ACCESS_TOKEN_KEY';
var EXPIRATION_KEY = 'EXPIRATION_KEY';
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    Object.defineProperty(AuthService.prototype, "isAuthenticated", {
        get: function () {
            var expires = appSettingsModule.getNumber(EXPIRATION_KEY);
            if (!expires) {
                return false;
            }
            return new Date().getTime() < expires;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.setToken = function (accessToken) {
        appSettingsModule.setString(ACCESS_TOKEN_KEY, accessToken);
    };
    AuthService.prototype.setExpiration = function (expires) {
        appSettingsModule.setNumber(EXPIRATION_KEY, expires * 1000);
    };
    AuthService.prototype.getToken = function () {
        return appSettingsModule.getString(ACCESS_TOKEN_KEY);
    };
    AuthService.prototype.login = function (user) {
        return Https.request({
            url: config_1.Config.apiUrl + "/login",
            method: 'POST',
            headers: {},
            content: JSON.stringify(__assign({}, user))
        }).then(function (response) {
            console.log('Received a login response');
            return response;
        })
            .catch(function (error) {
            console.error(error);
        });
        /*
        return this.http.post(`${Config.apiUrl}/login`, {
            ...user
        }).pipe(
            tap(result => {
                console.log('token received: ' + result.access_token);
                this.setToken(result.access_token);
                this.setExpiration(Number(result.expires));
            })
        );
        */
    };
    AuthService.prototype.signUp = function (user) {
        return this.http.post(config_1.Config.apiUrl + "/register", __assign({}, user));
    };
    AuthService.prototype.logout = function () {
        this.setToken(null);
        this.setExpiration(0);
        return rxjs_1.of(null);
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLHlFQUEyRTtBQUUzRSwwQ0FBNEM7QUFHNUMsNkJBQXNDO0FBR3RDLDZDQUFrRDtBQUNsRCxtQ0FBa0M7QUFFbEMsSUFBTSxnQkFBZ0IsR0FBRyxrQkFBa0IsQ0FBQztBQUM1QyxJQUFNLGNBQWMsR0FBRyxnQkFBZ0IsQ0FBQztBQUd4QztJQXNCSSxxQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFJLENBQUM7SUFwQnpDLHNCQUFXLHdDQUFlO2FBQTFCO1lBQ0ksSUFBTSxPQUFPLEdBQUcsaUJBQWlCLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQzVELElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ1YsT0FBTyxLQUFLLENBQUM7YUFDaEI7WUFDRCxPQUFPLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsT0FBTyxDQUFDO1FBQzFDLENBQUM7OztPQUFBO0lBRU8sOEJBQVEsR0FBaEIsVUFBaUIsV0FBbUI7UUFDaEMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFTyxtQ0FBYSxHQUFyQixVQUFzQixPQUFlO1FBQ2pDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFTSw4QkFBUSxHQUFmO1FBQ0ksT0FBTyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBSU0sMkJBQUssR0FBWixVQUFhLElBQWM7UUFFdkIsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQ2pCLEdBQUcsRUFBSyxlQUFNLENBQUMsTUFBTSxXQUFRO1lBQzdCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxFQUFFLEVBQUU7WUFDWCxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsY0FDaEIsSUFBSSxFQUNUO1NBQ0wsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLFFBQVE7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7WUFDekMsT0FBTyxRQUFRLENBQUM7UUFDcEIsQ0FBQyxDQUFDO2FBQ0csS0FBSyxDQUFDLFVBQUEsS0FBSztZQUNSLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7UUFFUDs7Ozs7Ozs7OztVQVVFO0lBQ04sQ0FBQztJQUVNLDRCQUFNLEdBQWIsVUFBYyxJQUFjO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUksZUFBTSxDQUFDLE1BQU0sY0FBVyxlQUMxQyxJQUFJLEVBQ1QsQ0FBQztJQUNQLENBQUM7SUFFTSw0QkFBTSxHQUFiO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLE9BQU8sU0FBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFoRVEsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQXVCaUIsaUJBQVU7T0F0QjNCLFdBQVcsQ0FpRXZCO0lBQUQsa0JBQUM7Q0FBQSxBQWpFRCxJQWlFQztBQWpFWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0ICogYXMgYXBwU2V0dGluZ3NNb2R1bGUgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5ncyc7XG5cbmltcG9ydCAqIGFzIEh0dHBzIGZyb20gJ25hdGl2ZXNjcmlwdC1odHRwcyc7XG5cbmltcG9ydCB7IEF1dGhVc2VyIH0gZnJvbSAnLi4vc2hhcmVkL21vZGVscy91c2VyLm1vZGVsJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICd+L2NvbmZpZyc7XG5cbmNvbnN0IEFDQ0VTU19UT0tFTl9LRVkgPSAnQUNDRVNTX1RPS0VOX0tFWSc7XG5jb25zdCBFWFBJUkFUSU9OX0tFWSA9ICdFWFBJUkFUSU9OX0tFWSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG5cbiAgICBwdWJsaWMgZ2V0IGlzQXV0aGVudGljYXRlZCgpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgZXhwaXJlcyA9IGFwcFNldHRpbmdzTW9kdWxlLmdldE51bWJlcihFWFBJUkFUSU9OX0tFWSk7XG4gICAgICAgIGlmICghZXhwaXJlcykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKSA8IGV4cGlyZXM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRUb2tlbihhY2Nlc3NUb2tlbjogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGFwcFNldHRpbmdzTW9kdWxlLnNldFN0cmluZyhBQ0NFU1NfVE9LRU5fS0VZLCBhY2Nlc3NUb2tlbik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRFeHBpcmF0aW9uKGV4cGlyZXM6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBhcHBTZXR0aW5nc01vZHVsZS5zZXROdW1iZXIoRVhQSVJBVElPTl9LRVksIGV4cGlyZXMgKiAxMDAwKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0VG9rZW4oKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGFwcFNldHRpbmdzTW9kdWxlLmdldFN0cmluZyhBQ0NFU1NfVE9LRU5fS0VZKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gICAgcHVibGljIGxvZ2luKHVzZXI6IEF1dGhVc2VyKTogUHJvbWlzZTxhbnk+IHtcblxuICAgICAgICByZXR1cm4gSHR0cHMucmVxdWVzdCh7XG4gICAgICAgICAgICB1cmw6IGAke0NvbmZpZy5hcGlVcmx9L2xvZ2luYCxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge30sXG4gICAgICAgICAgICBjb250ZW50OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgLi4udXNlclxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUmVjZWl2ZWQgYSBsb2dpbiByZXNwb25zZScpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIC8qXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHtDb25maWcuYXBpVXJsfS9sb2dpbmAsIHtcbiAgICAgICAgICAgIC4uLnVzZXJcbiAgICAgICAgfSkucGlwZShcbiAgICAgICAgICAgIHRhcChyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0b2tlbiByZWNlaXZlZDogJyArIHJlc3VsdC5hY2Nlc3NfdG9rZW4pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0VG9rZW4ocmVzdWx0LmFjY2Vzc190b2tlbik7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRFeHBpcmF0aW9uKE51bWJlcihyZXN1bHQuZXhwaXJlcykpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgICAgKi9cbiAgICB9XG5cbiAgICBwdWJsaWMgc2lnblVwKHVzZXI6IEF1dGhVc2VyKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke0NvbmZpZy5hcGlVcmx9L3JlZ2lzdGVyYCwge1xuICAgICAgICAgICAgLi4udXNlclxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9nb3V0KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHRoaXMuc2V0VG9rZW4obnVsbCk7XG4gICAgICAgIHRoaXMuc2V0RXhwaXJhdGlvbigwKTtcbiAgICAgICAgcmV0dXJuIG9mKG51bGwpO1xuICAgIH1cbn1cbiJdfQ==