var enterButton = document.getElementById("enter");
enterButton.onclick = function showPage(){
  var theBody = document.getElementsByTagName("body")[0];
  var header = document.getElementsByClassName("headBorder")[0];
  var sectOne = document.getElementById("intro");
  var sectTwo = document.getElementById("midBox");
  header.style.display = "block";
  sectOne.style.height = "800px";
  theBody.style.backgroundImage = "url(assets/images/bodyPattern.png)"
  theBody.style.backgroundSize = "cover";

  sectTwo.style.display = "block";
}
