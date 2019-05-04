import { Component, OnInit } from '@angular/core';
import { LoginModalService } from 'app/core/login/login-modal.service';

@Component({
    selector: 'jhi-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.scss']
})
export class HomeComponent implements OnInit {
    activeForm: string;

    constructor(private loginModalService: LoginModalService) {}

    ngOnInit() {
        this.activeForm = 'login';
    }

    onLoginClick() {
        this.activeForm = 'login';
    }

    onForgotPasswordClick() {
        this.activeForm = 'reset';
    }

    onRegisterClick() {
        this.activeForm = 'register';
    }
}
