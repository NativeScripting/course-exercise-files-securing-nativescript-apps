import { Injectable } from '@angular/core';

import * as appSettingsModule from 'tns-core-modules/application-settings';

import { AuthUser } from '../shared/models/user.model';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { configureTnsOAuth, TnsOAuthClient, ITnsOAuthTokenResult } from 'nativescript-oauth2';
import { TnsOaProvider, TnsOaProviderFacebook, TnsOaProviderOptionsFacebook } from 'nativescript-oauth2/providers/providers';

import { HttpClient } from '@angular/common/http';
import { Config } from '~/config';


const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN_KEY';
const EXPIRATION_KEY = 'EXPIRATION_KEY';

@Injectable()
export class AuthService {


    private client: TnsOAuthClient = null;

    public get isAuthenticated(): boolean {
        const expires = appSettingsModule.getNumber(EXPIRATION_KEY);
        if (!expires) {
            return false;
        }
        return new Date().getTime() < expires;
    }

    private setToken(accessToken: string): void {
        appSettingsModule.setString(ACCESS_TOKEN_KEY, accessToken);
    }

    private setExpiration(expires: number): void {
        appSettingsModule.setNumber(EXPIRATION_KEY, expires * 1000);
    }

    public getToken(): string {
        return appSettingsModule.getString(ACCESS_TOKEN_KEY);
    }

    constructor(private http: HttpClient) {
        this.configureOAuthProviders();
    }

    private configureOAuthProviders() {
        const facebookProvider = this.configureOAuthProviderFacebook();
        configureTnsOAuth([facebookProvider]);
    }

    private configureOAuthProviderFacebook(): TnsOaProvider {
        const options: TnsOaProviderOptionsFacebook = {
            openIdSupport: 'oid-none',
            clientId: '357684115041386',
            clientSecret: 'c62c3787c285f9a49b4632213cb62f0f',
            redirectUri: 'https://www.facebook.com/connect/login_success.html',
            scopes: ['email'] //list of scopes
        };

        const facebookProvider = new TnsOaProviderFacebook(options);
        return facebookProvider;
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
                        console.log(tokenResult);
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
        this.setToken(null);
        this.setExpiration(0);
        return of(null);
    }

    public facebookLogin(): Promise<any> {
        return this.tnsOauthLogin('facebook');
    }
}
