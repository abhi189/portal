import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
const routingNumbersData = require('../../shared/static/routing-numbers.json');

@Injectable({ providedIn: 'root' })
export class BankingInfo {
    private routingNumberById: any = {};
    private routingNumbers: any = [];

    constructor(private http: HttpClient) {}

    constructRoutingById() {
        this.routingNumbers = routingNumbersData;
        this.routingNumbers.forEach((routingObj: any = {}) => {
            const { routingNumber } = routingObj;

            if (!this.routingNumberById[routingNumber]) {
                this.routingNumberById[routingNumber] = routingObj;
            }
        });
    }

    getRoutingNumbers(): Observable<any> {
        return this.http.get('../../shared/static/routing-numbers.json');
    }

    findRoutingNumberById(routingNumber: string) {
        if (this.routingNumberById[routingNumber]) {
            return this.routingNumberById[routingNumber];
        }
        return undefined;
    }

    getStoreInfoById(storeNo: string): Observable<any> {
        return this.http.get(`${SERVER_API_URL}/injobs/api/sites/sites-by-budderfly-id/${storeNo}`);
    }
}
