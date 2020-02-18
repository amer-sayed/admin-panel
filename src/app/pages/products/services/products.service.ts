import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../data/product';
import { Server } from '../../server';
import { AuthService } from '../../../auth.service';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

 
  constructor(private http:HttpClient, private token:AuthService) { }

  serve = new Server;
  server = this.serve.server;

  deleteProducts(no):Observable<any>{
    let token = this.token.token();
    const deleteCat = {
      id: no,
      token:token
    };

    return this.http.post<any>(this.server + "api/products/" + 'delete', deleteCat);
  }

  updateProducts(id, name, title, price, discount,status): Observable<Product> { // add catrgori function
    let token = this.token.token();
    const data = new Product;
    data.id = id;
    data.name = name;
    data.title = title;
    data.price = price;
    data.discount = discount;
    data.status = status;
    //data.token = this.token.token();
    data.token = token
    console.log(data);
    return this.http.post<Product>(this.server + "api/products/" + 'update', data);
  }
}
