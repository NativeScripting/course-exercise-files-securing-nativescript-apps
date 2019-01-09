import { Injectable } from '@angular/core';
import { AuthUser } from '../shared/models/user.model';
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthService {

    private users: AuthUser[] = [
        { email: 'alex@nuvious.com', password: 'password' }
    ];

    public isAuthenticated = false;

    constructor() { }

    public login(user: AuthUser): Observable<any> {

        const foundUser = this.users.find(u => u.email === user.email && u.password === user.password);

        if (foundUser) {
            this.isAuthenticated = true;
        }

        return of(null);
    }

    public signUp(user: AuthUser): Observable<any> {
        return of(null);
    }

    public logout(): Observable<any> {
        this.isAuthenticated = false;
        return of(null);
    }
}
