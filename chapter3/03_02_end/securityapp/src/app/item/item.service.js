"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var config_1 = require("~/config");
var ItemService = /** @class */ (function () {
    function ItemService(http) {
        this.http = http;
    }
    ItemService.prototype.getItems = function () {
        return this.http.get(config_1.Config.apiUrl + "/players")
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
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ItemService);
    return ItemService;
}());
exports.ItemService = ItemService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRzNDLDZDQUFrRDtBQUVsRCw0Q0FBcUM7QUFDckMsbUNBQWtDO0FBT2xDO0lBRUkscUJBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFFcEMsQ0FBQztJQUVELDhCQUFRLEdBQVI7UUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUF5QixlQUFNLENBQUMsTUFBTSxhQUFVLENBQUM7YUFDaEUsSUFBSSxDQUNELGVBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxDQUFDLENBQ2hDLENBQUM7SUFDVixDQUFDO0lBRUQsNkJBQU8sR0FBUCxVQUFRLEVBQVU7UUFDZCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFzQixlQUFNLENBQUMsTUFBTSxpQkFBWSxFQUFJLENBQUM7YUFDbkUsSUFBSSxDQUNELGVBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxNQUFNLEVBQWIsQ0FBYSxDQUFDLENBQy9CLENBQUM7SUFDVixDQUFDO0lBbEJRLFdBQVc7UUFIdkIsaUJBQVUsQ0FBQztZQUNSLFVBQVUsRUFBRSxNQUFNO1NBQ3JCLENBQUM7eUNBRzRCLGlCQUFVO09BRjNCLFdBQVcsQ0FtQnZCO0lBQUQsa0JBQUM7Q0FBQSxBQW5CRCxJQW1CQztBQW5CWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBtYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCJ+L2NvbmZpZ1wiO1xuXG5cblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1TZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xuXG4gICAgfVxuXG4gICAgZ2V0SXRlbXMoKTogT2JzZXJ2YWJsZTxJdGVtW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8eyBwbGF5ZXJzOiBJdGVtW10gfT4oYCR7Q29uZmlnLmFwaVVybH0vcGxheWVyc2ApXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICBtYXAocmVzdWx0ID0+IHJlc3VsdC5wbGF5ZXJzKVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBnZXRJdGVtKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPEl0ZW0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8eyBwbGF5ZXI6IEl0ZW0gfT4oYCR7Q29uZmlnLmFwaVVybH0vcGxheWVycy8ke2lkfWApXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICBtYXAocmVzdWx0ID0+IHJlc3VsdC5wbGF5ZXIpXG4gICAgICAgICAgICApO1xuICAgIH1cbn1cbiJdfQ==