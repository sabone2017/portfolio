var slideIndex = 1;
var slides = document.getElementsByClassName("slide");
var prevIMG = document.getElementsByClassName("preview");
showSlide(slideIndex);
setPreview();

function incSlide(n){
  slideIndex +=n;
  showSlide(slideIndex);
}

function showSlide(n){
  var i = 0;
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

function setPreview(){
  //used to test global var: alert(slides[slideIndex].src);
  i = 0;
  for(i ; i<slides.length ; i++){
    var newPrev = document.createElement('img');
    newPrev.src = slides[i].src;
    prevIMG[i].addEventListener('click' , activePreview);
    prevIMG[i].appendChild(newPrev);
  }
}

function activePreview(){
  var activePrev = document.getElementsByClassName('preview-active')[0];
  //change the class to preview
  // for older browsers to remove class names?? no idea : activePrev.className = activePrev.className.replace(/(?:^|\s)preview-acitve/ , 'preview');
  activePrev.classList.remove('preview-active');
  this.className = "preview preview-active";
  slideIndex = 
}
