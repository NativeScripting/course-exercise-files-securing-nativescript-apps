import { Injectable } from '@angular/core';

// import * as appSettingsModule from 'tns-core-modules/application-settings';

import { AuthUser } from '../shared/models/user.model';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { configureTnsOAuth, TnsOAuthClient, ITnsOAuthTokenResult } from 'nativescript-oauth2';
import { TnsOaProvider, TnsOaProviderFacebook, TnsOaProviderOptionsFacebook, TnsOaProviderOptionsMicrosoft, TnsOaProviderMicrosoft } from 'nativescript-oauth2/providers/providers';

import { SecureStorage } from 'nativescript-secure-storage';

import { HttpClient } from '@angular/common/http';
import { Config } from '~/config';


const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN_KEY';
const EXPIRATION_KEY = 'EXPIRATION_KEY';

@Injectable()
export class AuthService {

    private secureStorage;
    private client: TnsOAuthClient = null;

    public get isAuthenticated(): boolean {
        //const expires = appSettingsModule.getNumber(EXPIRATION_KEY);

        //const expires = Number(sessionStorage.getItem(EXPIRATION_KEY));

        const expires = Number(this.secureStorage.getSync({
            key: EXPIRATION_KEY
        }));

        if (!expires) {
            return false;
        }
        return new Date().getTime() < expires;
    }

    private setToken(accessToken: string): void {
        // sessionStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
        this.secureStorage.setSync({
            key: ACCESS_TOKEN_KEY,
            value: accessToken
        });
    }

    private setExpiration(expires: number): void {
        // sessionStorage.setItem(EXPIRATION_KEY, String(expires * 1000));
        this.secureStorage.setSync({
            key: EXPIRATION_KEY,
            value: String(expires * 1000)
        });
    }

    public getToken(): string {
        // return sessionStorage.getItem(ACCESS_TOKEN_KEY);
        return this.secureStorage.getSync({
            key: ACCESS_TOKEN_KEY
        });
    }

    constructor(private http: HttpClient) {
        this.secureStorage = new SecureStorage();
    }


    private tnsOauthLogin(providerType): Promise<ITnsOAuthTokenResult> {
        this.client = new TnsOAuthClient(providerType);

        return new Promise<ITnsOAuthTokenResult>((resolve, reject) => {
            this.client.loginWithCompletion(
                (tokenResult: ITnsOAuthTokenResult, error) => {
                    if (error) {
                        console.error(error);
                        reject(error);
                    } else {
                        console.log("received oauth result: ");
                        console.dir(tokenResult);
                        this.setToken(tokenResult.accessToken);
                        this.setExpiration(Number(tokenResult.accessTokenExpiration));
                        resolve(tokenResult);
                    }
                }
            );
        });
    }

    public login(user: AuthUser): Observable<any> {
        return this.http.post(`${Config.apiUrl}/login`, {
            ...user
        }).pipe(
            tap(result => {
                console.log('token received: ' + result.access_token);
                this.setToken(result.access_token);
                this.setExpiration(Number(result.expires));
            })
        );
    }

    public signUp(user: AuthUser): Observable<any> {
        return this.http.post(`${Config.apiUrl}/register`, {
            ...user
        });
    }

    public logout(): Observable<any> {
        this.setToken('');
        this.setExpiration(0);
        return of(null);
    }

    public facebookLogin(): Promise<any> {
        return this.tnsOauthLogin('facebook');
    }

    public microsoftLogin(): Promise<any> {
        return this.tnsOauthLogin('microsoft');
    }

    public facebookProxyLogin(): Promise<any> {
        return this.tnsOauthLogin('myCustomProvider');
    }
}
