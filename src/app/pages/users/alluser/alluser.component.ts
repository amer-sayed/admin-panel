import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Settings } from '../data/table';
import { NbWindowService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { MessageService } from '../../global services/message.service';
import { User } from '../data/user';
import { UserService } from '../services/user.service';
import { Server } from '../../server';
import { AuthService } from '../../../auth.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';


@Component({
  selector: 'ngx-alluser',
  templateUrl: './alluser.component.html',
  styleUrls: ['./alluser.component.scss']
})
export class AlluserComponent implements OnInit {


  angForm: FormGroup;
   
  serve = new Server;
  server = this.serve.server;
  

  image:string;
  filedata: any;
  users = []

  set = new Settings; // smart table settings
  settings = this.set.settings;

  source: LocalDataSource = new LocalDataSource(); // for smart table

  constructor(
    private windowService: NbWindowService,
    private http: HttpClient,
    private msg: MessageService,
    private ts:UserService,
    private token:AuthService,
    private fb: FormBuilder
  ) {}

  createForm() {
    this.angForm = this.fb.group({
       name: ['test', Validators.required ],
       email: ['test@test.com', Validators.required ],
       phone: ['+905511111111', Validators.required ],
       password: ['a123456', Validators.required ],
       adress: ['Street addresses: 445 Mount Eden Road, Mount Eden, Auckland', Validators.required ],
       maps: ['https://goo.gl/maps/W9UYenGHngynznBy8', Validators.required ],
       not: ['Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy', Validators.required ],
    });
  }

  ngOnInit() {
   this.createForm(); 
   this.getAllUser();
    this.msg.getMessage().subscribe((data) => {
      this.getAllUser();
      this.users = [];
    });
  }
  getAllUser(){
   
    let token = this.token.token();
    this.http.get<Array<any>>(this.server + "api/users/" + "get?token=" + token
    ).subscribe(auth => {
      console.log(auth)
      auth.forEach(user => {
        this.users.push(user as User);
      });
      this.source.load(this.users);
    });
  }

  openWindow(contentTemplate) { // window servics
    this.windowService.open(
      contentTemplate,
      {
        title: 'Add New User',
        windowClass: 'width',
        closeOnEsc: true,
      },
    );
  }


  onDeleteConfirm(event){
   // console.log(event.data.uid);
    this.ts.deleteUser(event.data.uid).subscribe((del) => {
      this.msg.setMessage('for test');
     
    });
  }


  onEditeConfirm(event){
    this.ts.updateUser(event.newData.uid, event.newData.displayName, event.newData.email, event.newData.phoneNumber).subscribe((up) => {
      console.log(up);
      this.msg.setMessage('for test');
    });
  }


  fileEvent(e){
    this.filedata = e.target.files[0];
   }

  addUser(){

    console.log(this.angForm.value);

      const  myFormData = new FormData();
      const headers = new HttpHeaders();
      let token = this.token.token();
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
      myFormData.append('name', this.angForm.value.name);
      myFormData.append('email', this.angForm.value.email);     
      myFormData.append('phone', this.angForm.value.phone);
      myFormData.append('password', this.angForm.value.password);
      myFormData.append('image', this.filedata);
      myFormData.append('token', token);
      myFormData.append('adresse', this.angForm.value.adress);
      myFormData.append('maps', this.angForm.value.maps);
      myFormData.append('not', this.angForm.value.not);
      this.http.post(this.server + "api/users/" + 'register' , myFormData , {
      headers: headers,
      }).subscribe(data => {
      console.log(data);
      console.log(myFormData)
      this.msg.setMessage('for test');
       });
  }
}

