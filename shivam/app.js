let slideImages = document.querySelectorAll(".slides .slide img"); //img
let next = document.querySelector(".next"); // next button
let prev = document.querySelector(".prev"); // prev button
let dots = document.querySelectorAll(".dot"); //dots
let overlays = document.querySelectorAll(".overlay"); // for the text div
let counter = 0;
let autoSlideInterval;


// move the img by next button
next.addEventListener("click", slideNext);
///function for moving img next
function slideNext() {
  slideImages[counter].style.animation = "next1 0.7s ease-in-out forwards";
  if (counter == slideImages.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  slideImages[counter].style.animation = "next2 0.7s ease-in-out forwards";
  overlaysIndicater();
  indicators()
}

// move the img by prev button
prev.addEventListener("click", slidePrev);
//function for moving img prev
function slidePrev() {
  slideImages[counter].style.animation = "prev1 0.7s ease-in-out forwards";

  if (counter == 0) {
    counter = slideImages.length - 1;
  } else {
    counter--;
  }
  slideImages[counter].style.animation = "prev2 0.7s ease-in-out forwards";
  overlaysIndicater();
  indicators();
}

function overlaysIndicater() {
  for (let i = 0; i < overlays.length; i++) {
    overlays[i].classList.remove('active');
  }
  overlays[counter].classList.add('active');
}
// Function for auto sliding
function autoSliding() {
  // Clear any existing interval
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
  }
  // Set a new interval
  autoSlideInterval = setInterval(timer, 3000);
  
  function timer() {
    slideNext();
  }
}
autoSliding();

// Pause auto sliding on mouse down
document.querySelector('.slide-container').addEventListener('mousedown', function() {
  clearInterval(autoSlideInterval);
});

// Resume auto sliding on mouse up
document.querySelector('.slide-container').addEventListener('mouseup', function() {
  autoSliding();
});

// Resume auto sliding when mouse leaves
document.querySelector('.slide-container').addEventListener('mouseleave', function() {
  autoSliding();
});

// Add click event to the indicators
function indicators() {
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active');
  }
  dots[counter].classList.add('active');
}

	// Add click event to the dot
for(dot of dots) {
  dot.addEventListener('click', function() {
    // Get the index of the clicked dot
    let imageId = parseInt(this.getAttribute('attr')); 
    if (imageId !== counter) {
      if (imageId > counter) {
        slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
        counter = imageId;
        slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
      } else {
        slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
        counter = imageId;
        slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
      }
      
      indicators();
      overlaysIndicater();
    }
  });
}