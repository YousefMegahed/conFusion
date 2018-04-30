import { DishService } from './../services/dish.service';
import { Component, OnInit } from '@angular/core';
import {DishdetailComponent} from '../dishdetail/dishdetail.component'
import {Dish} from '../Shared/Dish';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  dishes : Dish[];

 selectedDish:Dish;
  constructor(private dishservice : DishService) { }

  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }
  ngOnInit() {
    this.dishes = this.dishservice.getDishes();
  }

}
