import { Component } from '@angular/core';
@Component({
  selector: 'user',
  template: `
  <h1>Hello {{name}}</h1>
  <p>Email: {{email}}</p>
  <p>Adress: {{address.street}}, {{address.city}}, {{address.state}}</p>
  <button (click)="toggleHobbies()">{{showHobbies ? "Hide Hobbies" : "Show Hobbies"}}</button>
  <div *ngIf = "showHobbies">
  <h3>Hobbies</h3>
  <ul>
  <li *ngFor="let hobby of hobbies">
  {{hobby}}</li>
  </ul>
  </div>`,
})
export class UserComponent  { 
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;

  constructor() {
    this.name = 'Aparna';
    this.email = 'aparna@gmail.com',
    this.address = {
        street: '12th Bakers street',
        city: 'Brooklyn',
        state: 'MA'
  }
  this.hobbies = ['Music', 'Dance', 'Sing'];
  this.showHobbies = false;
 }
 toggleHobbies()
 {
   if(this.showHobbies == true){
    this.showHobbies=false;
   }
   else{
     this.showHobbies=true;
   }
   
 }
}
interface address {
street: string;
city: string;
state: string;
}