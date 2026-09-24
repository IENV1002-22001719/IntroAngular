import { Component } from '@angular/core';

@Component({
  selector: 'app-figuras-per',
  standalone: false,
  templateUrl: './figuras-per.html',
})
export class FigurasPer {
  base:string=''
  altura:string=''
  resultado:number=0
  operacion:string='triangulo'

  rectangulo():void{
    this.resultado=parseInt(this.base)*parseInt(this.altura)
  }

  triangulo():void{
    this.resultado=(parseInt(this.base)*parseInt(this.altura))/2
  }

  circulo():void{
    this.resultado=3.1416*(parseInt(this.altura)*parseInt(this.altura))
  }

  pentagono():void{
    this.resultado=(5*parseInt(this.base)*parseInt(this.altura))/2
  } 

    calcularArea(): void { 
      if (this.operacion === 'rectangulo') {
         this.rectangulo(); 
        } 
      else if (this.operacion === 'triangulo') {
         this.triangulo(); 
        }
      else if (this.operacion === 'circulo') { 
        this.circulo();
      } 
    else if 
    (this.operacion === 'pentagono') {
      this.pentagono(); } }
}
