import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-parent',
  templateUrl: './category-parent.component.html',
  styleUrls: ['./category-parent.component.css']
})
export class CategoryParentComponent implements OnInit {

  category: string = this.route.snapshot.params['id'];
  constructor(private route : ActivatedRoute) { }

  ngOnInit() {

  }


}
