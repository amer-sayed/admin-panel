import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Server } from './pages/server';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  serve = new Server;
  server = this.serve.server;



  constructor(private router:Router,private http:HttpClient) { }



isLoggedIn():boolean{
  let token = localStorage.getItem('token');
  if(token){
    let tokenPost = new Token;
    tokenPost.token = token;       
    this.http.post(this.server + "rToken" , tokenPost).subscribe(res => {
      if(res === "not found"){
        localStorage.removeItem('token');
        console.log();   
      }else{
        localStorage.setItem("status", "true");
      } 
    });
    let status = localStorage.getItem("status");
    if(status){
      return true;
    }else{
      this.router.navigate(["/user/login"]);
      console.log("delil ");   
      return false;
    }
  }else{
   this.router.navigate(["/user/login"]);
   console.log();   
   return false;
   }
  }

  token(){
   let token = localStorage.getItem('token');
   token = JSON.parse(token);
   return token;
  }
}



export class Token {
  token:string;
}