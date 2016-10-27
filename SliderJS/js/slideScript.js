var slideIndex = 1;
showSlide(slideIndex);

function incSlide(n){
  slideIndex +=n;
  showSlide(slideIndex);
}

function showSlide(n){
  var i = 0;
  var slides = document.getElementsByClassName("slide");
  if(slideIndex<1){
    slideIndex = (slides.length);
  }
  if(slideIndex>slides.length){
    slideIndex = 1;
  }
  for(i ; i<slides.length ; i++){
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
