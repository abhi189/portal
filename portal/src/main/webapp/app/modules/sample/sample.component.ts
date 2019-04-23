import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AccountService } from '../../core/auth/account.service';
import { AuthServerProvider } from '../../core/auth/auth-jwt.service';

@Component({
    selector: 'jhi-sample-component',
    templateUrl: './sample.component.html',
    styleUrls: ['./sample.component.scss']
})
export class SampleComponent {
    constructor(private accountService: AccountService, private authServerProvider: AuthServerProvider, private router: Router) {}

    logout() {
        if (this.accountService.isAuthenticated()) {
            this.authServerProvider.logout().subscribe(() => {
                this.accountService.authenticate(null);
                this.router.navigate(['sample']);
            });
        } else {
            this.accountService.authenticate(null);
            this.router.navigate(['sample']);
        }
    }
}
