import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
    `
      b,
      span {
        color: var(--text-color-secondary);
      }
    `,
  ],
})
export class NoComunesComponent {
  // i18nSelect
  nombre: string = 'yonny';
  genero: string = 'masculino' || 'femenino';
  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  // i18nPlural
  clientes: string[] = ['maria', 'lara', 'marco', 'la mole'];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    other: 'tenemos # clientes esperando.',
  };
  cambiarPersona() {
    this.nombre = 'sulennis';
    this.genero = 'femenino';
  }
  borrarCliente() {
    this.clientes.pop();
  }
  // KeyValuePipe
  persona = {
    mombre: 'yonny',
    edad: '23',
    carrera: 'ingenieria en ciencias informaticas',
    direccion: 'Limones de maisi, guantanamo, cuba',
  };
  // Json Pipe
  heroes = [
    {
      nombre: 'superman',
      vuela: true,
    },
    {
      nombre: 'robbin',
      vuela: false,
    },
    {
      nombre: 'aquaman',
      vuela: false,
    },
  ];
  // Async Pipe
  miObservable = interval(1000);
  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de la promesa.');
    }, 3500);
  });
}
