import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Cart} from '../models/cart';
import {NavServiceService} from './nav-service.service';
import { environment } from '../../environments/environment';
@Injectable()
export class CartService {

  cart:Cart ;
  //totalQuantity : number;
  getCurrentCart(): Observable<Cart> {
    return this.http.get<Cart>(environment.httpPrefix+'/carts', { withCredentials: true })
  }

  addToCart(productId): Observable<Cart> {
    return this.http.get<Cart>(environment.httpPrefix+'/carts/add/'+productId, { withCredentials: true });
  }

  getTotalQuantity(cart:Cart) : number{
    var i = 0
    , totalQuantity:number = 0;
    var len = cart.entries.length;
    console.log('cart has %s entries, cart = %j', len, cart);
    for (i = 0; i < len; i++) {
      totalQuantity = totalQuantity + cart.entries[i].quantity;
    }
    return totalQuantity;
  }

  constructor(private http : HttpClient, private navService: NavServiceService) {
    this.getCurrentCart().subscribe(
      data=> {
        this.cart = data;
        this.navService.setNavBarState({cart:this.getTotalQuantity(data)});
      }
    )
  }
  getCompleteCart(): Observable<Cart> {
    return this.http.get<Cart>(environment.httpPrefix+'/carts/detail', { withCredentials: true })
  }



  updateCart(productId, quantity): Observable<Cart> {
    return this.http.get<Cart>(environment.httpPrefix+'/carts/update/'+productId+'/quantity/'+quantity, { withCredentials: true });
  }

}
