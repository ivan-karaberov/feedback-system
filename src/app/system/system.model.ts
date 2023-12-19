import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SurveyComponent } from "./components/survey/survey.component";
import { MainComponent } from "./main/main.component";

import { SystemRoutingModule } from "./system-routing.model";
import { SystemComponent } from "./system.component";

@NgModule({
    declarations: [
        SystemComponent,
        MainComponent,
        SurveyComponent
    ],
    imports: [
        CommonModule,
        SystemRoutingModule
    ]
})
export class SystemModule {}