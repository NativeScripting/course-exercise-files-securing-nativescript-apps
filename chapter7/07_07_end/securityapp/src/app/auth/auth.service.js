"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var nativescript_oauth2_1 = require("nativescript-oauth2");
var http_1 = require("@angular/common/http");
var config_1 = require("~/config");
var ACCESS_TOKEN_KEY = 'ACCESS_TOKEN_KEY';
var EXPIRATION_KEY = 'EXPIRATION_KEY';
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.client = null;
    }
    Object.defineProperty(AuthService.prototype, "isAuthenticated", {
        get: function () {
            //const expires = appSettingsModule.getNumber(EXPIRATION_KEY);
            var expires = Number(sessionStorage.getItem(EXPIRATION_KEY));
            if (!expires) {
                return false;
            }
            return new Date().getTime() < expires;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.setToken = function (accessToken) {
        sessionStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
    };
    AuthService.prototype.setExpiration = function (expires) {
        sessionStorage.setItem(EXPIRATION_KEY, String(expires * 1000));
    };
    AuthService.prototype.getToken = function () {
        return sessionStorage.getItem(ACCESS_TOKEN_KEY);
    };
    AuthService.prototype.tnsOauthLogin = function (providerType) {
        var _this = this;
        this.client = new nativescript_oauth2_1.TnsOAuthClient(providerType);
        return new Promise(function (resolve, reject) {
            _this.client.loginWithCompletion(function (tokenResult, error) {
                if (error) {
                    console.error(error);
                    reject(error);
                }
                else {
                    console.log("received oauth result: ");
                    console.dir(tokenResult);
                    _this.setToken(tokenResult.accessToken);
                    _this.setExpiration(Number(tokenResult.accessTokenExpiration));
                    resolve(tokenResult);
                }
            });
        });
    };
    AuthService.prototype.login = function (user) {
        var _this = this;
        return this.http.post(config_1.Config.apiUrl + "/login", __assign({}, user)).pipe(operators_1.tap(function (result) {
            console.log('token received: ' + result.access_token);
            _this.setToken(result.access_token);
            _this.setExpiration(Number(result.expires));
        }));
    };
    AuthService.prototype.signUp = function (user) {
        return this.http.post(config_1.Config.apiUrl + "/register", __assign({}, user));
    };
    AuthService.prototype.logout = function () {
        this.setToken('');
        this.setExpiration(0);
        return rxjs_1.of(null);
    };
    AuthService.prototype.facebookLogin = function () {
        return this.tnsOauthLogin('facebook');
    };
    AuthService.prototype.microsoftLogin = function () {
        return this.tnsOauthLogin('microsoft');
    };
    AuthService.prototype.facebookProxyLogin = function () {
        return this.tnsOauthLogin('myCustomProvider');
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBSzNDLDZCQUFzQztBQUN0Qyw0Q0FBcUM7QUFFckMsMkRBQThGO0FBRzlGLDZDQUFrRDtBQUNsRCxtQ0FBa0M7QUFHbEMsSUFBTSxnQkFBZ0IsR0FBRyxrQkFBa0IsQ0FBQztBQUM1QyxJQUFNLGNBQWMsR0FBRyxnQkFBZ0IsQ0FBQztBQUd4QztJQTRCSSxxQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQXpCNUIsV0FBTSxHQUFtQixJQUFJLENBQUM7SUEyQnRDLENBQUM7SUF6QkQsc0JBQVcsd0NBQWU7YUFBMUI7WUFDSSw4REFBOEQ7WUFFOUQsSUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztZQUUvRCxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNWLE9BQU8sS0FBSyxDQUFDO2FBQ2hCO1lBQ0QsT0FBTyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLE9BQU8sQ0FBQztRQUMxQyxDQUFDOzs7T0FBQTtJQUVPLDhCQUFRLEdBQWhCLFVBQWlCLFdBQW1CO1FBQ2hDLGNBQWMsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVPLG1DQUFhLEdBQXJCLFVBQXNCLE9BQWU7UUFDakMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFTSw4QkFBUSxHQUFmO1FBQ0ksT0FBTyxjQUFjLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDcEQsQ0FBQztJQU9PLG1DQUFhLEdBQXJCLFVBQXNCLFlBQVk7UUFBbEMsaUJBbUJDO1FBbEJHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxvQ0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRS9DLE9BQU8sSUFBSSxPQUFPLENBQXVCLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDckQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FDM0IsVUFBQyxXQUFpQyxFQUFFLEtBQUs7Z0JBQ3JDLElBQUksS0FBSyxFQUFFO29CQUNQLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3JCLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDakI7cUJBQU07b0JBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO29CQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUN6QixLQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDdkMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztvQkFDOUQsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2lCQUN4QjtZQUNMLENBQUMsQ0FDSixDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sMkJBQUssR0FBWixVQUFhLElBQWM7UUFBM0IsaUJBVUM7UUFURyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFJLGVBQU0sQ0FBQyxNQUFNLFdBQVEsZUFDdkMsSUFBSSxFQUNULENBQUMsSUFBSSxDQUNILGVBQUcsQ0FBQyxVQUFBLE1BQU07WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN0RCxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNuQyxLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUMvQyxDQUFDLENBQUMsQ0FDTCxDQUFDO0lBQ04sQ0FBQztJQUVNLDRCQUFNLEdBQWIsVUFBYyxJQUFjO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUksZUFBTSxDQUFDLE1BQU0sY0FBVyxlQUMxQyxJQUFJLEVBQ1QsQ0FBQztJQUNQLENBQUM7SUFFTSw0QkFBTSxHQUFiO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLE9BQU8sU0FBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFTSxtQ0FBYSxHQUFwQjtRQUNJLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRU0sb0NBQWMsR0FBckI7UUFDSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVNLHdDQUFrQixHQUF6QjtRQUNJLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUF4RlEsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQTZCaUIsaUJBQVU7T0E1QjNCLFdBQVcsQ0F5RnZCO0lBQUQsa0JBQUM7Q0FBQSxBQXpGRCxJQXlGQztBQXpGWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gaW1wb3J0ICogYXMgYXBwU2V0dGluZ3NNb2R1bGUgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5ncyc7XG5cbmltcG9ydCB7IEF1dGhVc2VyIH0gZnJvbSAnLi4vc2hhcmVkL21vZGVscy91c2VyLm1vZGVsJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IGNvbmZpZ3VyZVRuc09BdXRoLCBUbnNPQXV0aENsaWVudCwgSVRuc09BdXRoVG9rZW5SZXN1bHQgfSBmcm9tICduYXRpdmVzY3JpcHQtb2F1dGgyJztcbmltcG9ydCB7IFRuc09hUHJvdmlkZXIsIFRuc09hUHJvdmlkZXJGYWNlYm9vaywgVG5zT2FQcm92aWRlck9wdGlvbnNGYWNlYm9vaywgVG5zT2FQcm92aWRlck9wdGlvbnNNaWNyb3NvZnQsIFRuc09hUHJvdmlkZXJNaWNyb3NvZnQgfSBmcm9tICduYXRpdmVzY3JpcHQtb2F1dGgyL3Byb3ZpZGVycy9wcm92aWRlcnMnO1xuXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnfi9jb25maWcnO1xuXG5cbmNvbnN0IEFDQ0VTU19UT0tFTl9LRVkgPSAnQUNDRVNTX1RPS0VOX0tFWSc7XG5jb25zdCBFWFBJUkFUSU9OX0tFWSA9ICdFWFBJUkFUSU9OX0tFWSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG5cblxuICAgIHByaXZhdGUgY2xpZW50OiBUbnNPQXV0aENsaWVudCA9IG51bGw7XG5cbiAgICBwdWJsaWMgZ2V0IGlzQXV0aGVudGljYXRlZCgpOiBib29sZWFuIHtcbiAgICAgICAgLy9jb25zdCBleHBpcmVzID0gYXBwU2V0dGluZ3NNb2R1bGUuZ2V0TnVtYmVyKEVYUElSQVRJT05fS0VZKTtcblxuICAgICAgICBjb25zdCBleHBpcmVzID0gTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oRVhQSVJBVElPTl9LRVkpKTtcblxuICAgICAgICBpZiAoIWV4cGlyZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkgPCBleHBpcmVzO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0VG9rZW4oYWNjZXNzVG9rZW46IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKEFDQ0VTU19UT0tFTl9LRVksIGFjY2Vzc1Rva2VuKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEV4cGlyYXRpb24oZXhwaXJlczogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oRVhQSVJBVElPTl9LRVksIFN0cmluZyhleHBpcmVzICogMTAwMCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRUb2tlbigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShBQ0NFU1NfVE9LRU5fS0VZKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcblxuICAgIH1cblxuXG4gICAgcHJpdmF0ZSB0bnNPYXV0aExvZ2luKHByb3ZpZGVyVHlwZSk6IFByb21pc2U8SVRuc09BdXRoVG9rZW5SZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jbGllbnQgPSBuZXcgVG5zT0F1dGhDbGllbnQocHJvdmlkZXJUeXBlKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8SVRuc09BdXRoVG9rZW5SZXN1bHQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2xpZW50LmxvZ2luV2l0aENvbXBsZXRpb24oXG4gICAgICAgICAgICAgICAgKHRva2VuUmVzdWx0OiBJVG5zT0F1dGhUb2tlblJlc3VsdCwgZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlY2VpdmVkIG9hdXRoIHJlc3VsdDogXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kaXIodG9rZW5SZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRUb2tlbih0b2tlblJlc3VsdC5hY2Nlc3NUb2tlbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEV4cGlyYXRpb24oTnVtYmVyKHRva2VuUmVzdWx0LmFjY2Vzc1Rva2VuRXhwaXJhdGlvbikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0b2tlblJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9naW4odXNlcjogQXV0aFVzZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7Q29uZmlnLmFwaVVybH0vbG9naW5gLCB7XG4gICAgICAgICAgICAuLi51c2VyXG4gICAgICAgIH0pLnBpcGUoXG4gICAgICAgICAgICB0YXAocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndG9rZW4gcmVjZWl2ZWQ6ICcgKyByZXN1bHQuYWNjZXNzX3Rva2VuKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFRva2VuKHJlc3VsdC5hY2Nlc3NfdG9rZW4pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RXhwaXJhdGlvbihOdW1iZXIocmVzdWx0LmV4cGlyZXMpKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHVibGljIHNpZ25VcCh1c2VyOiBBdXRoVXNlcik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHtDb25maWcuYXBpVXJsfS9yZWdpc3RlcmAsIHtcbiAgICAgICAgICAgIC4uLnVzZXJcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvZ291dCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICB0aGlzLnNldFRva2VuKCcnKTtcbiAgICAgICAgdGhpcy5zZXRFeHBpcmF0aW9uKDApO1xuICAgICAgICByZXR1cm4gb2YobnVsbCk7XG4gICAgfVxuXG4gICAgcHVibGljIGZhY2Vib29rTG9naW4oKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG5zT2F1dGhMb2dpbignZmFjZWJvb2snKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbWljcm9zb2Z0TG9naW4oKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG5zT2F1dGhMb2dpbignbWljcm9zb2Z0Jyk7XG4gICAgfVxuXG4gICAgcHVibGljIGZhY2Vib29rUHJveHlMb2dpbigpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy50bnNPYXV0aExvZ2luKCdteUN1c3RvbVByb3ZpZGVyJyk7XG4gICAgfVxufVxuIl19