// On the difference between let and var:
// https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var

// The main difference is scoping rules.
// Variables declared by var keyword are scoped to the immediate function body 
// (hence the function scope) while let variables are scoped to the immediate enclosing block 
// denoted by { } (hence the block scope).




// var voor menu knop
var menuBtn = document.querySelector("button.menuBtn");

// body
var scrollLock = document.querySelector("body");

// de content van het menu 
var menuToggle = document.querySelector("div.menuContent")

// button spans
var menuTop = document.querySelector("span.top");
var menuMiddle = document.querySelector("span.middle");
var menuBottom = document.querySelector("span.bottom");



// on click element with class .menuBtn, call toggleMenu
menuBtn.addEventListener("click", toggleMenu); 

function toggleMenu(){
  // toggle: menuOpen will prevent overflow, disabling scrolling
	scrollLock.classList.toggle("disableScrolling");
  // toggle: menuContent will make the contents of the menu visible.
  menuToggle.classList.toggle("menuContentVisible");
  // toggle: change style for menu button.
  menuTop.classList.toggle("menuBtnOpenState");
  menuMiddle.classList.toggle("menuBtnOpenState");
  menuBottom.classList.toggle("menuBtnOpenState");

  menuBtn.classList.toggle("menuBtnOpenState");
}





var lastScrollTop = 0;
var mainNav = document.querySelector("body header");


window.addEventListener("scroll", function () {
    var a = window.pageYOffset || document.documentElement.scrollTop;
    if (a > lastScrollTop) {
      // not sure why 7.8 but
        mainNav.style.top = "-7.8em";
    } else {
        mainNav.style.top = "0";
    }
    lastScrollTop = a;
});

/////////////////////////////////////////


/////////////////////////////////////////

function nextSlide(x) { // next/prev

  if (x < 0) { // x cannot be 0
      whatSlide(slideIndex -= 1); // slideIndex = sI - 1; set slideIndex to 0 - see whatSlide for <1 reference. Enables rotation.
  } else {
      whatSlide(slideIndex += 1); // set slideIndex to 2; see whatSlide for reference
  }

  // timer / click

if (x === -1){
  intTimer = setInterval(function(){nextSlide(x + 2)}, 4000);
} else {
  intTimer = setInterval(function(){nextSlide(x + 1)}, 4000);
}

}

function whatSlide(x) { // yeah, this obviously doesn't work any more. Kinda broke it.

  var slides = document.querySelector(".hSC"); // element container
  var slidesChildren = slides.children; // returns the children of slides

  var headerContainer = document.querySelector("span.hSC"); // array w headers
  var textContainer = document.querySelector("div.tSC"); // array w text bodies

  // if statements

  if (x > slidesChildren.length) {
      slideIndex = 1; // reset var slideIndex to 1
  }

  if (x < 1) {
      slideIndex = slidesChildren.length; // set var slideIndex to 3
  }


  if (x == 1) {

      headerContainer.style.transform = "translateY(calc(0em))";
      textContainer.style.transform = "translateY(calc(0em))";
  }

  if (x == 2) {

      headerContainer.style.transform = "translateY(calc(-1.25em))";
      textContainer.style.transform = "translateY(calc(-10em))";
  }

  if (x == 3) {

      headerContainer.style.transform = "translateY(calc(-2.5em))";
      textContainer.style.transform = "translateY(calc(-20em))";

  }
  console.log("Index = " + slideIndex + " , x == " + x + "!"); // should return values from 1 to 3.}
  console.log(slidesChildren[0] + slidesChildren[1] + slidesChildren[2]);
}