import { ingridient } from "../shared/ingredient.model";

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingridients: ingridient[];

    constructor(name: string, desc: string, imgPath: string, ingridients: ingridient[]) {
        this.name = name;
        this.description = desc;
        this.imagePath = imgPath;
        this.ingridients = ingridients
    }
}