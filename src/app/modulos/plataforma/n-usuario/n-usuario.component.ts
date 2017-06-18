import { Component, OnInit } from '@angular/core';
import {Cliente} from '../modelos/cliente';
import {PlataformaService} from '../../../servicios/plataforma.service';
@Component({
  selector: 'app-n-usuario',
  templateUrl: './n-usuario.component.html',
  styleUrls: ['./n-usuario.component.css']
})
export class NUsuarioComponent implements OnInit {
  cliente:Cliente=new Cliente();
  clienteUpdate:Cliente=new Cliente();
  clientes:Cliente[];


  constructor(private _plataformaService:PlataformaService) { }

  ngOnInit() {
  }
  ngOnSubmit(){

  }

  onSubmit(){
    this.postUsuario();
  }
  postUsuario(){
      this._plataformaService.postUsuario(this.cliente).subscribe(data =>{
      console.log(data);

    })
  
  }
  getUsuarios(){
    this._plataformaService.getUsuarios().subscribe(data=>{
      this.clientes=data;
    })
  }

  deleteUsuario(username:String ){
    console.log("parametro "+username);
    let dataj:any={"username":username};
    let res=this._plataformaService.deleteAdmin(dataj).subscribe((data:any)=>{
      console.log(data);
      this.getUsuarios();
    });
  }

  editar(username:String,email:String,nombre:String,paterno:String,materno:String,fecha_nacimiento:String,celular:String){
    this.clienteUpdate.username=username;
    this.clienteUpdate.nombre=nombre;
    this.clienteUpdate.paterno=paterno;
    this.clienteUpdate.materno=materno;
    this.clienteUpdate.email=email;
    this.clienteUpdate.celular=celular;
    this.clienteUpdate.fecha_nacimiento=fecha_nacimiento;

    console.log("Click editar"+ nombre);
    
  }
  editarUsuario(){
    
    this._plataformaService.putUsuario(this.clienteUpdate).subscribe((data:any)=>{
      console.log(data+" edito");
      
      this.getUsuarios();
    });
  }

}
