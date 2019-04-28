import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PortalSharedModule } from 'app/shared';
import { DashboardComponent } from './dashboard.component';
import { DashboardNavbarComponent } from './components/navbar.component';
import { DashboardSidebarComponent } from './components/sidebar.component';
import { DashboardRoutes } from './dashboard.route';

@NgModule({
    imports: [PortalSharedModule, RouterModule.forChild(DashboardRoutes)],
    declarations: [DashboardNavbarComponent, DashboardSidebarComponent, DashboardComponent],
    exports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule {}
