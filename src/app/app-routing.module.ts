import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'simulator',
        pathMatch: 'full'
    },
    {
        path: 'simulator',
        loadChildren: () => import('./simulator/simulator.module').then(m => m.SimulatorModule)
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
