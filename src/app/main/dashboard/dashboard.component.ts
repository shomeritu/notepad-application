import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/common/services/auth/auth-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private _router: Router, private _authService: AuthServiceService) { }

  backToLogin() {
    if (!this._authService.logoff()) {
      this._router.navigateByUrl('/auth/login');
    }
  }
}
