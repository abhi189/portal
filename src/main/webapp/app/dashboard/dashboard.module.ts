import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PortalSharedModule } from 'app/shared';
import { ModulesModule } from '../modules/modules.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardNavbarComponent } from './components/navbar/navbar.component';
import { DashboardSidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardPaymentsComponent } from './components/payments/payments.component';
import { DashboardInvoiceComponent } from './components/invoices/invoice.component';
import { DashboardListComponent } from './components/list/list.component';
import { StoreListItemComponent } from './components/list/list-item.component';
import { DashboardRoutes } from './dashboard.route';

@NgModule({
    imports: [PortalSharedModule, ModulesModule, RouterModule.forChild(DashboardRoutes)],
    declarations: [
        DashboardNavbarComponent,
        DashboardSidebarComponent,
        DashboardPaymentsComponent,
        DashboardInvoiceComponent,
        DashboardComponent,
        DashboardListComponent,
        StoreListItemComponent
    ],
    exports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule {}
