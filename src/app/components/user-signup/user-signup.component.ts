import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {
  //minLength, maxLength, pattern and also controls.username.errors.pattern will be true if that is failing
  usernameFormControl: FormControl = new FormControl('', [Validators.required], this.checkUsername.bind(this));
  passwordFormControl: FormControl = new FormControl('', Validators.required);
  signupForm = new FormGroup({
    username: this.usernameFormControl,
    password: this.passwordFormControl
  });
  constructor(private router: Router, private authService: AuthService) { }

  onSubmit(formValues) {
    if (this.signupForm.valid) {
      //check service for true, navigate.
      this.authService.createUser({user: formValues});
    }
  }
  ngOnInit() {
  }


  validateField(field, type): string {
    if (type == 'div') {
      if (this.signupForm.controls[field].invalid
        && this.signupForm.controls[field].touched)
        return 'has-danger';
      if (this.signupForm.controls[field].valid
        && this.signupForm.controls[field].touched)
        return 'has-success';
    }
    else if (type == 'input') {
      if (this.signupForm.controls[field].invalid
        && this.signupForm.controls[field].touched)
        return 'form-control-danger';
      if (this.signupForm.controls[field].valid
        && this.signupForm.controls[field].touched)
        return 'form-control-success';
    }

  }
  debouncer : any;
  //Custom async validator
  checkUsername(control: FormControl): any {

    clearTimeout(this.debouncer);

    return new Promise(resolve => {

      this.debouncer = setTimeout(() => {

        this.authService.validateUserName(control.value).subscribe((res) => {
          if(res){
            resolve(null);
          }
          else{
            resolve({'usernameInUse': true});
          }
        }, (err) => {
          resolve({'usernameInUse': true});
        });

      }, 1000);

    });
  }

}
