import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Server } from '../../server';


@Component({
  selector: 'ngx-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  
})



export class ProductComponent implements OnInit {


  name:string;
  cat_id:string;
  cat_name:string;
  discount:string;
  price:string;
  title:string;
  status:string;
  made_in:string;
  not:string;
  id:string;
  informations = [];

  serve = new Server;
  server = this.serve.server;

  constructor(private routeAc: ActivatedRoute, private http:HttpClient, private router:Router) { }

  ngOnInit() {
    this.routeAc.paramMap.subscribe(params => {

      this.name = params.get('name');
      this.cat_id = params.get('cat_id');
      this.cat_name = params.get('cat_name');
      this.discount = params.get('discount');
      this.price = params.get('price');
      this.title = params.get('title');
      this.status = params.get('status');
      this.made_in = params.get('made_in');
      this.not = params.get('not');
      this.id =  params.get('id');  
      console.log(params);
    });
  }



  edite(){
   this.router.navigate(['/pages/products/update/' + this.id + '/' + this.name + '/' + this.title + '/' + this.price + '/' + this.discount + '/' + this.status + '/' + this.made_in + '/' + this.cat_name  + '/' + this.cat_id + '/' + this.not])
console.log('/pages/products/update/' + this.id + '/' + this.price + '/' + this.discount + '/' + this.name + '/' + this.title + '/' + this.status + '/' + this.made_in + '/' + this.cat_name  + '/' + this.cat_name + '/' + this.not)
console.log(this.name)
  }
}

