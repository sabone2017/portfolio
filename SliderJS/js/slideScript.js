var slideIndex = 0;
showSlide(slideIndex);

function incSlide(n){
  slideIndex +=n;
  showSlide(slideIndex);
}

function showSlide(n){
  var i = 0;
  var slides = document.getElementsByClassName("slide");
  if(slideIndex<0){
    slideIndex = (slides.length - 1);
  }
  if(slideIndex=slides.length){
    slideIndex = 0;
  }
  for(i ; i<slides.length ; i++){
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}
