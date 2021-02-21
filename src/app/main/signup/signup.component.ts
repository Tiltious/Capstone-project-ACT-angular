import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { FormControl, FormGroup, NgForm,Validators } from '@angular/forms';
import { Housedetails } from 'src/app/housedetails';
import { Typeofproperty } from 'src/app/typeofproperty';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  validated!:boolean
  
  typeofproperty:Typeofproperty[]=[
    new Typeofproperty('Home'),
    new Typeofproperty('Business'),
    new Typeofproperty('Land'),
    new Typeofproperty('Else'),
  ]

  propForm=new FormGroup({
    postcat: new FormControl('',[Validators.required, ]),
    proptype: new FormControl('',[Validators.required , ]),
    price: new FormControl('',[Validators.required, ]),
    floor: new FormControl('',[Validators.required , ]),
    housesize: new FormControl('',[ Validators.required , ]),
    rooms: new FormControl('',[Validators.required, ]),
    constdate:new FormControl('',[Validators.required, ]),
    address:new FormGroup ({
        city: new FormControl(''),
        street: new FormControl(''),
        pincode: new FormControl('')
    })
  })
  onSubmit(){
    if(this.propForm.valid){
      console.log(this.propForm.value)
    }else{this.validated=true}
  }
  reset(){
    this.propForm.reset()
    this.validated=false
  }
  constructor() { }
  ngOnInit(): void { }

}
