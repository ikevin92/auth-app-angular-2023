import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthStatus } from '../interfaces';
import { AuthService } from '../services/auth.service';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
  // console.log('isAuthenticatedGuard');
  // console.log({ route, state });

  const authService = inject(AuthService);
  const router = inject(Router);
  // console.log({ status: authService.authStatus() });

  if (authService.authStatus() === AuthStatus.authenticated) return true;

  // const url = state.url;
  // console.log({ url });
  // localStorage.setItem('url', url);
  router.navigateByUrl('/auth/login');
  return false;
};
