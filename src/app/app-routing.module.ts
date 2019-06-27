import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RunnerComponent} from './runner.component'
import { Runner } from 'protractor';

const routes: Routes = [{ path:  'runner.worker', 
component:  RunnerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
