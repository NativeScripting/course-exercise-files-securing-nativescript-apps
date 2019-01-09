"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var auth_service_1 = require("./auth.service");
var router_1 = require("@angular/router");
var http_1 = require("@angular/common/http");
var AuthComponent = /** @class */ (function () {
    function AuthComponent(router, authService, http) {
        this.router = router;
        this.authService = authService;
        this.http = http;
        this.user = null;
        this.isLoggingIn = true;
        this.name = '';
        this.user = {
            email: 'alex@nuvious.com',
            password: 'password'
        };
    }
    AuthComponent.prototype.ngOnInit = function () {
        if (this.authService.isAuthenticated) {
            this.router.navigate(['/items']);
        }
    };
    AuthComponent.prototype.submit = function () {
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    AuthComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    AuthComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.user)
            .subscribe(function () {
            _this.router.navigate(['/items']);
        }, function (error) {
            alert('Sorry, we couldn\'t log you in');
        });
    };
    AuthComponent.prototype.signUp = function () {
        var _this = this;
        this.authService.signUp(this.user)
            .subscribe(function () {
            alert('Your account has been created');
            _this.toggleDisplay();
        }, function (error) {
            alert('Sorry, we couldn\'t sign you up');
        });
    };
    AuthComponent.prototype.onLoginFacebookTap = function () {
        var _this = this;
        this.authService
            .facebookLogin()
            .then(function (result) {
            console.log("back to app component with token " + result.accessToken);
            _this.getFacebookUserName();
        });
    };
    AuthComponent.prototype.onLoginFacebookProxyTap = function () {
        var _this = this;
        this.authService
            .facebookProxyLogin()
            .then(function (result) {
            console.log("back to app component with token " + result.accessToken);
            _this.getFacebookUserName();
        });
    };
    AuthComponent.prototype.onLoginMicrosoftTap = function () {
        var _this = this;
        this.authService
            .microsoftLogin()
            .then(function (result) {
            console.log("back to app component with token " + result.accessToken);
            _this.getMicrosoftName();
        });
    };
    AuthComponent.prototype.getFacebookUserName = function () {
        var _this = this;
        var token = this.authService.getToken();
        var headers = new http_1.HttpHeaders({
            Authorization: "Bearer " + token
        });
        this.http.get('https://graph.facebook.com/v3.2/me?fields=name', { headers: headers })
            .subscribe(function (result) {
            _this.name = result.name;
        });
    };
    AuthComponent.prototype.getMicrosoftName = function () {
        var _this = this;
        var token = this.authService.getToken();
        var headers = new http_1.HttpHeaders({
            Authorization: "Bearer " + token
        });
        this.http.get('https://graph.microsoft.com/v1.0/me', { headers: headers })
            .subscribe(function (result) {
            _this.name = result.displayName;
        });
    };
    AuthComponent = __decorate([
        core_1.Component({
            selector: 'app-auth',
            moduleId: module.id,
            templateUrl: 'auth.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router,
            auth_service_1.AuthService,
            http_1.HttpClient])
    ], AuthComponent);
    return AuthComponent;
}());
exports.AuthComponent = AuthComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCwrQ0FBNkM7QUFDN0MsMENBQXlDO0FBRXpDLDZDQUErRDtBQVEvRDtJQU1JLHVCQUNZLE1BQWMsRUFDZixXQUF3QixFQUN2QixJQUFnQjtRQUZoQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2YsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDdkIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQVByQixTQUFJLEdBQWEsSUFBSSxDQUFDO1FBQ3RCLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLFNBQUksR0FBVyxFQUFFLENBQUM7UUFPckIsSUFBSSxDQUFDLElBQUksR0FBRztZQUNSLEtBQUssRUFBRSxrQkFBa0I7WUFDekIsUUFBUSxFQUFFLFVBQVU7U0FDdkIsQ0FBQztJQUNOLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRTtZQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDcEM7SUFDTCxDQUFDO0lBRU0sOEJBQU0sR0FBYjtRQUNJLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNsQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDaEI7YUFBTTtZQUNILElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNqQjtJQUNMLENBQUM7SUFFTSxxQ0FBYSxHQUFwQjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pDLENBQUM7SUFFTyw2QkFBSyxHQUFiO1FBQUEsaUJBVUM7UUFURyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQzVCLFNBQVMsQ0FDTjtZ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QUMsRUFBRTtZQUNuQixXQUFXLEVBQUUscUJBQXFCO1NBQ3JDLENBQUM7eUNBU3NCLGVBQU07WUFDRiwwQkFBVztZQUNqQixpQkFBVTtPQVRuQixhQUFhLENBK0d6QjtJQUFELG9CQUFDO0NBQUEsQUEvR0QsSUErR0M7QUEvR1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0aFVzZXIgfSBmcm9tICcuLi9zaGFyZWQvbW9kZWxzL3VzZXIubW9kZWwnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSVRuc09BdXRoVG9rZW5SZXN1bHQgfSBmcm9tICduYXRpdmVzY3JpcHQtb2F1dGgyJztcbmltcG9ydCB7IEh0dHBIZWFkZXJzLCBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1hdXRoJyxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiAnYXV0aC5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBBdXRoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHB1YmxpYyB1c2VyOiBBdXRoVXNlciA9IG51bGw7XG4gICAgcHVibGljIGlzTG9nZ2luZ0luID0gdHJ1ZTtcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nID0gJyc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHVibGljIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50XG4gICAgKSB7XG4gICAgICAgIHRoaXMudXNlciA9IHtcbiAgICAgICAgICAgIGVtYWlsOiAnYWxleEBudXZpb3VzLmNvbScsXG4gICAgICAgICAgICBwYXNzd29yZDogJ3Bhc3N3b3JkJ1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAodGhpcy5hdXRoU2VydmljZS5pc0F1dGhlbnRpY2F0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2l0ZW1zJ10pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHN1Ym1pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNMb2dnaW5nSW4pIHtcbiAgICAgICAgICAgIHRoaXMubG9naW4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2lnblVwKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlRGlzcGxheSgpIHtcbiAgICAgICAgdGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luO1xuICAgIH1cblxuICAgIHByaXZhdGUgbG9naW4oKSB7XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UubG9naW4odGhpcy51c2VyKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2l0ZW1zJ10pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdTb3JyeSwgd2UgY291bGRuXFwndCBsb2cgeW91IGluJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBzaWduVXAoKSB7XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uuc2lnblVwKHRoaXMudXNlcilcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhbGVydCgnWW91ciBhY2NvdW50IGhhcyBiZWVuIGNyZWF0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVEaXNwbGF5KCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1NvcnJ5LCB3ZSBjb3VsZG5cXCd0IHNpZ24geW91IHVwJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25Mb2dpbkZhY2Vib29rVGFwKCkge1xuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlXG4gICAgICAgICAgICAuZmFjZWJvb2tMb2dpbigpXG4gICAgICAgICAgICAudGhlbigocmVzdWx0OiBJVG5zT0F1dGhUb2tlblJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmFjayB0byBhcHAgY29tcG9uZW50IHdpdGggdG9rZW4gXCIgKyByZXN1bHQuYWNjZXNzVG9rZW4pO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0RmFjZWJvb2tVc2VyTmFtZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uTG9naW5GYWNlYm9va1Byb3h5VGFwKCkge1xuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlXG4gICAgICAgICAgICAuZmFjZWJvb2tQcm94eUxvZ2luKClcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQ6IElUbnNPQXV0aFRva2VuUmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJiYWNrIHRvIGFwcCBjb21wb25lbnQgd2l0aCB0b2tlbiBcIiArIHJlc3VsdC5hY2Nlc3NUb2tlbik7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRGYWNlYm9va1VzZXJOYW1lKCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cblxuXG4gICAgcHVibGljIG9uTG9naW5NaWNyb3NvZnRUYXAoKSB7XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2VcbiAgICAgICAgICAgIC5taWNyb3NvZnRMb2dpbigpXG4gICAgICAgICAgICAudGhlbigocmVzdWx0OiBJVG5zT0F1dGhUb2tlblJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmFjayB0byBhcHAgY29tcG9uZW50IHdpdGggdG9rZW4gXCIgKyByZXN1bHQuYWNjZXNzVG9rZW4pO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0TWljcm9zb2Z0TmFtZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRGYWNlYm9va1VzZXJOYW1lKCkge1xuICAgICAgICBjb25zdCB0b2tlbiA9IHRoaXMuYXV0aFNlcnZpY2UuZ2V0VG9rZW4oKTtcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmh0dHAuZ2V0PHsgbmFtZTogc3RyaW5nIH0+KCdodHRwczovL2dyYXBoLmZhY2Vib29rLmNvbS92My4yL21lP2ZpZWxkcz1uYW1lJywgeyBoZWFkZXJzIH0pXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYW1lID0gcmVzdWx0Lm5hbWU7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldE1pY3Jvc29mdE5hbWUoKSB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5hdXRoU2VydmljZS5nZXRUb2tlbigpO1xuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaHR0cC5nZXQ8eyBkaXNwbGF5TmFtZTogc3RyaW5nIH0+KCdodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20vdjEuMC9tZScsIHsgaGVhZGVycyB9KVxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmFtZSA9IHJlc3VsdC5kaXNwbGF5TmFtZTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==