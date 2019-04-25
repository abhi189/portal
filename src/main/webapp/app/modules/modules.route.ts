import { Routes } from '@angular/router';
import { SampleComponent } from './sample/sample.component';
import { BankInfoComponent } from './bankInfo/bank-info.component';
import { UserRouteAccessService } from 'app/core';

export const ModulesRoutes: Routes = [
    {
        path: 'sample',
        data: {
            authorities: ['ROLE_ADMIN', 'ROLE_USER']
        },
        canActivate: [UserRouteAccessService],
        component: SampleComponent
    },
    {
        path: 'bank-info',
        data: {
            authorities: ['ROLE_ADMIN', 'ROLE_USER']
        },
        canActivate: [UserRouteAccessService],
        component: BankInfoComponent
    }
];
