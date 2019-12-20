import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimulatorRoutingModule } from './simulator-routing.module';
import { PageSharedModule } from './page-shared.module';
import { TestComponent } from './test/test.component';


@NgModule({
    declarations: [
        TestComponent
    ],
    imports: [
        CommonModule,
        SimulatorRoutingModule,
        PageSharedModule
    ]
})
export class SimulatorModule {
}
