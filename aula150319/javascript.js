

function slide1(){
document.getElementById('banner').src="img/1.jpg";
setTimeout("slide2()", 3000)

}
function slide2(){
document.getElementById('banner').src="img/2.jpg";
setTimeout("slide3()", 3000)

}
function slide3(){
document.getElementById('banner').src="img/3.jpg";
setTimeout("slide4()", 3000)

}
function slide4(){
document.getElementById('banner').src="img/4.jpg";
setTimeout("slide5()", 3000)

}
function slide5(){
document.getElementById('banner').src="img/5.jpg";
setTimeout("slide6()", 3000)

}
function slide6(){
document.getElementById('banner').src="img/6.jpg";
setTimeout("slide1()", 3000)

}