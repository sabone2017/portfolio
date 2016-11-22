//globals


//functions

//cover page button function : put everything that readies the full page here
function showPage(){
  //var enterButton = document.getElementById("enter");
  //var theBody = document.getElementsByTagName("body")[0];
  //var header = document.getElementsByClassName("headBorder")[0];
  var content = document.getElementsByClassName('wrapper-body');
  var sectOne = document.getElementById("intro");
  //var sectTwo = document.getElementById("midBox");
  //header.style.display = "block";
  var i = 0;
  while(i<content.length){
    content[i].style.display = "block";
    i++;
  }
  sectOne.style.display= "none";
  //sectTwo.style.display = "block";
  navSet();
  // don't need moved to css theBody.style.backgroundImage = "url(assets/images/bodyPattern.png)"
  // don't need moved to css  theBody.style.backgroundSize = "cover";
}

//nav bar active style function
function navSet(){
  var navLinks = document.getElementsByClassName('navLink')

  for(i=0; i<navLinks.length ; i++){
    navLinks[i].addEventListener('click' , setActive);
  }
  function setActive(){
    for(i=0 ; i<navLinks.length ; i++){
      navLinks[i].className='navLink';
      }
    this.className='navLink active';
  }
}
