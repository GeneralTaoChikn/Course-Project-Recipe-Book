import { EventEmitter } from "@angular/core";
import { ingridient } from "../shared/ingredient.model";

export class shoppingListService {
    ingredientsChanged = new EventEmitter<ingridient[]>();
    private ingridients: ingridient[] =[
        new ingridient('Apples',5),
        new ingridient('wheat',5),
      ];
    
      getIngridients() {
          return this.ingridients.slice();
      }

      addIngridient(ingridient: ingridient) {
          this.ingridients.push(ingridient);
          this.ingredientsChanged.emit(this.ingridients.slice());

      }

      addIngridients(ingridients: ingridient[]) {
        //   for(let ingridient of ingridient) {
        //       this.addIngridient(ingridient);
        //   }
        
        //NOTE: (...)is the spread operator ES6
        this.ingridients.push(...ingridients);
        this.ingredientsChanged.emit(this.ingridients.slice());
      }
}