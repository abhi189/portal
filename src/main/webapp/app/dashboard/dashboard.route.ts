import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardChildrenModule } from './dashboard-children.module';
import { UserRouteAccessService } from 'app/core';
import { DashboardPaymentsComponent } from './components/payments/payments.component';
import { DashboardInvoiceComponent } from './components/invoices/invoice.component';

export const DashboardRoutes: Routes = [
    {
        path: 'dashboard',
        data: {
            breadcrumb: 'dashboard'
        },
        // data: {
        //     authorities: ['ROLE_ADMIN', 'ROLE_USER'],
        //     pageTitle: 'dashboard.title'
        // },
        // canActivate: [UserRouteAccessService],
        component: DashboardComponent,
        children: [
            {
                path: 'payments',
                data: {
                    breadcrumb: 'payments'
                },
                component: DashboardPaymentsComponent
            },
            {
                path: 'invoices',
                data: {
                    breadcrumb: 'invoice'
                },
                component: DashboardInvoiceComponent
            }
        ]
    }
];
