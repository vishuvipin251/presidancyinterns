import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <li><a routerLink="/">Home</a></li>
    <li><a routerLink="/about">About</a></li>
    <hr />
    <router-outlet></router-outlet>

  `,
})
export class AppComponent  {


}
