import { Injectable, inject } from '@angular/core';
import { User } from '../shared/models/user';
import { HttpClient } from '@angular/common/http';
import {catchError, of} from "rxjs";
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = environment.API_URL;
  http = inject(HttpClient);
  token ='';
  constructor() { }

  login(user: User){
    return this.http.post<User>(`${this.url}/login`, user).pipe(catchError(e=>of(e)))
  }
  
  isAuth(){
    return this.token.length > 0;
  }
}
