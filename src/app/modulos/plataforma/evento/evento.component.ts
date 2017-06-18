import { Component, OnInit, ElementRef, Input, ViewChild} from '@angular/core';
import {PlataformaService} from '../../../servicios/plataforma.service';
import {Evento} from '../modelos/evento';
import {MdDialog} from '@angular/material';



@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})

export class EventoComponent implements OnInit {
  @Input() multiple: boolean = true;
  @ViewChild('fileInput') inputEl: ElementRef;
  
   eve:Evento=new Evento();
   eveCambio:Evento=new Evento();
   NombreC:String;
   evet:Evento[];
   retos:Evento[];  
   TipoAc = [
    {value: 'e', viewValue: 'Evento'},
    {value: 'r', viewValue: 'Reto'}
  ];
  constructor(private _plataforma:PlataformaService,public dialog: MdDialog) { }


  postEvento(){
    
    let res=this._plataforma.postEventos(this.eve).subscribe((data:any)=>{
      console.log(data);
    
      this.getEventos();
      
    });
  }

  deleteEvento(nombre:String ){
    console.log("parametro "+nombre);
    let dataj:any={"Nombre":nombre};
    let res=this._plataforma.deleteEvento(dataj).subscribe((data:any)=>{
      this.getEventos();
    });
  }

  getEventos(){

    this._plataforma.getEventos().subscribe((data:any)=>{
      this.evet=data;
      
    });
    
    this._plataforma.getRetos().subscribe((data:any)=>{
      this.retos=data;
      
    });

  }
  editar(Nombre:String,Descripcion:String,Tipo:String){
    this.NombreC=Nombre;
    this.eveCambio.Nombre=Nombre;
    this.eveCambio.Descripcion=Descripcion;
    this.eveCambio.Tipo=Tipo;
    console.log("Click editar"+ Nombre);
    
  }
  editarEvento(){
    let datas:any={"Nombre":this.NombreC,"NewNombre":this.eveCambio.Nombre,"NewDescripcion":this.eveCambio.Descripcion,"NewTipo":this.eveCambio.Tipo};
    this._plataforma.putEventos(datas).subscribe((data:any)=>{
  
      this.getEventos();
    });
  }

  uploadImagen(valor:String){
    this._plataforma.uploadImgEnlace(this.inputEl,"Nombre",valor);
  }

  
  ngOnInit() {
    
  }

}
