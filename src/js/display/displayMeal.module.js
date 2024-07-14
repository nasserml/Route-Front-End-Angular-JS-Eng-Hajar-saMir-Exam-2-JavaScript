
class DisplayMeal {

    constructor(box, ele) {
        this.box = box;
        this.ele = ele;
    }

    displayMeal() {
       
        this.ele.html(this.box);
    }
}

export default DisplayMeal;