import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BankingInfo } from './bank-info.service';
import { AccountService } from '../../core/auth/account.service';
import { AuthServerProvider } from '../../core/auth/auth-jwt.service';

import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'jhi-bank-info-component',
    templateUrl: './bank-info.component.html',
    styleUrls: ['./bank-info.component.scss']
})
export class BankInfoComponent implements OnInit {
    public states: any = [];
    public bankInfo: any = {};
    public storeError: string;
    public bankDataError: string;
    private searchStore: Subject<string> = new Subject();
    @Input() showLogout: boolean;

    constructor(
        private accountService: AccountService,
        private authServerProvider: AuthServerProvider,
        private router: Router,
        private bankInfoService: BankingInfo
    ) {}

    ngOnInit() {
        this.states = ['Alaska', 'Alabama', 'New York'];
        this.bankInfoService.constructRoutingById();
        this.searchStore.pipe(debounceTime(500)).subscribe(searchTextValue => {
            this.getStoreInfo(searchTextValue);
        });
    }

    onChangeState(state: string) {
        this.bankInfo.state = state;
    }

    submitBankInfo() {
        console.log('Form: ', this.bankInfo);
    }

    handleRoutingNumberChange(routingNumber: string) {
        this.bankDataError = undefined;
        const bankData = this.bankInfoService.findRoutingNumberById(routingNumber);

        if (bankData && Object.keys(bankData).length) {
            this.bankInfo.bank = bankData.customerName;
        } else {
            this.bankInfo.bank = undefined;
            this.bankDataError = 'Routing Number Not Found.';
        }
    }

    resetBankForm() {
        this.bankInfo = {};
    }

    handleStoreNumberChange(siteNo: string) {
        this.searchStore.next(siteNo);
    }

    getStoreInfo(siteNo: string) {
        this.bankInfoService.getStoreInfoById(siteNo).subscribe(
            res => {
                this.bankInfo.siteAddress = res.Address;
            },
            err => {
                this.storeError = 'Store Not Found.';
                console.log(err);
            }
        );
    }

    debounceSearch(fn: any, time = 300) {
        return function() {
            let fnCalled = false;
            const context = this;
            const args = Array.prototype.slice.call(arguments);
            if (!time) {
                fn.apply(context, args);
            } else {
                if (!fnCalled) {
                    setTimeout(() => {
                        fn.apply(context, args);
                        fnCalled = true;
                    }, time);
                }
            }
        };
    }

    logout() {
        if (this.accountService.isAuthenticated()) {
            this.authServerProvider.logout().subscribe(() => {
                this.accountService.authenticate(null);
                this.router.navigate(['']);
            });
        } else {
            this.accountService.authenticate(null);
            this.router.navigate(['']);
        }
    }
}
