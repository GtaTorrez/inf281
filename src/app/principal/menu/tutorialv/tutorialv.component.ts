import { Component, OnInit } from '@angular/core';
import {Contenido} from '../../plataforma/modelos/contenido';
import {Tutorial} from '../../plataforma/modelos/tutorial';
import {Paso} from '../../plataforma/modelos/paso';
import {PlataformaService} from '../../../servicios/plataforma.service';
import {ToastComponent} from '../../../toast/toast.component';


@Component({
  selector: 'app-tutorialv',
  templateUrl: './tutorialv.component.html',
  styleUrls: ['./tutorialv.component.css'],
  providers:[ToastComponent]
})
export class TutorialvComponent implements OnInit {

tutorial:Contenido=new Contenido();
   tutorialCambio:Contenido=new Contenido();
   tituloC:String;
   UpdatePaso:Boolean=false;
   tutoriales:Contenido[];

   Tutorial:Tutorial;
   pasos:Paso[];
   paso:Paso=new Paso();
   pasoC:Paso=new Paso();

   tipoCont = 't';
   isUpdate:Boolean=false;
   isUpPaso:Boolean=false;
   cargando:Boolean=false;
   

  constructor(private _plataforma:PlataformaService,
              private toast:ToastComponent) {
    this.tutorial.Tipo=this.tipoCont;
    this.isUpdate=false;
   }
  ngOnInit() {
    this.getContenido();
  }
  
  getTutoriales(){
    this.cargando=true;
    this.isUpdate=false;
    this._plataforma.getTutorialessi().subscribe((data:any)=>{
      this.tutoriales=data;
      this.cargando=false;
      this.toast.openSnackSuccess();
    },(err)=>{this.cargando=false;this.toast.openSnackFail()});

  }
  getContenido(){
    this.getTutoriales();
  }
  
  getTutorialPasos(Titulo:string){
    this.tituloC=Titulo;
    this.cargando=true;

    this.isUpPaso=false;
    this.isUpdate=false;
    this.UpdatePaso=false;
    this._plataforma.getTutorialPasos(Titulo).subscribe((data:any)=>{
      this.cargando=false;
      this.Tutorial=data;
      this.pasos=this.Tutorial.imagen;
  ;
      console.log(JSON.stringify(this.paso));
      this.toast.openSnackSuccess();
    },(err)=>{
      this.cargando=false;
      
      this.toast.openSnackLoading();
    } 
    )
  }

}