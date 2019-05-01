import { Component, Input, EventEmitter, Output, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'jhi-store-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.scss']
})
export class StoreListItemComponent implements OnChanges {
    @Input() store: any;
    @Input() storesSelected: Array<any>;
    @Output() onStoreClick = new EventEmitter();

    constructor(private ref: ChangeDetectorRef) {}

    handleStoreItemClick() {
        this.onStoreClick.next(this.store);
    }

    ngOnChanges(changes: SimpleChanges) {
        const chng = changes['storesSelected'];
        const curr = JSON.stringify(chng.currentValue);
        const prev = JSON.stringify(chng.previousValue);

        if (curr !== prev) {
            // this.ref.markForCheck();
        }
    }

    checkStoreSelected() {
        return this._getStoreSelectedIndex(this.store) > -1 ? true : false;
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
