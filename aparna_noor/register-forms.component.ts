import { Component } from '@angular/core';
import { register_forms } from './register-forms';

@Component({
  selector: 'register-forms',
  templateUrl: './app/aparna-noor/register-forms.html'
})
export class formregister  { 
  model = new register_forms('Aparna','aparna@gmail.com','Edu');
 }