import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
 myForm:FormGroup
 login(){
  this.authService.login()
 }
  constructor(
    private formu:FormBuilder, private authService:AuthService
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
