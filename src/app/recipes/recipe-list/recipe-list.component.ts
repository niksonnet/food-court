import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test-1',
      'Test-1 desc',
      'https://www.plattershare.com/common/uploaded_files/recipe/5a0d2b379eb64_pb.jpg'
    ),
    new Recipe(
      'Test-1',
      'Test-1 desc',
      'https://www.plattershare.com/common/uploaded_files/recipe/5a0d2b379eb64_pb.jpg'
    ),
    new Recipe(
      'Test-1',
      'Test-1 desc',
      'https://www.plattershare.com/common/uploaded_files/recipe/5a0d2b379eb64_pb.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
