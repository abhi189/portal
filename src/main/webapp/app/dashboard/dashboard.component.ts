import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, PRIMARY_OUTLET, RoutesRecognized } from '@angular/router';
import { filter } from 'rxjs/operators';
import { map, mergeMap } from 'rxjs/internal/operators';

@Component({
    selector: 'jhi-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    public sideBarVisible: boolean;
    public breadcrumbs: Array<object>;

    constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

    ngOnInit() {
        this.sideBarVisible = true;
        this.setBreadCrumbs();
    }

    setBreadCrumbs(): void {
        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .pipe(map(() => this.activatedRoute))
            .pipe(
                map(route => {
                    while (route.firstChild) {
                        route = route.firstChild;
                    }
                    return route;
                })
            )
            .pipe(filter(route => route.outlet === PRIMARY_OUTLET))
            .subscribe(route => {
                this.breadcrumbs = [];
                const snapshot = this.router.routerState.snapshot;
                const url = snapshot.url;
                const routeData = route.snapshot.data;

                console.log(routeData);
                const label = routeData['breadcrumb'];
                const params = snapshot.root.params;

                this.breadcrumbs.push({ url, label, params });
            });
    }

    handleToggleSideBar() {
        this.sideBarVisible = !this.sideBarVisible;
    }
}
