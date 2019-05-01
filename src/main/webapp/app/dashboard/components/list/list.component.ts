import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Dashboard } from '../../dashboard.service';

@Component({
    selector: 'jhi-dashboard-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class DashboardListComponent implements OnInit {
    public storesSelected: Array<any>;
    public storeList$: Observable<any>;

    constructor(private dashboard: Dashboard) {
        this.storeList$ = this.dashboard.getStores();
        // .subscribe(
        //     res => {
        //         console.log(res);
        //         this.storeList
        //     }
        //     err => console.log(err)
        // );
    }

    ngOnInit() {
        this.storesSelected = [];
    }

    handleStoreClick(store) {
        if (store && this.storesSelected.length) {
            const storeIndex = this._getStoreSelectedIndex(store);
            if (storeIndex > -1) {
                this.storesSelected.splice(storeIndex, 1);
                return;
            }
        }
        this.storesSelected = [...this.storesSelected, store];
        this.setStoreSelected(store);
    }

    setStoreSelected(store): boolean {
        if (this.storesSelected.length) {
            return this._getStoreSelectedIndex(store) > -1 ? true : false;
        }
        return false;
    }

    private _getStoreSelectedIndex(store): number {
        if (!this.storesSelected.length) {
            return -1;
        }
        let storeSelectedIndex = -1,
            i = 0;
        const len = this.storesSelected.length;

        for (; i < len; i += 1) {
            const selectedStore = this.storesSelected[i];

            if (store.id === selectedStore.id) {
                storeSelectedIndex = i;
                break;
            }
        }
        return storeSelectedIndex;
    }
}
