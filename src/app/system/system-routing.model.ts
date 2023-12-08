import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { notFoundComponent } from '../shared/components/notfound/notfound.component';
import { MainComponent } from './main/main.component';
import { SystemComponent } from './system.component';


const routes: Routes = [
  {path: 'system', component: SystemComponent, children: [
    {path: 'main', component: MainComponent}
  ]},
  
  {path: '**', component: notFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
