var colorhex=document.querySelector(".colorcode");
var bgcolor=document.querySelector("body");
function colorchange(){
  var colorcode= Math.random().toString(16).substring(2,8);
  bgcolor.style.backgroundColor="#"+colorcode;
  colorhex.innerText="#"+colorcode;
}