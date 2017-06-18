import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers,URLSearchParams } from '@angular/http'; 
import {Observable} from 'rxjs/Rx';
@Injectable()
export class LoginService {
  
  private port:String=":8081"
  private baseUrl="http://104.236.66.125"+this.port;
  constructor(private http:Http) { }
  
  /*postLogin(datos:any):any {
         // a file was selected
        console.log(datos.username+"  "+datos.password);
         let headers=new Headers();

         let option=new RequestOptions({headers:headers});
          headers.append('Content-Type', 'application/X-www-form-urlencoded');

          let body = "username=" + datos.username + "&password=" + datos.password ;
 
 
            return this.http.post(this.baseUrl+this.port+"/login", body,option).subscribe((response:Response)=>{
                  console.log(response);
                  let data=response.json();
                  return data;
              });

    }
*/
  postDatos(datos):Observable<JSON>{
    let baseUrl=this.baseUrl+"/login";
    let body=JSON.stringify(datos);
    let headers=new Headers({'Content-Type':'application/json'});
    let option=new RequestOptions({headers:headers,withCredentials:true});

    console.log("presiono submit");

    return this.http.post(baseUrl,body,option).map((response:Response)=>{
      console.log(response);  
      let data = response.json();
      return data;
    }).catch((err:any)=>Observable.throw(err));
  }
  getDatosUsuario():Observable<JSON>{
    let baseUrl=this.baseUrl+"/login";
    let headers=new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', '*');
    headers.append('Access-Control-Allow-Methods', '*');
    headers.append('Access-Control-Allow-Credentials', 'true');

    let option=new RequestOptions({headers:headers});
""
    return this.http.get(baseUrl,{headers:headers,withCredentials:true}).map((response:Response)=>{
      let data =response.json();
      console.log('respuesta '+JSON.stringify(data));
      return data;
     }).catch((err:any)=> Observable.throw(err)); 
  }

  cerrarSesion(){
    
    localStorage.removeItem("tipo");
    localStorage.removeItem("user");
    localStorage.removeItem("nombre");
    localStorage.removeItem("islog");
    
    
  /*
    let baseUrl="http://104.236.66.125:8080/logout";
    let headers=new Headers({'Content-Type':'application/json'});
    let option=new RequestOptions({headers:headers});


    return this.http.get(baseUrl).map((response:Response)=>{
      let data =response.json();
      console.log('se sesion terminada '+JSON.stringify(data));

     }).catch((err:any)=> Observable.throw(err)); 
  
  */

  }
}

