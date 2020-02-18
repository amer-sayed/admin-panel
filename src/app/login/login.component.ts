import { Component, OnInit, ElementRef  } from '@angular/core';
import { NbThemeService } from '@nebular/theme/services/theme.service';
import { Meta } from '@angular/platform-browser';
@Component({
  selector: 'ngx-login',
  template: `
  
  <ngx-three-columns-layout>
    <router-outlet></router-outlet>
  </ngx-three-columns-layout>

  `,

})
export class LoginComponent implements OnInit {

  constructor(private el: ElementRef,private meta: Meta) { }

  ngOnInit() {

  }

}
