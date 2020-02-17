import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Server } from '../../../server';
import { MessageService } from '../../../global services/message.service';
import { AuthService } from '../../../../auth.service';
import { Route } from '@angular/compiler/src/core';
import { catInfo } from '../../../categoris/data/categori-info';
import { CatService } from '../../../categoris/services/cat.service';

@Component({
  selector: 'ngx-users',
  templateUrl: './updateProducts.component.htm',
  styleUrls: ['./updateProducts.component.scss'],
})
export class updateProducts implements OnInit {

  angForm: FormGroup;
  filedata: any;

  cats: catInfo [] = []; // categori object
  category:string;
  serve = new Server;
  server = this.serve.server;
  password:string = 'a1234567';
  id:string;
  constructor(private routeAc:ActivatedRoute ,
    private fb: FormBuilder,
    private http:HttpClient,
    private msg: MessageService,
    private token:AuthService,
    private router:Router,
    private cat: CatService,


    ) { }

  createForm(name , title , price , discount , status , cat_name , cat_id , made_in , not)  {
    this.angForm = this.fb.group({
       name: [name, Validators.required ],
       title: [title, Validators.required ],
       price: [price, Validators.required ],
       discount: [discount, Validators.required ],
       status: [status, Validators.required ],
       cat_name: [cat_name, Validators.required ],
       made_in: [made_in, Validators.required ],
       parent_id: [""],
       not: [not, Validators.required ],
       cat_id: [cat_id],
    });
  }
  
  ngOnInit() {
    this.getAllCat();
    this.routeAc.paramMap.subscribe(params => {
      console.log(params)
      this.id = params.get('id');
      this.createForm(
        params.get('name'),
        params.get('title'),
        params.get('price'),
        params.get('discount'),
        params.get('status'),
        params.get('cat_name'),
        params.get('cat_id'),
        params.get('made_in'),
        params.get('not'),
      ); 
    })
  }

  
  getAllCat(){ // get all categori function from cat.servics

    this.cat.getCat().subscribe((all) => {
    this.cats = all;
    console.log(this.cats);
});
}

  fileEvent(e){
    this.filedata = e.target.files[0];
   }


  updateUser(){

    if(this.angForm.value.parent_id == ""){
      this.category = this.angForm.value.cat_id + ':' + this.angForm.value.cat_name;
    }else{
      this.category = this.angForm.value.parent_id;
    }
    console.log(this.angForm.value)
    const  myFormData = new FormData();
      const headers = new HttpHeaders();
      let token = this.token.token();
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
      myFormData.append('token', token);
      myFormData.append('id', this.id);
      myFormData.append('name', this.angForm.value.name);
      myFormData.append('title', this.angForm.value.title);     
      myFormData.append('price', this.angForm.value.price);
      myFormData.append('image', this.filedata);
      myFormData.append('discount', this.angForm.value.discount);
      myFormData.append('status', this.angForm.value.status);
      myFormData.append('made_in', this.angForm.value.made_in);
      myFormData.append('cat_id', this.category);
      myFormData.append('not', this.angForm.value.not);
      this.http.post(this.server + "api/products/" + 'update' , myFormData , {
      headers: headers,
      }).subscribe(data => {
      console.log(data);
      console.log(myFormData)
      this.msg.setMessage('for test');
       });  

      this.router.navigate(['/pages/products/add'])
  }


      //this.router.navigate(['/pages/users/add'])
  
}

