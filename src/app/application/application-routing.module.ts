import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StoreComponent} from './store/store.component'
import {RegisterComponent} from './register/register.component'

const routes: Routes = [
  {
    path: 'store',
    component: StoreComponent
  },{
    path:'register',
    component:RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

exports: [RouterModule]
})
export class ApplicationRoutingModule { }
