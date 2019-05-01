import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardChildrenModule } from './dashboard-children.module';
import { UserRouteAccessService } from 'app/core';
import { DashboardListComponent } from './components/list/list.component';
import { DashboardPaymentsComponent } from './components/payments/payments.component';
import { DashboardInvoiceComponent } from './components/invoices/invoice.component';

export const DashboardRoutes: Routes = [
    {
        path: 'dashboard',
        data: {
            breadcrumb: 'dashboard',
            label: 'Dashboard',
            url: 'dashboard',
            pageTitle: 'Budderfly - Dashboard',
            authorities: ['ROLE_ADMIN', 'ROLE_USER']
        },
        // data: {
        //     authorities: ['ROLE_ADMIN', 'ROLE_USER'],
        //     pageTitle: 'dashboard.title'
        // },
        canActivate: [UserRouteAccessService],
        component: DashboardComponent,
        children: [
            {
                path: 'stores',
                component: DashboardListComponent,
                data: {
                    breadcrumb: 'stores',
                    pageTitle: 'Budderfly - Stores List'
                }
            },
            {
                path: 'payments',
                data: {
                    breadcrumb: 'payments',
                    label: 'Payments',
                    url: 'payments',
                    pageTitle: 'Budderfly - Payment Form'
                },
                component: DashboardPaymentsComponent
            },
            {
                path: 'invoices',
                data: {
                    breadcrumb: 'invoice',
                    label: 'Invoices',
                    url: 'invoices',
                    pageTitle: 'Budderfly - Invoices'
                },
                component: DashboardInvoiceComponent
            }
        ]
    }
];
