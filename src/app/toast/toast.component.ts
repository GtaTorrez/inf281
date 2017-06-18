import { Component} from '@angular/core';
import {MdSnackBar} from '@angular/material';
@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent  {


 constructor(public snackBar: MdSnackBar) {}

 

  openSnackSuccess() {
    this.snackBar.open(" Realizado Correctamente","", {
      duration: 5000,
    });
  }
  openSnackFail() {
    this.snackBar.open("No Realizado","", {
      duration: 5000,
    });
  }
   openSnackLoading() {
    this.snackBar.open("Cargando contenido","", {
      duration: 5000,
    });
  }

  openSnackFailLogin() {
    this.snackBar.open("Nombre de usuario o contraseña erroneos","", {
      duration: 5000,
    });
  }
}
