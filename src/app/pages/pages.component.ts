import { Component, OnInit } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
import { NbLayoutDirectionService } from '@nebular/theme';
@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})


export class PagesComponent implements OnInit{
constructor(private dir:NbLayoutDirectionService,){}
  menu = MENU_ITEMS;

  ngOnInit(): void {
  }
}
