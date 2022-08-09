import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  numero = 0

  constructor() { }
  
  restarNumero(){
  this.numero --
  }
  sumarNumero(){
  this.numero  ++ 
  }

  ngOnInit(): void {
  }

}
