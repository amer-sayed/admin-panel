import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Server } from '../../server';


@Component({
  selector: 'ngx-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  
})



export class UserComponent implements OnInit {


  name:string;
  email:string;
  phone:string;
  adress:string;
  maps:string;
  not:string;
  uid:string;
  informations = [];

  serve = new Server;
  server = this.serve.server;

  constructor(private routeAc: ActivatedRoute, private http:HttpClient, private router:Router) { }

  ngOnInit() {
    this.routeAc.paramMap.subscribe(params => {

      this.name = params.get('name');
      this.email = params.get('email');
      this.phone = params.get('phone');
  
     this.uid =  params.get('uid');
     console.log(params.get('name'));
     this.getUser(this.uid);
     this.informations = [];
    });
  }


  getUser(uid){
    this.http.get<Array<any>>(this.server + "userInformation/" + uid).subscribe(data => {
      this.adress = data['adress'];
      this.not = data['not'];
      this.maps = data['maps'];
    })
  }
  //:uid/:name/:email/:phone/:aderss/:maps/:not
  edite(){
    this.router.navigate(['/pages/users/update/' + this.uid + '/' + this.name + '/' + this.email + '/' + this.phone + '/' + this.adress + '/' + this.maps + '/' + this.not])

    
  }
}

