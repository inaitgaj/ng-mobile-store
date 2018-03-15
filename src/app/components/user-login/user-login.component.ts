import { Component, OnInit, ViewChild, OnChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit{
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  constructor( private authService : AuthService) { }



  onSubmit(formValues) {
    if (this.loginForm.valid) {
      //check service for true, navigate.
      this.authService.authenticate(formValues)
    }
  }
  ngOnInit() {
  }
  validateField(field, type): string {
    if (type == 'div') {
      if (this.loginForm.controls[field].invalid
        && this.loginForm.controls[field].touched)
        return 'has-danger';
      if (this.loginForm.controls[field].valid
        && this.loginForm.controls[field].touched)
        return 'has-success';
    }
    else if (type == 'input') {
      if (this.loginForm.controls[field].invalid
        && this.loginForm.controls[field].touched)
        return 'form-control-danger';
      if (this.loginForm.controls[field].valid
        && this.loginForm.controls[field].touched)
        return 'form-control-success';
    }

  }
}
