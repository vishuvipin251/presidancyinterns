import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl:'user.component.html',
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

     addSecret(secret:any){
         this.secrets.push(secret);

     }

     deletesecret(j:any){
         this.secrets.splice(j,1);
     }

     
}

