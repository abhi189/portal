import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AccountService } from '../../core/auth/account.service';
import { AuthServerProvider } from '../../core/auth/auth-jwt.service';

@Component({
    selector: 'jhi-bank-info-component',
    templateUrl: './bank-info.component.html',
    styleUrls: ['./bank-info.component.scss']
})
export class BankInfoComponent implements OnInit {
    public states: any = [];
    public bankInfo: any = {};

    constructor(private accountService: AccountService, private authServerProvider: AuthServerProvider, private router: Router) {}

    ngOnInit() {
        this.states = ['Alaska', 'Alabama', 'New York'];
    }

    onChangeState(state: string) {
        this.bankInfo.state = state;
    }
}
