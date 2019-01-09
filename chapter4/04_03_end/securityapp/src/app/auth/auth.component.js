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
            .then(function (result) {
            console.log(result);
            _this.router.navigate(['/items']);
        });
        /*
            .subscribe(
                () => {
                    this.router.navigate(['/items']);
                },
                (error) => {
                    alert('Sorry, we couldn\'t log you in');
                }
            );
            */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCwrQ0FBNkM7QUFDN0MsMENBQXlDO0FBUXpDO0lBS0ksdUJBQ1ksTUFBYyxFQUNmLFdBQXdCO1FBRHZCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUw1QixTQUFJLEdBQWEsSUFBSSxDQUFDO1FBQ3RCLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBTXRCLElBQUksQ0FBQyxJQUFJLEdBQUc7WUFDUixLQUFLLEVBQUUsa0JBQWtCO1lBQ3pCLFFBQVEsRUFBRSxVQUFVO1NBQ3ZCLENBQUM7SUFDTixDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNJLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUU7WUFDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1NBQ3BDO0lBQ0wsQ0FBQztJQUVNLDhCQUFNLEdBQWI7UUFDSSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbEIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2hCO2FBQU07WUFDSCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDakI7SUFDTCxDQUFDO0lBRU0scUNBQWEsR0FBcEI7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QyxDQUFDO0lBRU8sNkJBQUssR0FBYjtRQUFBLGlCQWdCQztRQWZHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDNUIsSUFBSSxDQUFDLFVBQUEsTUFBTTtZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO1FBQ1A7Ozs7Ozs7OztjQVNNO0lBQ1YsQ0FBQztJQUNPLDhCQUFNLEdBQWQ7UUFBQSxpQkFXQztRQVZHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDN0IsU0FBUyxDQUNOO1lBQ0ksS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUM7WUFDdkMsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pCLENBQUMsRUFDRCxVQUFDLEtBQUs7WUFDRixLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQ0osQ0FBQztJQUNWLENBQUM7SUE3RFEsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxxQkFBcUI7U0FDckMsQ0FBQzt5Q0FRc0IsZUFBTTtZQUNGLDBCQUFXO09BUDFCLGFBQWEsQ0E4RHpCO0lBQUQsb0JBQUM7Q0FBQSxBQTlERCxJQThEQztBQTlEWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRoVXNlciB9IGZyb20gJy4uL3NoYXJlZC9tb2RlbHMvdXNlci5tb2RlbCc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLWF1dGgnLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6ICdhdXRoLmNvbXBvbmVudC5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIEF1dGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgcHVibGljIHVzZXI6IEF1dGhVc2VyID0gbnVsbDtcbiAgICBwdWJsaWMgaXNMb2dnaW5nSW4gPSB0cnVlO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHB1YmxpYyBhdXRoU2VydmljZTogQXV0aFNlcnZpY2VcbiAgICApIHtcbiAgICAgICAgdGhpcy51c2VyID0ge1xuICAgICAgICAgICAgZW1haWw6ICdhbGV4QG51dmlvdXMuY29tJyxcbiAgICAgICAgICAgIHBhc3N3b3JkOiAncGFzc3dvcmQnXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmF1dGhTZXJ2aWNlLmlzQXV0aGVudGljYXRlZCkge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaXRlbXMnXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc3VibWl0KCkge1xuICAgICAgICBpZiAodGhpcy5pc0xvZ2dpbmdJbikge1xuICAgICAgICAgICAgdGhpcy5sb2dpbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaWduVXAoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGVEaXNwbGF5KCkge1xuICAgICAgICB0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2dpbigpIHtcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2dpbih0aGlzLnVzZXIpXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvaXRlbXMnXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgLypcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9pdGVtcyddKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhbGVydCgnU29ycnksIHdlIGNvdWxkblxcJ3QgbG9nIHlvdSBpbicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICAqL1xuICAgIH1cbiAgICBwcml2YXRlIHNpZ25VcCgpIHtcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5zaWduVXAodGhpcy51c2VyKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdZb3VyIGFjY291bnQgaGFzIGJlZW4gY3JlYXRlZCcpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZURpc3BsYXkoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhbGVydCgnU29ycnksIHdlIGNvdWxkblxcJ3Qgc2lnbiB5b3UgdXAnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgIH1cbn1cbiJdfQ==