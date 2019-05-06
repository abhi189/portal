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
    public storeList: Array<any>;
    public filters: any = {};

    constructor(private dashboard: Dashboard, private router: Router) {
        this.dashboard.getStores().subscribe(res => {
            this.storeList = res;
        });
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

    handleSelectAllClick() {
        if (this.filters.selectAll) {
            this.filters = {};
            this.filters.selectAll = true;
            this.handleFiltersApplied('all');
            return;
        }
        this.handleFiltersApplied();
    }

    handleSelectAllDisabledClick() {
        if (this.filters.selectDisabled) {
            this.filters = {};
            this.filters.selectDisabled = true;
            this.handleFiltersApplied('disabled');
            return;
        }
        this.handleFiltersApplied();
    }

    handleSelectAllEnabledClick() {
        if (this.filters.selectEnabled) {
            this.filters = {};
            this.filters.selectEnabled = true;
            this.handleFiltersApplied('enabled');
            return;
        }
        this.handleFiltersApplied();
    }

    handleFiltersApplied(type = '') {
        this.storeList = this.storeList.map(store => {
            const { autoPayEnabled } = store;
            const enable =
                type === 'all' ? true : autoPayEnabled && type === 'enabled' ? true : !autoPayEnabled && type === 'disabled' ? true : false;
            if (autoPayEnabled) {
                return {
                    ...store
                };
            }
            return {
                ...store,
                checkedManually: enable
            };
        });
    }

    handleAutoPayClick(type) {
        if (this.storeList.filter(s => s.checkedManually).length) {
            this.dashboard.setSelectedStores(this.storeList.filter(s => s.checkedManually), type);
            this.router.navigate(['dashboard/payments']);
        }
    }

    handlePaymentChange(event, store) {
        console.log(event, store);
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
