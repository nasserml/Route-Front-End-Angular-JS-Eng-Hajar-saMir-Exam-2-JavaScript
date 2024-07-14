
import nav from './nav/nav.module.js';
import { displayMeals, displayMealsFirstLetter, displayCategories } from './display/display.module.js';
import spinner from './spinner/spinner.module.js';
import { categoriesLinkLi } from './selector/jquerySelector.module.js';
import { searchLinkLi,inputSearchDiv,searchNameInput,searchFirstLetterInput , rowTailwindContentYummyDiv, mealImageDiv, rowTailwindMealDiv, mealContentDiv, categoryDiv}  from './selector/jquerySelector.module.js';
import meal from './api/apiMeal.modile.js';
import BoxMeal  from './box/boxMeal.module.js';
import DisplayMeal from './display/displayMeal.module.js';

$(document).ready( async function() {


    nav.initNav();
   
    // []2

    spinner.showSpinner();
    await displayMeals.displayMeals();

    spinner.hideSpinner();

    mealImageDiv.getQuerySelectorBy$().on('click' ,async (e) => {

        await mealDis(e);
        

    } );


    categoriesLinkLi.on('click', async (e) => {

        inputSearchDiv.addClass('hidden');
        mealContentDiv.addClass('hidden');

        nav.closeNav();
        spinner.showSpinner();
        await displayCategories.displayCategories();
        spinner.hideSpinner();

        categoryDiv.getQuerySelectorBy$().on('click' , async function(e)  {
            let categoryName = $(this).attr('data-category-name');
            spinner.showSpinner();

            let url = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c='+categoryName);
            let res = await url.json();

            let meals = res.meals;

            let box  = `` ;

            for (const meal of meals) {
                
            box += ` <div class="yummy-meal-width-25%-tailwind" data-meal-id="${meal.idMeal}" >

            <div class="px-3" >
    
                <div class="meal-image group/mealImage" data-meal-id="${meal.idMeal}">
    
                    <img src="${meal.strMealThumb}" alt="" class="w-full">
                    <div class="meal-overlay " data-meal-id="${meal.idMeal}"><h3 class="meal-title">${meal.strMeal}</h3></div>
                </div>
    
            </div>
        </div>`
                
            }

            $('.content-yummy .row-tailwind').html(box);

            spinner.hideSpinner();
            mealImageDiv.getQuerySelectorBy$().on('click' ,async (e) => {

                await mealDis(e);
    
                inputSearchDiv.addClass('hidden');
        
            } )


        });


    });


    searchLinkLi.on('click', async (e) => {
        nav.closeNav();
        inputSearchDiv.removeClass('hidden');
        rowTailwindContentYummyDiv.html('');
        mealContentDiv.addClass('hidden');

    });

    searchFirstLetterInput.on('keyup', async (e) => {

        let letter = searchFirstLetterInput.val();
        spinner.showSpinner();
        await displayMealsFirstLetter.displayMealsFirstLetter(letter);
        spinner.hideSpinner();
        
        mealImageDiv.getQuerySelectorBy$().on('click' ,async (e) => {
            await mealDis(e);
            

            inputSearchDiv.addClass('hidden');
    
        } )
    });



    searchNameInput.on('keyup', async (e) => {
        let name = searchNameInput.val();
        spinner.showSpinner();
        await displayMealsFirstLetter.displayMealsByName(name);
        spinner.hideSpinner();
        
        mealImageDiv.getQuerySelectorBy$().on('click' ,async (e) => {

            await mealDis(e);

            inputSearchDiv.addClass('hidden');
    
        } )

    });

    $('.area-link').on('click' , async (e) => {

        inputSearchDiv.addClass('hidden');
        mealContentDiv.addClass('hidden');

        nav.closeNav();

        spinner.showSpinner();

        let url = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
        let res = await url.json();

        let areas = res.meals;


        let box = ``;

        for (const area of areas) {

            
            box += `
            
            <div class="yummy-meal-width-25%-tailwind">

                <div class="px-3" >
                    <div class="meal-image ">
                          <div class="area" data-area-name="${area.strArea}">
                            
                        <i class="fa-solid fa-house-laptop"></i>

                        <h3>${area.strArea}</h3>

                          </div>
                    </div>
                </div>
            </div>

            `
            
        }

        $('.content-yummy .row-tailwind').html(box);


        spinner.hideSpinner();

        $('.area').on('click', async function(e) {
            let areaName = $(this).attr('data-area-name');

            
            spinner.showSpinner();

            let url = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a='+areaName);
            let res = await url.json();

            let meals = res.meals;

            let box2 = '';

            for (const meal of meals) {

                box2 += `
                <div class="yummy-meal-width-25%-tailwind" data-meal-id="${meal.idMeal}" >

                <div class="px-3" >
        
                    <div class="meal-image group/mealImage" data-meal-id="${meal.idMeal}">
        
                        <img src="${meal.strMealThumb}" alt="" class="w-full">
                        <div class="meal-overlay " data-meal-id="${meal.idMeal}"><h3 class="meal-title">${meal.strMeal}</h3></div>
                    </div>
        
                </div>
            </div>

                `
                
            }

            $('.content-yummy .row-tailwind').html(box2);

            spinner.hideSpinner();
            mealImageDiv.getQuerySelectorBy$().on('click' ,async (e) => {

                await mealDis(e);
    
                inputSearchDiv.addClass('hidden');
        
            } )

        })



    });



    $('.ingredients-link').on('click', async (e) =>{

        inputSearchDiv.addClass('hidden');
        mealContentDiv.addClass('hidden');

        nav.closeNav();

        spinner.showSpinner();

        let url = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
        let res = await url.json();

        let ingredients = res.meals;

        let box = '';


        for(let i =0 ; i < 20 ; i++ ){

            box += `
            <div class="yummy-meal-width-25%-tailwind">

            <div class="px-3">
                <div class="meal-image ">
                      <div class="ingredients" data-ingredient-name="${ingredients[i].strIngredient}">
                        
                        <i class="fa-solid fa-drumstick-bite"></i>

                    <h3>${ingredients[i].strIngredient}</h3>

                    <p>${ingredients[i].strDescription.split(" ").slice(0,20).join(' ')}</p>

                      </div>
                </div>
            </div>
        </div>

            `
        }

        $('.content-yummy .row-tailwind').html(box);
        spinner.hideSpinner();

        $('.ingredients').on('click', async function(e) {
            let ingredientName =  $(this).attr('data-ingredient-name');

            spinner.showSpinner();

            let url = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=' + ingredientName);
            let res = await url.json();

            let meals = res.meals;

            let box2= ``;

            for (const meal of meals) {

                box2 += `
                <div class="yummy-meal-width-25%-tailwind" data-meal-id="${meal.idMeal}" >

                <div class="px-3" >
        
                    <div class="meal-image group/mealImage" data-meal-id="${meal.idMeal}">
        
                        <img src="${meal.strMealThumb}" alt="" class="w-full">
                        <div class="meal-overlay " data-meal-id="${meal.idMeal}"><h3 class="meal-title">${meal.strMeal}</h3></div>
                    </div>
        
                </div>
            </div>

                `
                
            }

            $('.content-yummy .row-tailwind').html(box2);

            spinner.hideSpinner();

            mealImageDiv.getQuerySelectorBy$().on('click' ,async (e) => {

                await mealDis(e);
    
                inputSearchDiv.addClass('hidden');
        
            });




        })
    });


    $('.contact-link').on('click', async (e) => {

        inputSearchDiv.addClass('hidden');
        mealContentDiv.addClass('hidden');

        nav.closeNav();

        let box = `
        <div class="contact">

            <div class="inner-contact">
                <div class="inputs-contact">
                    <div class="col-input">
  
                        <input class="name" type="text" placeholder="Enter Your Name">
                        <div class="hidden error-message">Special characters and numbers not allowed
                        </div>
                    </div>
  
                    <div class="col-input">
  
                        <input class="email" type="email" placeholder="Enter Your Email">
                        <div class="hidden error-message">Email not valid *exemple@yyy.zzz
                        </div>
  
                    </div>    
  
                    <div class="col-input">
                        
                        <input class="phone" type="tel"
                        placeholder="Enter Your Phone">
                        <div class="hidden error-message">Enter valid Phone Number
                        </div>
  
                    </div>
  
                    <div class="col-input">
  
                        <input class="age" type="number" placeholder="Enter Your Age" min="1" max="120" maxlength="3">
                        <div class="hidden error-message"  >Enter valid age
                        </div>
                    </div>
                    
                    <div class="col-input">
  
                        <input class="password" type="password" placeholder="Enter Your Password">
                        <div class="hidden error-message">Enter valid password *Minimum eight characters, at least one letter and one number:*
                        </div>
                    </div>
  
  
                    <div class="col-input">
                        <input class="rePassword" type="password" placeholder="Repassword">
                        <div class="hidden error-message">Enter valid repassword
                        </div>
  
                    </div>
  
                </div>
                
                <button disabled class="submitBtn">Submit</button>

            </div>
         

        </div>`; 

        $('.content-yummy .row-tailwind').html(box);

        // $('.submitBtn').prop("disabled", false);
        // $('.submitBtn').prop("disabled", true);

        $('.inputs-contact input').on('keyup',function(e) {
            validation(this);

            if(validationTwo('.inputs-contact .name') && validationTwo('.inputs-contact .email') && validationTwo('.inputs-contact .phone') && 
            validationTwo('.inputs-contact .age') && 
            validationTwo('.inputs-contact .password') && 
            validationTwo('.inputs-contact .rePassword')  ){
                $('.submitBtn').prop("disabled", false);
            } else {
                $('.submitBtn').prop("disabled", true);
            }
        } )

    } );




    
    
})





async function mealDis(e) {
    let mealld = $(e.target).attr('data-meal-id');
    spinner.showSpinner();
    let mealData= await meal.getMealById(mealld);
    let boxMeal = new BoxMeal(mealData).getMealBox();
       
    new DisplayMeal(boxMeal,rowTailwindMealDiv).displayMeal();
    mealContentDiv.removeClass('hidden');
    rowTailwindContentYummyDiv.html('')
    spinner.hideSpinner();
}


function validation(ele) {

    const regex = {
        name:/^[A-Za-z\s']+$/,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        phone:/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
        age:/^(?:1[01][0-9]|120|[1-9][0-9]?)$/,
        password:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        rePassword:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        
    }
     
   

    if(regex[$(ele).attr('class')].test($(ele).val().trim())) {

        $(ele).next().addClass('hidden');

        if($(ele).attr('class') === 'rePassword') {
        
            if(passwordMacth($('.inputs-contact input.password').val() , $(ele).val() ) ) {
                $(ele).next().addClass('hidden');
            } else {
                $(ele).next().removeClass('hidden');
                return false;
            }
    
        }
        return true;

    } else {
        $(ele).next().removeClass('hidden')
        return false;
    }
}

function validationTwo(ele) {

    const regex = {
        name:/^[A-Za-z\s']+$/,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        phone:/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
        age:/^(?:1[01][0-9]|120|[1-9][0-9]?)$/,
        password:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        rePassword:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        
    }
     
   

    if(regex[$(ele).attr('class')].test($(ele).val().trim())) {

        

        if($(ele).attr('class') === 'rePassword') {
        
            if(passwordMacth($('.inputs-contact input.password').val() , $(ele).val() ) ) {
                
            } else {
                
                return false;
            }
    
        }
        return true;

    } else {
        
        return false;
    }
}


function passwordMacth(password, rePassword){
    return password === rePassword;
}