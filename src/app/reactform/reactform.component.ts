import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-reactform',
  templateUrl: './reactform.component.html',
  styleUrls: ['./reactform.component.css']
})
export class ReactformComponent implements OnInit {
  
  contactForm=new FormGroup({
    email:new FormControl('m@exam',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),
    remember:new FormControl('')
  })
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.contactForm.value);
  }
  get email(){
    return this.contactForm.get('email')
  }
  get password(){
    return this.contactForm.get('password')
  }
  get remember(){
    return this.contactForm.get('remember')
  }
}
