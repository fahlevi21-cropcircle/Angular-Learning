import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  menu: MenuItem[];

  constructor() {}

  ngOnInit() {
    this.menu = [
      {
        label: 'Dashboard',
        icon: 'pi pi-home',
      },
    ];
  }
}
