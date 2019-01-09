"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var config_1 = require("~/config");
var auth_service_1 = require("../auth/auth.service");
var ItemService = /** @class */ (function () {
    function ItemService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    ItemService.prototype.getItems = function () {
        var token = this.authService.getToken();
        var headers = new http_1.HttpHeaders({
            Authorization: "Bearer " + token
        });
        return this.http.get(config_1.Config.apiUrl + "/players", { headers: headers })
            .pipe(operators_1.map(function (result) { return result.players; }));
    };
    ItemService.prototype.getItem = function (id) {
        return this.http.get(config_1.Config.apiUrl + "/players/" + id)
            .pipe(operators_1.map(function (result) { return result.player; }));
    };
    ItemService = __decorate([
        core_1.Injectable({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, auth_service_1.AuthService])
    ], ItemService);
    return ItemService;
}());
exports.ItemService = ItemService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRzNDLDZDQUErRDtBQUUvRCw0Q0FBcUM7QUFDckMsbUNBQWtDO0FBQ2xDLHFEQUFtRDtBQU9uRDtJQUVJLHFCQUFvQixJQUFnQixFQUFVLFdBQXdCO1FBQWxELFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUV0RSxDQUFDO0lBRUQsOEJBQVEsR0FBUjtRQUVJLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDMUMsSUFBTSxPQUFPLEdBQUcsSUFBSSxrQkFBVyxDQUFDO1lBQzVCLGFBQWEsRUFBRSxZQUFVLEtBQU87U0FDbkMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDYixlQUFNLENBQUMsTUFBTSxhQUFVLEVBQzFCLEVBQUUsT0FBTyxTQUFBLEVBQUUsQ0FDZDthQUNJLElBQUksQ0FDRCxlQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsQ0FBQyxDQUNoQyxDQUFDO0lBQ1YsQ0FBQztJQUVELDZCQUFPLEdBQVAsVUFBUSxFQUFVO1FBQ2QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBc0IsZUFBTSxDQUFDLE1BQU0saUJBQVksRUFBSSxDQUFDO2FBQ25FLElBQUksQ0FDRCxlQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsTUFBTSxFQUFiLENBQWEsQ0FBQyxDQUMvQixDQUFDO0lBQ1YsQ0FBQztJQTNCUSxXQUFXO1FBSHZCLGlCQUFVLENBQUM7WUFDUixVQUFVLEVBQUUsTUFBTTtTQUNyQixDQUFDO3lDQUc0QixpQkFBVSxFQUF1QiwwQkFBVztPQUY3RCxXQUFXLENBNEJ2QjtJQUFELGtCQUFDO0NBQUEsQUE1QkQsSUE0QkM7QUE1Qlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL2l0ZW1cIjtcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIn4vY29uZmlnXCI7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gXCIuLi9hdXRoL2F1dGguc2VydmljZVwiO1xuXG5cblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1TZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UpIHtcblxuICAgIH1cblxuICAgIGdldEl0ZW1zKCk6IE9ic2VydmFibGU8SXRlbVtdPiB7XG5cbiAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLmF1dGhTZXJ2aWNlLmdldFRva2VuKCk7XG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8eyBwbGF5ZXJzOiBJdGVtW10gfT4oXG4gICAgICAgICAgICBgJHtDb25maWcuYXBpVXJsfS9wbGF5ZXJzYCxcbiAgICAgICAgICAgIHsgaGVhZGVycyB9XG4gICAgICAgIClcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIG1hcChyZXN1bHQgPT4gcmVzdWx0LnBsYXllcnMpXG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIGdldEl0ZW0oaWQ6IG51bWJlcik6IE9ic2VydmFibGU8SXRlbT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDx7IHBsYXllcjogSXRlbSB9PihgJHtDb25maWcuYXBpVXJsfS9wbGF5ZXJzLyR7aWR9YClcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIG1hcChyZXN1bHQgPT4gcmVzdWx0LnBsYXllcilcbiAgICAgICAgICAgICk7XG4gICAgfVxufVxuIl19