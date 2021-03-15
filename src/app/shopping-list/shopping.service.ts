import { EventEmitter, Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('apple', 5),
    new Ingredient('banana', 3),
  ];
  constructor() {}

  getIngredients() {
    return this.ingredients.slice();
  }

  saveIngredientItem(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  addIngredientsFromShoppingList(ingredientList: Ingredient[]) {
    this.ingredients.push(...ingredientList);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
