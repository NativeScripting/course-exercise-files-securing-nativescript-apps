"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var appSettingsModule = require("tns-core-modules/application-settings");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLHlFQUEyRTtBQUczRSw2QkFBc0M7QUFDdEMsNENBQXFDO0FBRXJDLDJEQUE4RjtBQUc5Riw2Q0FBa0Q7QUFDbEQsbUNBQWtDO0FBR2xDLElBQU0sZ0JBQWdCLEdBQUcsa0JBQWtCLENBQUM7QUFDNUMsSUFBTSxjQUFjLEdBQUcsZ0JBQWdCLENBQUM7QUFHeEM7SUF5QkkscUJBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUF0QjVCLFdBQU0sR0FBbUIsSUFBSSxDQUFDO0lBd0J0QyxDQUFDO0lBdEJELHNCQUFXLHdDQUFlO2FBQTFCO1lBQ0ksSUFBTSxPQUFPLEdBQUcsaUJBQWlCLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQzVELElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ1YsT0FBTyxLQUFLLENBQUM7YUFDaEI7WUFDRCxPQUFPLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsT0FBTyxDQUFDO1FBQzFDLENBQUM7OztPQUFBO0lBRU8sOEJBQVEsR0FBaEIsVUFBaUIsV0FBbUI7UUFDaEMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFTyxtQ0FBYSxHQUFyQixVQUFzQixPQUFlO1FBQ2pDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFTSw4QkFBUSxHQUFmO1FBQ0ksT0FBTyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBT08sbUNBQWEsR0FBckIsVUFBc0IsWUFBWTtRQUFsQyxpQkFtQkM7UUFsQkcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLG9DQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFL0MsT0FBTyxJQUFJLE9BQU8sQ0FBdUIsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNyRCxLQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUMzQixVQUFDLFdBQWlDLEVBQUUsS0FBSztnQkFDckMsSUFBSSxLQUFLLEVBQUU7b0JBQ1AsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDckIsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNqQjtxQkFBTTtvQkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7b0JBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQ3pCLEtBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUN2QyxLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO29CQUM5RCxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7aUJBQ3hCO1lBQ0wsQ0FBQyxDQUNKLENBQUM7UUFDTixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSwyQkFBSyxHQUFaLFVBQWEsSUFBYztRQUEzQixpQkFVQztRQVRHLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUksZUFBTSxDQUFDLE1BQU0sV0FBUSxlQUN2QyxJQUFJLEVBQ1QsQ0FBQyxJQUFJLENBQ0gsZUFBRyxDQUFDLFVBQUEsTUFBTTtZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3RELEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ25DLEtBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FBQyxDQUNMLENBQUM7SUFDTixDQUFDO0lBRU0sNEJBQU0sR0FBYixVQUFjLElBQWM7UUFDeEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBSSxlQUFNLENBQUMsTUFBTSxjQUFXLGVBQzFDLElBQUksRUFDVCxDQUFDO0lBQ1AsQ0FBQztJQUVNLDRCQUFNLEdBQWI7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEIsT0FBTyxTQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVNLG1DQUFhLEdBQXBCO1FBQ0ksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFTSxvQ0FBYyxHQUFyQjtRQUNJLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRU0sd0NBQWtCLEdBQXpCO1FBQ0ksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDbEQsQ0FBQztJQXJGUSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7eUNBMEJpQixpQkFBVTtPQXpCM0IsV0FBVyxDQXNGdkI7SUFBRCxrQkFBQztDQUFBLEFBdEZELElBc0ZDO0FBdEZZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgKiBhcyBhcHBTZXR0aW5nc01vZHVsZSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzJztcblxuaW1wb3J0IHsgQXV0aFVzZXIgfSBmcm9tICcuLi9zaGFyZWQvbW9kZWxzL3VzZXIubW9kZWwnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgY29uZmlndXJlVG5zT0F1dGgsIFRuc09BdXRoQ2xpZW50LCBJVG5zT0F1dGhUb2tlblJlc3VsdCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1vYXV0aDInO1xuaW1wb3J0IHsgVG5zT2FQcm92aWRlciwgVG5zT2FQcm92aWRlckZhY2Vib29rLCBUbnNPYVByb3ZpZGVyT3B0aW9uc0ZhY2Vib29rLCBUbnNPYVByb3ZpZGVyT3B0aW9uc01pY3Jvc29mdCwgVG5zT2FQcm92aWRlck1pY3Jvc29mdCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1vYXV0aDIvcHJvdmlkZXJzL3Byb3ZpZGVycyc7XG5cbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICd+L2NvbmZpZyc7XG5cblxuY29uc3QgQUNDRVNTX1RPS0VOX0tFWSA9ICdBQ0NFU1NfVE9LRU5fS0VZJztcbmNvbnN0IEVYUElSQVRJT05fS0VZID0gJ0VYUElSQVRJT05fS0VZJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcblxuXG4gICAgcHJpdmF0ZSBjbGllbnQ6IFRuc09BdXRoQ2xpZW50ID0gbnVsbDtcblxuICAgIHB1YmxpYyBnZXQgaXNBdXRoZW50aWNhdGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBleHBpcmVzID0gYXBwU2V0dGluZ3NNb2R1bGUuZ2V0TnVtYmVyKEVYUElSQVRJT05fS0VZKTtcbiAgICAgICAgaWYgKCFleHBpcmVzKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpIDwgZXhwaXJlcztcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldFRva2VuKGFjY2Vzc1Rva2VuOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgYXBwU2V0dGluZ3NNb2R1bGUuc2V0U3RyaW5nKEFDQ0VTU19UT0tFTl9LRVksIGFjY2Vzc1Rva2VuKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEV4cGlyYXRpb24oZXhwaXJlczogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGFwcFNldHRpbmdzTW9kdWxlLnNldE51bWJlcihFWFBJUkFUSU9OX0tFWSwgZXhwaXJlcyAqIDEwMDApO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRUb2tlbigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYXBwU2V0dGluZ3NNb2R1bGUuZ2V0U3RyaW5nKEFDQ0VTU19UT0tFTl9LRVkpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xuXG4gICAgfVxuXG5cbiAgICBwcml2YXRlIHRuc09hdXRoTG9naW4ocHJvdmlkZXJUeXBlKTogUHJvbWlzZTxJVG5zT0F1dGhUb2tlblJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNsaWVudCA9IG5ldyBUbnNPQXV0aENsaWVudChwcm92aWRlclR5cGUpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxJVG5zT0F1dGhUb2tlblJlc3VsdD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbGllbnQubG9naW5XaXRoQ29tcGxldGlvbihcbiAgICAgICAgICAgICAgICAodG9rZW5SZXN1bHQ6IElUbnNPQXV0aFRva2VuUmVzdWx0LCBlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVjZWl2ZWQgb2F1dGggcmVzdWx0OiBcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRpcih0b2tlblJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFRva2VuKHRva2VuUmVzdWx0LmFjY2Vzc1Rva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RXhwaXJhdGlvbihOdW1iZXIodG9rZW5SZXN1bHQuYWNjZXNzVG9rZW5FeHBpcmF0aW9uKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRva2VuUmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2dpbih1c2VyOiBBdXRoVXNlcik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHtDb25maWcuYXBpVXJsfS9sb2dpbmAsIHtcbiAgICAgICAgICAgIC4uLnVzZXJcbiAgICAgICAgfSkucGlwZShcbiAgICAgICAgICAgIHRhcChyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0b2tlbiByZWNlaXZlZDogJyArIHJlc3VsdC5hY2Nlc3NfdG9rZW4pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0VG9rZW4ocmVzdWx0LmFjY2Vzc190b2tlbik7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRFeHBpcmF0aW9uKE51bWJlcihyZXN1bHQuZXhwaXJlcykpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2lnblVwKHVzZXI6IEF1dGhVc2VyKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke0NvbmZpZy5hcGlVcmx9L3JlZ2lzdGVyYCwge1xuICAgICAgICAgICAgLi4udXNlclxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9nb3V0KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHRoaXMuc2V0VG9rZW4obnVsbCk7XG4gICAgICAgIHRoaXMuc2V0RXhwaXJhdGlvbigwKTtcbiAgICAgICAgcmV0dXJuIG9mKG51bGwpO1xuICAgIH1cblxuICAgIHB1YmxpYyBmYWNlYm9va0xvZ2luKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnRuc09hdXRoTG9naW4oJ2ZhY2Vib29rJyk7XG4gICAgfVxuXG4gICAgcHVibGljIG1pY3Jvc29mdExvZ2luKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnRuc09hdXRoTG9naW4oJ21pY3Jvc29mdCcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBmYWNlYm9va1Byb3h5TG9naW4oKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG5zT2F1dGhMb2dpbignbXlDdXN0b21Qcm92aWRlcicpO1xuICAgIH1cbn1cbiJdfQ==