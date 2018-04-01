import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {DataService} from '../../services/data.service';
import {CartService} from '../../services/cart.service';
import {NavServiceService} from '../../services/nav-service.service';
import { Product } from '../../models/product';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  productId : string;
  constructor( private dataService : DataService, private route : ActivatedRoute, private cartService : CartService, private navService: NavServiceService) { }

  ngOnInit() {
    this.productId = this.route.snapshot.params['productId'];
    this.dataService.getProductDetailData(this.productId).subscribe(
      data=>{this.product = data},
      err => console.log(err)
    );
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
