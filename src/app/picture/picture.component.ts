import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-picture',
    templateUrl: './picture.component.html',
    styleUrls: ['./picture.component.sass']
})
export class PictureComponent implements OnInit {

    constructor(private route: ActivatedRoute) {
        console.log(route.snapshot);
    }

    ngOnInit() {
    }

}
