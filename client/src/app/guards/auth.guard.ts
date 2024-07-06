import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../core/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService= inject(AuthService);
  const router = inject(Router);

 if (authService.isAuth()) {
  return true ;
 }else{
  alert('loggateeeee pelotudo')
  const url = router.createUrlTree(['/login']);
  return url;
 }
};
