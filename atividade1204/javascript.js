

function slide1(){
document.getElementById('gif').src="imagens/bocunohero.gif";
setTimeout("slide2()", 4000)

}
function slide2(){
document.getElementById('gif').src="imagens/dbz.gif";
setTimeout("slide3()", 1000)

}
function slide3(){
document.getElementById('gif').src="imagens/naruto.gif";
setTimeout("slide4()", 3000)

}
function slide4(){
document.getElementById('gif').src="imagens/onepiece.gif";
setTimeout("slide5()", 3000)

}
function slide5(){
document.getElementById('gif').src="imagens/naruto1.gif";
setTimeout("slide6()", 4300)

}
function slide6(){
document.getElementById('gif').src="imagens/onepunch.gif";
setTimeout("slide1()", 2000)

}