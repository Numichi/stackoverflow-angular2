import { NgModule } from '@angular/core';
import { SimulatorPageComponent } from './simulator-page/simulator-page.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        SimulatorPageComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        SimulatorPageComponent,
    ]
})
export class PageSharedModule {
}
