/*Going to make this thing work
- fill the boxes with the correct images
- set the hover action to make the grayed background over the top of the boxe
- set the info area to have the correct image
- show the information in a text box in the info div
And that should be it*/
var boxes = document.getElementsByClassName('imageBox');
//var shades = document.getElementsByClassName('boxHover');
//on hover action
/* get the imagebox elements
  show div over element with correct background and transparency
  do not use a loop to collect all hoverBoxes it will do them all at once
    make a function to relate the image box to the hover box using QuerySelector
*/
hoverView();
function hoverView(){
  var i = 0;
  for(i ; i<boxes.length ; i++){
    boxes[i].addEventListener("mouseenter" , hoverIn);
    boxes[i].addEventListener("mouseleave" , hoverOut);
  }
/*  boxes[0].onmouseenter = function shadeBox(){
    for(i=0 ; i<shades.length ; i++){
      shades[i].style.display = "block";
    }
  };
  boxes[0].onmouseleave = function unShadeBox(){
    for(i=0 ; i<shades.length ; i++){
      shades[i].style.display = "none";
    }
  };*/
}

function hoverIn(){
  var description = document.getElementById('description-area');
  var descImg = description.getElementsByTagName('img')[0];
  descImg.classList.add('activeImg')
}

function hoverOut(){
  var description = document.getElementById('description-area');
  var descImg = description.getElementsByTagName('img')[0];
  descImg.classList.remove('activeImg')
}
