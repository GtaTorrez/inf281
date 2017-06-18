import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {NAdministradorComponent} from './modulos/plataforma/n-administrador/n-administrador.component';
import {NUsuarioComponent} from './modulos/plataforma/n-usuario/n-usuario.component';
import {LeyesComponent} from './modulos/plataforma/leyes/leyes.component';
import {EventoComponent} from './modulos/plataforma/evento/evento.component';
import {ContenidoComponent} from './modulos/plataforma/contenido/contenido.component';
import {MultimediaComponent } from './modulos/plataforma/multimedia/multimedia.component';
import {ContenedorComponent} from './modulos/plataforma/contenedor/contenedor.component';

import {InicioComponent} from './modulos/menu/inicio/inicio.component';
import {EventoVComponent} from './modulos/menu/eventoV/eventoV.component';
import {LeyesVComponent} from './modulos/menu/leyesV/leyesV.component';
import {TutorialvComponent} from './modulos/menu/tutorialv/tutorialv.component';

import {GraficasMedidasComponent} from './modulos/menu/graficas-medidas/graficas-medidas.component';
import {TutorialComponent} from './modulos/plataforma/tutorial/tutorial.component';


import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './page-not_found.component';

import { FormComponent } from './modulos/login/form/form.component';

import {PrincipalComponent} from './principal/principal/principal.component';

const appRoutes:Routes=[
    {path:'login',component:FormComponent},
    {path:'upAdministrador',component:NAdministradorComponent},
    {path:'upUsuario',component:NUsuarioComponent},
    {path:'leyes' ,component:LeyesComponent},
    {path:'evento',component:EventoComponent},
    {path:'contenido',component:ContenidoComponent},
    {path:'multimedia',component:MultimediaComponent},
    {path:'index',component:PrincipalComponent},
    {path:'', component:InicioComponent },
    {path:'eventov', component:EventoVComponent },
    {path:'leyesv', component:LeyesVComponent },
    {path:'tutorialv',component:TutorialvComponent},
    {path:'graficas', component:GraficasMedidasComponent },
    {path:'tutorial',component:TutorialComponent},
    {path:'**',component:PageNotFoundComponent}
    
];

@NgModule({
imports:[RouterModule.forRoot(appRoutes)
],
exports:[
    RouterModule
]
})
export class AppRoutingModule{

}
