import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {

    constructor(private route: ActivatedRoute) {
        console.log(route.snapshot);
    }

    ngOnInit() {
    }

}
