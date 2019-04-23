import { Component } from '@angular/core';
import { AccountService } from '../../core/auth/account.service';
import { AuthServerProvider } from '../../core/auth/auth-jwt.service';

@Component({
    selector: 'jhi-sample-component',
    templateUrl: './sample.component.html',
    styleUrls: ['./sample.component.scss']
})
export class SampleComponent {
    constructor(private accountService: AccountService, private authServerProvider: AuthServerProvider) {}

    logout() {
        if (this.accountService.isAuthenticated()) {
            this.authServerProvider.logout().subscribe(() => this.accountService.authenticate(null));
        } else {
            this.accountService.authenticate(null);
        }
    }
}
