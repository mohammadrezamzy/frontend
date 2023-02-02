const sliderImages = [
  "./images/image1.jpg",
  "./images/image2.jpg",
  "./images/image3.jpg",
  "./images/image4.jpg",
];
const sliderDom = document.getElementById("slider");

let currentImage = 0;

function renderImages() {
  sliderImages.forEach((image) => {
    sliderDom.innerHTML += "<img src='" + image + "' />";
  });
}

function clearImages() {
  const images = document.getElementsByTagName("img");
  for (let i = 0; i < images.length; i++) {
    images[i].style.opacity = 0;
  }
}

function showImage(image) {
  clearImages();
  document.getElementsByTagName("img")[image].style.opacity = 1;
}

function init() {
  renderImages();
  showImage(currentImage);
}

function nextImage() {
  const newImage = (currentImage + 1) % sliderImages.length;
  showImage(newImage);
  currentImage = newImage;
}

function prevImage() {
  const newImage =
    (currentImage - 1 + sliderImages.length) % sliderImages.length;
  showImage(newImage);
  currentImage = newImage;
}

document.getElementById("nextButton").addEventListener("click", nextImage);
document.getElementById("prevButton").addEventListener("click", prevImage);

init();
