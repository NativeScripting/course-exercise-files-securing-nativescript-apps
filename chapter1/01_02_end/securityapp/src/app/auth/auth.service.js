"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var AuthService = /** @class */ (function () {
    function AuthService() {
        this.users = [
            { email: 'alex@nuvious.com', password: 'password' }
        ];
        this.isAuthenticated = false;
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLDZCQUFzQztBQUd0QztJQVFJO1FBTlEsVUFBSyxHQUFlO1lBQ3hCLEVBQUUsS0FBSyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUU7U0FDdEQsQ0FBQztRQUVLLG9CQUFlLEdBQUcsS0FBSyxDQUFDO0lBRWYsQ0FBQztJQUVWLDJCQUFLLEdBQVosVUFBYSxJQUFjO1FBRXZCLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLFFBQVEsRUFBdEQsQ0FBc0QsQ0FBQyxDQUFDO1FBRS9GLElBQUksU0FBUyxFQUFFO1lBQ1gsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7U0FDL0I7UUFFRCxPQUFPLFNBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRU0sNEJBQU0sR0FBYixVQUFjLElBQWM7UUFDeEIsT0FBTyxTQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVNLDRCQUFNLEdBQWI7UUFDSSxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUM3QixPQUFPLFNBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBNUJRLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTs7T0FDQSxXQUFXLENBNkJ2QjtJQUFELGtCQUFDO0NBQUEsQUE3QkQsSUE2QkM7QUE3Qlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRoVXNlciB9IGZyb20gJy4uL3NoYXJlZC9tb2RlbHMvdXNlci5tb2RlbCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSB1c2VyczogQXV0aFVzZXJbXSA9IFtcbiAgICAgICAgeyBlbWFpbDogJ2FsZXhAbnV2aW91cy5jb20nLCBwYXNzd29yZDogJ3Bhc3N3b3JkJyB9XG4gICAgXTtcblxuICAgIHB1YmxpYyBpc0F1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBwdWJsaWMgbG9naW4odXNlcjogQXV0aFVzZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgICAgIGNvbnN0IGZvdW5kVXNlciA9IHRoaXMudXNlcnMuZmluZCh1ID0+IHUuZW1haWwgPT09IHVzZXIuZW1haWwgJiYgdS5wYXNzd29yZCA9PT0gdXNlci5wYXNzd29yZCk7XG5cbiAgICAgICAgaWYgKGZvdW5kVXNlcikge1xuICAgICAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9mKG51bGwpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaWduVXAodXNlcjogQXV0aFVzZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gb2YobnVsbCk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvZ291dCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gb2YobnVsbCk7XG4gICAgfVxufVxuIl19