import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [],
})
export class OrdenarComponent implements OnInit {
  isMayusculas: boolean = false;
  items: MenuItem[] = [];
  heroes: Heroe[] = [];
  orderBy: string = '';

  ngOnInit() {
    this.items = [
      {
        label: 'Update',
        icon: 'pi pi-refresh',
      },
      {
        label: 'Delete',
        icon: 'pi pi-times',
      },
    ];
    this.heroes = [
      {
        nombre: 'sabatiel',
        vuela: true,
        color: Color.azul,
      },
      {
        nombre: 'la mole',
        vuela: false,
        color: Color.rojo,
      },
      {
        nombre: 'talla bacana',
        vuela: true,
        color: Color.verde,
      },
      {
        nombre: 'el bestia',
        vuela: true,
        color: Color.negro,
      },
      {
        nombre: 'shadow code',
        vuela: false,
        color: Color.rojo,
      },
    ];
  }
  changeCase(): void {
    this.isMayusculas = !this.isMayusculas;
  }
  changeOrder(value: string): void {
    this.orderBy = value;
  }
}
