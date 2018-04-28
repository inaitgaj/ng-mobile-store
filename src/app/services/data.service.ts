import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import {Product} from '../models/product';
import { environment } from '../../environments/environment';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getProductListData (): Observable<Product[]> {
    return this.http.get<Product[]>(environment.httpPrefix+'/products',{ withCredentials: true });
  }
  getProductDetailData (productId : string): Observable<Product> {
    return this.http.get<Product>(environment.httpPrefix+'/products/'+productId, { withCredentials: true });
  }
  getProductSearchData (term : string): Observable<Product[]> {
    return this.http.get<Product[]>(environment.httpPrefix+'/products/search/'+term, { withCredentials: true });
  }
  createProduct(product: Product) {
    return this.http.post<boolean>(environment.httpPrefix+'/uploads/s3', product, { withCredentials: true }).subscribe(
      data => {
        if (data) {
          alert("success");
        } else {
          alert("failed");
        }
      },
      err => console.log(err)
    );
  }
}
