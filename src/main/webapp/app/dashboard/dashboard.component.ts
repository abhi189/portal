import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, Event, PRIMARY_OUTLET, RoutesRecognized, ActivationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { map, mergeMap, buffer, pluck } from 'rxjs/internal/operators';
import { Observable, of } from 'rxjs';

@Component({
    selector: 'jhi-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    public sideBarVisible: boolean;
    // public breadcrumbs$: Observable<any>;
    public breadcrumbs: Array<any> = [];

    constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

    ngOnInit() {
        this.sideBarVisible = true;
        this.setBreadCrumbs();
    }

    setBreadCrumbs(): void {
        const navigationEnd$ = this.router.events.pipe(filter(event => event instanceof NavigationEnd));

        // this.breadcrumbs$ = of([1, 2, 3, 4, 5]);
        this.router.events
            .pipe(
                filter(ev => ev instanceof ActivationEnd),
                pluck('snapshot'),
                pluck('data'),
                buffer(navigationEnd$),
                map((bcData: any[]) => bcData.reverse())
            )
            .subscribe(breadcrumbsArr => {
                let breadcrumbs = breadcrumbsArr;

                breadcrumbs = breadcrumbs.filter(breadcrumb => Object.keys(breadcrumb) && Object.keys(breadcrumb).length);
                this.breadcrumbs = breadcrumbs;
            });
    }

    handleToggleSideBar() {
        this.sideBarVisible = !this.sideBarVisible;
    }
}
