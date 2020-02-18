import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { MessageService } from '../../global services/message.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ViewCell } from 'ng2-smart-table';
import { Router } from '@angular/router';
import { Server } from '../../server';

@Component({
    selector: 'button-view',

    templateUrl:"actoins.component.html"
    // template: `
    
    //   <form>
    //   <input type="file">
    //   <button nbButton outline (click)="onClick()">حولة</button>
    //   </form>
    
    // `,
  })
  export class CustomButtonComponent implements ViewCell, OnInit {
    renderValue: string;
  

    filedata: any;

    serve = new Server;
    server = this.serve.server;

    @Input() value;
  
    constructor(
      private router:Router,   
      private msg: MessageService,
      private http: HttpClient,
      private fb: FormBuilder

      ) {  }
  
     @Input() rowData: any;
  
    @Output() save: EventEmitter<any> = new EventEmitter();
  
    ngOnInit() {
      this.renderValue = this.value;
    }

    fileEvent(e){
      this.filedata = e.target.files[0];
     }
  
    onClick() {
     const  myFormData = new FormData();
     const headers = new HttpHeaders();
     headers.append('Content-Type', 'multipart/form-data');
     headers.append('Accept', 'application/json');
     myFormData.append('image', this.filedata);
     myFormData.append('type', 'slider');
     myFormData.append('id', this.rowData.id);
     this.http.post(this.server + "update", myFormData , {
     headers: headers,
     }).subscribe(data => {
     console.log(data);
     this.msg.setMessage('for test');
      });
      console.log(myFormData)
    }
  }