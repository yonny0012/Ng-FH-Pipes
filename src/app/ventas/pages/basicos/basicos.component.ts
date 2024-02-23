import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  nombreLower: string = 'yonny';
  nombreUper: string = 'dominguez';
  nombreCompleto: string = this.nombreLower + ' ' + this.nombreUper;

  fecha: Date=new Date();
  
}
