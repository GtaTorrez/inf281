import { Component, OnInit } from '@angular/core';
import {Leyes} from '../modelos/leyes';
import {Articulo} from '../modelos/articulo';
import {PlataformaService} from '../../../servicios/plataforma.service';
@Component({
  selector: 'app-leyes',
  templateUrl: './leyes.component.html',
  styleUrls: ['./leyes.component.css']
})
export class LeyesComponent implements OnInit {
  ley:Leyes=new Leyes();
  articulo:Articulo = new Articulo();
  leyCambio:Leyes=new Leyes();
  articuloCambio:Articulo = new Articulo();
  idley:String;

  numArt:number;
  
  leyes:Leyes[];
  articulos:any[];


  constructor(private _plataforma:PlataformaService) { }

  ngOnInit() {
  }
  onSubmit(){
    this.postLey();
    this.getLeyes();
  }

  onSubmitArt(){
    this.postArticulo(this.idley);
    this.getArticulo(this.idley);
  }

  postLey(){

    let res=this._plataforma.postLeyes(this.ley).subscribe((data:any)=>{
      console.log(data);
      this.getLeyes();
    });
  }
  postArticulo(idley:String){
    

    let datas:any={"IDLey":idley,"num":this.articulo.num,"contenido":this.articulo.contenido};
    this._plataforma.postArticulo(datas).subscribe((data:any)=>{
      console.log("Registrado");
      this.getArticulo(idley);
    });

    this.articulo=new Articulo();
  }

  deleteLey(IDLey:String ){
    console.log("parametro "+IDLey);
    let dataj:any={"IDLey":IDLey};
    let res=this._plataforma.deleteLeyes(dataj).subscribe((data:any)=>{
      this.getLeyes();
    });
  }
  deleteArticulo(IDLey:String,num:number ){
    console.log("parametro "+IDLey);
    let dataj:any={"IDLey":IDLey,"num":num};
    let res=this._plataforma.deleteArticulo(dataj).subscribe((data:any)=>{
      this.getArticulo(this.idley);
    });
  }

  getLeyesArt(){
    this.getLeyes();    
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

   /* console.log("Con Parametros ")
    this._plataforma.getArticulos({"IDLey":idley}).subscribe((datax:any)=>{
      let data = JSON.parse(datax);
      this.articulos=data._body;
      console.log(datax.json());
      console.log(this.articulos.length+"Hola "+data._body.lenght);
      console.log(data);

      this.articulos=data._body;  
      });

      */
  }

  editarLey(IDLey:String,resumen:String,Fecha:String){
    this.idley=IDLey;

    this.leyCambio.IDLey=IDLey;
    this.leyCambio.resumen=resumen;
    this.leyCambio.Fecha=Fecha;
    console.log("Click editar"+ IDLey);
    this.getArticulo(this.idley);
  }
  editarArticulo(num:number,contenido:String){
    this.numArt=num;
    this.articuloCambio.num=num;
    this.articuloCambio.contenido=contenido;
    console.log("Click editar art");
  }
  
  editarLeyes(){
    let datas:any={"IDLey":this.idley,"NewFecha":this.leyCambio.Fecha,"NewResumen":this.leyCambio.resumen};
    this._plataforma.putLeyes(datas).subscribe((data:any)=>{
      this.getLeyes();
    });
  }
  editarArticulos(){
    let datas:any={"IDLey":this.idley,"num":this.numArt,"NewNum":this.articuloCambio.num,"NewContenido":this.articuloCambio.contenido};
    this._plataforma.putArticulo(datas).subscribe((data:any)=>{
      
      console.log(JSON.stringify(data));
      this.getArticulo(this.idley);

    });
  }

}
