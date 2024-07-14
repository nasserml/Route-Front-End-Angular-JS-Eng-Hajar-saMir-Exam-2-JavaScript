
class ApiCategoryMeal {

    #originalAPI;

    constructor(api) {
        this.api = api;
        this.#setOriginalAPI();
    }

    #setOriginalAPI(){
        this.#originalAPI = this.api;
    }


    #url;
    async #fetchURL() {
        this.#url = await fetch(this.api);

    }

    #res 
    async #getJSON() {
        this.#res = await this.#url.json();
    }

    #mealCategory;
    #setMealsCategory() {
        this.#mealCategory =  this.#res.meals;
    }

    async #fecthJsonMeal() {
        await this.#fetchURL();
        await this.#getJSON();
        this.#setMealsCategory();
    }

    async getMealsByCategoryName(catName) {
        this.api = this.#originalAPI + '?c=' + catName;
        await this.#fecthJsonMeal();
        return this.#mealCategory;
    }

}


const mealCategory = new ApiCategoryMeal('https://www.themealdb.com/api/json/v1/1/filter.php');

export default mealCategory;