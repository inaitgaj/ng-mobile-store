import { Component, OnInit, Input } from '@angular/core';
import {CartService} from '../../services/cart.service';
import {NavServiceService} from '../../services/nav-service.service';
import { Product } from '../../models/product'
import {Cart} from '../../models/cart';
@Component({
  selector: 'app-product-list-child',
  templateUrl: './product-list-child.component.html',
  styleUrls: ['./product-list-child.component.css']
})
export class ProductListChildComponent implements OnInit {

//cart:Cart;

@Input() product: Product;
  constructor(private cartService : CartService, private navService: NavServiceService) { }

  ngOnInit() {
  }
  addToCart(productId) {
    this.cartService.addToCart(productId).subscribe(
      data=>{

        console.log("added product to cart, cart obj = %j", data);
        //this.cart =  data;
        this.navService.setNavBarState({cart:this.cartService.getTotalQuantity(data)});

        //this.navService.setNavBarState({username:data});
      },
      err => console.log("Could not find session on backend using cookie,e-"+err)
    );;

  }

}
