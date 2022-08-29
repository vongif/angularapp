import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/Components/interfases/Productos';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})

export class DetalleComponent implements OnInit {
  
  producto!:Producto
  isLoading:boolean=true
  
  constructor(
    private activateRoute:ActivatedRoute,
    private productsService:ProductosService,
          
  ) { 
    const id = this.activateRoute.snapshot.paramMap.get("id")
    console.log("id",id)
    if (id) {
      this.productsService.getById(id)
      .subscribe ((data:Producto)=>{
        this.producto=data
        this.isLoading=false  
      })
    }
  }
 
  ngOnInit(): void {
  }

}
