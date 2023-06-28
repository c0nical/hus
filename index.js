const previousButton = document.querySelector('.arrow-icon');
const nextButton = document.querySelector('.arrow2-icon');
const images = document.querySelectorAll('.image-slider img');

let counter = 0;

function showPreviousImage() {
  images[counter].classList.remove('active');
  counter--;
  if (counter < 0) {
    counter = images.length - 1;
  }
  images[counter].classList.add('active');
}

function showNextImage() {
  images[counter].classList.remove('active');
  counter++;
  if (counter >= images.length) {
    counter = 0;
  }
  images[counter].classList.add('active');
}

previousButton.addEventListener('click', showPreviousImage);
nextButton.addEventListener('click', showNextImage);

setInterval(showNextImage, 6000);