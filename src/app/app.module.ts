import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContadorComponent } from './contador/contador.component';
import { RegistroComponent } from './registro/registro.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { LoginComponent } from './login/login.component';
import { DetalleComponent } from './detalle/detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContadorComponent,
    RegistroComponent,
    CatalogoComponent,
    LoginComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
