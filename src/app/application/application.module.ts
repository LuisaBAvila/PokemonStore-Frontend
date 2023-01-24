import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { StoreComponent } from './store/store.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    StoreComponent,
    RegisterComponent,

  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule
  ]
})
export class ApplicationModule { }
