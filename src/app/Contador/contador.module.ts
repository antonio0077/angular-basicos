import { NgModule } from "@angular/core";
import { Contador_component } from "./contador/contador.component";


@NgModule({
    declarations: [
        Contador_component
    ],
    exports: [
        Contador_component
    ]
})
export class ContadorModule{}