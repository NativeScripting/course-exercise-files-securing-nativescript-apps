"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var nativescript_oauth2_1 = require("nativescript-oauth2");
var nativescript_secure_storage_1 = require("nativescript-secure-storage");
var http_1 = require("@angular/common/http");
var config_1 = require("~/config");
var ACCESS_TOKEN_KEY = 'ACCESS_TOKEN_KEY';
var EXPIRATION_KEY = 'EXPIRATION_KEY';
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.client = null;
        this.secureStorage = new nativescript_secure_storage_1.SecureStorage();
    }
    Object.defineProperty(AuthService.prototype, "isAuthenticated", {
        get: function () {
            //const expires = appSettingsModule.getNumber(EXPIRATION_KEY);
            //const expires = Number(sessionStorage.getItem(EXPIRATION_KEY));
            var expires = Number(this.secureStorage.getSync({
                key: EXPIRATION_KEY
            }));
            if (!expires) {
                return false;
            }
            return new Date().getTime() < expires;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.setToken = function (accessToken) {
        // sessionStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
        this.secureStorage.setSync({
            key: ACCESS_TOKEN_KEY,
            value: accessToken
        });
    };
    AuthService.prototype.setExpiration = function (expires) {
        // sessionStorage.setItem(EXPIRATION_KEY, String(expires * 1000));
        this.secureStorage.setSync({
            key: EXPIRATION_KEY,
            value: String(expires * 1000)
        });
    };
    AuthService.prototype.getToken = function () {
        // return sessionStorage.getItem(ACCESS_TOKEN_KEY);
        return this.secureStorage.getSync({
            key: ACCESS_TOKEN_KEY
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBSzNDLDZCQUFzQztBQUN0Qyw0Q0FBcUM7QUFFckMsMkRBQThGO0FBRzlGLDJFQUE0RDtBQUU1RCw2Q0FBa0Q7QUFDbEQsbUNBQWtDO0FBR2xDLElBQU0sZ0JBQWdCLEdBQUcsa0JBQWtCLENBQUM7QUFDNUMsSUFBTSxjQUFjLEdBQUcsZ0JBQWdCLENBQUM7QUFHeEM7SUEyQ0kscUJBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUF4QzVCLFdBQU0sR0FBbUIsSUFBSSxDQUFDO1FBeUNsQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksMkNBQWEsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUF4Q0Qsc0JBQVcsd0NBQWU7YUFBMUI7WUFDSSw4REFBOEQ7WUFFOUQsaUVBQWlFO1lBRWpFLElBQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztnQkFDOUMsR0FBRyxFQUFFLGNBQWM7YUFDdEIsQ0FBQyxDQUFDLENBQUM7WUFFSixJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNWLE9BQU8sS0FBSyxDQUFDO2FBQ2hCO1lBQ0QsT0FBTyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLE9BQU8sQ0FBQztRQUMxQyxDQUFDOzs7T0FBQTtJQUVPLDhCQUFRLEdBQWhCLFVBQWlCLFdBQW1CO1FBQ2hDLHlEQUF5RDtRQUN6RCxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztZQUN2QixHQUFHLEVBQUUsZ0JBQWdCO1lBQ3JCLEtBQUssRUFBRSxXQUFXO1NBQ3JCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyxtQ0FBYSxHQUFyQixVQUFzQixPQUFlO1FBQ2pDLGtFQUFrRTtRQUNsRSxJQUFJLENBQUMsYUFBYSxDQUFDLE9B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cnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIGltcG9ydCAqIGFzIGFwcFNldHRpbmdzTW9kdWxlIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3MnO1xuXG5pbXBvcnQgeyBBdXRoVXNlciB9IGZyb20gJy4uL3NoYXJlZC9tb2RlbHMvdXNlci5tb2RlbCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBjb25maWd1cmVUbnNPQXV0aCwgVG5zT0F1dGhDbGllbnQsIElUbnNPQXV0aFRva2VuUmVzdWx0IH0gZnJvbSAnbmF0aXZlc2NyaXB0LW9hdXRoMic7XG5pbXBvcnQgeyBUbnNPYVByb3ZpZGVyLCBUbnNPYVByb3ZpZGVyRmFjZWJvb2ssIFRuc09hUHJvdmlkZXJPcHRpb25zRmFjZWJvb2ssIFRuc09hUHJvdmlkZXJPcHRpb25zTWljcm9zb2Z0LCBUbnNPYVByb3ZpZGVyTWljcm9zb2Z0IH0gZnJvbSAnbmF0aXZlc2NyaXB0LW9hdXRoMi9wcm92aWRlcnMvcHJvdmlkZXJzJztcblxuaW1wb3J0IHsgU2VjdXJlU3RvcmFnZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1zZWN1cmUtc3RvcmFnZSc7XG5cbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICd+L2NvbmZpZyc7XG5cblxuY29uc3QgQUNDRVNTX1RPS0VOX0tFWSA9ICdBQ0NFU1NfVE9LRU5fS0VZJztcbmNvbnN0IEVYUElSQVRJT05fS0VZID0gJ0VYUElSQVRJT05fS0VZJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgc2VjdXJlU3RvcmFnZTtcbiAgICBwcml2YXRlIGNsaWVudDogVG5zT0F1dGhDbGllbnQgPSBudWxsO1xuXG4gICAgcHVibGljIGdldCBpc0F1dGhlbnRpY2F0ZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIC8vY29uc3QgZXhwaXJlcyA9IGFwcFNldHRpbmdzTW9kdWxlLmdldE51bWJlcihFWFBJUkFUSU9OX0tFWSk7XG5cbiAgICAgICAgLy9jb25zdCBleHBpcmVzID0gTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oRVhQSVJBVElPTl9LRVkpKTtcblxuICAgICAgICBjb25zdCBleHBpcmVzID0gTnVtYmVyKHRoaXMuc2VjdXJlU3RvcmFnZS5nZXRTeW5jKHtcbiAgICAgICAgICAgIGtleTogRVhQSVJBVElPTl9LRVlcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIGlmICghZXhwaXJlcykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKSA8IGV4cGlyZXM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRUb2tlbihhY2Nlc3NUb2tlbjogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIC8vIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oQUNDRVNTX1RPS0VOX0tFWSwgYWNjZXNzVG9rZW4pO1xuICAgICAgICB0aGlzLnNlY3VyZVN0b3JhZ2Uuc2V0U3luYyh7XG4gICAgICAgICAgICBrZXk6IEFDQ0VTU19UT0tFTl9LRVksXG4gICAgICAgICAgICB2YWx1ZTogYWNjZXNzVG9rZW5cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRFeHBpcmF0aW9uKGV4cGlyZXM6IG51bWJlcik6IHZvaWQge1xuICAgICAgICAvLyBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKEVYUElSQVRJT05fS0VZLCBTdHJpbmcoZXhwaXJlcyAqIDEwMDApKTtcbiAgICAgICAgdGhpcy5zZWN1cmVTdG9yYWdlLnNldFN5bmMoe1xuICAgICAgICAgICAga2V5OiBFWFBJUkFUSU9OX0tFWSxcbiAgICAgICAgICAgIHZhbHVlOiBTdHJpbmcoZXhwaXJlcyAqIDEwMDApXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRUb2tlbigpOiBzdHJpbmcge1xuICAgICAgICAvLyByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShBQ0NFU1NfVE9LRU5fS0VZKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VjdXJlU3RvcmFnZS5nZXRTeW5jKHtcbiAgICAgICAgICAgIGtleTogQUNDRVNTX1RPS0VOX0tFWVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcbiAgICAgICAgdGhpcy5zZWN1cmVTdG9yYWdlID0gbmV3IFNlY3VyZVN0b3JhZ2UoKTtcbiAgICB9XG5cblxuICAgIHByaXZhdGUgdG5zT2F1dGhMb2dpbihwcm92aWRlclR5cGUpOiBQcm9taXNlPElUbnNPQXV0aFRva2VuUmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY2xpZW50ID0gbmV3IFRuc09BdXRoQ2xpZW50KHByb3ZpZGVyVHlwZSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPElUbnNPQXV0aFRva2VuUmVzdWx0PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNsaWVudC5sb2dpbldpdGhDb21wbGV0aW9uKFxuICAgICAgICAgICAgICAgICh0b2tlblJlc3VsdDogSVRuc09BdXRoVG9rZW5SZXN1bHQsIGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZWNlaXZlZCBvYXV0aCByZXN1bHQ6IFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGlyKHRva2VuUmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0VG9rZW4odG9rZW5SZXN1bHQuYWNjZXNzVG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRFeHBpcmF0aW9uKE51bWJlcih0b2tlblJlc3VsdC5hY2Nlc3NUb2tlbkV4cGlyYXRpb24pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodG9rZW5SZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvZ2luKHVzZXI6IEF1dGhVc2VyKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke0NvbmZpZy5hcGlVcmx9L2xvZ2luYCwge1xuICAgICAgICAgICAgLi4udXNlclxuICAgICAgICB9KS5waXBlKFxuICAgICAgICAgICAgdGFwKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Rva2VuIHJlY2VpdmVkOiAnICsgcmVzdWx0LmFjY2Vzc190b2tlbik7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUb2tlbihyZXN1bHQuYWNjZXNzX3Rva2VuKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEV4cGlyYXRpb24oTnVtYmVyKHJlc3VsdC5leHBpcmVzKSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaWduVXAodXNlcjogQXV0aFVzZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7Q29uZmlnLmFwaVVybH0vcmVnaXN0ZXJgLCB7XG4gICAgICAgICAgICAuLi51c2VyXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2dvdXQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgdGhpcy5zZXRUb2tlbignJyk7XG4gICAgICAgIHRoaXMuc2V0RXhwaXJhdGlvbigwKTtcbiAgICAgICAgcmV0dXJuIG9mKG51bGwpO1xuICAgIH1cblxuICAgIHB1YmxpYyBmYWNlYm9va0xvZ2luKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnRuc09hdXRoTG9naW4oJ2ZhY2Vib29rJyk7XG4gICAgfVxuXG4gICAgcHVibGljIG1pY3Jvc29mdExvZ2luKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnRuc09hdXRoTG9naW4oJ21pY3Jvc29mdCcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBmYWNlYm9va1Byb3h5TG9naW4oKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG5zT2F1dGhMb2dpbignbXlDdXN0b21Qcm92aWRlcicpO1xuICAgIH1cbn1cbiJdfQ==