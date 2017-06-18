import { Component, OnInit } from '@angular/core';
import {Admin} from '../modelos/admin';
import {PlataformaService} from '../../../servicios/plataforma.service';
import {ToastComponent} from '../../../toast/toast.component';
import {MdDialog} from '@angular/material';

@Component({
  selector: 'app-n-administrador',
  templateUrl: './n-administrador.component.html',
  styleUrls: ['./n-administrador.component.css'],
  providers:[ToastComponent]
})
export class NAdministradorComponent implements OnInit {

  admin:Admin=new Admin();
   adminUpdate:Admin=new Admin();
   itemC:String;
   admins:Admin[];
   isUpdate:Boolean=false;

   cargando:Boolean=false;
   
   TipoAd = [
    {value: '1', viewValue: 'Plataforma Web'},
    {value: '2', viewValue: 'Contenido Web general'},
    {value: '3', viewValue: 'Plataforma Niños'},
    {value: '4', viewValue: 'Plataforma Colegios'},
    {value: '5', viewValue: 'Platafoma Web y Contenido'},
    {value: '6', viewValue: 'Platafoma Web y Niños '},
    {value: '7', viewValue: 'Platafoma Web y Colegios'},
    {value: '8', viewValue: 'Platafoma Colegios y Contenido'},
    {value: '9', viewValue: 'Control Total'}
    
  ];

  Expedido = [
    {value: 'LP', viewValue:'La Paz' },
    {value: 'CB', viewValue:'Cochabamba' },
    {value: 'SC', viewValue:'Santa Cruz' },
    {value: 'OR', viewValue:'Oruro' },
    {value: 'CH', viewValue:'Chuquisaca' },
    {value: 'BN', viewValue:'Beni' },
    {value: 'PT', viewValue:'Potosi' },
    {value: 'TJ', viewValue:'Tarija' },
    {value: 'PA', viewValue:'Pando' }
    
  ];
  constructor(private _plataforma:PlataformaService, 
              private toast:ToastComponent,
              private modals:MdDialog) {

    this.isUpdate=false;
               }

  ngOnInit() {
   // this.getAdmins();
    
  }
  onSubmit(){
    this.postAdmin();
    this.isUpdate=false;
  }
nuevoAdmin(){
    this.isUpdate=false;
  
}
  postAdmin(){
    this.cargando=true;
    let res=this._plataforma.postAdmin(this.admin).subscribe((data:any)=>{
      console.log(data);
      this.cargando=false;
      if(data.respuesta!== "0")
          this.toast.openSnackSuccess();
      else
          this.toast.openSnackFail();
      //this.getAdmins();
    },()=>{this.toast.openSnackFail();this.cargando=false});
  }

  deleteAdmin(item:String ){
    
      this.cargando=true;
    console.log("parametro "+item);
    let dataj:any={"item":item};
    let res=this._plataforma.deleteAdmin(dataj).subscribe((data:any)=>{
      console.log(data);
      if(data.respuesta!== "0")
          this.toast.openSnackSuccess();
      else
          this.toast.openSnackFail();
      this.getAdmins();

      this.cargando=false;
    });
  }

  getAdmins(){

      this.cargando=true;
    this.toast.openSnackLoading();
    this._plataforma.getAdmin().subscribe((data:any)=>{
      this.admins=data;
      this.cargando=false;
    },(err)=>{
      this.cargando=false;
      this.admins[0]=new Admin();
    });
    
  }
  editar(item:number,password:String,tipo:String,nombre:String,paterno:String,
materno:String,email:String,celular:number,ocupacion:String,ci:String,expedido:String){
    this.isUpdate=true;
    this.adminUpdate.item=item;
    this.adminUpdate.password=password;
    this.adminUpdate.tipo=tipo;
    this.adminUpdate.nombre=nombre;
    this.adminUpdate.paterno=paterno;
    this.adminUpdate.materno=materno;
    this.adminUpdate.email=email;
    this.adminUpdate.celular=celular;
    this.adminUpdate.ocupacion=ocupacion;
    this.adminUpdate.ci=ci;
    this.adminUpdate.expedido=expedido;

    console.log("Click editar"+ item+"  "+this.adminUpdate.item);
    
  }
  editarAdmin(){

      this.cargando=false;

    this._plataforma.putAdmin(this.adminUpdate).subscribe((data:any)=>{
      console.log(data+" edito");
      if(data.respuesta!== "0")
          this.toast.openSnackSuccess();
      else
          this.toast.openSnackFail();
      this.getAdmins();

      this.cargando=false;
    });
  }


  

}
