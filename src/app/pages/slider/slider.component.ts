import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'ngx-categoris',
  template: `
    <router-outlet></router-outlet>
  `,
})

export class CategorisComponent implements OnInit {

  logIn:boolean = false;

  constructor(private router:Router) { }

  ngOnInit() {
      // if(this.logIn == false){
      //   this.router.navigate(['/auth/login'])
      // }
  }

}   


