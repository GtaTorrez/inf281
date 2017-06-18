
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';


import {MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';

import {NAdministradorComponent} from './n-administrador/n-administrador.component';
import {NUsuarioComponent} from './n-usuario/n-usuario.component';
import {LeyesComponent} from './leyes/leyes.component';
import {EventoComponent} from './evento/evento.component';
import {ContenidoComponent} from './contenido/contenido.component';
import {MultimediaComponent} from './multimedia/multimedia.component';

import {ContenedorComponent} from './contenedor/contenedor.component';

import {AppRoutingModule} from '../../app-routing.module';
import { TutorialComponent } from './tutorial/tutorial.component';



@NgModule({
  declarations: [
    NAdministradorComponent,
    NUsuarioComponent,
    LeyesComponent,
    EventoComponent,
    ContenidoComponent,
    ContenedorComponent,
    MultimediaComponent,
    TutorialComponent,
  ],
  imports: [
    
    CommonModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  exports:[
    NAdministradorComponent,
    NUsuarioComponent,
    LeyesComponent,
    EventoComponent,
    ContenidoComponent,
    ContenedorComponent,
  
  ],
  providers:[]
  
})
export class PlataformaModule { }
