import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
const stores = require('../shared/static/stores.json');

@Injectable({ providedIn: 'root' })
export class Dashboard {
    public storesList: Subject<any> = new Subject<any>();
    constructor(private http: HttpClient) {}

    getStores(): Observable<any> {
        return new Observable(observer => {
            setTimeout(() => {
                observer.next(stores);
            }, 1000);
        });
    }
}
