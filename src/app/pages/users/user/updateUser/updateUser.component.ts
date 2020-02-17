import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Server } from '../../../server';
import { MessageService } from '../../../global services/message.service';
import { AuthService } from '../../../../auth.service';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'ngx-users',
  templateUrl: './updateUser.component.htm',
  styleUrls: ['./updateUser.component.scss'],
})
export class UpdateUser implements OnInit {

  angForm: FormGroup;
  filedata: any;

  serve = new Server;
  server = this.serve.server;
  password:string = 'a1234567';
  uid:string;
  constructor(private routeAc:ActivatedRoute ,
    private fb: FormBuilder,
    private http:HttpClient,
    private msg: MessageService,
    private token:AuthService,
    private router:Router

    ) { }

  createForm(name , emali , phone , adress , maps , not)  {
    this.angForm = this.fb.group({
       name: [name, Validators.required ],
       email: [emali, Validators.required ],
       phone: [phone, Validators.required ],
       adress: [adress, Validators.required ],
       maps: [maps, Validators.required ],
       not: [not, Validators.required ],
    });
  }

  ngOnInit() {
    
    this.routeAc.paramMap.subscribe(params => {
      console.log(params)
      this.uid = params.get('uid');
      this.createForm(
        params.get('name'),
        params.get('email'),
        params.get('phone'),
        params.get('adress'),
        params.get('maps'),
        params.get('not'),
      ); 
    })
  }

  fileEvent(e){
    this.filedata = e.target.files[0];
   }

  updateUser(){
    console.log(this.angForm.value)
    console.log(this.uid);
    const  myFormData = new FormData();
      const headers = new HttpHeaders();
      let token = this.token.token();
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
      myFormData.append('uid', this.uid);
      myFormData.append('displayName', this.angForm.value.name);
      myFormData.append('email', this.angForm.value.email);     
      myFormData.append('phoneNumber', this.angForm.value.phone);
      myFormData.append('image', this.filedata);
      myFormData.append('token', token);
      myFormData.append('adress', this.angForm.value.adress);
      myFormData.append('maps', this.angForm.value.maps);
      myFormData.append('not', this.angForm.value.not);
      this.http.post(this.server + "api/users/" + 'update' , myFormData , {
      headers: headers,
      }).subscribe(data => {
      console.log(data);
      console.log(myFormData)
      this.msg.setMessage('for test');
       });

      this.router.navigate(['/pages/users/add'])
  }

  changePassword(){
    const  myFormData = new FormData();
      const headers = new HttpHeaders();
      let token = this.token.token();
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
      myFormData.append('uid', this.uid);
      myFormData.append('token', token);
      myFormData.append('password', this.password);
      console.log(myFormData)
      this.http.post(this.server + "api/users/change" , myFormData , {
      headers: headers,
      }).subscribe(data => {
      console.log(data);
     
       });

      //this.router.navigate(['/pages/users/add'])
  }
}

