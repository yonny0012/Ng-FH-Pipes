import { Component } from '@angular/core';

import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  items!: MenuItem[];

  ngOnInit() {
    this.items = [];
  }

}
