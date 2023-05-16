import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'learning';

  menu: MenuItem[];

  ngOnInit() {
    this.menu = [
      {
        /* icon: 'pi pi-check',
        label: undefined, */
        label: 'menu',
        style: 'text-white',
      },
    ];
  }
}
