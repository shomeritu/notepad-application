import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../services/auth/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _authCheck: AuthServiceService, private _router: Router) { }
  canActivate(): boolean {
    if (!this._authCheck.isLoggedIn) {
      this._router.navigateByUrl('auth');
    }
    return true;
  }

}
