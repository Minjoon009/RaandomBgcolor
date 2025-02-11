var colorhex=document.querySelector(".colorcode");
var bgcolor=document.querySelector("body");
function colorchange(){
  var r = Math.floor(Math.random() * 256);
var g = Math.floor(Math.random() * 256);
var b = Math.floor(Math.random() * 256);

// Set the background color using RGB format
bgcolor.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

// Display the RGB value as text
colorhex.innerText = `rgb(${r}, ${g}, ${b})`;
}
