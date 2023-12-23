import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { TakeSurveyComponent } from './system/take-survey/take-survey.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'take_survey/:author/:title', pathMatch: 'full', component: TakeSurveyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
