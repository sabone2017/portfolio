var boxes = document.getElementsByClassName('imageBox');
/*Need to get the boxes to select proper preview image
  Make it so it is only affected by a current box
  Might need to make an array for the images to be selected from*/
var fullImageList = [];
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
  //var description = document.getElementById('description-area');
  var descImg = document.getElementsByClassName('descImg')[0];
  descImg.classList.add('activeImg')
}

function hoverOut(){
  //var description = document.getElementById('description-area');
  var descImg = document.getElementsByClassName('descImg')[0];
  descImg.classList.remove('activeImg')
}

//array for images possibly make it in html and just select by DOM selectors
//option 2: create an image object and create an array of image objects
// each object will have two properties of type (preview or full) and url(actual link to image)
function imageMaker(type , link){
  //Error Catches for incorrect typed image properties
  if(typeof type != 'string'){
    console.log('Invalid Type for Image Board Picture');
  }
  if(typeof link != 'string'){
    console.log('Invalid URL inserted for Image Board Picture');
  }
  if(!(type==="preview") && !(type==="full")){
      console.log('Invalid Type for Image Board Picture');
  }
  //property setters
  this.imageType = type;
  this.imageURL = link;
  //push to correct array based on type of image
  if(this.imageType == "full"){
    fullImageList.push(this);
    console.log(fullImageList);
  }
}
function setPreview(){
  var descImg = document.getElementsByClassName('descImg')[0];
  descImg.src = fullImageList[0];
}
var textTime = new imageMaker("full" , "../images/textTimeFull2.png");
var carbon = new imageMaker("full" , "../images/CarbonFull.png");
var holdera = new imageMaker('full' , '../images/holder.png');
var holderb = new imageMaker('full' , '../images/holder.png');
var holderc = new imageMaker('full' , '../images/holder.png');
var holderd = new imageMaker('full' , '../images/holder.png');
