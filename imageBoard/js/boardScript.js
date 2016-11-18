var boxes = document.getElementsByClassName('imageBox');
/*Need to get the boxes to select proper preview image
  Make it so it is only affected by a current box
  Might need to make an array for the images to be selected from*/
var fullImageList = [];
var textTime = new imageMaker("full" , "images/textTimeFull2.png");
var carbon = new imageMaker("full" , "images/CarbonFull.png");
var holdera = new imageMaker('full' , 'images/holder.png');
var holderb = new imageMaker('full' , 'images/holder.png');
var holderc = new imageMaker('full' , 'images/holder.png');
var holderd = new imageMaker('full' , 'images/holder.png');
hoverView();
//HOVER STUFF MAYBE WE CAN KEEP IT ALL IN THE HOVERVIEW FUNCTION
function hoverView(){
  var i = 0;
  for(i ; i<boxes.length ; i++){
    boxes[i].addEventListener("mouseenter" , hoverIn);
    boxes[i].addEventListener("mouseleave" , hoverOut);
  }
}

function hoverIn(){
  var a = this;
//var fullImg = setFullImg(a , 0);
  setTimeout(animateImg , 800);
  function animateImg(){
    setFullImg(a , 0);
    var descImg = document.getElementsByClassName('descImg')[0];
    //console.log(this)

    descImg.classList.add('activeImg');
    console.log(descImg.src);
  }
}

function hoverOut(){
  var descImg = document.getElementsByClassName('descImg')[0];
  descImg.classList.remove('activeImg');
  //console.log(descImg);
}
function setFullImg(a , c){
  var descImg = document.getElementsByClassName('descImg')[0];
  while(c < boxes.length){
    if(a == document.getElementsByClassName('imageBox')[c]){
      descImg.src = fullImageList[c].imageURL;
    }
    c++;
  }
  console.log(descImg.src);
}
//////////////////////////////////////////////////
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
    //console.log(fullImageList); debugging purposes
  }
}
// need to find a way to associate the box with the specific image
  // - while c < selector.length if(this(current imageBox) = document.getElByCl('imageBox')[i](run through selectors for imageBox object)
  // i = c;
  // descImg.src = fullImageList[i]
// remove active class
// change image
// reapply active class
// make sure the animation is complete before readding class...
