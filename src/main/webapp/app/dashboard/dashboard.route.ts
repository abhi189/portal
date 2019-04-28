import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { UserRouteAccessService } from 'app/core';

export const DashboardRoutes: Routes = [
    {
        path: 'dashboard',
        // data: {
        //     authorities: ['ROLE_ADMIN', 'ROLE_USER'],
        //     pageTitle: 'dashboard.title'
        // },
        // canActivate: [UserRouteAccessService],
        component: DashboardComponent
    }
];
