import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StackComponent } from './stack/stack.component';
import { PictureComponent } from './picture/picture.component';
import { ItemComponent } from './item/item.component';
import { ProductComponent } from './product/product.component';
import { CatalogComponent } from './catalog/catalog.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'catalog',
        pathMatch: 'full'
    },
    {
        path: 'catalog',
        component: CatalogComponent,
        children: [
            {
                path: '',
                component: ProductComponent,
                outlet: 'product',
                children: [
                    {
                        path: 'x',
                        component: ItemComponent,
                    }
                ]
            },
            {
                path: '',
                component: PictureComponent,
                outlet: 'picture',
                children: [
                    {
                        path: 'y',
                        component: StackComponent,
                    }
                ]
            }
        ]
    },
    {
        path: 'try1',
        component: CatalogComponent,
        children: [
            {
                // this runing with http://localhost:4200/try1 and it can reache { test: 7 }
                path: '',
                component: ProductComponent,
                outlet: 'product',
                data: { test: 7 }
            },
            {
                // this runing with http://localhost:4200/try1 and it can reache { test: 7 }
                path: '',
                component: PictureComponent,
                outlet: 'picture',
                data: { test: 7 }
            },
            {
                // ERROR Error: "Uncaught (in promise): Error: Cannot match any routes. URL Segment: 'try1/1'
                path: ':id',
                component: ProductComponent,
                outlet: 'product',
                data: { test: 6 }
            },
            {
                // ERROR Error: "Uncaught (in promise): Error: Cannot match any routes. URL Segment: 'try1/1'
                path: ':id',
                component: PictureComponent,
                outlet: 'picture',
                data: { test: 6 }
            }
        ],
    },
    {
        path: 'try2/:id',
        component: CatalogComponent,
        children: [
            {
                // this runing with http://localhost:4200/try2/1 and it can reach :id value and { test: 9 }
                path: '',
                component: ItemComponent,
                outlet: 'product',
                data: { test: 9 }
            },
            {
                // this runing with http://localhost:4200/try2/1 and it can reach :id value and { test: 9 }
                path: '',
                component: StackComponent,
                outlet: 'picture',
                data: { test: 9 }
            },
            {
                // ERROR Error: "Uncaught (in promise): Error: Cannot match any routes. URL Segment: 'try2/1/2'
                path: ':id',
                component: ItemComponent,
                outlet: 'product',
                data: { test: 8 }
            },
            {
                // ERROR Error: "Uncaught (in promise): Error: Cannot match any routes. URL Segment: 'try2/1/2'
                path: ':id',
                component: StackComponent,
                outlet: 'picture',
                data: { test: 8 }
            }
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
