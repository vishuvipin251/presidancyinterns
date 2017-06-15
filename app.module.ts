import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { Appregister}  from './aparna_noor/register.component';
import { Appeduladder}  from './aparna_noor/eduladder.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'Eduladder', component: Appeduladder },
  { path: 'Register', component: Appregister },
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, Appregister, Appeduladder ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
