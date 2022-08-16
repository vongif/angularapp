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
      apellido:["",[Validators.required, Validators.minLength(3)]],
      telefono:["",[Validators.required, Validators.minLength(8)]],
      correo:["",[Validators.required]],
      clave:["",[Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
    })
   }
   registrarse(){
    console.log(this.myForm.value)
   }

  ngOnInit(): void {
  }

}
