const textShadowElements = document.querySelectorAll('header h1');
const dropShadowElements = document.querySelectorAll('aside img');

let lastScrollY = window.scrollY;
let scheduledAnimationFrame = false;

function animateDropShadows() {
  shadowDrop = window.scrollY / 10;
  textShadowElements.forEach((el) => {
    el.style.textShadow = `0 -${shadowDrop}px 5px rgb(0 0 0 / 20%)`;
  });

  dropShadowElements.forEach((el) => {
    el.style.filter = `drop-shadow( 3px -${shadowDrop}px 2px rgba(0, 0, 0, .3))`;
  })


  lastScrollY = window.scrollY;
  scheduledAnimationFrame = false;
}

function animateOnScroll(e) {
  if (scheduledAnimationFrame){
    return;
  }

  scheduledAnimationFrame = true;
  window.requestAnimationFrame(animateDropShadows);
};

window.addEventListener('scroll', animateOnScroll, {passive: true})