import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, map, Observable } from 'rxjs';
import { __values } from 'tslib';
import { ResponseProducto } from '../Components/interfases/Productos';
import { Producto } from '../Components/interfases/Productos';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {


  constructor(
    private http:HttpClient
  ) { }
  getAll(): Observable<ResponseProducto>{
    return this.http.get<ResponseProducto>(environment.apiEndpoint+"sites/MLA/search?q=ipod")  
  }

  getAllPromise():Promise<ResponseProducto>{
    return lastValueFrom(this.http.get<ResponseProducto>(environment.apiEndpoint+"sites/MLA/search?q=ipod"))
  }

  getAllPipe():Observable<Producto[]>{
    return this.http.get<ResponseProducto>(environment.apiEndpoint+"sites/MLA/search?q=ipod").pipe(map((value:ResponseProducto)=>value.results))
  }
  getById(id:string):Observable<Producto>{
    return this.http.get<Producto>(environment.apiEndpoint+"items/"+id)
  }
  create(data:any){
    return this.http.post("URL",data)
  }
  update(id:string,data:any){
    return this.http.put("URL/"+id,data)
  } 
  delete(id:string){
    return this.http.delete("URL/"+id)
  }

}
