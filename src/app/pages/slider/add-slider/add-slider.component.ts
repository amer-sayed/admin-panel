import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { Settings } from '../data/table';
import { CatService } from '../services/slider.service';
import { MessageService } from '../../global services/message.service';
import { sliderInfo } from '../data/slider-info';
import { LocalDataSource } from 'ng2-smart-table';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Server } from '../../server';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
@Component({
  selector: 'ngx-add-categoris',
  templateUrl: './add-slider.component.html',
  styleUrls: ['./add-slider.component.scss'],

})


export class AddCategorisComponent implements OnInit {


  cat_name:string;

  angForm: FormGroup;

  serve = new Server;
  server = this.serve.server;

  set = new Settings; // smart table settings
  settings = this.set.settings;



  cats: sliderInfo [] = []; // categori object

  filedata: any;

  source: LocalDataSource = new LocalDataSource(); // for smart table

  constructor(
    private windowService: NbWindowService,
    private ts: CatService,
    private msg: MessageService,
    private http: HttpClient,
    private fb: FormBuilder
  )

    {
      

    }

    createForm() {
      this.angForm = this.fb.group({
         name: ["", Validators.required ],
         message: ["", Validators.required ],
         parent_id: ["0"],
      });
    }

  ngOnInit() {
    this.createForm(); 
    this.getAllCat();
    this.msg.getMessage().subscribe((data) => {
       this.getAllCat();
    });
  }


  openWindow(contentTemplate) { // window servics
    this.windowService.open(
      contentTemplate,
      {
        title: 'Add New Slider',
        windowClass: 'width',
        closeOnEsc: true,
      },
    );
    console.log(this.angForm.value.parent_id)
  }

  getAllCat(){ // get all slider function from cat.servics

    this.ts.getCat().subscribe((all) => {
    this.cats = all;
    console.log(this.cats);
    this.source.load(this.cats);
});
  }

   fileEvent(e){
    this.filedata = e.target.files[0];
   }

    addCategori() { // add slider function from cat.servics
      console.log(this.angForm.value.name)
     const  myFormData = new FormData();
     const headers = new HttpHeaders();
     headers.append('Content-Type', 'multipart/form-data');
     headers.append('Accept', 'application/json');
     myFormData.append('image', this.filedata);
     myFormData.append('name', this.angForm.value.name);
    myFormData.append('type', 'slider');
     myFormData.append('parent_id', this.angForm.value.parent_id);
     myFormData.append('message', this.angForm.value.message);
     this.http.post(this.server + "add", myFormData , {
     headers: headers,
     }).subscribe(data => {
     console.log(data);
     this.msg.setMessage('for test');
      });
      console.log(myFormData)
}



  onDeleteConfirm(event){
    this.ts.deleteCat(event.data.id).subscribe((del) => {
      this.msg.setMessage('for test');
    });
  }

  onEditeConfirm(event){
    this.ts.updateCat(event.newData.id, event.newData.name, event.newData.message).subscribe((up) => {
      console.log(up);
      this.msg.setMessage('for test');
    });
  }
} 

