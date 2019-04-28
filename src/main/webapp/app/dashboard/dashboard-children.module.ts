import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPaymentsComponent } from './components/payments/payments.component';
import { DashboardInvoiceComponent } from './components/invoices/invoice.component';

const DashboardChildRoutes: Routes = [
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
];

@NgModule({
    imports: [RouterModule.forChild(DashboardChildRoutes), DashboardPaymentsComponent, DashboardInvoiceComponent],
    exports: [RouterModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardChildrenModule {}
