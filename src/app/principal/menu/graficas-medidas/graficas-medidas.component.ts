import { Component, OnInit } from '@angular/core';
import {PlataformaService} from '../../../servicios/plataforma.service';
import {Location} from '../modelosV/location';
import {ToastComponent} from '../../../toast/toast.component';

@Component({
  selector: 'app-graficas-medidas',
  templateUrl: './graficas-medidas.component.html',
  styleUrls: ['./graficas-medidas.component.css'],
  providers:[ToastComponent]
})
export class GraficasMedidasComponent implements OnInit {
   latM: number;
   lngM: number;
  
  btnTR="Activar";
  selectedRadio:any;  
  selectedRadioh:any;
  locations:Location[];
  locacionS:Location=new Location();
  cargando:Boolean=false;
  tR:boolean=false;
  historico:boolean=false;
  tiempoRActive:any;

  lat: number = -16.5 ;
   lng: number = -68.15;
   zoom: number = 11;
   nroChars:number;
   tipoTR = [
    {value: 'Precipitacion', viewValue: 'Precipitacion'},
    {value: 'Temperatura', viewValue: 'Temperatura'},
    
  ];

  datos:number[];
  horas:number[];

  markers: any[] = [
	  {
		  lat: -16.51904930815026,
		  lng: -68.13411712646484,
		  label: 'A',
		  draggable: true
	  },
	  {
		  lat: -16.49896998129291,
		  lng: -68.10896873474121,
		  label: 'B',
		  draggable: false
	  },
	  {
		  lat: -16.500615906214104,
		  lng: -68.14227104187012,
		  label: 'C',
		  draggable: true
	  }
    
  ]
  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 100], label: 'Temperatura'},
    
  ];

  dataChart:any[]=[];
  public lineChartLabels:Array<any> = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio','Agosto',
              'Septiembre','Octubre','Noviembre','Diciembre'];
  public lineChartOptions:any = {
    responsive: true
  };
  
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  constructor(private _plataforma:PlataformaService,
              private toast:ToastComponent) { 
                this.selectedRadio=this.tipoTR[0].value;
            this.nroChars=0;  
            }

  ngOnInit() {
    this.getLocation();
    this.getDatosTRT();
    this.dataChart[0]={data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], label: 'Temperatura'};


  }

  getData(){

  }
  plus(){
    this.zoom++;
  }
  less(){
    this.zoom--;
  }
   clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  mapClicked($event: any) {
    this.latM=$event.coords.lat,
      this.lngM=$event.coords.lng,
    this.markers.push({
      "lat":$event.coords.lat,
      "lng":$event.coords.lng,
       "draggable": true
    });
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }


  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  getLocation(){
    this.cargando=true;
    this._plataforma.getLocacionesMedicio().subscribe((data)=>{
      console.log(data);
      this.locations=data;
      this.cargando=false;
      this.toast.openSnackSuccess();
      console.log("datos Obtenidos"+ this.locations);
    },(err)=>{
      this.toast.openSnackFail();
      this.cargando=false;
    })

    
  } 
  selected(lugar:String,departamento:String){
    this.locacionS.lugar=lugar;
    this.locacionS.departamento=departamento;

  }
  getDatosTRT(){
    this.cargando=true;
    let datos:any;
    this._plataforma.getDatosTiempoReal(this.locacionS.departamento,this.locacionS.lugar,this.selectedRadio).subscribe((data)=>{
      datos=data;
      this.datos=data.datos;
      this.horas=data.horas;
      this.cargando=false;

      this.llenarLabelsBaseTR(this.horas);
      this.adicionarLG(this.cargarData(this.datos,this.selectedRadioh));
      console.log(this.datos +"array de datos")
      
      let _lineChartData:Array<any> = new Array(1);
       _lineChartData[0] = {data: data.datos, label: this.selectedRadioh};
    
    
    this.lineChartData = _lineChartData;
console.log(this.lineChartData);


    },(err)=>{
      console.error(err);
      this.cargando=false;
    this.toast.openSnackFail();
    });
  }
  getDatosTR(){
    this.cargando=true;
    let datos:any;
    this._plataforma.getDatosTiempo(this.locacionS.departamento,this.locacionS.lugar,this.selectedRadio).subscribe((data)=>{
      datos=data;
      this.datos=data.datos;
      this.horas=data.horas;
      this.cargando=false;

      this.llenarLabelsBaseTR(this.horas);
      this.adicionarLG(this.cargarData(this.datos,this.selectedRadioh));
      console.log(this.datos +"array de datos")
      
      let _lineChartData:Array<any> = new Array(1);
       _lineChartData[0] = {data: data.datos, label: this.selectedRadioh};
    
    
    this.lineChartData = _lineChartData;
console.log(this.lineChartData);


    },(err)=>{
      console.error(err);
      this.cargando=false;
    this.toast.openSnackFail();
    });
  }
  
  visibleMap(i:number){
    
    if(this.locations[i].ver)
    this.locations[i].ver=false;
    else
    this.locations[i].ver=true;

}



tiempoReal(){

    this.tiempoRActive = setInterval(()=>{
      this.getDatosTRT();


    },5000)
  
}

llenarLabelsBase(labels:any[]){
  for(var i=0;i<11;i++ ){

    this.lineChartLabels[i]=labels[i];
  }
  
}
llenarLabelsBaseTR(labels:any[]){
  for(var i=0;i<15;i++ ){
        
       let data:string=labels[i]+"";
       let nro:number=data.length-1;
       data.substr(nro-1,nro);
    this.lineChartLabels[i]=data.substr(0,nro-3)+":"+data.substr(nro-3,nro-2)+":"+data.substr(nro-1,nro);
  }
  
}

adicionarLG(nChar:any){
  this.lineChartData[this.nroChars]=nChar;
  this.nroChars++;
}

reducirLG(nChar:any){
  this.nroChars--;
  this.lineChartData[this.nroChars]=null;
  
}


cargarData(datos:any[],tipodato:string):any{
  return {data:datos,label:tipodato};
}



}

interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}