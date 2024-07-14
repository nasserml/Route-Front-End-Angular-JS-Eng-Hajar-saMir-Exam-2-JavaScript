class JquerySelector {
     constructor(selector){
        this.selector = selector;
     }

     getQuerySelectorBy$(){
        return $(this.selector);
     }
}


const navAside = new JquerySelector('.nav').getQuerySelectorBy$();
const navRightDiv = new JquerySelector('.nav-right').getQuerySelectorBy$();
const barsCloseDiv = new JquerySelector('.bars-close').getQuerySelectorBy$();
const faBarsI = new JquerySelector('.fa-bars').getQuerySelectorBy$();
const faXmarksI = new JquerySelector('.fa-xmark').getQuerySelectorBy$();
const linksUl = new JquerySelector('.links-ul').getQuerySelectorBy$();

export {navAside, navRightDiv, barsCloseDiv, faBarsI, faXmarksI, linksUl};


const rowTailwindDiv = new JquerySelector('.row-tailwind').getQuerySelectorBy$();

const rowTailwindContentYummyDiv = new JquerySelector('.content-yummy .row-tailwind').getQuerySelectorBy$();

export  {rowTailwindDiv, rowTailwindContentYummyDiv};

const loadingSpinnerDiv = new JquerySelector('.loading-spinner').getQuerySelectorBy$();

export { loadingSpinnerDiv};

const categoriesLinkLi = new JquerySelector('.categories-link').getQuerySelectorBy$();

export {categoriesLinkLi};

const searchLinkLi = new JquerySelector('.search-link').getQuerySelectorBy$();

const searchNameInput = new JquerySelector('.search.search-name').getQuerySelectorBy$();

const searchFirstLetterInput =  new JquerySelector('.search.seach-first').getQuerySelectorBy$();

const inputSearchDiv = new JquerySelector('.input-search').getQuerySelectorBy$();

export {searchLinkLi,inputSearchDiv,searchNameInput,searchFirstLetterInput};


const rowTailwindMealDiv = new JquerySelector('.row-tailwind-meal').getQuerySelectorBy$();
const mealImageDiv =  new JquerySelector('.meal-image');
const mealContentDiv = new JquerySelector('.meal-content').getQuerySelectorBy$();
export {rowTailwindMealDiv , mealImageDiv, mealContentDiv};



const categoryDiv = new JquerySelector('.category');
export {categoryDiv};
