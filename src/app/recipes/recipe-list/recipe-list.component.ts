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
      'Test recipe',
      'this is simply a test',
      'https://feelgoodfoodie.net/wp-content/uploads/2018/10/Shakshuka-09.jpg'
    ),
    new Recipe(
      'second recipe',
      'second Test',
      'https://hips.hearstapps.com/hmg-prod/images/comfort-food-recipes-64668a179574d.png'
    ),
  ];

  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
