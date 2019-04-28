import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'jhi-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    public sideBarVisible: boolean;

    constructor() {}

    ngOnInit() {
        this.sideBarVisible = true;
    }

    handleToggleSideBar() {
        this.sideBarVisible = !this.sideBarVisible;
    }
}
