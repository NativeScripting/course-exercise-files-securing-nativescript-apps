import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";
import { AuthService } from "../auth/auth.service";
import { Router } from "@angular/router";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Item[];

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(
        private router: Router,
        public authService: AuthService,
        private itemService: ItemService
    ) { }

    ngOnInit(): void {
        this.itemService.getItems().subscribe(items => this.items = items);
    }

    public logout() {
        this.authService.logout()
            .subscribe(
                () => {
                    this.router.navigate(['/auth']);
                },
                (error) => {
                    alert('Sorry, we couldn\'t log you out');
                }
            );
    }
}
