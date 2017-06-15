import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
  
  <p>What should i call you?</p>
  <form>
    <label>Name:</label>
    <input type="text" name="name" [(ngModel)]="name"/>
  </form>
  <h1>Hello {{name}}!</h1>
  <p>Do you wanna know some secrets?</p>
  <button (click)="showmore()">{{showMore ? "Hide Secrets!":"Yes!"}} </button>
  <div *ngIf="showMore">
     <h5>Hahaha nothing over here!<br/>BUT<br/>Ssshhh let's keep that a Secret!</h5>
     <p>Do you have any secrets to add?<p>
     <ul>
        <li *ngFor = "let secret of secrets;let i = index">
            {{secret}} <button (click)="deletesecret(i)">X</button>
        </li>
     </ul>   
        <form (submit)="addSecret(secret.value)">
            <label>Add secrets</label>
            <input type=text #secret/>
        </form>
  </div>
  
       
  `,
})
export class UserComponent  {
    name:string;
    showMore:boolean;
    secrets:string[];

    constructor(){
     this.name='Stranger';
     this.showMore=false;
     this.secrets=[];
    
    }

     showmore(){
        if(this.showMore)
         this.showMore=false;
         else
         {
             this.showMore=true;
         }
     }

     addSecret(secret){
         this.secrets.push(secret);
     }

     deletesecret(i){
         this.secrets.splice(i,1);
     }
}

