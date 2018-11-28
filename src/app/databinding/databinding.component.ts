import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
 
  valueblank = ""
  value:string = ""
  cadenatecleada: string = ""   
  color:string = "blue"
  pixeles:string = "20px"
  style:boolean
  texto: string =  "SI"
  estadoPositivo: boolean = true

  constructor() { }

  ngOnInit() {

  }

  cambiaEstado() {
    this.texto = (this.estadoPositivo) ?  "NO" : "SI";  
    this.estadoPositivo = !this.estadoPositivo; 
  }

  keyPresion(event: any){
    this.cadenatecleada += event.target.value + "|" 
  } 

  onEnter(value:string){
     this.value += value 
     this.valueblank = ""
  }
}
