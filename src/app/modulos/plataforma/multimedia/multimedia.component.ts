import { Component, OnInit,ElementRef, Input, ViewChild } from '@angular/core';

import {PlataformaService} from '../../../servicios/plataforma.service';

@Component({
  selector: 'app-multimedia',
  templateUrl: './multimedia.component.html',
  styleUrls: ['./multimedia.component.css']
})
export class MultimediaComponent implements OnInit {
  @Input() multiple: boolean = true;
  @ViewChild('fileInput') inputEl: ElementRef;
  public img:any;
  constructor(private plataforma:PlataformaService ) { }

  onSubmit(){
    this.plataforma.uploadImg(this.inputEl);
   /** let res=this._plataforma.postMultimedia(this.img).subscribe((data:any)=>{
      console.log(data);
    });*/

}
 uploadImg() {
    this.plataforma.uploadImg(this.inputEl);
   
    
   
   
   /*
        let inputEl: HTMLInputElement = this.inputEl.nativeElement;
        let fileCount: number = inputEl.files.length;
        console.log(fileCount);
        let formData = new FormData();
        if (fileCount > 0) { // a file was selected
            for (let i = 0; i < fileCount; i++) {
                formData.append('file', inputEl.files.item(i));

             this.http
                .post('http://104.236.66.125:8080/imagen', formData).subscribe(data=>{
                  console.log(JSON.stringify(data)+"  "+i);
                });
               formData = new FormData();   
           }

            
                // do whatever you do...
                // subscribe to observable to listen for response
        }else{
          console.log("no hay archivos detectados");
        }*/
    }

  ngOnInit() {
  }

}
