import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {AuthService} from '../../services/auth.service';
import { UserSignupComponent } from '../../components/user-signup/user-signup.component';
import { UserLoginComponent } from '../../components/user-login/user-login.component';
import { UserProfileComponent } from '../../components/user-profile/user-profile.component';

const routes = [
  { path: 'signup', component: UserSignupComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'profile', component: UserProfileComponent },

]
@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserSignupComponent, UserLoginComponent, UserProfileComponent],
  providers: [AuthService]
})
export class UserModule { }
