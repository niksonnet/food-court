import { EventEmitter, Injectable } from '@angular/core';

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
      'https://www.plattershare.com/common/uploaded_files/recipe/5a0d2b379eb64_pb.jpg'
    ),
    new Recipe(
      'Test-2',
      'Test-2 desc2',
      'https://www.plattershare.com/common/uploaded_files/recipe/5a0d2b379eb64_pb.jpg'
    ),
    new Recipe(
      'Test-3',
      'Test-3 desc 3',
      'https://www.plattershare.com/common/uploaded_files/recipe/5a0d2b379eb64_pb.jpg'
    ),
  ];

  getRecipe() {
    return this.recipes.slice();
  }
}
