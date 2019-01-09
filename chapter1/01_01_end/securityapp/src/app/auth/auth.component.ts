import { Component, OnInit } from '@angular/core';
import { AuthUser } from '../shared/models/user.model';

@Component({
    selector: 'app-auth',
    moduleId: module.id,
    templateUrl: 'auth.component.html'
})

export class AuthComponent implements OnInit {

    public user: AuthUser = null;
    public isLoggingIn = true;

    constructor() {
        this.user = {
            email: 'alex@nuvious.com',
            password: 'password'
        };
    }

    ngOnInit() { }

    public submit() {
        if (this.isLoggingIn) {
            this.login();
        } else {
            this.signUp();
        }
    }

    public toggleDisplay() {
        this.isLoggingIn = !this.isLoggingIn;
    }

    private login() {

    }
    private signUp() {

    }
}
