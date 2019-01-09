import { Injectable } from "@angular/core";

import { Item } from "./item";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

const API_URL = 'http://192.168.1.243:8080/api';

@Injectable({
    providedIn: "root"
})
export class ItemService {

    constructor(private http: HttpClient) {

    }

    getItems(): Observable<Item[]> {
        return this.http.get<{ players: Item[] }>(`${API_URL}/players`)
            .pipe(
                map(result => result.players)
            );
    }

    getItem(id: number): Observable<Item> {
        return this.http.get<{ player: Item }>(`${API_URL}/players/${id}`)
            .pipe(
                map(result => result.player)
            );
    }
}
