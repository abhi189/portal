import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Dashboard } from '../../dashboard.service';

@Component({
    selector: 'jhi-dashboard-payments',
    templateUrl: './payments.component.html',
    styleUrls: ['./payments.component.scss']
})
export class DashboardPaymentsComponent implements OnInit {
    public showUserDetails: boolean;
    public selectedStores: Array<any>;
    public paymentType: string;
    private mockData = [
        {
            id: 'KFC-40001',
            address: '6401 SECURITY BOULEVARD',
            city: 'BALTIMORE',
            state: 'MD',
            zipCode: 21235,
            autoPayEnabled: true
        },
        {
            id: 'KFC-40002',
            address: '6401 SECURITY BOULEVARD',
            city: 'BALTIMORE',
            state: 'MD',
            zipCode: 21235,
            autoPayEnabled: false
        },
        {
            id: 'KFC-40003',
            address: '6401 SECURITY BOULEVARD',
            city: 'BALTIMORE',
            state: 'MD',
            zipCode: 21235,
            autoPayEnabled: true
        }
    ];

    constructor(private router: Router, private dashboard: Dashboard) {}

    ngOnInit() {
        this.dashboard.storesSelected$.subscribe(res => (this.selectedStores = res), err => console.log(err));
        // this.selectedStores = this.mockData;
        this.paymentType = this.dashboard.paymentType;
    }

    removeStore(store: any) {
        this.dashboard.removeStore(store);
    }
}
