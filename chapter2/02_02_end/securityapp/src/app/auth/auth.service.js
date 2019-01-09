"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var appSettingsModule = require("tns-core-modules/application-settings");
var rxjs_1 = require("rxjs");
var AUTHENTICATED_KEY = 'AUTHENTICATED_KEY';
var AuthService = /** @class */ (function () {
    function AuthService() {
        this.users = [
            { email: 'alex@nuvious.com', password: 'password' }
        ];
    }
    Object.defineProperty(AuthService.prototype, "isAuthenticated", {
        get: function () {
            return appSettingsModule.getBoolean(AUTHENTICATED_KEY);
        },
        set: function (val) {
            appSettingsModule.setBoolean(AUTHENTICATED_KEY, val);
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.login = function (user) {
        var foundUser = this.users.find(function (u) { return u.email === user.email && u.password === user.password; });
        if (foundUser) {
            this.isAuthenticated = true;
        }
        return rxjs_1.of(null);
    };
    AuthService.prototype.signUp = function (user) {
        return rxjs_1.of(null);
    };
    AuthService.prototype.logout = function () {
        this.isAuthenticated = false;
        return rxjs_1.of(null);
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLHlFQUEyRTtBQUczRSw2QkFBc0M7QUFFdEMsSUFBTSxpQkFBaUIsR0FBRyxtQkFBbUIsQ0FBQztBQUc5QztJQWNJO1FBWlEsVUFBSyxHQUFlO1lBQ3hCLEVBQUUsS0FBSyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUU7U0FDdEQsQ0FBQztJQVVjLENBQUM7SUFSakIsc0JBQVcsd0NBQWU7YUFBMUI7WUFDSSxPQUFPLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzNELENBQUM7YUFFRCxVQUEyQixHQUFZO1lBQ25DLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN6RCxDQUFDOzs7T0FKQTtJQVFNLDJCQUFLLEdBQVosVUFBYSxJQUFjO1FBRXZCLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLFFBQVEsRUFBdEQsQ0FBc0QsQ0FBQyxDQUFDO1FBRS9GLElBQUksU0FBUyxFQUFFO1lBQ1gsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7U0FDL0I7UUFFRCxPQUFPLFNBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRU0sNEJBQU0sR0FBYixVQUFjLElBQWM7UUFDeEIsT0FBTyxTQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVNLDRCQUFNLEdBQWI7UUFDSSxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUM3QixPQUFPLFNBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBbENRLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTs7T0FDQSxXQUFXLENBbUN2QjtJQUFELGtCQUFDO0NBQUEsQUFuQ0QsSUFtQ0M7QUFuQ1ksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzTW9kdWxlIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3MnO1xuXG5pbXBvcnQgeyBBdXRoVXNlciB9IGZyb20gJy4uL3NoYXJlZC9tb2RlbHMvdXNlci5tb2RlbCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuXG5jb25zdCBBVVRIRU5USUNBVEVEX0tFWSA9ICdBVVRIRU5USUNBVEVEX0tFWSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG5cbiAgICBwcml2YXRlIHVzZXJzOiBBdXRoVXNlcltdID0gW1xuICAgICAgICB7IGVtYWlsOiAnYWxleEBudXZpb3VzLmNvbScsIHBhc3N3b3JkOiAncGFzc3dvcmQnIH1cbiAgICBdO1xuXG4gICAgcHVibGljIGdldCBpc0F1dGhlbnRpY2F0ZWQoKSB7XG4gICAgICAgIHJldHVybiBhcHBTZXR0aW5nc01vZHVsZS5nZXRCb29sZWFuKEFVVEhFTlRJQ0FURURfS0VZKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGlzQXV0aGVudGljYXRlZCh2YWw6IGJvb2xlYW4pIHtcbiAgICAgICAgYXBwU2V0dGluZ3NNb2R1bGUuc2V0Qm9vbGVhbihBVVRIRU5USUNBVEVEX0tFWSwgdmFsKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgcHVibGljIGxvZ2luKHVzZXI6IEF1dGhVc2VyKTogT2JzZXJ2YWJsZTxhbnk+IHtcblxuICAgICAgICBjb25zdCBmb3VuZFVzZXIgPSB0aGlzLnVzZXJzLmZpbmQodSA9PiB1LmVtYWlsID09PSB1c2VyLmVtYWlsICYmIHUucGFzc3dvcmQgPT09IHVzZXIucGFzc3dvcmQpO1xuXG4gICAgICAgIGlmIChmb3VuZFVzZXIpIHtcbiAgICAgICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvZihudWxsKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2lnblVwKHVzZXI6IEF1dGhVc2VyKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIG9mKG51bGwpO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2dvdXQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIG9mKG51bGwpO1xuICAgIH1cbn1cbiJdfQ==