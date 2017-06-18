import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  link:string[]=["https://image.jimcdn.com/app/cms/image/transf/none/path/s4443e23508066ba4/image/ife03404320ad0a43/version/1447974451/image.jpg",
    "http://cherlyxto7.galeon.com/dokip.jpg",
    "http://d2ouvy59p0dg6k.cloudfront.net/img/eh_banner2_508508.jpg",
    "http://www.ofixpres.com/Images/PlanetaVerde/banner.png",
    ];
  slideIndex:number;
  ngOnInit() {
    this.slideIndex = 0;  }
  siguiente(){
    this.slideIndex++;
    this.slideIndex %= this.link.length;
  }
}
