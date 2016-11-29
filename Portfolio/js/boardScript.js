var boxes = document.getElementsByClassName('imageBox');
/*Need to get the boxes to select proper preview image
  Make it so it is only affected by a current box
  Might need to make an array for the images to be selected from*/
var fullImageList = [];
var textTime = new imageMaker("full" , "assets/images/boardPics/textTimeFull2.png");
var carbon = new imageMaker("full" , "assets/images/boardPics/CarbonFull.png");
var holdera = new imageMaker('full' , 'assets/images/boardPics/arrowsFull.png');
var holderb = new imageMaker('full' , 'assets/images/boardPics/mangaFull.png');
var holderc = new imageMaker('full' , 'assets/images/boardPics/mflnFull.png');
var holderd = new imageMaker('full' , 'assets/images/boardPics/pcBuildFull.png');
hoverView();

function hoverView(){
  var i = 0;
  var descImg = document.getElementsByClassName('descImg')[0];

  for(i ; i<boxes.length ; i++){
    boxes[i].addEventListener("mouseenter" , hoverIn);
    boxes[i].addEventListener("mouseleave" , hoverOut);
  }

  function hoverIn(){
    var a = this;
    var t = 0;
    if(descImg.src != ""){
      t = 800;
    }
    setTimeout(animateImg , t);
    function animateImg(){
      setFullImg(a , 0);
      descImg.classList.add('activeImg');
    }
  }

  function hoverOut(){
    descImg.classList.remove('activeImg');
  }
}

function setFullImg(a , c){
  var descImg = document.getElementsByClassName('descImg')[0];
  while(c < boxes.length){
    if(a == document.getElementsByClassName('imageBox')[c]){
      descImg.src = fullImageList[c].imageURL;
    }
    c++;
  }
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
