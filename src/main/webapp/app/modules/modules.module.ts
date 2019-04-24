import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PortalSharedModule } from 'app/shared';
import { SampleComponent } from './sample/sample.component';
import { BankInfoComponent } from './bankInfo/bank-info.component';
import { ModulesRoutes } from './modules.route';

@NgModule({
    imports: [PortalSharedModule, RouterModule.forChild(ModulesRoutes)],
    declarations: [SampleComponent, BankInfoComponent],
    exports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ModulesModule {}
