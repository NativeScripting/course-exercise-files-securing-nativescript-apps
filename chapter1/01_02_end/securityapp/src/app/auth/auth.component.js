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
        this.user = {
            email: 'alex@nuvious.com',
            password: 'password'
        };
    }
    AuthComponent.prototype.ngOnInit = function () { };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCwrQ0FBNkM7QUFDN0MsMENBQXlDO0FBUXpDO0lBS0ksdUJBQ1ksTUFBYyxFQUNmLFdBQXdCO1FBRHZCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUw1QixTQUFJLEdBQWEsSUFBSSxDQUFDO1FBQ3RCLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBTXRCLElBQUksQ0FBQyxJQUFJLEdBQUc7WUFDUixLQUFLLEVBQUUsa0JBQWtCO1lBQ3pCLFFBQVEsRUFBRSxVQUFVO1NBQ3ZCLENBQUM7SUFDTixDQUFDO0lBRUQsZ0NBQVEsR0FBUixjQUFhLENBQUM7SUFFUCw4QkFBTSxHQUFiO1FBQ0ksSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNoQjthQUFNO1lBQ0gsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2pCO0lBQ0wsQ0FBQztJQUVNLHFDQUFhLEdBQXBCO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekMsQ0FBQztJQUVPLDZCQUFLLEdBQWI7UUFBQSxpQkFVQztRQVRHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDNUIsU0FBUyxDQUNOO1lBQ0ksS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsRUFDRCxVQUFDLEtBQUs7WUFDRixLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQ0osQ0FBQztJQUNWLENBQUM7SUFDTyw4QkFBTSxHQUFkO1FBQUEsaUJBV0M7UUFWRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQzdCLFNBQVMsQ0FDTjtZQUNJLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1lBQ3ZDLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QixDQUFDLEVBQ0QsVUFBQyxLQUFLO1lBQ0YsS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUNKLENBQUM7SUFDVixDQUFDO0lBbkRRLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUscUJBQXFCO1NBQ3JDLENBQUM7eUNBUXNCLGVBQU07WUFDRiwwQkFBVztPQVAxQixhQUFhLENBb0R6QjtJQUFELG9CQUFDO0NBQUEsQUFwREQsSUFvREM7QUFwRFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0aFVzZXIgfSBmcm9tICcuLi9zaGFyZWQvbW9kZWxzL3VzZXIubW9kZWwnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1hdXRoJyxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiAnYXV0aC5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBBdXRoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHB1YmxpYyB1c2VyOiBBdXRoVXNlciA9IG51bGw7XG4gICAgcHVibGljIGlzTG9nZ2luZ0luID0gdHJ1ZTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBwdWJsaWMgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIHRoaXMudXNlciA9IHtcbiAgICAgICAgICAgIGVtYWlsOiAnYWxleEBudXZpb3VzLmNvbScsXG4gICAgICAgICAgICBwYXNzd29yZDogJ3Bhc3N3b3JkJ1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkgeyB9XG5cbiAgICBwdWJsaWMgc3VibWl0KCkge1xuICAgICAgICBpZiAodGhpcy5pc0xvZ2dpbmdJbikge1xuICAgICAgICAgICAgdGhpcy5sb2dpbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaWduVXAoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGVEaXNwbGF5KCkge1xuICAgICAgICB0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2dpbigpIHtcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2dpbih0aGlzLnVzZXIpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaXRlbXMnXSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1NvcnJ5LCB3ZSBjb3VsZG5cXCd0IGxvZyB5b3UgaW4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgIH1cbiAgICBwcml2YXRlIHNpZ25VcCgpIHtcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5zaWduVXAodGhpcy51c2VyKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdZb3VyIGFjY291bnQgaGFzIGJlZW4gY3JlYXRlZCcpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZURpc3BsYXkoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhbGVydCgnU29ycnksIHdlIGNvdWxkblxcJ3Qgc2lnbiB5b3UgdXAnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgIH1cbn1cbiJdfQ==