import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/Components/interfases/Productos';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  
  @Input()
  data!:Producto
  @Output()
  reload = new EventEmitter()

  isLogin= false

  constructor(
    private authService:AuthService
  ) { 
    this.authService.isLogin()
    .subscribe(value=>{
      this.isLogin=value
    })
  }
  eliminar(){
  //elimina un producto de la base de datos
  console.log("eliminar")
  this.reload.emit()
  }
  ngOnInit(): void {
  }

}
