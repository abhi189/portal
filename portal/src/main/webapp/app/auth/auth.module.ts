import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { PortalSharedModule } from 'app/shared';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ResetPassowrdInitComponent } from './reset/reset.component';

@NgModule({
    imports: [PortalSharedModule],
    declarations: [RegisterComponent, LoginComponent, ResetPassowrdInitComponent],
    exports: [RegisterComponent, LoginComponent, ResetPassowrdInitComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PortalAuthModule {}
