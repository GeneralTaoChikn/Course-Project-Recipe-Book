import { EventEmitter, Injectable } from "@angular/core";
import { ingridient } from "../shared/ingredient.model";
import { shoppingListService } from "../shopping-list/shoppingList.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Sugar Water', 'Thiss is simply coolaid', 
        'https://images.heb.com/is/image/HEBGrocery/000136081?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0',
        [new ingridient('meat',2),
        new ingridient('bun',5)]),

        new Recipe('NOt Sugar', 'Thiss is simply coolaid', 
        'https://images.heb.com/is/image/HEBGrocery/000136081?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0',
        [new ingridient('sugar',5),
        new ingridient('water',6)])
        ];

    constructor(private slService: shoppingListService){}
    
      getRecipes() {
          return this.recipes.slice();
      }

      addIngridientsToList(ingridients: ingridient[]) {
            this.slService.addIngridients(ingridients);
      }
}