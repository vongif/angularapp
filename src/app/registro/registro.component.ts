import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  myForm:FormGroup
  constructor(
    private formu:FormBuilder 
  ) {
    this.myForm = this.formu.group({
      nombre:["",[Validators.required, Validators.minLength(3)]],
      apellido:[""],
      correo:["",[Validators.required]],
      clave:["",[Validators.required]]
    })
   }
   registrarse(){
    console.log(this.myForm.value)
   }

  ngOnInit(): void {
  }

}
