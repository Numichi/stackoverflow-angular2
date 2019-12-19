import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimulatorRoutingModule } from './simulator-routing.module';
import { TestComponent } from './test/test.component';
import { SimulatorPageComponent } from './simulator-page/simulator-page.component';


@NgModule({
    declarations: [
        TestComponent,
        SimulatorPageComponent
    ],
    imports: [
        CommonModule,
        SimulatorRoutingModule
    ]
})
export class SimulatorModule {
}
