import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataService} from '../../services/data.service';
import {Product} from '../../models/product';
@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {
  products : Product[];
  constructor( private dataService : DataService, private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
          if (params['term']) {
            this.dataService.getProductSearchData(params['term']).subscribe(
              data=>{this.products = data},
              err => console.log(err)
            );
          }
        });

  }

}
