import { Component, OnInit} from '@angular/core';
import { Settings } from '../data/table';
import { NbWindowService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { MessageService } from '../../global services/message.service';
import { Product } from '../data/product';
import { ProductsService } from '../services/products.service';
import { Server } from '../../server';
import { AuthService } from '../../../auth.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { CatService } from '../../categoris/services/cat.service';
import { catInfo } from '../../categoris/data/categori-info';


@Component({
  selector: 'ngx-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.scss']
})
export class AllProductsComponent implements OnInit {
  catName:string;

  angForm: FormGroup;
   
  serve = new Server;
  server = this.serve.server;
  

  image:string;
  filedata: any;
  users = []
  cats: catInfo [] = []; // categori object

  set = new Settings; // smart table settings
  settings = this.set.settings;

  source: LocalDataSource = new LocalDataSource(); // for smart table

  constructor(
    private windowService: NbWindowService,
    private http: HttpClient,
    private msg: MessageService,
    private ps:ProductsService,
    private token:AuthService,
    private fb: FormBuilder,
    private cat: CatService,

  ) {}

  createForm() {
    this.angForm = this.fb.group({
       name: ['test', Validators.required ],
       price: ['aaaaaaa', Validators.required ],
       title: ['aaaaaaaaaa', Validators.required ],
       not: ['aaaaaaaaaa', Validators.required ],
       made_in: ['aaaaaaaaaaa', Validators.required ],
       cat_id: ['aaaaaaaaaaaa', Validators.required ],
       status: ['aaaaaaaaa', Validators.required ],
       discount: ['0', Validators.required ],
       parent_id: ["0"],
    });
  }

  ngOnInit() {
    this.users = [];
   this.createForm(); 
   this.getAllCat();
   this.getAllProducts();
    this.msg.getMessage().subscribe((data) => {
      this.users = [];
      this.getAllProducts();
      this.getAllCat(); 
    });
  }
  getAllProducts(){
   
    let token = this.token.token();
    this.http.get<Array<any>>(this.server + "api/products/" + "get?token=" + token
    ).subscribe(auth => {
      //console.log(auth)
      auth.forEach(user => {
        this.users.push(user as Product);
      });
      this.source.load(this.users);
    });
  }


getAllCat(){ // get all categori function from cat.servics

    this.cat.getCat().subscribe((all) => {
    this.cats = all;
    console.log(this.cats);
});
}

  openWindow(contentTemplate) { // window servics
    this.windowService.open(
      contentTemplate,
      {
        title: 'Add New Product',
        windowClass: 'width',
        closeOnEsc: true,
      },
    );
   console.log(this.angForm.value.parent_id)
  }


  onDeleteConfirm(event){
   // console.log(event.data.uid);
    this.ps.deleteProducts(event.data.id).subscribe((del) => {
      this.msg.setMessage('for test');
     console.log(event.data.id)
    });
  }


  onEditeConfirm(event){
    this.ps.updateProducts(event.newData.id, event.newData.name, event.newData.title, event.newData.price, event.newData.discount, event.newData.status).subscribe((up) => {
      console.log(up);
      this.msg.setMessage('for test');
    });
  }


  fileEvent(e){
    this.filedata = e.target.files[0];
   }

   addProducrs(){

    console.log(this.angForm.value);
      const  myFormData = new FormData();
      const headers = new HttpHeaders();
      let token = this.token.token();
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
      myFormData.append('name', this.angForm.value.name);
      myFormData.append('price', this.angForm.value.price);     
      myFormData.append('not', this.angForm.value.not);
      myFormData.append('made_in', this.angForm.value.made_in);
      myFormData.append('image', this.filedata);
      myFormData.append('token', token);
      myFormData.append('cat_id', this.angForm.value.parent_id);
      myFormData.append('status', this.angForm.value.status);
      myFormData.append('title', this.angForm.value.title);
      myFormData.append('discount', this.angForm.value.discount);
      this.http.post(this.server + 'api/products/add' , myFormData , {
      headers: headers,
      }).subscribe(data => {
      console.log(data);
      this.msg.setMessage('for test');
       });
  }
}

