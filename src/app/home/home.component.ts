import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  productos:any=[]
  
 
  constructor(private productosServices: ProductosService) 
  { this.productosServices.getAll() 
   .subscribe({
    next:(data:any)=>{
      console.log (data)
      this.productos=data.results
    },
    error:error=>{
      console.log(error)
    }
    })  
  }
   
  ngOnInit(): void {
  }

}
