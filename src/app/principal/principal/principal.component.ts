import { Component, OnInit } from '@angular/core';
import {FormComponent} from '../../modulos/login/form/form.component';
import {MdDialog} from '@angular/material';
import { Router } from '@angular/router';
import {LoginService} from '../../servicios/login.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
  providers:[LoginService],
  
})
export class PrincipalComponent implements OnInit {
  nomBtn:String='Ingresar';
  isLog:boolean=false;
  isInde:boolean=true;
  title = 'Miam';
  num:number = 1;
  nombre=localStorage.getItem("nombre");
 clase:String="col-sm-12 main-content";
  constructor(private dialog:MdDialog,
              private router: Router,
              private _loginService:LoginService
              ) {  }

  clickMenu(clic:number){
    this.num = clic; //alert(clic);
  }              

  ngOnInit() {

  this.nombre=localStorage.getItem("nombre");

  if(localStorage.getItem("islog")==="false" || localStorage.getItem("islog")===null){
       
        this.nomBtn='Ingresar';
        this.isLog=false;
        this.isInde=true;
        this.clase="col-sm-12 main-content";
  }else{
    this.nomBtn='Home';
     
    this.isLog=true;
    this.isInde=true;   
    this.clase="col-sm-10 main-content";
    }

  }
  refresh(){
   this.router.navigateByUrl('/');
     this.nomBtn='Home';
      this.isInde=true;  
    if(localStorage.getItem("islog")==="false" || localStorage.getItem("islog")===null ){
    this.isLog=false;
    this.clase="col-sm-12 main-content";  
    }else{
      this.isLog=true;
      this.clase="col-sm-10 main-content";
    }
  }
  openLogin(){

    if(localStorage.getItem("islog")==="false" || localStorage.getItem("islog")===null ){
      let modal=this.dialog.open(FormComponent);
      modal.afterClosed().subscribe(()=>this.refresh());
    }else{
     this.router.navigateByUrl('/');
     this.nomBtn='Home';
      this.isInde=true;  
    this.isLog=true;
    }
    
  }
  cerrarSesion(){
    this.clase="col-sm-12 main-content";
    this.nomBtn='Ingresar';
    this.isLog=false;
    this.isInde=true;
    this._loginService.cerrarSesion();
     this.router.navigateByUrl('/');
    
  }
  onclick(){
    this.isInde=false;
  }
}
