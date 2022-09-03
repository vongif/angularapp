import { Component, OnInit } from '@angular/core';
import { ResponseProducto } from '../Components/interfases/Productos';
import { ProductosService } from '../services/productos.service';
import { Producto } from '../Components/interfases/Productos';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  productos:Producto[]=[]
  loading:boolean=true
  productosAsync:any=[]
  productosObs:any=[]
 
  constructor(private productosServices: ProductosService) 
  {  
    this.productosServices.getAll() 
   .subscribe({
    next:(data:ResponseProducto)=>{
      console.log (data)
      this.productos=data.results
      this.loading=false
    },
    error:error=>{
      console.log(error)
    }
    })  
    this.productosObs = this.productosServices.getAllPipe()
    this.init()
  }
  
  async init(){
    try {
    const response:any = await this.productosServices.getAllPromise() 
      this.productosAsync =  response["results"]
    } catch (e) {  
    }
    
  }

  ngOnInit(): void {
  }

}
