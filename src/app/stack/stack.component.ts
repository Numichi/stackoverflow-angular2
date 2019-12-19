import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-stack',
    templateUrl: './stack.component.html',
    styleUrls: ['./stack.component.sass']
})
export class StackComponent implements OnInit {

    constructor(private route: ActivatedRoute) {
        console.log(route.snapshot);
    }

    ngOnInit() {
    }

}
