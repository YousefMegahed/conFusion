import { Dish } from './../Shared/Dish';
import { comment } from './../Shared/comment';
import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.css']
})
export class DishdetailComponent implements OnInit {


  @Input()
  dish: Dish;
  dishcomments : comment;
  constructor() { }

  ngOnInit() {
  }

}
