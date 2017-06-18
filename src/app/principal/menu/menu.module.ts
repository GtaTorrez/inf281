import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';


import {MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';

import {LeyesVComponent} from './leyesV/leyesV.component';
import {EventoVComponent} from './eventoV/eventoV.component';
import { InicioComponent } from './inicio/inicio.component';
import { GraficasMedidasComponent } from './graficas-medidas/graficas-medidas.component';

import { AgmCoreModule } from 'angular2-google-maps/core';
import { ChartsModule } from 'ng2-charts';
import 'chart.js';



import { AppRoutingModule } from '../../app-routing.module';
import { TutorialvComponent } from './tutorialv/tutorialv.component';

@NgModule({
  declarations: [
    LeyesVComponent,
    EventoVComponent,
    InicioComponent,
    GraficasMedidasComponent,
    TutorialvComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ChartsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDcYXbIIvcpKHfCL1hY_Veufu07jxczBuA'
    })
  ],
  exports:[
    LeyesVComponent,
    EventoVComponent,
    InicioComponent,
  ],
  providers:[]
})
export class MenuModule { }
