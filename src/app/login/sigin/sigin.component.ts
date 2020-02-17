import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Server } from '../../pages/server';
import { InfoWindowManager } from '@agm/core';
import { Router } from '@angular/router';
import {AuthService} from '../../auth.service';
import { NbThemeService } from '@nebular/theme/services/theme.service'
@Component({
  selector: 'ngx-sigin',
  templateUrl: './sigin.component.html',  
  styleUrls: ['./sigin.component.scss']
})
export class SiginComponent implements OnInit {

 serve = new Server;
 server = this.serve.server;

  email:string;
  password:string;

  constructor(
    private http:HttpClient, 
    private router:Router , 
    private as:AuthService,

    ) { }

  ngOnInit() {
  }

  submit(){
    let info = new UserInfo;
    info.email = this.email;
    info.password = this.password;
    this.http.post(this.server + "test" , info).subscribe(data => {
      console.log(data),
      error => {
        console.log(error)
      }

      if (data == "email not found"){
        alert("email not found");
      }else {
        localStorage.setItem("token", JSON.stringify(data));
        //console.log(localStorage.getItem("token"));
        //this.as.isLoggedIn();
        this.router.navigate(["/"]);
      }
   
    })
  }

  

}


export class UserInfo {
  email:string;
  password:string;
}