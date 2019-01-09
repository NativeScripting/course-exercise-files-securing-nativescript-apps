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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCwrQ0FBNkM7QUFDN0MsMENBQXlDO0FBRXpDLDZDQUErRDtBQVEvRDtJQU1JLHVCQUNZLE1BQWMsRUFDZixXQUF3QixFQUN2QixJQUFnQjtRQUZoQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2YsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDdkIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQVByQixTQUFJLEdBQWEsSUFBSSxDQUFDO1FBQ3RCLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLFNBQUksR0FBVyxFQUFFLENBQUM7UUFPckIsSUFBSSxDQUFDLElBQUksR0FBRztZQUNSLEtBQUssRUFBRSxrQkFBa0I7WUFDekIsUUFBUSxFQUFFLFVBQVU7U0FDdkIsQ0FBQztJQUNOLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRTtZQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDcEM7SUFDTCxDQUFDO0lBRU0sOEJBQU0sR0FBYjtRQUNJLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNsQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDaEI7YUFBTTtZQUNILElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNqQjtJQUNMLENBQUM7SUFFTSxxQ0FBYSxHQUFwQjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pDLENBQUM7SUFFTyw2QkFBSyxHQUFiO1FBQUEsaUJBVUM7UUFURyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQzVCLFNBQVMsQ0FDTjtZQUNJLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNyQyxDQUFDLEVBQ0QsVUFBQyxLQUFLO1lBQ0YsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUNKLENBQUM7SUFDVixDQUFDO0lBQ08sOEJBQU0sR0FBZDtRQUFBLGlCQVdDO1FBVkcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUM3QixTQUFTLENBQ047WUFDSSxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQztZQUN2QyxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekIsQ0FBQyxFQUNELFVBQUMsS0FBSztZQUNGLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FDSixDQUFDO0lBQ1YsQ0FBQztJQUVNLDBDQUFrQixHQUF6QjtRQUFBLGlCQU9DO1FBTkcsSUFBSSxDQUFDLFdBQVc7YUFDWCxhQUFhLEVBQUU7YUFDZixJQUFJLENBQUMsVUFBQyxNQUE0QjtZQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN0RSxLQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFTywyQ0FBbUIsR0FBM0I7UUFBQSxpQkFVQztRQVRHLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDMUMsSUFBTSxPQUFPLEdBQUcsSUFBSSxrQkFBVyxDQUFDO1lBQzVCLGFBQWEsRUFBRSxZQUFVLEtBQU87U0FDbkMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQW1CLGdEQUFnRCxFQUFFLEVBQUUsT0FBTyxTQUFBLEVBQUUsQ0FBQzthQUN6RixTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ2IsS0FBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQTlFUSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHFCQUFxQjtTQUNyQyxDQUFDO3lDQVNzQixlQUFNO1lBQ0YsMEJBQVc7WUFDakIsaUJBQVU7T0FUbkIsYUFBYSxDQStFekI7SUFBRCxvQkFBQztDQUFBLEFBL0VELElBK0VDO0FBL0VZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF1dGhVc2VyIH0gZnJvbSAnLi4vc2hhcmVkL21vZGVscy91c2VyLm1vZGVsJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IElUbnNPQXV0aFRva2VuUmVzdWx0IH0gZnJvbSAnbmF0aXZlc2NyaXB0LW9hdXRoMic7XG5pbXBvcnQgeyBIdHRwSGVhZGVycywgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtYXV0aCcsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogJ2F1dGguY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgQXV0aENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwdWJsaWMgdXNlcjogQXV0aFVzZXIgPSBudWxsO1xuICAgIHB1YmxpYyBpc0xvZ2dpbmdJbiA9IHRydWU7XG4gICAgcHVibGljIG5hbWU6IHN0cmluZyA9ICcnO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHB1YmxpYyBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudFxuICAgICkge1xuICAgICAgICB0aGlzLnVzZXIgPSB7XG4gICAgICAgICAgICBlbWFpbDogJ2FsZXhAbnV2aW91cy5jb20nLFxuICAgICAgICAgICAgcGFzc3dvcmQ6ICdwYXNzd29yZCdcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuYXV0aFNlcnZpY2UuaXNBdXRoZW50aWNhdGVkKSB7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9pdGVtcyddKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdWJtaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzTG9nZ2luZ0luKSB7XG4gICAgICAgICAgICB0aGlzLmxvZ2luKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNpZ25VcCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHRvZ2dsZURpc3BsYXkoKSB7XG4gICAgICAgIHRoaXMuaXNMb2dnaW5nSW4gPSAhdGhpcy5pc0xvZ2dpbmdJbjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxvZ2luKCkge1xuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ2luKHRoaXMudXNlcilcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9pdGVtcyddKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhbGVydCgnU29ycnksIHdlIGNvdWxkblxcJ3QgbG9nIHlvdSBpbicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgfVxuICAgIHByaXZhdGUgc2lnblVwKCkge1xuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLnNpZ25VcCh0aGlzLnVzZXIpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1lvdXIgYWNjb3VudCBoYXMgYmVlbiBjcmVhdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlRGlzcGxheSgpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdTb3JyeSwgd2UgY291bGRuXFwndCBzaWduIHlvdSB1cCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uTG9naW5GYWNlYm9va1RhcCgpIHtcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZVxuICAgICAgICAgICAgLmZhY2Vib29rTG9naW4oKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdDogSVRuc09BdXRoVG9rZW5SZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImJhY2sgdG8gYXBwIGNvbXBvbmVudCB3aXRoIHRva2VuIFwiICsgcmVzdWx0LmFjY2Vzc1Rva2VuKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdldEZhY2Vib29rVXNlck5hbWUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0RmFjZWJvb2tVc2VyTmFtZSgpIHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLmF1dGhTZXJ2aWNlLmdldFRva2VuKCk7XG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5odHRwLmdldDx7IG5hbWU6IHN0cmluZyB9PignaHR0cHM6Ly9ncmFwaC5mYWNlYm9vay5jb20vdjMuMi9tZT9maWVsZHM9bmFtZScsIHsgaGVhZGVycyB9KVxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmFtZSA9IHJlc3VsdC5uYW1lO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuIl19