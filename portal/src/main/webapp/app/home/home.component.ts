import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'jhi-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.scss']
})
export class HomeComponent implements OnInit {
    activeForm: string;

    constructor() {}

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
