"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item_service_1 = require("./item.service");
var auth_service_1 = require("../auth/auth.service");
var router_1 = require("@angular/router");
var ItemsComponent = /** @class */ (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function ItemsComponent(router, authService, itemService) {
        this.router = router;
        this.authService = authService;
        this.itemService = itemService;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itemService.getItems().subscribe(function (items) { return _this.items = items; });
    };
    ItemsComponent.prototype.logout = function () {
        var _this = this;
        this.authService.logout()
            .subscribe(function () {
            _this.router.navigate(['/auth']);
        }, function (error) {
            alert('Sorry, we couldn\'t log you out');
        });
    };
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
        }),
        __metadata("design:paramtypes", [router_1.Router,
            auth_service_1.AuthService,
            item_service_1.ItemService])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBR2xELCtDQUE2QztBQUM3QyxxREFBbUQ7QUFDbkQsMENBQXlDO0FBT3pDO0lBR0ksNElBQTRJO0lBQzVJLGlIQUFpSDtJQUNqSCx3QkFDWSxNQUFjLEVBQ2YsV0FBd0IsRUFDdkIsV0FBd0I7UUFGeEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNmLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3ZCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQ2hDLENBQUM7SUFFTCxpQ0FBUSxHQUFSO1FBQUEsaUJBRUM7UUFERyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxFQUFsQixDQUFrQixDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVNLCtCQUFNLEdBQWI7UUFBQSxpQkFVQztRQVRHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFO2FBQ3BCLFNBQVMsQ0FDTjtZQUNJLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNwQyxDQUFDLEVBQ0QsVUFBQyxLQUFLO1lBQ0YsS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUNKLENBQUM7SUFDVixDQUFDO0lBekJRLGNBQWM7UUFMMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1NBQ3hDLENBQUM7eUNBT3NCLGVBQU07WUFDRiwwQkFBVztZQUNWLDBCQUFXO09BUjNCLGNBQWMsQ0EwQjFCO0lBQUQscUJBQUM7Q0FBQSxBQTFCRCxJQTBCQztBQTFCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL2l0ZW1cIjtcbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4vaXRlbS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gXCIuLi9hdXRoL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtcy5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBJdGVtc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgaXRlbXM6IEl0ZW1bXTtcblxuICAgIC8vIFRoaXMgcGF0dGVybiBtYWtlcyB1c2Ugb2YgQW5ndWxhcuKAmXMgZGVwZW5kZW5jeSBpbmplY3Rpb24gaW1wbGVtZW50YXRpb24gdG8gaW5qZWN0IGFuIGluc3RhbmNlIG9mIHRoZSBJdGVtU2VydmljZSBzZXJ2aWNlIGludG8gdGhpcyBjbGFzcy5cbiAgICAvLyBBbmd1bGFyIGtub3dzIGFib3V0IHRoaXMgc2VydmljZSBiZWNhdXNlIGl0IGlzIGluY2x1ZGVkIGluIHlvdXIgYXBw4oCZcyBtYWluIE5nTW9kdWxlLCBkZWZpbmVkIGluIGFwcC5tb2R1bGUudHMuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHB1YmxpYyBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgaXRlbVNlcnZpY2U6IEl0ZW1TZXJ2aWNlXG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLml0ZW1TZXJ2aWNlLmdldEl0ZW1zKCkuc3Vic2NyaWJlKGl0ZW1zID0+IHRoaXMuaXRlbXMgPSBpdGVtcyk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvZ291dCgpIHtcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2dvdXQoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2F1dGgnXSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1NvcnJ5LCB3ZSBjb3VsZG5cXCd0IGxvZyB5b3Ugb3V0Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=