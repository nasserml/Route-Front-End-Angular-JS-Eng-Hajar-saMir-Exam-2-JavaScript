import Box from '../box/box.module.js';
import { rowTailwindContentYummyDiv,rowTailwindDiv} from '../selector/jquerySelector.module.js';
import mealsAPI from '../api/api.module.js';
import { categoryAPI } from '../api/api.module.js';

class Display {

    constructor(api,ele){
        this.ele = ele;
        this.api = api;

    }

    

    async displayMeals(){
        let meals = await this.api.getMeals();
        let box = new Box(meals).getMealsBox();
        this.ele.html(box) ;
    }

    async displayMealsFirstLetter(letter) {
        let meals =await this.api.getMealsByFirstLetter(letter);
        let box = new Box(meals).getMealsBox();
        this.ele.html(box);
    }

    async displayMealsByName(name){
        let meals = await this.api.getMealsByName(name);
        let box = new Box(meals).getMealsBox();
        this.ele.html(box);
    }
    async displayCategories(){
        let categories = await this.api.getCategories();
        let box=   new Box(categories).getCategoriesBox();
        this.ele.html(box)
    }

}


const displayMeals = new Display(mealsAPI, rowTailwindDiv);
const displayMealsFirstLetter = new Display(mealsAPI, rowTailwindContentYummyDiv);

const displayCategories = new Display(categoryAPI, rowTailwindDiv);

export  {displayMeals,displayMealsFirstLetter, displayCategories};