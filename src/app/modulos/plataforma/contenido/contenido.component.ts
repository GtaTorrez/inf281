import { Component, OnInit } from '@angular/core';
import {Contenido} from '../modelos/contenido';
import {PlataformaService} from '../../../servicios/plataforma.service';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {
   contnd:Contenido=new Contenido();
   contndCambio:Contenido=new Contenido();
   tituloC:String;
   informaciones:Contenido[];
   curiosidades:Contenido[];
   notificaciones:Contenido[];
     
   tipoCont = [
    {value: 'i', viewValue: 'Información'},
    {value: 'c', viewValue: 'Curiosidades'},
    {value: 'n', viewValue: 'Notificación'}
  ];
  constructor(private _plataforma:PlataformaService) { }
  ngOnInit() {
  }
  onSubmit(){
    this.postContenido();
  }

  postContenido(){

    let res=this._plataforma.postContenido(this.contnd).subscribe((data:any)=>{
      console.log(data);
      this.getContenido();
    });
  }

  deleteContenido(titulo:String ){
    console.log("parametro "+titulo);
    let dataDel:any={"Titulo":titulo};
    let res=this._plataforma.deleteContenido(dataDel).subscribe((data:any)=>{
      this.getContenido();
    });
  }

  getInformacion(){
    this._plataforma.getInformacion().subscribe((data:any)=>{
      this.informaciones=data;
    });
  }
  getCuriosidades(){
    this._plataforma.getCuriosidad().subscribe((data:any)=>{
      this.curiosidades=data;
    });

  }
  
  getContenido(){
    this.getCuriosidades();
    this.getInformacion();
   }
  editar(Titulo:String,Descripcion:String,resumen:String,Tipo:String){
    this.tituloC=Titulo;
    this.contndCambio.Titulo=Titulo;
    this.contndCambio.Descripcion=Descripcion;
    this.contndCambio.resumen=resumen;
    this.contndCambio.Tipo=Tipo;
    console.log("Click editar "+ this.tituloC);
    
  }
  editarContenido(){
    let datas:any={"Titulo":this.tituloC,"NewTitulo":this.contndCambio.Titulo,"NewDescripcion":this.contndCambio.Descripcion,"Newresumen":this.contndCambio.resumen,"NewTipo":this.contndCambio.Tipo};
    this._plataforma.putContenido(datas).subscribe((data:any)=>{
      
      let resp:any=data;
      console.log(JSON.stringify(data));
      this.getContenido();
    });
  }
  

}
