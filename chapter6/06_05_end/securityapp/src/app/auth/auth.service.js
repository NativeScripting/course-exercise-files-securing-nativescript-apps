"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var appSettingsModule = require("tns-core-modules/application-settings");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var nativescript_oauth2_1 = require("nativescript-oauth2");
var nativescript_auth0_1 = require("nativescript-auth0");
var http_1 = require("@angular/common/http");
var config_1 = require("~/config");
var ACCESS_TOKEN_KEY = 'ACCESS_TOKEN_KEY';
var EXPIRATION_KEY = 'EXPIRATION_KEY';
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.client = null;
        this.auth0 = null;
        this.auth0 = new nativescript_auth0_1.Auth0('qg4CAtxTK6eqkNehW3Yc41EFIBUQwxLN', 'nativescripting-security.auth0.com');
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
        this.setToken(null);
        this.setExpiration(0);
        return rxjs_1.of(null);
    };
    AuthService.prototype.facebookLogin = function () {
        return this.tnsOauthLogin('facebook');
    };
    AuthService.prototype.microsoftLogin = function () {
        return this.tnsOauthLogin('microsoft');
    };
    AuthService.prototype.auth0Login = function () {
        this.auth0.webAuthentication({
            scope: 'openid offline_access'
        }).then(function (result) {
            console.log(result);
        }).catch(function (er) { return console.error(er); });
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLHlFQUEyRTtBQUczRSw2QkFBc0M7QUFDdEMsNENBQXFDO0FBRXJDLDJEQUE4RjtBQUc5Rix5REFBMkM7QUFFM0MsNkNBQWtEO0FBQ2xELG1DQUFrQztBQUdsQyxJQUFNLGdCQUFnQixHQUFHLGtCQUFrQixDQUFDO0FBQzVDLElBQU0sY0FBYyxHQUFHLGdCQUFnQixDQUFDO0FBR3hDO0lBMEJJLHFCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBdkI1QixXQUFNLEdBQW1CLElBQUksQ0FBQztRQUM5QixVQUFLLEdBQVUsSUFBSSxDQUFDO1FBdUJ4QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksMEJBQUssQ0FBQyxrQ0FBa0MsRUFBRSxvQ0FBb0MsQ0FBQyxDQUFDO0lBQ3JHLENBQUM7SUF0QkQsc0JBQVcsd0NBQWU7YUFBMUI7WUFDSSxJQUFNLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDNUQsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDVixPQUFPLEtBQUssQ0FBQzthQUNoQjtZQUNELE9BQU8sSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxPQUFPLENBQUM7UUFDMUMsQ0FBQzs7O09BQUE7SUFFTyw4QkFBUSxHQUFoQixVQUFpQixXQUFtQjtRQUNoQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVPLG1DQUFhLEdBQXJCLFVBQXNCLE9BQWU7UUFDakMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVNLDhCQUFRLEdBQWY7UUFDSSxPQUFPLGlC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dXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0ICogYXMgYXBwU2V0dGluZ3NNb2R1bGUgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5ncyc7XG5cbmltcG9ydCB7IEF1dGhVc2VyIH0gZnJvbSAnLi4vc2hhcmVkL21vZGVscy91c2VyLm1vZGVsJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IGNvbmZpZ3VyZVRuc09BdXRoLCBUbnNPQXV0aENsaWVudCwgSVRuc09BdXRoVG9rZW5SZXN1bHQgfSBmcm9tICduYXRpdmVzY3JpcHQtb2F1dGgyJztcbmltcG9ydCB7IFRuc09hUHJvdmlkZXIsIFRuc09hUHJvdmlkZXJGYWNlYm9vaywgVG5zT2FQcm92aWRlck9wdGlvbnNGYWNlYm9vaywgVG5zT2FQcm92aWRlck9wdGlvbnNNaWNyb3NvZnQsIFRuc09hUHJvdmlkZXJNaWNyb3NvZnQgfSBmcm9tICduYXRpdmVzY3JpcHQtb2F1dGgyL3Byb3ZpZGVycy9wcm92aWRlcnMnO1xuXG5pbXBvcnQgeyBBdXRoMCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hdXRoMCc7XG5cbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICd+L2NvbmZpZyc7XG5cblxuY29uc3QgQUNDRVNTX1RPS0VOX0tFWSA9ICdBQ0NFU1NfVE9LRU5fS0VZJztcbmNvbnN0IEVYUElSQVRJT05fS0VZID0gJ0VYUElSQVRJT05fS0VZJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcblxuXG4gICAgcHJpdmF0ZSBjbGllbnQ6IFRuc09BdXRoQ2xpZW50ID0gbnVsbDtcbiAgICBwcml2YXRlIGF1dGgwOiBBdXRoMCA9IG51bGw7XG5cbiAgICBwdWJsaWMgZ2V0IGlzQXV0aGVudGljYXRlZCgpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgZXhwaXJlcyA9IGFwcFNldHRpbmdzTW9kdWxlLmdldE51bWJlcihFWFBJUkFUSU9OX0tFWSk7XG4gICAgICAgIGlmICghZXhwaXJlcykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKSA8IGV4cGlyZXM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRUb2tlbihhY2Nlc3NUb2tlbjogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGFwcFNldHRpbmdzTW9kdWxlLnNldFN0cmluZyhBQ0NFU1NfVE9LRU5fS0VZLCBhY2Nlc3NUb2tlbik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRFeHBpcmF0aW9uKGV4cGlyZXM6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBhcHBTZXR0aW5nc01vZHVsZS5zZXROdW1iZXIoRVhQSVJBVElPTl9LRVksIGV4cGlyZXMgKiAxMDAwKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0VG9rZW4oKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGFwcFNldHRpbmdzTW9kdWxlLmdldFN0cmluZyhBQ0NFU1NfVE9LRU5fS0VZKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcbiAgICAgICAgdGhpcy5hdXRoMCA9IG5ldyBBdXRoMCgncWc0Q0F0eFRLNmVxa05laFczWWM0MUVGSUJVUXd4TE4nLCAnbmF0aXZlc2NyaXB0aW5nLXNlY3VyaXR5LmF1dGgwLmNvbScpO1xuICAgIH1cblxuXG4gICAgcHJpdmF0ZSB0bnNPYXV0aExvZ2luKHByb3ZpZGVyVHlwZSk6IFByb21pc2U8SVRuc09BdXRoVG9rZW5SZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jbGllbnQgPSBuZXcgVG5zT0F1dGhDbGllbnQocHJvdmlkZXJUeXBlKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8SVRuc09BdXRoVG9rZW5SZXN1bHQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2xpZW50LmxvZ2luV2l0aENvbXBsZXRpb24oXG4gICAgICAgICAgICAgICAgKHRva2VuUmVzdWx0OiBJVG5zT0F1dGhUb2tlblJlc3VsdCwgZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlY2VpdmVkIG9hdXRoIHJlc3VsdDogXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kaXIodG9rZW5SZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRUb2tlbih0b2tlblJlc3VsdC5hY2Nlc3NUb2tlbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEV4cGlyYXRpb24oTnVtYmVyKHRva2VuUmVzdWx0LmFjY2Vzc1Rva2VuRXhwaXJhdGlvbikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0b2tlblJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9naW4odXNlcjogQXV0aFVzZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7Q29uZmlnLmFwaVVybH0vbG9naW5gLCB7XG4gICAgICAgICAgICAuLi51c2VyXG4gICAgICAgIH0pLnBpcGUoXG4gICAgICAgICAgICB0YXAocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndG9rZW4gcmVjZWl2ZWQ6ICcgKyByZXN1bHQuYWNjZXNzX3Rva2VuKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFRva2VuKHJlc3VsdC5hY2Nlc3NfdG9rZW4pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RXhwaXJhdGlvbihOdW1iZXIocmVzdWx0LmV4cGlyZXMpKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHVibGljIHNpZ25VcCh1c2VyOiBBdXRoVXNlcik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHtDb25maWcuYXBpVXJsfS9yZWdpc3RlcmAsIHtcbiAgICAgICAgICAgIC4uLnVzZXJcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvZ291dCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICB0aGlzLnNldFRva2VuKG51bGwpO1xuICAgICAgICB0aGlzLnNldEV4cGlyYXRpb24oMCk7XG4gICAgICAgIHJldHVybiBvZihudWxsKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZmFjZWJvb2tMb2dpbigpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy50bnNPYXV0aExvZ2luKCdmYWNlYm9vaycpO1xuICAgIH1cblxuICAgIHB1YmxpYyBtaWNyb3NvZnRMb2dpbigpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy50bnNPYXV0aExvZ2luKCdtaWNyb3NvZnQnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXV0aDBMb2dpbigpIHtcbiAgICAgICAgdGhpcy5hdXRoMC53ZWJBdXRoZW50aWNhdGlvbih7XG4gICAgICAgICAgICBzY29wZTogJ29wZW5pZCBvZmZsaW5lX2FjY2VzcydcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICB9KS5jYXRjaChlciA9PiBjb25zb2xlLmVycm9yKGVyKSk7XG5cbiAgICB9XG59XG4iXX0=