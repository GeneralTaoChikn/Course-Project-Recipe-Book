import { ingridient } from "../shared/ingredient.model";

export class shoppingListService {
   private ingridients: ingridient[] =[
        new ingridient('Apples',5),
        new ingridient('wheat',5),
      ];
    
      getIngridients() {
          return this.ingridients.slice();
      }

      addIngridient(ingridient: ingridient) {
          this.ingridients.push(ingridient);
      }
}