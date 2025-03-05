const heroTexts = [
    "Explore Amazing Internships!",
    "Grow Your Career with Us!",
    "Start Your Journey Now!"
];
let textIndex = 0;

setInterval(() => {
    textIndex = (textIndex + 1) % heroTexts.length;
    document.getElementById("dynamicText").innerHTML = heroTexts[textIndex];
}, 3000); // Change text every 3 seconds


$('.testimonials-container').owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 6000,
  margin: 10,
  nav: true,
  navText: ["<i class='fa-solid fa-arrow-left'></i>",
      "<i class='fa-solid fa-arrow-right'></i>"],
  responsive: {
      0: {
          items: 1,
          nav: false
      },
      600: {
          items: 1,
          nav: true
      },
      768: {
          items: 2
      },
  }
});
// COUNTER
let valueDisplays = document.querySelectorAll(".counter_number");
let interval = 5000;
valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
      startValue += 1;
      valueDisplay.textContent = startValue;
      if(startValue == endValue){
          clearInterval(counter)
      }
  },duration)
});
window.addEventListener('load', function() {
    document.querySelector('.image-container').classList.add('show');
});
window.addEventListener('load', function() {
    document.querySelector('.image-containers').classList.add('show');
});
window.addEventListener('load', function() {
    document.querySelector('.image-containere').classList.add('show');
});