import { DISHES } from './../Shared/dishes';
import { Dish } from './../Shared/Dish';
import { Injectable } from '@angular/core';
@Injectable()
export class DishService {

  constructor() { }

  getDishes(): Dish[]{
    return DISHES;
  }
}
