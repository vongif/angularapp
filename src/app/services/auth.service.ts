import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticationState = new BehaviorSubject(localStorage.getItem("login")?true:false)

  constructor() { }
  login(){
    // this.http.post("url",{
    //   usuario:"",
    //   password:""
    // }).subscribe(token=>{
    //   localStorage.setItem("token",token.toString())
    // })
    this.authenticationState.next(true)
    localStorage.setItem("login","true")
  }
  logout(){
    this.authenticationState.next(false)
    localStorage.removeItem("login")
  }
  isLogin(){
    return this.authenticationState
  }
  isLoginValue(){
    return this.authenticationState.value
  }

  }

