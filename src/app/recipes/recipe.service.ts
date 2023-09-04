import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Schnitzel',
      'Super tasty schnitzel',
      'https://www.everyday-delicious.com/wp-content/uploads/2022/08/German-pork-schnitzel-everyday-delicious-2.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French fries', 20)]
    ),
    new Recipe(
      'Big Burger',
      'what more do you want?',
      'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Cheeseburger-3d7c922.jpg?quality=90&resize=556,505',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  AddIngToSL(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
