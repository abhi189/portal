import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'jhi-404',
    templateUrl: './four04.component.html',
    styleUrls: ['./four04.component.scss']
})
export class Four04Component implements OnInit {
    constructor(private route: ActivatedRoute) {}

    ngOnInit() {}
}
