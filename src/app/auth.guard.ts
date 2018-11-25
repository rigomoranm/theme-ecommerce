import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      //  // valida en vace al servicio si esta logeado el usuario, si no esta manda al login
      //  if (!this.auth.isLoggedIn) {
      //   this.router.navigate(['']);
      //   return false;
      // }
      return true;
  }

}
