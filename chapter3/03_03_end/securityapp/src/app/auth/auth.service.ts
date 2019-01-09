import { Injectable } from '@angular/core';

import * as appSettingsModule from 'tns-core-modules/application-settings';

import { AuthUser } from '../shared/models/user.model';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Config } from '~/config';

const AUTHENTICATED_KEY = 'AUTHENTICATED_KEY';
const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN_KEY';

@Injectable()
export class AuthService {

    public get isAuthenticated() {
        return appSettingsModule.getBoolean(AUTHENTICATED_KEY);
    }

    public set isAuthenticated(val: boolean) {
        appSettingsModule.setBoolean(AUTHENTICATED_KEY, val);
    }

    private setToken(accessToken: string): void {
        appSettingsModule.setString(ACCESS_TOKEN_KEY, accessToken);
    }

    public getToken(): string {
        return appSettingsModule.getString(ACCESS_TOKEN_KEY);
    }

    constructor(private http: HttpClient) { }

    public login(user: AuthUser): Observable<any> {
        return this.http.post(`${Config.apiUrl}/login`, {
            ...user
        }).pipe(
            tap(result => {
                console.log('token received: ' + result.access_token);
                this.setToken(result.access_token);
            })
        );
    }

    public signUp(user: AuthUser): Observable<any> {
        return this.http.post(`${Config.apiUrl}/register`, {
            ...user
        });
    }

    public logout(): Observable<any> {
        this.isAuthenticated = false;
        return of(null);
    }
}
