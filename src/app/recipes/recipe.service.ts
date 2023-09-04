import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
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

  getRecipes() {
    return this.recipes.slice();
  }
}
