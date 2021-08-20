import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Sugar Water', 'Thiss is simply coolaid', 
        'https://images.heb.com/is/image/HEBGrocery/000136081?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0'),
        new Recipe('NOt Sugar', 'Thiss is simply coolaid', 
        'https://images.heb.com/is/image/HEBGrocery/000136081?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0')
      ];

      getRecipes() {
          return this.recipes.slice();
      }
}