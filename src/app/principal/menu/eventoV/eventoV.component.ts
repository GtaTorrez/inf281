import { Component, OnInit } from '@angular/core';
import { PlataformaService } from '../../../servicios/plataforma.service';
import { Evento } from '../modelosV/evento';

@Component({
  selector: 'app-evento',
  templateUrl: './eventoV.component.html',
  styleUrls: ['./eventoV.component.css']
})

export class EventoVComponent implements OnInit {
  eve:Evento=new Evento();
  evet:Evento[];
  clicked:boolean=false;
  constructor(private menu:PlataformaService) {
    this.clicked=false;
    
   }
  getEventos(){
    //alert("getEve");
    let res=this.menu.getEventosI().subscribe((data:any)=>{
        this.evet=data;
    });
  }
  ngOnInit() {
      let res=this.menu.getEventosI().subscribe((data:any)=>{
        this.evet=data;

    });
      
  }
  verEvento(i:number){
    this.clicked=true;
    this.eve=this.evet[i];
  }
}
