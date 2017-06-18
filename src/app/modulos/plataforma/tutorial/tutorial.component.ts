import { Component, OnInit,Input,ViewChild,ElementRef } from '@angular/core';
import {Contenido} from '../modelos/contenido';
import {Tutorial} from '../modelos/tutorial';
import {Paso} from '../modelos/paso';
import {PlataformaService} from '../../../servicios/plataforma.service';
import {ToastComponent} from '../../../toast/toast.component';
@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css'],
  providers:[ToastComponent]
})
export class TutorialComponent implements OnInit {
   @Input() multiple: boolean = false;
  @ViewChild('fileInput') inputEl: ElementRef;
  @ViewChild('fileInputUp') inputElC: ElementRef;
  
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
  onSubmit(){
    this.postContenido();
    this.isUpdate=false;
  }
nuevoTutorial(){
    this.isUpdate=false;
  
}
  postContenido(){
    this.cargando=true;
    this.toast.openSnackLoading();
    let res=this._plataforma.postContenido(this.tutorial).subscribe((data:any)=>{
      console.log(data);
      this.toast.openSnackSuccess();
      this.cargando=false;
      this.getContenido();
    },(err)=>{ this.cargando=false; this.toast.openSnackFail();});
  }

  deleteContenido(titulo:String ){
    this.cargando=true;
    console.log("parametro "+titulo);
    let dataDel:any={"Titulo":titulo};
    let res=this._plataforma.deleteContenido(dataDel).subscribe((data:any)=>{
      this.getContenido();
      this.toast.openSnackSuccess();
      this.cargando=false;
    },()=>{this.cargando=false; this.toast.openSnackFail()});
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
  editar(Titulo:string,Descripcion:String,resumen:String,Tipo:String){
    this.isUpdate=true;
    this.tituloC=Titulo;
    this.tutorialCambio.Titulo=Titulo;
    this.tutorialCambio.Descripcion=Descripcion;
    this.tutorialCambio.resumen=resumen;
    this.tutorialCambio.Tipo=this.tipoCont;
    
  }
  editarContenido(){
    let datas:any={"Titulo":this.tituloC,"NewTitulo":this.tutorialCambio.Titulo,
                  "NewDescripcion":this.tutorialCambio.Descripcion,
                  "Newresumen":this.tutorialCambio.resumen,"NewTipo":this.tutorialCambio.Tipo};
    this.cargando=true;

    this._plataforma.putContenido(datas).subscribe((data:any)=>{
      this.cargando=false;
      let resp:any=data;
      console.log(JSON.stringify(data));
      if(data.respuesta!==0){
        this.toast.openSnackSuccess();
      }else{
        this.toast.openSnackFail();
      }
      this.getContenido();
    },()=>{this.cargando=false;this.toast.openSnackFail()});
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

agregarPaso(Titulo:String){
  this.tituloC=Titulo;
  this.UpdatePaso=true;
}
  postPaso(){
    

    console.log(this.inputEl+" "+this.tituloC+" "+this.paso.subTitulo+" "+this.paso.paso+" "+this.paso.contenido)
    this.cargando=true;
    let data=this._plataforma.uploadImgPasoTutorial(this.inputEl,this.tituloC,this.paso.subTitulo,this.paso.paso,this.paso.contenido).subscribe((data)=>{
      this.cargando=false
      this.toast.openSnackSuccess();
    
  },(err)=>{
      this.cargando=false;
      this.toast.openSnackFail();
    })
     this.isUpdate=false;
     this.isUpPaso=false;
  }

  updatePasoSN(){
    console.log(this.tituloC+" "+this.pasoC.subTitulo+" "+this.pasoC.paso+" "+this.pasoC.enlace+" "+this.pasoC.contenido+" "+this.inputElC);
    this.cargando=true;
    let data=this._plataforma.updateImgPasoTutorial(this.tituloC,this.pasoC.subTitulo,this.pasoC.paso,this.pasoC.enlace,this.pasoC.contenido,this.inputElC).subscribe((data)=>{
    console.log("upload  ");

    this.isUpdate=false;
    this.isUpPaso=false;
    this.toast.openSnackSuccess();
    this.cargando=false;
    },(err)=>{
      this.isUpdate=false;
    this.isUpPaso=false;
  this.cargando=false;});
    
}
  updatePaso(nroPaso:String,subTitulo:String,contenido:String,enlace:String){
    this.isUpdate=false;
    
    this.isUpPaso=true;
    this.pasoC.paso=nroPaso;
    this.pasoC.subTitulo=subTitulo;
    this.pasoC.contenido=contenido;
    this.pasoC.enlace=enlace;
  }
  deletePaso(nroPaso:String){
    console.log(nroPaso+" "+this.tituloC);
    this.cargando=true;
    this._plataforma.deletePaso(this.tituloC,this.pasoC.paso).subscribe((res)=>{
      console.log(res);
      this.cargando=false;
      this.toast.openSnackSuccess();
    },(err)=>{
      this.toast.openSnackFail();
      this.cargando=false;
      console.log("error al eliminar");
    })
  }



}
