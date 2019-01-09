"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var auth_service_1 = require("./auth.service");
var router_1 = require("@angular/router");
var AuthComponent = /** @class */ (function () {
    function AuthComponent(router, authService) {
        this.router = router;
        this.authService = authService;
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
        this.authService
            .facebookLogin()
            .then(function (result) {
            console.log("back to app component with token" + result.accessToken);
        });
    };
    AuthComponent = __decorate([
        core_1.Component({
            selector: 'app-auth',
            moduleId: module.id,
            templateUrl: 'auth.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router,
            auth_service_1.AuthService])
    ], AuthComponent);
    return AuthComponent;
}());
exports.AuthComponent = AuthComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCwrQ0FBNkM7QUFDN0MsMENBQXlDO0FBUXpDO0lBTUksdUJBQ1ksTUFBYyxFQUNmLFdBQXdCO1FBRHZCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQU41QixTQUFJLEdBQWEsSUFBSSxDQUFDO1FBQ3RCLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLFNBQUksR0FBVyxFQUFFLENBQUM7UUFNckIsSUFBSSxDQUFDLElBQUksR0FBRztZQUNSLEtBQUssRUFBRSxrQkFBa0I7WUFDekIsUUFBUSxFQUFFLFVBQVU7U0FDdkIsQ0FBQztJQUNOLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRTtZQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDcEM7SUFDTCxDQUFDO0lBRU0sOEJBQU0sR0FBYjtRQUNJLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNsQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDaEI7YUFBTTtZQUNILElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNqQjtJQUNMLENBQUM7SUFFTSxxQ0FBYSxHQUFwQjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pDLENBQUM7SUFFTyw2QkFBSyxHQUFiO1FBQUEsaUJBVUM7UUFURyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQzVCLFNBQVMsQ0FDTjtZQUNJLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNyQyxDQUFDLEVBQ0QsVUFBQyxLQUFLO1lBQ0YsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUNKLENBQUM7SUFDVixDQUFDO0lBQ08sOEJBQU0sR0FBZDtRQUFBLGlCQVdDO1FBVkcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUM3QixTQUFTLENBQ047WUFDSSxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQztZQUN2QyxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekIsQ0FBQyxFQUNELFVBQUMsS0FBSztZQUNGLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FDSixDQUFDO0lBQ1YsQ0FBQztJQUVNLDBDQUFrQixHQUF6QjtRQUNJLElBQUksQ0FBQyxXQUFXO2FBQ1gsYUFBYSxFQUFFO2FBQ2YsSUFBSSxDQUFDLFVBQUMsTUFBTTtZQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pFLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQWhFUSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHFCQUFxQjtTQUNyQyxDQUFDO3lDQVNzQixlQUFNO1lBQ0YsMEJBQVc7T0FSMUIsYUFBYSxDQWlFekI7SUFBRCxvQkFBQztDQUFBLEFBakVELElBaUVDO0FBakVZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF1dGhVc2VyIH0gZnJvbSAnLi4vc2hhcmVkL21vZGVscy91c2VyLm1vZGVsJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtYXV0aCcsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogJ2F1dGguY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgQXV0aENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwdWJsaWMgdXNlcjogQXV0aFVzZXIgPSBudWxsO1xuICAgIHB1YmxpYyBpc0xvZ2dpbmdJbiA9IHRydWU7XG4gICAgcHVibGljIG5hbWU6IHN0cmluZyA9ICcnO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHB1YmxpYyBhdXRoU2VydmljZTogQXV0aFNlcnZpY2VcbiAgICApIHtcbiAgICAgICAgdGhpcy51c2VyID0ge1xuICAgICAgICAgICAgZW1haWw6ICdhbGV4QG51dmlvdXMuY29tJyxcbiAgICAgICAgICAgIHBhc3N3b3JkOiAncGFzc3dvcmQnXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmF1dGhTZXJ2aWNlLmlzQXV0aGVudGljYXRlZCkge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaXRlbXMnXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc3VibWl0KCkge1xuICAgICAgICBpZiAodGhpcy5pc0xvZ2dpbmdJbikge1xuICAgICAgICAgICAgdGhpcy5sb2dpbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaWduVXAoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGVEaXNwbGF5KCkge1xuICAgICAgICB0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2dpbigpIHtcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2dpbih0aGlzLnVzZXIpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaXRlbXMnXSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1NvcnJ5LCB3ZSBjb3VsZG5cXCd0IGxvZyB5b3UgaW4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgIH1cbiAgICBwcml2YXRlIHNpZ25VcCgpIHtcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5zaWduVXAodGhpcy51c2VyKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdZb3VyIGFjY291bnQgaGFzIGJlZW4gY3JlYXRlZCcpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZURpc3BsYXkoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhbGVydCgnU29ycnksIHdlIGNvdWxkblxcJ3Qgc2lnbiB5b3UgdXAnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkxvZ2luRmFjZWJvb2tUYXAoKSB7XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2VcbiAgICAgICAgICAgIC5mYWNlYm9va0xvZ2luKClcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImJhY2sgdG8gYXBwIGNvbXBvbmVudCB3aXRoIHRva2VuXCIgKyByZXN1bHQuYWNjZXNzVG9rZW4pO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuIl19