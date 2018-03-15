import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { NavServiceService } from './nav-service.service';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

  currentUser: string;
  constructor(private http : HttpClient, private router: Router, private navService : NavServiceService) {
    console.log("retrieving session based on cookie");
    this.http.get<string>(environment.httpPrefix+'/users', { withCredentials: true }).subscribe(
      data=>{
        console.log("Found logged in user");
        this.navService.setNavBarState({username:data});
      },
      err => console.log("Could not find session on backend using cookie,e-"+err)
    );
  }
  isLoggedIn():boolean{
    console.log(this.currentUser);
    if(this.currentUser){
      return true;
    }
    else{
      return false;

    }
  }
  getCurrentUser():string{
    return this.currentUser;
  }
  authenticate (credentials) {
    this.http.post<boolean>(environment.httpPrefix+'/users/login', credentials, { withCredentials: true }).subscribe(
      data=>{
        if(data){
          console.log('logged in' + credentials.username);
          this.currentUser = credentials.username;
          //this.navComponent.loginNav(formValues.username);
          this.navService.setNavBarState({username:credentials.username});
          this.router.navigate(['/home']);
        }else{
          //alert("failed");
        }
      },
      err => console.log(err)
    );
  }

  createUser (user) {
    this.http.post<boolean>(environment.httpPrefix+'/users/signup', user, { withCredentials: true }).subscribe(
      data => {
        if (data) {
          alert("success");
          this.currentUser = user.username;
          this.navService.setNavBarState({username:user.username});
          this.router.navigate(['/home']);
        } else {
          alert("failed");
        }
      },
      err => console.log(err)
    );
  }
  validateUserName (username): Observable<boolean> {
    return this.http.get<boolean>(environment.httpPrefix+'/users/username/'+username, { withCredentials: true });
  }

  logout() {
    this.http.get<boolean>(environment.httpPrefix+'/logout', { withCredentials: true }).subscribe(
      data => {
        if (data) {
          //alert("successful logout");
          this.currentUser = null;
          this.navService.setNavBarState({username:null});
          this.navService.setNavBarState({cart:0});
          this.router.navigate(['/home']);
        } else {
          alert("failed");
        }
      },
      err => console.log(err)
    )
  }
}
