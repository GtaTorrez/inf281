import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../servicios/login.service';
@Component({
  selector: 'app-contenedor',
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.css'],
  providers:[LoginService]
})
export class ContenedorComponent implements OnInit {

  constructor(private _loginService:LoginService) { }

  ngOnInit() {
    console.log("ngOnInit se ejecuto esta funcion");
 
  }

}
