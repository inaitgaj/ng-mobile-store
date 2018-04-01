import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Entry } from '../../models/entry';
import { AuthService } from '../../services/auth.service';
import {NavServiceService} from '../../services/nav-service.service';

@Component({
  selector: 'app-cart-parent',
  templateUrl: './cart-parent.component.html',
  styleUrls: ['./cart-parent.component.css']
})
export class CartParentComponent implements OnInit {
  entries: Entry[];
  total: number;
  isNotLoggedIn: boolean = true;
  constructor(private cartService: CartService, private authService: AuthService, private navService : NavServiceService) {

  }

  ngOnInit() {
    //calculate totals
    this.cartService.getCompleteCart().subscribe(
      data => {
        this.entries = data.entries;
        this.total = data.total;
      }
    );

    this.navService.navState$.subscribe(
      (state)=>
    {
      if(state.hasOwnProperty("username")){
        if(state["username"]){
          var username = state["username"] ;
          console.log("user in cart component"+username);
          this.isNotLoggedIn = false;
        }
      }
    });
  }
  updateCart(productId, oldQuantity, newQuantity) {
    var quantity = parseFloat(oldQuantity) + parseFloat(newQuantity);
    this.cartService.updateCart(productId, quantity).subscribe(
      data=>{
        this.entries = data.entries;
        this.total = data.total;
        this.navService.setNavBarState({cart:this.cartService.getTotalQuantity(data)});
        console.log("added product to cart, cart obj = %j", data);
      },
      err => console.log("Could not find session on backend using cookie,e-"+err)
    );;

  }
}
