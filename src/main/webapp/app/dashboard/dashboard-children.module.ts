import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardListComponent } from './components/list/list.component';
import { DashboardPaymentsComponent } from './components/payments/payments.component';
import { DashboardInvoiceComponent } from './components/invoices/invoice.component';

const DashboardChildRoutes: Routes = [
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
];

@NgModule({
    imports: [RouterModule.forChild(DashboardChildRoutes), CommonModule],
    declarations: [DashboardPaymentsComponent, DashboardInvoiceComponent, DashboardListComponent],
    exports: [RouterModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardChildrenModule {}
