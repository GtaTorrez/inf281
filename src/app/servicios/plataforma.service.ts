import { Component,Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers,URLSearchParams } from '@angular/http'; 
import {Observable} from 'rxjs/Rx';
import {Evento} from '../modulos/plataforma/modelos/evento';
import {Cliente} from '../modulos/plataforma/modelos/cliente';
import {Admin} from '../modulos/plataforma/modelos/admin';
import {Contenido} from '../modulos/plataforma/modelos/contenido';
import {Articulo} from '../modulos/plataforma/modelos/articulo';
import {Leyes} from '../modulos/plataforma/modelos/leyes';
import {Tutorial} from '../modulos/plataforma/modelos/tutorial';


@Injectable()
export class PlataformaService {

  private port:String=":8081";
  private baseUrl:String="http://104.236.66.125"+this.port;
  private headers=new Headers({'Content-Type':'application/json'});
  private option=new RequestOptions({headers:new Headers({'Content-Type':'application/json'})});

  constructor(private http:Http) { }
  //para evento
  getEventos():Observable<Evento[]>{
    let url=this.baseUrl+"/event";
    return this.http.get(url,this.option).map((res:Response)=>{
      let data = res.json();
      console.log(JSON.stringify(data));
      return data;
    }).catch((err)=>Observable.throw(err));

  }
  getEventosI():Observable<Evento[]>{
    let url=this.baseUrl+"/evento";
    return this.http.get(url,this.option).map((res:Response)=>{
      let data = res.json();
      console.log(JSON.stringify(data));
      return data;
    }).catch((err)=>Observable.throw(err));

  }
  getRetos():Observable<Evento[]>{
    let url=this.baseUrl+"/retos";
    return this.http.get(url,this.option).map((res:Response)=>{
      let data = res.json();
      //console.log(JSON.stringify(data));
      return data;
    }).catch((err)=>Observable.throw(err));

  }

  postEventos(datos:Object):Observable<Object>{
    let body=JSON.stringify(datos);
    console.log(JSON.stringify(datos));
    let turl=this.baseUrl+"/event";
    return this.http.post(turl,body,this.option).map((res:Response)=>{
      let data = res.json();
      console.log("click submit");
      return data;
    }).catch((err)=>Observable.throw(err));

  }

  putEventos(datos:Object):Observable<Object>{
    let body=JSON.stringify(datos);

    let turl=this.baseUrl+"/event";
    return this.http.put(turl,body,this.option).map((res:Response)=>{
      let data = res.json();
      console.log("click submit");
      return data;
    }).catch((err)=>Observable.throw(err));

  }

  deleteEvento(datos:Object):Observable<Object>{

    let body=JSON.stringify(datos);
    console.log(JSON.stringify(datos));

    let turl=this.baseUrl+"/event";

    return this.http.delete(turl, new RequestOptions({
        headers: this.headers,
        body: body
      })).map((res:Response)=>{
      let data = res.json();
      console.log("click eliminar");
      return data;
    }).catch((err)=>Observable.throw(err));
 }
//MULTIMEDIA
  postMultimedia(dato:Object):Observable<Object>{
    let body=dato;

    let turl=this.baseUrl+"/imagene";
    return this.http.post(turl,body,this.option).map((res:Response)=>{
      let data = res.json();
      console.log("click submit");
      return data;
    }).catch((err)=>Observable.throw(err));

  }

  //para usuarios 

    getUsuarios():Observable<Cliente[]>{
        let url=this.baseUrl+"/user";
        return this.http.get(url,this.option).map((res:Response)=>{
          let data = res.json();
          console.log(JSON.stringify(data));
          return data;
        }).catch((err)=>Observable.throw(err));

    }

    postUsuario(datos:Object):Observable<Object>{
        let body=JSON.stringify(datos);
        console.log(body);
        let turl=this.baseUrl+"/user/signup";
        return this.http.post(turl,body,this.option).map((res:Response)=>{
          let data = res.json();
        console.log(data);
          console.log("click submit");
          return data;
        }).catch((err)=>Observable.throw(err));
    }

    putUsuario(datos:Object):Observable<Object>{
        let body=JSON.stringify(datos);
        let turl=this.baseUrl+"/user";
        return this.http.put(turl,body,this.option).map((res:Response)=>{
          let data = res.json();
          console.log("click submit");
          return data;
        }).catch((err)=>Observable.throw(err));
      }

      deleteUsuario(datos:Object):Observable<Object>{

        let body=JSON.stringify(datos);
        console.log(JSON.stringify(datos));

        let turl=this.baseUrl+"/user";

        return this.http.delete(turl, new RequestOptions({
            headers: this.headers,
            body: body
          })).map((res:Response)=>{
          let data = res.json();

          return data;
        }).catch((err)=>Observable.throw(err));
    }
///administrador
getAdmin():Observable<Admin[]>{
    let url=this.baseUrl+"/admin";
    return this.http.get(url,this.option).map((res:Response)=>{
      let data = res.json();
      console.log("click get");
      return data;
    }).catch((err:any)=>Observable.throw(err));

  }

  postAdmin(datos:Object):Observable<Object>{
    let body=JSON.stringify(datos);

    let turl=this.baseUrl+"/admin/signup";
    return this.http.post(turl,body,this.option).map((res:Response)=>{
      let data = res.json();
      console.log(res);
      console.log("click post" + JSON.stringify(data));
      return data;
    }).catch((err)=>Observable.throw(err));

  }

  putAdmin(datos:Object):Observable<Object>{
    let body=JSON.stringify(datos);
    console.log("Body put admin "+ body);
    let turl=this.baseUrl+"/admin";
    return this.http.put(turl,body,this.option).map((res:Response)=>{
      let data = res.json();
      console.log("click put"+JSON.stringify(data));
      return data;
    }).catch((err)=>Observable.throw(err));

  }

  deleteAdmin(datos:Object):Observable<Object>{

    let body=JSON.stringify(datos);
    console.log(JSON.stringify(datos));

    let turl=this.baseUrl+"/admin";

    return this.http.delete(turl, new RequestOptions({
        headers: this.headers,
        body: body
      })).map((res:Response)=>{
      let data = res.json();
      console.log("click eliminar");
      return data;
    }).catch((err)=>Observable.throw(err));
  }
 //contenido


  postContenido(data:Object):Observable<Object>{
    let body=JSON.stringify(data);
    let turl=this.baseUrl+"/informacion";

    return this.http.post(turl,body,this.option).map((res:Response)=>{
      let data=res.json();
      console.log(JSON.stringify(data));
      return data;
    }).catch(err=>Observable.throw(err));

  }

  getInformacion():Observable<Contenido[]>{
  let url = this.baseUrl+"/informacion";
    return this.http.get(url,this.option).map((res:Response)=>{
      let data = res.json();
      return data;
    }).catch(err=>Observable.throw(err));
  }

  getCuriosidad():Observable<Contenido[]>{
  let url = this.baseUrl+"/curiosidad";
    return this.http.get(url,this.option).map((res:Response)=>{
      let data = res.json();
      return data;
    }).catch(err=>Observable.throw(err));
  }

  

  
  putContenido(datos){
    let body=JSON.stringify(datos);

    let turl=this.baseUrl+"/informacion";
    return this.http.put(turl,body,this.option).map((res:Response)=>{
      let data = res.json();
      console.log("click submit"); 
      return data;
    }).catch((err)=>Observable.throw(err));
  }  

   deleteContenido(datos:Object):Observable<Object>{

    let body=JSON.stringify(datos);
    console.log(JSON.stringify(datos));

    let turl=this.baseUrl+"/informacion";

    return this.http.delete(turl, new RequestOptions({
        headers: this.headers,
        body: body
      })).map((res:Response)=>{
      let data = res.json();
      console.log("click eliminar");
      return data;
    }).catch((err)=>Observable.throw(err));
  }
  // con imagenes tutorial paso
  getTutorialessi():Observable<Contenido[]>{
  let url = this.baseUrl+"/tutorial" ;
    return this.http.get(url,this.option).map((res:Response)=>{
      let data = res.json();
      return data;
    }).catch(err=>Observable.throw(err));
  }
  
  getTutorialesci():Observable<Contenido[]>{
  let url = this.baseUrl+"/tutoria" ;
    return this.http.get(url,this.option).map((res:Response)=>{
      let data = res.json();
      return data;
    }).catch(err=>Observable.throw(err));
  }
  getTutorialPasos(Titulo:string):Observable<Tutorial>{
    let url=this.baseUrl+"/tutorial";

    return this.http.post(url,{"Titulo":Titulo},this.option).map((res:Response)=>{
      let data=res.json();
      console.log(JSON.stringify(data));
      return data;
    }).catch((err)=>{return err});
  }
//subir paso tutoria
 uploadImgPasoTutorial(inputElm: any,Titulo:String,subTitulo:String,paso:String,resumen:String):Observable<any> {
        let inputEl: HTMLInputElement = inputElm.nativeElement;
        let fileCount: number = inputEl.files.length;
        console.log(fileCount);
        let formData = new FormData();
        let res:any;
         // a file was selected
                formData.append('file', inputEl.files.item(0));
                formData.append("Titulo",Titulo);
                formData.append("subTitulo",subTitulo);
                formData.append("paso",paso);
                formData.append("resumen",resumen);
                
                
             return this.http.post(this.baseUrl+'/imagen/informacion', formData).map(data=>{
                  console.log(JSON.stringify(data)+"  ");
                  return data.json();
            },(err)=>{return err});
            

                // do whatever you do...
                // subscribe to observable to listen for response
        
    } 

updateImgPasoTutorial(Titulo:String,subTitulo:String,paso:String,enlace:String,resumen:String,inputElm: any,):Observable<any> {
        let inputEl: HTMLInputElement = inputElm.nativeElement;
        let fileCount: number = inputEl.files.length;
        console.log(fileCount);
        let formData = new FormData();
        
                formData.append('file', inputEl.files.item(0));
                formData.append("Titulo",Titulo);
                formData.append("subTitulo",subTitulo);
                formData.append("paso",paso);
                formData.append("resumen",resumen);
                formData.append("enlace",enlace);
             return this.http.put(this.baseUrl+'/imagen/informacion', formData).map(data=>{
                  console.log(JSON.stringify(data)+"  ");
                  return data.json();
                }).catch((err)=>{return err;});

        
    } 

    //eliminar paso
    deletePaso(Titulo:String,paso:String):Observable<any>{
      let url=this.baseUrl+"/paso";
      let body=JSON.stringify({"Titulo":Titulo,"paso":paso});
      return this.http.post(url,body,this.option).map((res:Response)=>{
        return res.json();
      }).catch((err)=>{return err;})
    }



 /// Leyes
 getLeyes():Observable<Leyes[]>{
    let url=this.baseUrl+"/leyes";
    return this.http.get(url,this.option).map((res:Response)=>{
      let data = res.json();
      //console.log(JSON.stringify(data));
      return data;
    }).catch((err)=>Observable.throw(err));

  }

  postLeyes(datos:Object):Observable<Object>{
    let body=JSON.stringify(datos);

    let turl=this.baseUrl+"/leyes";
    return this.http.post(turl,body,this.option).map((res:Response)=>{
      let data = res.json();
      console.log("click submit");
      return data;
    }).catch((err)=>Observable.throw(err));

  }

  putLeyes(datos:Object):Observable<Object>{
    let body=JSON.stringify(datos);

    let turl=this.baseUrl+"/leyes";
    return this.http.put(turl,body,this.option).map((res:Response)=>{
      let data = res.json();
      console.log("click submit");
      return data;
    }).catch((err)=>Observable.throw(err));

  }

  deleteLeyes(datos:Object):Observable<Object>{

    let body=JSON.stringify(datos);
    console.log(JSON.stringify(datos));

    let turl=this.baseUrl+"/leyes";

    return this.http.delete(turl, new RequestOptions({
        headers: this.headers,
        body: body
      })).map((res:Response)=>{
      let data = res.json();
      console.log("click eliminar");
      return data;
    }).catch((err)=>Observable.throw(err));
 } 

//articulos
getArticulos(data:any):Observable<any>{
    let turl=this.baseUrl+"/art1";
    let xbody=JSON.stringify(data);
    console.log(" "+xbody);

    let params: URLSearchParams = new URLSearchParams();
      params.set('IDLey', data.IDLey);
      
 //Http request-
      return this.http.get(turl, {params:params,headers:this.headers}).map((res:any)=>{
        return res;
      }).catch(res=>Observable.throw(res));

    /*return this.http.get(turl, new RequestOptions({
        headers: this.headers,
        body: xbody
      })).map((res:Response)=>{
      let data = res.json();
      console.log("click get Articulos  "+ JSON.stringify(data) );
      return data;
    }).catch((err)=>Observable.throw(err));*/

  }

 getArticulo(data:any):Observable<any>{
    let turl=this.baseUrl+"/art1";
    let xbody=JSON.stringify(data);
    console.log(" "+xbody);

    let params: URLSearchParams = new URLSearchParams();
      params.set('IDLey', data.IDLey);
      
 //Http request-
      return this.http.get(turl, {
      search: params
      }).map((res:any)=>{
        return res;
      }).catch(res=>Observable.throw(res));

    /*return this.http.get(turl, new RequestOptions({
        headers: this.headers,
        body: xbody
      })).map((res:Response)=>{
      let data = res.json();
      console.log("click get Articulos  "+ JSON.stringify(data) );
      return data;
    }).catch((err)=>Observable.throw(err));*/

  }

  postArticulo(datos:Object):Observable<Object>{
    let body=JSON.stringify(datos);
    console.log(body);
    let turl=this.baseUrl+"/art";
    return this.http.post(turl,body,this.option).map((res:Response)=>{
      let data = res.json();
      console.log("click submit");
      return data;
    }).catch((err)=>Observable.throw(err));

  }

  putArticulo(datos:Object):Observable<Object>{
    let body=JSON.stringify(datos);

    let turl=this.baseUrl+"/art";
    return this.http.put(turl,body,this.option).map((res:Response)=>{
      let data = res.json();
      console.log("click submit");
      return data;
    }).catch((err)=>Observable.throw(err));

  }

  deleteArticulo(datos:Object):Observable<Object>{

    let body=JSON.stringify(datos);
    console.log(JSON.stringify(datos));

    let turl=this.baseUrl+"/art";

    return this.http.delete(turl, new RequestOptions({
        headers: this.headers,
        body: body
      })).map((res:Response)=>{
      let data = res.json();
      console.log("click eliminar"+ data);
      return data;
    }).catch((err)=>Observable.throw(err));
 } 

 uploadImgEnlace(inputElm: any,clave:String,valor:String):Observable<any> {
        let inputEl: HTMLInputElement = inputElm.nativeElement;
        let fileCount: number = inputEl.files.length;
        console.log(fileCount);
        let formData = new FormData();
        let res:any;
        if (fileCount > 0) { // a file was selected
            for (let i = 0; i < fileCount; i++) {
                formData.append('file', inputEl.files.item(i));
                console.log(clave+"  "+valor);
                formData.append(clave,valor);
                
             this.http
                .post(this.baseUrl+'/imagen/event', formData).subscribe(data=>{
                  console.log(JSON.stringify(data)+"  "+i);
              });
               formData = new FormData();   
           }

            return res;
                // do whatever you do...
                // subscribe to observable to listen for response
        }else{
          console.log("no hay archivos detectados");
          return res;
        }
    }
    uploadImg(inputElm: any) {
        let inputEl: HTMLInputElement = inputElm.nativeElement;
        let fileCount: number = inputEl.files.length;
        console.log(fileCount);
        let formData = new FormData();
        let res:any;
        if (fileCount > 0) { // a file was selected
            for (let i = 0; i < fileCount; i++) {
                formData.append('file', inputEl.files.item(i));

             this.http
                .post(this.baseUrl+'/imagen', formData).subscribe(data=>{
                  console.log(JSON.stringify(data)+"  "+i);
                });
               formData = new FormData();   
           }
        }else{
          console.log("no hay archivos detectados");
        }
    }
/// get datos temperatura
    
    postTemperaturaMesAnio(data:any):Observable<any>{

    let body=JSON.stringify(data);
    return this.http.post(this.baseUrl+"/temperatura/mes",body,this.option).map(datas=>{
      console.log(JSON.stringify(datas.json()))
      return datas.json();
    }); 


  }



// real time
getLocacionesMedicio():Observable<any>{
  
  return this.http.get(this.baseUrl+"/location",this.option).map((res:Response)=>{
    console.log(res);
    return res.json();
  },(err)=>{return err;})
  
}
getDatosTiempo(departamento:String,lugar:String,tipo:String):Observable<any>{

let body:any={departamento,lugar,tipo};
console.log(body);
return this.http.post(this.baseUrl+"/real-time",body,this.option).map((res:Response)=>{
  console.log(JSON.stringify(res.json()));
  return res.json();
}).catch((err)=>{return err});
}

getDatosTiempoReal(departamento:String,lugar:String,tipo:String):Observable<any>{

let body:any={departamento,lugar,tipo};
console.log(body);
return this.http.post(this.baseUrl+"/real-time",body,this.option).map((res:Response)=>{
  console.log(JSON.stringify(res.json()));
  return res.json();
}).catch((err)=>{return err});
}





}

