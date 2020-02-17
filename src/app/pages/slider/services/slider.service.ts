import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catInfo } from '../data/slider-info';
import { Image } from '../data/image';
import { Observable } from 'rxjs';
import { Server } from '../../server';


@Injectable({
  providedIn: 'root',
})
export class CatService {


  serve = new Server;
  server = this.serve.server;


  constructor(private catInfo: catInfo, private http: HttpClient) { }



  getCat(): Observable<catInfo[]> { // get all catrgori from mysql function
    return this.http.get<catInfo[]>(this.server  + 'get');
  }

  deleteCat(no): Observable<catInfo> {
    const deleteCat = {
      id: no,
      name: 'delete',
      message: 'delete',
    };

    return this.http.post<catInfo>(this.server + 'delete', deleteCat);
  }


  updateCat(no, name, message): Observable<catInfo> { // add catrgori function
    const data = new catInfo;
    data.id = no;
    data.name = name;
    data.message = message;
    console.log(data);
    return this.http.post<catInfo>(this.server + 'update', data);
  }
}
