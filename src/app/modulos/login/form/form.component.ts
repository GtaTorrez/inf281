import { Component,Output,EventEmitter, OnInit } from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {LoginService} from '../../../servicios/login.service';
import {Router} from '@angular/router';
import {ToastComponent} from '../../../toast/toast.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers :[LoginService,ToastComponent]
})
export class FormComponent implements OnInit {

off:String="off";
  public log:any={"username":"","password":""};
  wait:Boolean=false;

  constructor(private _loginService:LoginService,
              public modal:MdDialogRef<FormComponent>,
              private router: Router,
              private toast:ToastComponent
             )
   { 
    if(localStorage.getItem("tipo")===null){
      localStorage.setItem("tipo","0");
      localStorage.setItem("islog","false");
  }
  }
  onSubmit(){
  this.postUser();
  //this.postUserF();

       // this._loginService.getDatos().subscribe(data=>{
     // console.log(data);
    //});
    
  }
   ngOnInit() {

    
   
  }
  postUser(){
    this.wait=true;
    let res=this._loginService.postDatos(this.log)
    .subscribe((data:any)=>{
      console.log("hola")
      console.log(data);

        console.log("respuesta submit"+JSON.stringify(data));
          if(data.tipo!=="0"){
            localStorage.setItem("tipo",data.tipo);
            localStorage.setItem("user",data.user);
            localStorage.setItem("nombre",data.nombre);
            localStorage.setItem("islog","true");
            this.modal.close();
            this.wait=false;

           // location.reload(true);
         }else{
          this.modal.close();
          this.toast.openSnackFailLogin();

         }
        
    },(err:any)=>{this.modal.close();
          this.toast.openSnackFailLogin();
          console.error(err);
    }
    );

  }
  postUserF(){
    //this._loginService.postLogin(this.log);
    //this._loginService.getDatosUsuario();
    this._loginService.postDatos(this.log);
    this._loginService.getDatosUsuario(); 
         

  }
  getUsers(){
   this._loginService.getDatosUsuario().subscribe(data=>{
    console.log("llego respuesta" +data);
    });
    
  }
  cerrarSesion(){
    this._loginService.cerrarSesion();
    this.router.navigateByUrl('/');
  }

 

}

