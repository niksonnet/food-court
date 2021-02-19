import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';

import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  selectRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Test-1',
      'Test-1 desc 1',
      'https://www.plattershare.com/common/uploaded_files/recipe/5a0d2b379eb64_pb.jpg',
      [new Ingredient('ABC', 1), new Ingredient('XYZ', 2)]
    ),
    new Recipe(
      'Test-2',
      'Test-2 desc2',
      'https://www.plattershare.com/common/uploaded_files/recipe/5a0d2b379eb64_pb.jpg',
      [new Ingredient('ABC', 1), new Ingredient('XYZ', 2)]
    ),
  ];

  constructor(private shoppingListService: ShoppingService) {}

  getRecipe() {
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredient: Ingredient[]) {
    this.shoppingListService.addIngredientsFromShoppingList(ingredient);
  }
}
