import { Component, OnInit } from '@angular/core';
import { AbstractControl, UntypedFormControl, UntypedFormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/common/services/auth/auth-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm !: UntypedFormGroup;
  constructor(private _router: Router, private _authService: AuthServiceService, private _snackbar: MatSnackBar) {

    this.loginForm = new UntypedFormGroup({
      email: new UntypedFormControl('', [Validators.required, Validators.email]),
      password: new UntypedFormControl('', [Validators.required])
    }, [this.userTypeValidator]);
  }

  ngOnInit() {

  }

  onSubmit() {
    console.log("values of the form", this.loginForm.value);
    if (this._authService.login(this.loginForm.get('email')?.value)) {
      this._router.navigateByUrl('/dashboard');
    } else {
      this._snackbar.open('Invalid credential', 'Ok')
    }
  }
  // custom validation
  userTypeValidator = (control: AbstractControl): ValidationErrors | null => {
    console.log(control);
    if (this.loginForm && this.loginForm.get('email')?.value == 'admin@notepad.io') {
      return { userTypeValidator: true }
    } else {
      return null;
    }
  }

}