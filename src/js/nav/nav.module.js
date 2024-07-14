import {navAside, navRightDiv, barsCloseDiv, faBarsI, faXmarksI, linksUl}from '../selector/jquerySelector.module.js';

class Nav{

    #rightOuterWidth;

    constructor(nav, navRight,openCloseDiv, bars, close , ul, duration)  {

        this.nav = nav;
        this.navRight = navRight;
        this.openCloseDiv = openCloseDiv;
        this.bars = bars;
        this.close = close;
        this.ul = ul;
        this.duration = duration;
        this.#setRightOuterWidth();
        
    }   

    #setRightOuterWidth(){
        this.#rightOuterWidth = this.navRight.outerWidth();
    }

    #animateNavIn(){
        // this.nav.animate({left: `-${this.#rightOuterWidth}px`}, this.duration);

        this.nav.animate({left: `-${this.#rightOuterWidth}px`}, this.duration);


    }

    #animateNavOut(){
        this.nav.animate({left: `0px`}, this.duration);
    }

    #toggleHiddenBarsXMarks() {
        this.bars.toggleClass('hidden');
        this.close.toggleClass('hidden');
    }

    #addFadeinUpBig(){
        this.ul.addClass('animate__animated  animate__fadeInUpBig')
    }
    #removeFadeinUpBig(){
        this.ul.removeClass('animate__animated  animate__fadeInUpBig')
    }

    #checkLeft(){
         if(this.nav.css('left') == '0px' ) {
            return true;
         } else {
            return false;
         }
    }

    #openNav() {
        this.#animateNavOut();
        this.#toggleHiddenBarsXMarks();
        this.#addFadeinUpBig();
        
    }

    #closeNav() {
        this.#animateNavIn();
        this.#toggleHiddenBarsXMarks();
        this.#removeFadeinUpBig();
        
    }

    closeNav() {
        this.#animateNavIn();
        this.#toggleHiddenBarsXMarks();
        this.#removeFadeinUpBig();
    }
 
    initNav(){
        this.openCloseDiv.on('click', (e) => {
            if(this.#checkLeft()) {
                

                this.#closeNav();
            } else {
                
                this.#openNav();
            }
        })
    }


    
}


const nav = new Nav(navAside, navRightDiv, barsCloseDiv, faBarsI, faXmarksI, linksUl, 600);

export default nav;