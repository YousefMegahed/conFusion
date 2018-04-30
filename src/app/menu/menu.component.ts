

import { Component, OnInit } from '@angular/core';


import {DishdetailComponent} from '../dishdetail/dishdetail.component'
import {Dish} from '../Shared/Dish';
import {DISHES} from '../Shared/dishes'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  dishes = DISHES;

 selectedDish:Dish;
  constructor() { }

  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }
  ngOnInit() {
  }

}
