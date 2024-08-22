import { Injectable, inject } from '@angular/core';
import { User } from '../shared/models/user';
import { HttpClient } from '@angular/common/http';
import {catchError, Observable, of} from "rxjs";
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://localhost:3000';
  http = inject(HttpClient);
  token ='';
  constructor() { }

  login(user: User){
    return this.http.post<User>(`${this.url}/login`, user).pipe(catchError(e=>of(e)))
  }
  
  isAuth(){
    return this.token.length > 0;
  }

  register(user: User){
    console.log(user);
    return this.http.post<any>(`${this.url}/register`, user).subscribe(
      response => {
        console.log('Registro exitoso', response);
      },
      error => {
        console.error('Error en el registro', error);
      }
    );
  }
  
}
