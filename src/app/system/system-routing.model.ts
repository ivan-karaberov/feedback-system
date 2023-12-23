import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { notFoundComponent } from '../shared/components/notfound/notfound.component';
import { MainComponent } from './main/main.component';
import { SystemComponent } from './system.component';
import { AuthGuard } from '../shared/services/auth.guard';
import { CreateSurveyComponent } from './create-survey/create-survey.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [
  {path: 'system', component: SystemComponent, 
                   canActivate: [AuthGuard],
                   canActivateChild: [AuthGuard],
                   children: [
    {path: 'main', component: MainComponent},
    {path: 'create_survey', component: CreateSurveyComponent},
    {path: 'show/:author/:title', component: ShowComponent}
  ]},
  
  {path: '**', component: notFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
