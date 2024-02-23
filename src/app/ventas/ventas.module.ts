import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';



@NgModule({
  declarations: [
    OrdenarComponent,
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VentasModule { }
