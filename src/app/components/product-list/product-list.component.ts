import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {DataService} from '../../services/data.service';
import {Product} from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products : Product[];
  constructor( private dataService : DataService) { }

  ngOnInit() {
    this.dataService.getProductListData().subscribe(
      data=>{this.products = data},
      err => console.log(err)
    );
  }

}
