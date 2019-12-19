import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { SimulatorPageComponent } from './simulator-page/simulator-page.component';


const routes: Routes = [
    {
        path: '',
        component: TestComponent,
        children: [
            {
                path: '',
                component: SimulatorPageComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SimulatorRoutingModule {
}
