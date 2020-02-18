import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { sliderInfo } from '../data/slider-info';
import { Image } from '../data/image';
import { Observable } from 'rxjs';
import { Server } from '../../server';


@Injectable({
  providedIn: 'root',
})
export class CatService {


  serve = new Server;
  server = this.serve.server;


  constructor(private catInfo: sliderInfo, private http: HttpClient) { }



  getCat(): Observable<sliderInfo[]> { // get all catrgori from mysql function
    return this.http.get<sliderInfo[]>(this.server  + 'get');
  }

  deleteCat(no): Observable<sliderInfo> {
    const deleteCat = {
      id: no,
      name: 'delete',
      message: 'delete',
      type: 'slider',
    };

    return this.http.post<sliderInfo>(this.server + 'delete', deleteCat);
  }


  updateCat(no, name, message): Observable<sliderInfo> { // add catrgori function
    const data = new sliderInfo;
    data.id = no;
    data.name = name;
    data.message = message;
    console.log(data);
    return this.http.post<sliderInfo>(this.server + 'update', data);
  }
}
