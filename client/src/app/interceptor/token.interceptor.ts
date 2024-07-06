import { HttpEvent, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { AuthService } from '../core/auth.service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
 return next(req).pipe(
  tap((event: HttpEvent<any>)=>{
    if(event instanceof HttpResponse){
      localStorage.setItem('Access_token', event.body.accessToken);
    }
    return event;
  })
 )
};
