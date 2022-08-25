import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, map } from 'rxjs';
import { __values } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {


  constructor(
    private http:HttpClient
  ) { }
  getAll(){
    return this.http.get("https://api.mercadolibre.com/sites/MLA/search?q=ipod")  
  }

  getAllPromise(){
    return lastValueFrom(this.http.get("https://api.mercadolibre.com/sites/MLA/search?q=ipod"))
  }

  getAllPipe(){
    return this.http.get("https://api.mercadolibre.com/sites/MLA/search?q=ipod").pipe(map((value:any)=>value.results))
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
