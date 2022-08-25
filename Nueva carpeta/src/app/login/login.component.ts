import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
 myForm:FormGroup
  constructor(
    private formu:FormBuilder
  ) {
    this.myForm = this.formu.group({
    correo:["",[Validators.required]],
    pass:["",[Validators.required, Validators.minLength(6)]]
    })
   }
   logearse(){
    console.log(this.myForm.value)
   }

  ngOnInit(): void {
  }

}
