import { Component } from '@angular/core';

@Component({
  selector: 'app-cacular-dis',
  standalone: false,
  templateUrl: './cacular-dis.html',
})
export class CacularDis {
  x1: string = '';
  y1: string = '';
  x2: string = '';
  y2: string = '';
  resultado:number=0

  calcularDis():void{
    //sqrt para la raiz cuadrada y pow para la potencia
    this.resultado = Math.sqrt(Math.pow(parseInt(this.x2) - parseInt(this.x1), 2) + Math.pow(parseInt(this.y2) - parseInt(this.y1), 2));
  }
  
}
