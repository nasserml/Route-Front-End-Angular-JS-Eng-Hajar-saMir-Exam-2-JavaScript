
class API {


    #url;
    #res;
    #meals;
    #categories;
    #originUrl;

    constructor(urlAPI){
        this.urlAPI = urlAPI;
        this.#setOriginURL();
    }

    async #fetchURL(){
        this.#url = await fetch(this.urlAPI);
    }

    async #getJSON(){
        this.#res = await this.#url.json();
    }
    #setMeals(){
        this.#meals = this.#res.meals;
    }

    async getMeals(){

        this.urlAPI += '?s=';
        await this.#fetchURL();
        await this.#getJSON();
        this.#setMeals();
        return this.#meals;
    }

    #setOriginURL(){
        this.#originUrl = this.urlAPI;
    }
    async getMealsByFirstLetter(letter){
        this.urlAPI = this.#originUrl + '?f=' + letter;
        
        await this.#fetchURL();
        await this.#getJSON();
        this.#setMeals();
        return this.#meals;
    }

    async getMealsByName(name) {
        this.urlAPI = this.#originUrl + '?s=' + name;
        await this.#fetchURL();
        await this.#getJSON();
        this.#setMeals();
        return this.#meals;
    }


    #setCategories(){
        this.#categories = this.#res.categories;
    }
    async getCategories(){
        await this.#fetchURL();
        await this.#getJSON();
        this.#setCategories();
        return this.#categories;
    }

}

const mealsAPI = new API('https://www.themealdb.com/api/json/v1/1/search.php');

export default mealsAPI;

const categoryAPI = new API('https://www.themealdb.com/api/json/v1/1/categories.php');

export {categoryAPI};