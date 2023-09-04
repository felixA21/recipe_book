import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('peach', 5),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }
}
