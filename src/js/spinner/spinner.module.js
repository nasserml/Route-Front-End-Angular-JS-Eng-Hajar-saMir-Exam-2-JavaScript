
import { loadingSpinnerDiv } from '../selector/jquerySelector.module.js';

class Spinner {
    constructor(spinner) {
        this.spinner= spinner;
        this.className = 'hidden'
    }

    showSpinner(){
        this.spinner.removeClass(this.className);
    }

    hideSpinner() {
        this.spinner.addClass(this.className);
    }

    toggleSpinner(){
        this.spinner.toggleClass(this.className);
    }

}


const spinner = new Spinner(loadingSpinnerDiv);

export default spinner;