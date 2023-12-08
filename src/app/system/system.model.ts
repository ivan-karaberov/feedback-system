import { NgModule } from "@angular/core";
import { MainComponent } from "./main/main.component";

import { SystemRoutingModule } from "./system-routing.model";
import { SystemComponent } from "./system.component";

@NgModule({
    declarations: [
        SystemComponent,
        MainComponent
    ],
    imports: [
        SystemRoutingModule
    ]
})
export class SystemModule {}