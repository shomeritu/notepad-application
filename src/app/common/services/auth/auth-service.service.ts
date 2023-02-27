import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {
  private _isLoggedin: boolean = false;

  login(email: string): boolean {
    if (email === 'user@notepad.in') {
      this._isLoggedin = true;
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    return this._isLoggedin;
  }

  logoff(): any {
    this._isLoggedin = false;
  }


}
