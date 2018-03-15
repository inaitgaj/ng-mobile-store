import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MegaMenuModule } from 'primeng/megamenu';
import { MenuItem } from 'primeng/api';
import {AuthService} from '../../services/auth.service';
import {NavServiceService} from '../../services/nav-service.service';


@Component({
  selector: 'app-nav-parent',
  templateUrl: './nav-parent.component.html',
  styleUrls: ['./nav-parent.component.css']
})
export class NavParentComponent implements OnInit {
  username: string;
  cartQuantity : number = 0;
  constructor(private router: Router, private authService : AuthService, private navService : NavServiceService) {
    // this.navService.navState$.subscribe(
    //   (state)=>
    // {
    //   if(state["username"]){
    //     this.username = state["username"];
    //     console.log('from nav component'+this.username);
    //   }
    //   else if(state["cart"]){
    //     this.cartQuantity = state["cart"];
    //     console.log('from nav component'+this.cartQuantity);
    //   }
    // });
  }
  logout(obj : any){

    this.authService.logout();

    //TODO call backend service for removing cookie
  }

  ngOnInit() {
    this.navService.navState$.subscribe(
      (state)=>
    {
      if(state.hasOwnProperty("username")){
        this.username = state["username"];
        console.log('from nav component username ='+this.username);
      }
      else if(state.hasOwnProperty("cart")){
        this.cartQuantity = state["cart"];
        console.log('from nav component cart quantity ='+this.cartQuantity);
      }
    });
  }

  onSearch(term:string) {
    if(term.length > 0){
      this.router.navigate(['/search', {term : term}]);
    }
}
}
