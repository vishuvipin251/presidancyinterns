import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <ul>
  <li><a [routerLink] = "['/Eduladder']">Eduladder</a></li>
  <li><a [routerLink] = "['/Register']">Register</a></li>
  </ul>
  <router-outlet></router-outlet>`,
})
export class AppComponent  { 
 }
