import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
const stores = require('../shared/static/stores.json');

@Injectable({ providedIn: 'root' })
export class Dashboard {
    public storesList: Subject<any> = new Subject<any>();
    public selectedStores: Array<any>;
    private storesSelected: Subject<any> = new Subject<any>();
    public storesSelected$ = this.storesSelected.asObservable();
    public paymentType: string;

    constructor(private http: HttpClient) {}

    getStores(): Observable<any> {
        return new Observable(observer => {
            setTimeout(() => {
                observer.next(stores);
            }, 0);
        });
    }

    setSelectedStores(storesList: Array<any>, type) {
        this.selectedStores = [...storesList];
        this.paymentType = type;
        this.storesSelected.next(this.selectedStores);
    }

    removeStore(store: any) {
        this.selectedStores = [...this.selectedStores.filter(s => s.id !== store.id)];
        this.storesSelected.next(this.selectedStores);
    }

    addStore(store: any) {
        this.selectedStores = [...this.selectedStores, store];
        this.storesSelected.next(this.selectedStores);
    }
}
