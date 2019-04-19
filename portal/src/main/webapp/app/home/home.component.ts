import { Component, AfterViewInit, Renderer, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { JhiEventManager, JhiLanguageService } from 'ng-jhipster';

import { LoginService } from 'app/core/login/login.service';
import { Register } from 'app/account/register/register.service';
import { PasswordResetInitService } from 'app/account/password-reset/init/password-reset-init.service';
import { StateStorageService } from 'app/core/auth/state-storage.service';

import { EMAIL_ALREADY_USED_TYPE, LOGIN_ALREADY_USED_TYPE, EMAIL_NOT_FOUND_TYPE } from 'app/shared';

@Component({
    selector: 'jhi-login-modal',
    templateUrl: './home.component.html',
    styleUrls: ['./home.scss']
})
export class HomeComponent implements AfterViewInit, OnInit {
    authenticationError: boolean;
    password: string;
    rememberMe: boolean;
    username: string;
    credentials: any;
    showRegister: boolean;
    confirmPassword: string;
    doNotMatch: string;
    error: string;
    errorEmailExists: string;
    errorUserExists: string;
    registerAccount: any;
    success: boolean;
    showResetPassword: boolean;
    errorEmailNotExists: string;
    resetAccount: any;
    activeForm: string;
    timeoutFunc: any;

    constructor(
        private languageService: JhiLanguageService,
        private eventManager: JhiEventManager,
        private loginService: LoginService,
        private registerService: Register,
        private stateStorageService: StateStorageService,
        private passwordResetInitService: PasswordResetInitService,
        private elementRef: ElementRef,
        private renderer: Renderer,
        private router: Router
    ) {
        this.credentials = {};
    }

    ngOnInit() {
        this.activeForm = 'login';
        this.showRegister = false;
        this.showResetPassword = false;
        this.success = false;
        this.registerAccount = {};
    }

    ngAfterViewInit() {
        const that = this;

        this.timeoutFunc = setTimeout(
            () => that.renderer.invokeElementMethod(that.elementRef.nativeElement.querySelector('#username'), 'focus', []),
            0
        );
    }

    cancel() {
        this.credentials = {
            username: null,
            password: null,
            rememberMe: true
        };
        this.authenticationError = false;
    }

    login() {
        this.loginService
            .login({
                username: this.username,
                password: this.password,
                rememberMe: this.rememberMe
            })
            .then(() => {
                this.authenticationError = false;
                if (this.router.url === '/register' || /^\/activate\//.test(this.router.url) || /^\/reset\//.test(this.router.url)) {
                    this.router.navigate(['']);
                }

                this.eventManager.broadcast({
                    name: 'authenticationSuccess',
                    content: 'Sending Authentication Success'
                });

                // previousState was set in the authExpiredInterceptor before being redirected to login modal.
                // since login is successful, go to stored previousState and clear previousState
                const redirect = this.stateStorageService.getUrl();
                if (redirect) {
                    this.stateStorageService.storeUrl(null);
                    this.router.navigate([redirect]);
                }
            })
            .catch(() => {
                this.authenticationError = true;
            });
    }

    register() {
        if (this.registerAccount.password !== this.confirmPassword) {
            this.doNotMatch = 'ERROR';
        } else {
            this.doNotMatch = null;
            this.error = null;
            this.errorUserExists = null;
            this.errorEmailExists = null;
            this.languageService.getCurrent().then(key => {
                this.registerAccount.langKey = key;
                this.registerService.save(this.registerAccount).subscribe(
                    () => {
                        this.success = true;
                    },
                    response => this.processError(response)
                );
            });
        }
    }

    requestReset() {
        this.error = null;
        this.errorEmailNotExists = null;

        this.passwordResetInitService.save(this.resetAccount.email).subscribe(
            () => {
                this.success = true;
            },
            response => {
                this.success = null;
                if (response.status === 400 && response.error.type === EMAIL_NOT_FOUND_TYPE) {
                    this.errorEmailNotExists = 'ERROR';
                } else {
                    this.error = 'ERROR';
                }
            }
        );
    }

    openLogin() {
        const that = this;

        this.activeForm = 'login';
        if (this.timeoutFunc) {
            clearTimeout(this.timeoutFunc);
        }
        this.timeoutFunc = setTimeout(
            () => that.renderer.invokeElementMethod(that.elementRef.nativeElement.querySelector('#username'), 'focus', []),
            0
        );
    }

    openRegister() {
        const that = this;

        this.activeForm = 'register';
        if (this.timeoutFunc) {
            clearTimeout(this.timeoutFunc);
        }
        this.timeoutFunc = setTimeout(
            () => that.renderer.invokeElementMethod(that.elementRef.nativeElement.querySelector('#login'), 'focus', []),
            0
        );
    }

    openResetPassword() {
        const that = this;

        this.activeForm = 'reset';
        if (this.timeoutFunc) {
            clearTimeout(this.timeoutFunc);
        }
        this.timeoutFunc = setTimeout(
            () => that.renderer.invokeElementMethod(that.elementRef.nativeElement.querySelector('#email'), 'focus', []),
            0
        );
    }

    private processError(response: HttpErrorResponse) {
        this.success = null;
        if (response.status === 400 && response.error.type === LOGIN_ALREADY_USED_TYPE) {
            this.errorUserExists = 'ERROR';
        } else if (response.status === 400 && response.error.type === EMAIL_ALREADY_USED_TYPE) {
            this.errorEmailExists = 'ERROR';
        } else {
            this.error = 'ERROR';
        }
    }
}
