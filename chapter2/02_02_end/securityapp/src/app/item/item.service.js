"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var API_URL = 'http://192.168.1.243:8080/api';
var ItemService = /** @class */ (function () {
    function ItemService(http) {
        this.http = http;
    }
    ItemService.prototype.getItems = function () {
        return this.http.get(API_URL + "/players")
            .pipe(operators_1.map(function (result) { return result.players; }));
    };
    ItemService.prototype.getItem = function (id) {
        return this.http.get(API_URL + "/players/" + id)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRzNDLDZDQUFrRDtBQUVsRCw0Q0FBcUM7QUFFckMsSUFBTSxPQUFPLEdBQUcsK0JBQStCLENBQUM7QUFLaEQ7SUFFSSxxQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUVwQyxDQUFDO0lBRUQsOEJBQVEsR0FBUjtRQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQXlCLE9BQU8sYUFBVSxDQUFDO2FBQzFELElBQUksQ0FDRCxlQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsQ0FBQyxDQUNoQyxDQUFDO0lBQ1YsQ0FBQztJQUVELDZCQUFPLEdBQVAsVUFBUSxFQUFVO1FBQ2QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBc0IsT0FBTyxpQkFBWSxFQUFJLENBQUM7YUFDN0QsSUFBSSxDQUNELGVBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxNQUFNLEVBQWIsQ0FBYSxDQUFDLENBQy9CLENBQUM7SUFDVixDQUFDO0lBbEJRLFdBQVc7UUFIdkIsaUJBQVUsQ0FBQztZQUNSLFVBQVUsRUFBRSxNQUFNO1NBQ3JCLENBQUM7eUNBRzRCLGlCQUFVO09BRjNCLFdBQVcsQ0FtQnZCO0lBQUQsa0JBQUM7Q0FBQSxBQW5CRCxJQW1CQztBQW5CWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBtYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcblxuY29uc3QgQVBJX1VSTCA9ICdodHRwOi8vMTkyLjE2OC4xLjI0Mzo4MDgwL2FwaSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiBcInJvb3RcIlxufSlcbmV4cG9ydCBjbGFzcyBJdGVtU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcblxuICAgIH1cblxuICAgIGdldEl0ZW1zKCk6IE9ic2VydmFibGU8SXRlbVtdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PHsgcGxheWVyczogSXRlbVtdIH0+KGAke0FQSV9VUkx9L3BsYXllcnNgKVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgbWFwKHJlc3VsdCA9PiByZXN1bHQucGxheWVycylcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2V0SXRlbShpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxJdGVtPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PHsgcGxheWVyOiBJdGVtIH0+KGAke0FQSV9VUkx9L3BsYXllcnMvJHtpZH1gKVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgbWFwKHJlc3VsdCA9PiByZXN1bHQucGxheWVyKVxuICAgICAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=