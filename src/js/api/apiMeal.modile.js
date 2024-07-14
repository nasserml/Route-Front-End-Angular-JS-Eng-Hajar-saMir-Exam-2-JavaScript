

class ApiMeal {

    #url;
    #res;
    #meal;
    #originApi;

    constructor(api) {
        this.api = api;
        this.#setOriginalApi();
    }

    async #fetchURL(){

        this.#url = await fetch(this.api);

    }

    async #getJSON() {
        this.#res = await this.#url.json();
    }

    #setMeal() {
        this.#meal = this.#res.meals[0];
    }

    async #fetchJSONMeal(){
        await this.#fetchURL();
        await this.#getJSON();
        this.#setMeal();
    }

    #setOriginalApi(){
        this.#originApi = this.api;
    }

    async getMealById(id) {
        this.api = this.#originApi + '?i=' + id;
        await this.#fetchJSONMeal();
        return this.#meal;
    }

}


const meal = new ApiMeal('https://www.themealdb.com/api/json/v1/1/lookup.php');

export default meal;