import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title="Cristian"
  modificado=false
  classImput=""
  operacion1=0
  operacion2=0
  resultado=0
  
  //  p/arrays
  productos=[
    {
      id: 1,
      Modelo: "Trek 8500",
      Precio: "1000",
    },
    {
      id: 2,
      Modelo: "Trek 5600",
      Precio: "850",
    }
  ]
  // p/strings 
  categorias=[
    "MTB",
    "Ruta"
  ]
 
  constructor() { }
  cambiarTitle(){
    if (this.title === ""){
    this.classImput="error"
    } else
    {
      this.classImput="ready" 
    }
    this.modificado = true
  }
  calcular(){
    this.resultado= this.operacion1+this.operacion2
  }
  add(){
    this.productos=[{
      id:3,
      Modelo: "Trek 9100",
      Precio: "25000",
    }]
  }
   
  ngOnInit(): void {
  }

}
