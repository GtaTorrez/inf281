import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';

import {AppRoutingModule} from './app-routing.module';


import {AppComponent } from './app.component';

import {PlataformaModule} from './modulos/plataforma/plataforma.module';
import {LoginModule} from './modulos/login/login.module';
import {MenuModule} from './modulos/menu/menu.module'

import {PlataformaService} from './servicios/plataforma.service';
import { PrincipalComponent } from './principal/principal/principal.component';
import {PageNotFoundComponent} from './page-not_found.component';
import { ToastComponent } from './toast/toast.component';
@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    PageNotFoundComponent,
    ToastComponent,
  ],
  imports: [
    
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule,
    PlataformaModule,
    LoginModule,
    MaterialModule,
    MenuModule,
    BrowserAnimationsModule

  ],
  providers: [PlataformaService],
  bootstrap: [PrincipalComponent]
})
export class AppModule { }
