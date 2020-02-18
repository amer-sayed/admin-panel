import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../data/user';
import { Server } from '../../server';
import { AuthService } from '../../../auth.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {

 
  constructor(private http:HttpClient, private token:AuthService) { }

  serve = new Server;
  server = this.serve.server;

  deleteUser(no):Observable<any>{
    let token = this.token.token();
    const deleteCat = {
      uid: no,
      token:token
    };

    return this.http.post<any>(this.server + "api/users/" + 'delete', deleteCat);
  }

  updateUser(uid, name, email, phone): Observable<User> { // add catrgori function
    let token = this.token.token();
    const data = new User;
    data.uid = uid;
    data.displayName = name;
    data.email = email;
    data.phoneNumber = phone;
    //data.token = this.token.token();
    data.token = token
    console.log(data);
    return this.http.post<User>(this.server + "api/users/" + 'update', data);
  }
}
