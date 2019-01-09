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
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLHlFQUEyRTtBQUczRSw2QkFBc0M7QUFDdEMsNENBQXFDO0FBRXJDLDJEQUE4RjtBQUc5Riw2Q0FBa0Q7QUFDbEQsbUNBQWtDO0FBR2xDLElBQU0sZ0JBQWdCLEdBQUcsa0JBQWtCLENBQUM7QUFDNUMsSUFBTSxjQUFjLEdBQUcsZ0JBQWdCLENBQUM7QUFHeEM7SUF5QkkscUJBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUF0QjVCLFdBQU0sR0FBbUIsSUFBSSxDQUFDO0lBd0J0QyxDQUFDO0lBdEJELHNCQUFXLHdDQUFlO2FBQTFCO1lBQ0ksSUFBTSxPQUFPLEdBQUcsaUJBQWlCLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQzVELElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ1YsT0FBTyxLQUFLLENBQUM7YUFDaEI7WUFDRCxPQUFPLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsT0FBTyxDQUFDO1FBQzFDLENBQUM7OztPQUFBO0lBRU8sOEJBQVEsR0FBaEIsVUFBaUIsV0FBbUI7UUFDaEMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFTyxtQ0FBYSxHQUFyQixVQUFzQixPQUFlO1FBQ2pDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFTSw4QkFBUSxHQUFmO1FBQ0ksT0FBTyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBT08sbUNBQWEsR0FBckIsVUFBc0IsWUFBWTtRQUFsQyxpQkFtQkM7UUFsQkcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLG9DQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFL0MsT0FBTyxJQUFJLE9BQU8sQ0FBdUIsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNyRCxLQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUMzQixVQUFDLFdBQWlDLEVBQUUsS0FBSztnQkFDckMsSUFBSSxLQUFLLEVBQUU7b0JBQ1AsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDckIsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNqQjtxQkFBTTtvQkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7b0JBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQ3pCLEtBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUN2QyxLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO29CQUM5RCxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7aUJBQ3hCO1lBQ0wsQ0FBQyxDQUNKLENBQUM7UUFDTixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSwyQkFBSyxHQUFaLFVBQWEsSUFBYztRQUEzQixpQkFVQztRQVRHLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUksZUFBTSxDQUFDLE1BQU0sV0FBUSxlQUN2QyxJQUFJLEVBQ1QsQ0FBQyxJQUFJLENBQ0gsZUFBRyxDQUFDLFVBQUEsTUFBTTtZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3RELEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ25DLEtBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FBQyxDQUNMLENBQUM7SUFDTixDQUFDO0lBRU0sNEJBQU0sR0FBYixVQUFjLElBQWM7UUFDeEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBSSxlQUFNLENBQUMsTUFBTSxjQUFXLGVBQzFDLElBQUksRUFDVCxDQUFDO0lBQ1AsQ0FBQztJQUVNLDRCQUFNLEdBQWI7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEIsT0FBTyxTQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVNLG1DQUFhLEdBQXBCO1FBQ0ksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFTSxvQ0FBYyxHQUFyQjtRQUNJLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBakZRLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0EwQmlCLGlCQUFVO09BekIzQixXQUFXLENBa0Z2QjtJQUFELGtCQUFDO0NBQUEsQUFsRkQsSUFrRkM7QUFsRlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzTW9kdWxlIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3MnO1xuXG5pbXBvcnQgeyBBdXRoVXNlciB9IGZyb20gJy4uL3NoYXJlZC9tb2RlbHMvdXNlci5tb2RlbCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBjb25maWd1cmVUbnNPQXV0aCwgVG5zT0F1dGhDbGllbnQsIElUbnNPQXV0aFRva2VuUmVzdWx0IH0gZnJvbSAnbmF0aXZlc2NyaXB0LW9hdXRoMic7XG5pbXBvcnQgeyBUbnNPYVByb3ZpZGVyLCBUbnNPYVByb3ZpZGVyRmFjZWJvb2ssIFRuc09hUHJvdmlkZXJPcHRpb25zRmFjZWJvb2ssIFRuc09hUHJvdmlkZXJPcHRpb25zTWljcm9zb2Z0LCBUbnNPYVByb3ZpZGVyTWljcm9zb2Z0IH0gZnJvbSAnbmF0aXZlc2NyaXB0LW9hdXRoMi9wcm92aWRlcnMvcHJvdmlkZXJzJztcblxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJ34vY29uZmlnJztcblxuXG5jb25zdCBBQ0NFU1NfVE9LRU5fS0VZID0gJ0FDQ0VTU19UT0tFTl9LRVknO1xuY29uc3QgRVhQSVJBVElPTl9LRVkgPSAnRVhQSVJBVElPTl9LRVknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuXG5cbiAgICBwcml2YXRlIGNsaWVudDogVG5zT0F1dGhDbGllbnQgPSBudWxsO1xuXG4gICAgcHVibGljIGdldCBpc0F1dGhlbnRpY2F0ZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGV4cGlyZXMgPSBhcHBTZXR0aW5nc01vZHVsZS5nZXROdW1iZXIoRVhQSVJBVElPTl9LRVkpO1xuICAgICAgICBpZiAoIWV4cGlyZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkgPCBleHBpcmVzO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0VG9rZW4oYWNjZXNzVG9rZW46IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBhcHBTZXR0aW5nc01vZHVsZS5zZXRTdHJpbmcoQUNDRVNTX1RPS0VOX0tFWSwgYWNjZXNzVG9rZW4pO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0RXhwaXJhdGlvbihleHBpcmVzOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgYXBwU2V0dGluZ3NNb2R1bGUuc2V0TnVtYmVyKEVYUElSQVRJT05fS0VZLCBleHBpcmVzICogMTAwMCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFRva2VuKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBhcHBTZXR0aW5nc01vZHVsZS5nZXRTdHJpbmcoQUNDRVNTX1RPS0VOX0tFWSk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XG5cbiAgICB9XG5cblxuICAgIHByaXZhdGUgdG5zT2F1dGhMb2dpbihwcm92aWRlclR5cGUpOiBQcm9taXNlPElUbnNPQXV0aFRva2VuUmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY2xpZW50ID0gbmV3IFRuc09BdXRoQ2xpZW50KHByb3ZpZGVyVHlwZSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPElUbnNPQXV0aFRva2VuUmVzdWx0PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNsaWVudC5sb2dpbldpdGhDb21wbGV0aW9uKFxuICAgICAgICAgICAgICAgICh0b2tlblJlc3VsdDogSVRuc09BdXRoVG9rZW5SZXN1bHQsIGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZWNlaXZlZCBvYXV0aCByZXN1bHQ6IFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGlyKHRva2VuUmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0VG9rZW4odG9rZW5SZXN1bHQuYWNjZXNzVG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRFeHBpcmF0aW9uKE51bWJlcih0b2tlblJlc3VsdC5hY2Nlc3NUb2tlbkV4cGlyYXRpb24pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodG9rZW5SZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvZ2luKHVzZXI6IEF1dGhVc2VyKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke0NvbmZpZy5hcGlVcmx9L2xvZ2luYCwge1xuICAgICAgICAgICAgLi4udXNlclxuICAgICAgICB9KS5waXBlKFxuICAgICAgICAgICAgdGFwKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Rva2VuIHJlY2VpdmVkOiAnICsgcmVzdWx0LmFjY2Vzc190b2tlbik7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUb2tlbihyZXN1bHQuYWNjZXNzX3Rva2VuKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEV4cGlyYXRpb24oTnVtYmVyKHJlc3VsdC5leHBpcmVzKSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaWduVXAodXNlcjogQXV0aFVzZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7Q29uZmlnLmFwaVVybH0vcmVnaXN0ZXJgLCB7XG4gICAgICAgICAgICAuLi51c2VyXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2dvdXQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgdGhpcy5zZXRUb2tlbihudWxsKTtcbiAgICAgICAgdGhpcy5zZXRFeHBpcmF0aW9uKDApO1xuICAgICAgICByZXR1cm4gb2YobnVsbCk7XG4gICAgfVxuXG4gICAgcHVibGljIGZhY2Vib29rTG9naW4oKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG5zT2F1dGhMb2dpbignZmFjZWJvb2snKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbWljcm9zb2Z0TG9naW4oKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG5zT2F1dGhMb2dpbignbWljcm9zb2Z0Jyk7XG4gICAgfVxufVxuIl19