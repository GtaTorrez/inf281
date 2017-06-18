import { Component,OnInit} from '@angular/core';
import {Leyes} from '../../plataforma/modelos/leyes';
import {Articulo} from '../../plataforma/modelos/articulo';
import {PlataformaService} from '../../../servicios/plataforma.service';

@Component({
  selector: 'app-leyes',
  templateUrl: './leyesV.component.html',
  styleUrls: ['./leyesV.component.css']
})
export class LeyesVComponent implements OnInit{
ley:Leyes=new Leyes();
  articulo:Articulo = new Articulo();
  leyCambio:Leyes=new Leyes();
  articuloCambio:Articulo = new Articulo();
  idley:String;

  numArt:number;
  
  leyes:Leyes[];
  articulos:any[];


  constructor(private _plataforma:PlataformaService) { }

  ngOnInit(){
    this._plataforma.getLeyes().subscribe((data:any)=>{
      this.leyes=data;
      this.getArticulo(this.leyes[0].IDLey);
    });
    
}
  
  getLeyes(){
    this._plataforma.getLeyes().subscribe((data:any)=>{
      this.leyes=data;
    });
  }
  getArticulo(idley:String){
      this._plataforma.getArticulo({"IDLey":idley}).subscribe((datax:any)=>{

      let da:any[];
      da=datax.json();
      this.articulos=da;
      for(let i=0;i<this.articulos.length;i++){
        console.log(this.articulos[i].num+" "+this.articulos[i].contenido)
      }
      

    });

  }

}
