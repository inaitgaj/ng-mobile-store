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
}
