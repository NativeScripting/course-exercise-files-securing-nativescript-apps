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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCwrQ0FBNkM7QUFDN0MsMENBQXlDO0FBRXpDLDZDQUErRDtBQVEvRDtJQU1JLHVCQUNZLE1BQWMsRUFDZixXQUF3QixFQUN2QixJQUFnQjtRQUZoQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2YsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDdkIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQVByQixTQUFJLEdBQWEsSUFBSSxDQUFDO1FBQ3RCLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLFNBQUksR0FBVyxFQUFFLENBQUM7UUFPckIsSUFBSSxDQUFDLElBQUksR0FBRztZQUNSLEtBQUssRUFBRSxrQkFBa0I7WUFDekIsUUFBUSxFQUFFLFVBQVU7U0FDdkIsQ0FBQztJQUNOLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRTtZQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDcEM7SUFDTCxDQUFDO0lBRU0sOEJBQU0sR0FBYjtRQUNJLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNsQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDaEI7YUFBTTtZQUNILElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNqQjtJQUNMLENBQUM7SUFFTSxxQ0FBYSxHQUFwQjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pDLENBQUM7SUFFTyw2QkFBSyxHQUFiO1FBQUEsaUJBVUM7UUFURyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQzVCLFNBQVMsQ0FDTjtZQUNJLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNyQyxDQUFDLEVBQ0QsVUFBQyxLQUFLO1lBQ0YsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUNKLENBQUM7SUFDVixDQUFDO0lBQ08sOEJBQU0sR0FBZDtRQUFBLGlCQVdDO1FBVkcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUM3QixTQUFTLENBQ047WUFDSSxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQztZQUN2QyxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekIsQ0FBQyxFQUNELFVBQUMsS0FBSztZQUNGLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FDSixDQUFDO0lBQ1YsQ0FBQztJQUVNLDBDQUFrQixHQUF6QjtRQUFBLGlCQU9DO1FBTkcsSUFBSSxDQUFDLFdBQVc7YUFDWCxhQUFhLEVBQUU7YUFDZixJQUFJLENBQUMsVUFBQyxNQUE0QjtZQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN0RSxLQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFTSwyQ0FBbUIsR0FBMUI7UUFBQSxpQkFPQztRQU5HLElBQUksQ0FBQyxXQUFXO2FBQ1gsY0FBYyxFQUFFO2FBQ2hCLElBQUksQ0FBQyxVQUFDLE1BQTRCO1lBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3RFLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVPLDJDQUFtQixHQUEzQjtRQUFBLGlCQVVDO1FBVEcsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMxQyxJQUFNLE9BQU8sR0FBRyxJQUFJLGtCQUFXLENBQUM7WUFDNUIsYUFBYSxFQUFFLFlBQVUsS0FBTztTQUNuQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBbUIsZ0RBQWdELEVBQUUsRUFBRSxPQUFPLFNBQUEsRUFBRSxDQUFDO2FBQ3pGLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDYixLQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRU8sd0NBQWdCLEdBQXhCO1FBQUEsaUJBVUM7UUFURyxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzFDLElBQU0sT0FBTyxHQUFHLElBQUksa0JBQVcsQ0FBQztZQUM1QixhQUFhLEVBQUUsWUFBVSxLQUFPO1NBQ25DLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUEwQixxQ0FBcUMsRUFBRSxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUM7YUFDckYsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNiLEtBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFuR1EsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxxQkFBcUI7U0FDckMsQ0FBQzt5Q0FTc0IsZUFBTTtZQUNGLDBCQUFXO1lBQ2pCLGlCQUFVO09BVG5CLGFBQWEsQ0FvR3pCO0lBQUQsb0JBQUM7Q0FBQSxBQXBHRCxJQW9HQztBQXBHWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRoVXNlciB9IGZyb20gJy4uL3NoYXJlZC9tb2RlbHMvdXNlci5tb2RlbCc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBJVG5zT0F1dGhUb2tlblJlc3VsdCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1vYXV0aDInO1xuaW1wb3J0IHsgSHR0cEhlYWRlcnMsIEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLWF1dGgnLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6ICdhdXRoLmNvbXBvbmVudC5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIEF1dGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgcHVibGljIHVzZXI6IEF1dGhVc2VyID0gbnVsbDtcbiAgICBwdWJsaWMgaXNMb2dnaW5nSW4gPSB0cnVlO1xuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcgPSAnJztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBwdWJsaWMgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnRcbiAgICApIHtcbiAgICAgICAgdGhpcy51c2VyID0ge1xuICAgICAgICAgICAgZW1haWw6ICdhbGV4QG51dmlvdXMuY29tJyxcbiAgICAgICAgICAgIHBhc3N3b3JkOiAncGFzc3dvcmQnXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmF1dGhTZXJ2aWNlLmlzQXV0aGVudGljYXRlZCkge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaXRlbXMnXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc3VibWl0KCkge1xuICAgICAgICBpZiAodGhpcy5pc0xvZ2dpbmdJbikge1xuICAgICAgICAgICAgdGhpcy5sb2dpbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaWduVXAoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGVEaXNwbGF5KCkge1xuICAgICAgICB0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2dpbigpIHtcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2dpbih0aGlzLnVzZXIpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaXRlbXMnXSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1NvcnJ5LCB3ZSBjb3VsZG5cXCd0IGxvZyB5b3UgaW4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgIH1cbiAgICBwcml2YXRlIHNpZ25VcCgpIHtcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5zaWduVXAodGhpcy51c2VyKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdZb3VyIGFjY291bnQgaGFzIGJlZW4gY3JlYXRlZCcpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZURpc3BsYXkoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhbGVydCgnU29ycnksIHdlIGNvdWxkblxcJ3Qgc2lnbiB5b3UgdXAnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkxvZ2luRmFjZWJvb2tUYXAoKSB7XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2VcbiAgICAgICAgICAgIC5mYWNlYm9va0xvZ2luKClcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQ6IElUbnNPQXV0aFRva2VuUmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJiYWNrIHRvIGFwcCBjb21wb25lbnQgd2l0aCB0b2tlbiBcIiArIHJlc3VsdC5hY2Nlc3NUb2tlbik7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRGYWNlYm9va1VzZXJOYW1lKCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25Mb2dpbk1pY3Jvc29mdFRhcCgpIHtcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZVxuICAgICAgICAgICAgLm1pY3Jvc29mdExvZ2luKClcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQ6IElUbnNPQXV0aFRva2VuUmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJiYWNrIHRvIGFwcCBjb21wb25lbnQgd2l0aCB0b2tlbiBcIiArIHJlc3VsdC5hY2Nlc3NUb2tlbik7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRNaWNyb3NvZnROYW1lKCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEZhY2Vib29rVXNlck5hbWUoKSB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5hdXRoU2VydmljZS5nZXRUb2tlbigpO1xuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaHR0cC5nZXQ8eyBuYW1lOiBzdHJpbmcgfT4oJ2h0dHBzOi8vZ3JhcGguZmFjZWJvb2suY29tL3YzLjIvbWU/ZmllbGRzPW5hbWUnLCB7IGhlYWRlcnMgfSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hbWUgPSByZXN1bHQubmFtZTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0TWljcm9zb2Z0TmFtZSgpIHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLmF1dGhTZXJ2aWNlLmdldFRva2VuKCk7XG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5odHRwLmdldDx7IGRpc3BsYXlOYW1lOiBzdHJpbmcgfT4oJ2h0dHBzOi8vZ3JhcGgubWljcm9zb2Z0LmNvbS92MS4wL21lJywgeyBoZWFkZXJzIH0pXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYW1lID0gcmVzdWx0LmRpc3BsYXlOYW1lO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuIl19