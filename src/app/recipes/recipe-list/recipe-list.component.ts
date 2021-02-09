import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
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

  constructor() {}

  ngOnInit(): void {}

  onSelectedRecipe(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
