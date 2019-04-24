import { Routes } from '@angular/router';
import { SampleComponent } from './sample/sample.component';
import { UserRouteAccessService } from 'app/core';

export const ModulesRoutes: Routes = [
    {
        path: 'sample',
        data: {
            authorities: ['ROLE_ADMIN', 'ROLE_USER']
        },
        canActivate: [UserRouteAccessService],
        component: SampleComponent
    }
];
