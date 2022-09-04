import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLogin:boolean=false

  constructor(private authService:AuthService) {
    
    this.authService.isLogin()
    .subscribe(value=>{
      this.isLogin=value
    })
  }
  logout(){
    this.authService.logout()
  }
  ngOnInit(): void {
  }

}
