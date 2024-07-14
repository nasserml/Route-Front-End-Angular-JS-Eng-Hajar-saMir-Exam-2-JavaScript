class BoxMeal {

    #mealLiArr = [];
    #mealLiBox = '';
    constructor(data) {
        this.data = data;
        
        this.#setMealLiArr();
        this.#setMealLiBox();
    }

    #setMealLiArr() {
        let meal= this.data;
        for(let i = 1 ; i <= 20 ; i++) {
            if( meal[`strIngredient${i}`] != "" && meal[`strIngredient${i}`] != null && meal[`strIngredient${i}`] != " "  ) {

                let strIngredient = meal[`strIngredient${i}`] ;
                let strMeasure = meal[`strMeasure${i}`] ;
                this.#mealLiArr.push(`${strMeasure} ${strIngredient}`)
            }
        }
    }

    #setMealLiBox() {

        for( let i =0 ; i< this.#mealLiArr.length; i++) {

            this.#mealLiBox += `<li class="recipe">${this.#mealLiArr[i]}</li>`
        }

    }
    getMealBox() {
        let meal =  this.data;
        let box = `  <div class="meal-image-width-33.33%-tailwind">
                <img class="w-full rounded-lg " src="${meal.strMealThumb}" alt="">
                <h2>${meal.strMeal}</h2>
            </div>

            <div class="meal-details-width-66.66%-tailwind">
            
                <h2>Instructions</h2>
                <p>${meal.strInstructions}
                </p>

                <h3><span>Area : </span>${meal.strArea}</h3>
                <h3><span>Category : </span>${meal.strCategory}</h3>
                <h3>Recipes :</h3>
                <ul class="recipes-ul">
                    ${this.#mealLiBox}
                </ul>

                <h3>Tags :</h3>
                <div class="mb-4"></div>
                <a target="_blank" href="${meal.strSource}" class="source">Source</a>
                <a href="${meal.strYoutube}" target="_blank" class="youtube">Youtube</a>

            </div>`;
        
            return box;
        }

}

export default BoxMeal;