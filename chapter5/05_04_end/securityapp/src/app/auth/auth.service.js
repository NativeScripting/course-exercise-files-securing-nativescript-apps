"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var appSettingsModule = require("tns-core-modules/application-settings");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var nativescript_oauth2_1 = require("nativescript-oauth2");
var providers_1 = require("nativescript-oauth2/providers/providers");
var http_1 = require("@angular/common/http");
var config_1 = require("~/config");
var ACCESS_TOKEN_KEY = 'ACCESS_TOKEN_KEY';
var EXPIRATION_KEY = 'EXPIRATION_KEY';
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.client = null;
        this.configureOAuthProviders();
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
    AuthService.prototype.configureOAuthProviders = function () {
        var facebookProvider = this.configureOAuthProviderFacebook();
        nativescript_oauth2_1.configureTnsOAuth([facebookProvider]);
    };
    AuthService.prototype.configureOAuthProviderFacebook = function () {
        var options = {
            openIdSupport: 'oid-none',
            clientId: '357684115041386',
            clientSecret: 'c62c3787c285f9a49b4632213cb62f0f',
            redirectUri: 'https://www.facebook.com/connect/login_success.html',
            scopes: ['email'] //list of scopes
        };
        var facebookProvider = new providers_1.TnsOaProviderFacebook(options);
        return facebookProvider;
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
                    console.log(tokenResult);
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
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLHlFQUEyRTtBQUczRSw2QkFBc0M7QUFDdEMsNENBQXFDO0FBRXJDLDJEQUE4RjtBQUM5RixxRUFBNkg7QUFFN0gsNkNBQWtEO0FBQ2xELG1DQUFrQztBQUdsQyxJQUFNLGdCQUFnQixHQUFHLGtCQUFrQixDQUFDO0FBQzVDLElBQU0sY0FBYyxHQUFHLGdCQUFnQixDQUFDO0FBR3hDO0lBeUJJLHFCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBdEI1QixXQUFNLEdBQW1CLElBQUksQ0FBQztRQXVCbEMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7SUFDbkMsQ0FBQztJQXRCRCxzQkFBVyx3Q0FBZTthQUExQjtZQUNJLElBQU0sT0FBTyxHQUFHLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUM1RCxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNWLE9BQU8sS0FBSyxDQUFDO2FBQ2hCO1lBQ0QsT0FBTyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLE9BQU8sQ0FBQztRQUMxQyxDQUFDOzs7T0FBQTtJQUVPLDhCQUFRLEdBQWhCLFVBQWlCLFdBQW1CO1FBQ2hDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRU8sbUNBQWEsR0FBckIsVUFBc0IsT0FBZTtRQUNqQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRU0sOEJBQVEsR0FBZjtRQUNJLE9BQU8saUJBQWlCLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDekQsQ0FBQztJQU1PLDZDQUF1QixHQUEv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bnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgKiBhcyBhcHBTZXR0aW5nc01vZHVsZSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzJztcblxuaW1wb3J0IHsgQXV0aFVzZXIgfSBmcm9tICcuLi9zaGFyZWQvbW9kZWxzL3VzZXIubW9kZWwnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgY29uZmlndXJlVG5zT0F1dGgsIFRuc09BdXRoQ2xpZW50LCBJVG5zT0F1dGhUb2tlblJlc3VsdCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1vYXV0aDInO1xuaW1wb3J0IHsgVG5zT2FQcm92aWRlciwgVG5zT2FQcm92aWRlckZhY2Vib29rLCBUbnNPYVByb3ZpZGVyT3B0aW9uc0ZhY2Vib29rIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW9hdXRoMi9wcm92aWRlcnMvcHJvdmlkZXJzJztcblxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJ34vY29uZmlnJztcblxuXG5jb25zdCBBQ0NFU1NfVE9LRU5fS0VZID0gJ0FDQ0VTU19UT0tFTl9LRVknO1xuY29uc3QgRVhQSVJBVElPTl9LRVkgPSAnRVhQSVJBVElPTl9LRVknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuXG5cbiAgICBwcml2YXRlIGNsaWVudDogVG5zT0F1dGhDbGllbnQgPSBudWxsO1xuXG4gICAgcHVibGljIGdldCBpc0F1dGhlbnRpY2F0ZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGV4cGlyZXMgPSBhcHBTZXR0aW5nc01vZHVsZS5nZXROdW1iZXIoRVhQSVJBVElPTl9LRVkpO1xuICAgICAgICBpZiAoIWV4cGlyZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkgPCBleHBpcmVzO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0VG9rZW4oYWNjZXNzVG9rZW46IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBhcHBTZXR0aW5nc01vZHVsZS5zZXRTdHJpbmcoQUNDRVNTX1RPS0VOX0tFWSwgYWNjZXNzVG9rZW4pO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0RXhwaXJhdGlvbihleHBpcmVzOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgYXBwU2V0dGluZ3NNb2R1bGUuc2V0TnVtYmVyKEVYUElSQVRJT05fS0VZLCBleHBpcmVzICogMTAwMCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFRva2VuKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBhcHBTZXR0aW5nc01vZHVsZS5nZXRTdHJpbmcoQUNDRVNTX1RPS0VOX0tFWSk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XG4gICAgICAgIHRoaXMuY29uZmlndXJlT0F1dGhQcm92aWRlcnMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNvbmZpZ3VyZU9BdXRoUHJvdmlkZXJzKCkge1xuICAgICAgICBjb25zdCBmYWNlYm9va1Byb3ZpZGVyID0gdGhpcy5jb25maWd1cmVPQXV0aFByb3ZpZGVyRmFjZWJvb2soKTtcbiAgICAgICAgY29uZmlndXJlVG5zT0F1dGgoW2ZhY2Vib29rUHJvdmlkZXJdKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNvbmZpZ3VyZU9BdXRoUHJvdmlkZXJGYWNlYm9vaygpOiBUbnNPYVByb3ZpZGVyIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uczogVG5zT2FQcm92aWRlck9wdGlvbnNGYWNlYm9vayA9IHtcbiAgICAgICAgICAgIG9wZW5JZFN1cHBvcnQ6ICdvaWQtbm9uZScsXG4gICAgICAgICAgICBjbGllbnRJZDogJzM1NzY4NDExNTA0MTM4NicsXG4gICAgICAgICAgICBjbGllbnRTZWNyZXQ6ICdjNjJjMzc4N2MyODVmOWE0OWI0NjMyMjEzY2I2MmYwZicsXG4gICAgICAgICAgICByZWRpcmVjdFVyaTogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9jb25uZWN0L2xvZ2luX3N1Y2Nlc3MuaHRtbCcsXG4gICAgICAgICAgICBzY29wZXM6IFsnZW1haWwnXSAvL2xpc3Qgb2Ygc2NvcGVzXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgZmFjZWJvb2tQcm92aWRlciA9IG5ldyBUbnNPYVByb3ZpZGVyRmFjZWJvb2sob3B0aW9ucyk7XG4gICAgICAgIHJldHVybiBmYWNlYm9va1Byb3ZpZGVyO1xuICAgIH1cblxuICAgIHByaXZhdGUgdG5zT2F1dGhMb2dpbihwcm92aWRlclR5cGUpOiBQcm9taXNlPElUbnNPQXV0aFRva2VuUmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY2xpZW50ID0gbmV3IFRuc09BdXRoQ2xpZW50KHByb3ZpZGVyVHlwZSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPElUbnNPQXV0aFRva2VuUmVzdWx0PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNsaWVudC5sb2dpbldpdGhDb21wbGV0aW9uKFxuICAgICAgICAgICAgICAgICh0b2tlblJlc3VsdDogSVRuc09BdXRoVG9rZW5SZXN1bHQsIGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZWNlaXZlZCBvYXV0aCByZXN1bHQ6IFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRva2VuUmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0VG9rZW4odG9rZW5SZXN1bHQuYWNjZXNzVG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRFeHBpcmF0aW9uKE51bWJlcih0b2tlblJlc3VsdC5hY2Nlc3NUb2tlbkV4cGlyYXRpb24pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodG9rZW5SZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvZ2luKHVzZXI6IEF1dGhVc2VyKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke0NvbmZpZy5hcGlVcmx9L2xvZ2luYCwge1xuICAgICAgICAgICAgLi4udXNlclxuICAgICAgICB9KS5waXBlKFxuICAgICAgICAgICAgdGFwKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Rva2VuIHJlY2VpdmVkOiAnICsgcmVzdWx0LmFjY2Vzc190b2tlbik7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUb2tlbihyZXN1bHQuYWNjZXNzX3Rva2VuKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEV4cGlyYXRpb24oTnVtYmVyKHJlc3VsdC5leHBpcmVzKSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaWduVXAodXNlcjogQXV0aFVzZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7Q29uZmlnLmFwaVVybH0vcmVnaXN0ZXJgLCB7XG4gICAgICAgICAgICAuLi51c2VyXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2dvdXQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgdGhpcy5zZXRUb2tlbihudWxsKTtcbiAgICAgICAgdGhpcy5zZXRFeHBpcmF0aW9uKDApO1xuICAgICAgICByZXR1cm4gb2YobnVsbCk7XG4gICAgfVxuXG4gICAgcHVibGljIGZhY2Vib29rTG9naW4oKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG5zT2F1dGhMb2dpbignZmFjZWJvb2snKTtcbiAgICB9XG59XG4iXX0=