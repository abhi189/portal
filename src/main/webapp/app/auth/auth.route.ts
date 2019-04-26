import { Routes } from '@angular/router';
import { RegisterCompleteComponent } from './register-complete/register-complete.component';
import { UserRouteAccessService } from 'app/core';

export const AuthRoutes: Routes = [
    {
        path: 'register/token/:tokenId',
        data: {
            // authorities: ['ROLE_ADMIN', 'ROLE_USER'],
            pageTitle: 'register.title'
        },
        // canActivate: [UserRouteAccessService],
        component: RegisterCompleteComponent
    }
];
