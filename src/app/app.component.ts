import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PLATAFORMA';
  islog:boolean=false;
  constructor(){
  
  if(localStorage.getItem("tipo")===null){
      localStorage.setItem("tipo","0");
      localStorage.setItem("islog","false");
  }else{
    if(localStorage.getItem("islog")==="false"){
        this.islog=false;
    }else{
        this.islog=true;
    }
  }
  }
}
