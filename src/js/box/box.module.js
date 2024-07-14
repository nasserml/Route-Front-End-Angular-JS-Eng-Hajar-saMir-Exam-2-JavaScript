

class Box{
    constructor(data){
        this.data = data;
    }

    getMealsBox() {
        let box = '';

        for (const meal of this.data) {

            box += ` <div class="yummy-meal-width-25%-tailwind" data-meal-id="${meal.idMeal}" >

            <div class="px-3" >
    
                <div class="meal-image group/mealImage" data-meal-id="${meal.idMeal}">
    
                    <img src="${meal.strMealThumb}" alt="" class="w-full">
                    <div class="meal-overlay " data-meal-id="${meal.idMeal}"><h3 class="meal-title">${meal.strMeal}</h3></div>
                </div>
    
            </div>
        </div>`
            
        }

        return box;

    }

    getCategoriesBox() {
        let box = '';
        for (const category of this.data) {

             box += `
        <div class="yummy-meal-width-25%-tailwind" data-category-name="${category.strCategory}" data-category-id="${category.idCategory}">

        <div class="px-3 category" data-category-name="${category.strCategory}">
            <div class="meal-image group/mealImage" data-category-name="${category.strCategory}">

                <img src="${category.strCategoryThumb}" alt="" class="w-full">
                <div class="category-overlay " data-category-name="${category.strCategory}"><h3 class="meal-title mb-2">${category.strCategory}</h3>
                <p class="line-clamp-2">${category.strCategoryDescription}</p></div>
            </div>
        </div>
    </div>
        `
        }

        return box;
    }
}


export default Box;