import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PortalSharedModule } from 'app/shared';
import { RegisterComponent } from './register/register.component';
import { RegisterCompleteComponent } from './register-complete/register-complete.component';
import { LoginComponent } from './login/login.component';
import { ResetPassowrdInitComponent } from './reset/reset.component';
import { AuthRoutes } from './auth.route';

@NgModule({
    imports: [PortalSharedModule, RouterModule.forChild(AuthRoutes)],
    declarations: [RegisterComponent, LoginComponent, ResetPassowrdInitComponent, RegisterCompleteComponent],
    exports: [RegisterComponent, LoginComponent, ResetPassowrdInitComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PortalAuthModule {}
