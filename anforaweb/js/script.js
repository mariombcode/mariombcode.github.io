function navOpacity(){
	var navlogojs = document.getElementById("navlogo");
	var divnavjs = document.getElementById("divnav");
	var gradientnavjs = document.getElementById("gradientnav");
	var menunavopenjs = document.getElementById("menunavopen");
	var navline1 = document.getElementById("line1");
	var navline2 = document.getElementById("line2");
	var navline3 = document.getElementById("line3");
	var scrollheight = document.documentElement.scrollTop;
	var divnavheight = divnavjs.offsetTop;
	if (scrollheight > divnavheight) {
		navlogojs.style.display = "block"; 
		setTimeout(function(){
    	navlogojs.style.opacity = "1";
		}, 0);
		gradientnavjs.style.display = "block"; 
		setTimeout(function(){
    	gradientnavjs.style.opacity = "0.25";
		}, 0);
		navline1.style.display = "block"; 
		setTimeout(function(){
    	navline1.style.opacity = "1";
		}, 0);
		navline2.style.display = "block"; 
		setTimeout(function(){
    	navline2.style.opacity = "1";
		}, 0);
		navline3.style.display = "block"; 
		setTimeout(function(){
    	navline3.style.opacity = "1";
		}, 0);
	}
	if (scrollheight < divnavheight) { 
		if (navlogojs.style.opacity == 1){
		navlogojs.style.opacity ="0";
		setTimeout(function(){
		navlogojs.style.display = "none";
		}, 500);
		gradientnavjs.style.opacity ="0";
		setTimeout(function(){
		gradientnavjs.style.display = "none";
		}, 500);
		navline1.style.opacity ="0";
		setTimeout(function(){
		navline1.style.display = "none";
		}, 500);
		navline2.style.opacity ="0";
		setTimeout(function(){
		navline2.style.display = "none";
		}, 500);
		navline3.style.opacity ="0";
		setTimeout(function(){
		navline3.style.display = "none";
		}, 500);
		}
	}
}
window.addEventListener ("scroll", navOpacity);


function gradientNavHeight() {
var navlogojshe = document.getElementById("navlogo");
var gradientnavjshe = document.getElementById("gradientnav");
var navlogoheight = navlogojshe.offsetHeight;
setTimeout(function(){
degradado1.style.height = navlogoheight + "px";
}, 0);
}
window.onresize = gradientNavHeight;


var navmenujs = document.getElementById("navmenu");
var closeline1js = document.getElementById("closeline1");
var closeline2js = document.getElementById("closeline2");
var gradientnavjs = document.getElementById("gradientnav");
var menunavopenjs = document.getElementById("menunavopen");
var menuulopenjs = document.getElementById("menuulopen");
var divnavjs = document.getElementById("divnav");
var divnav2js = document.getElementById("divnav2");
var navline1 = document.getElementById("line1");
var navline2 = document.getElementById("line2");
var navline3 = document.getElementById("line3");
closeline1js.onclick = openMenu;
closeline2js.onclick = closeMenu;
function openMenu(){
	navline1.style.transform = "rotate(45deg)";
	navline1.style.transition = "transform 0.8s ease 0s";
	navline2.style.display = "none";
	navline3.style.transform = "rotate(-45deg)";
	navline3.style.transition = "transform 0.8s ease 0s";
	navline1.style.top = "47%";
	navline3.style.top = "47%";
	closeline1js.style.display = "none";
	closeline2js.style.display = "block";
	menunavopenjs.style.display = "block";
	setTimeout(function(){
	menunavopenjs.style.opacity = "0.8";
	}, 0);
	menuulopenjs.style.display="block";
	setTimeout(function(){
	menuulopenjs.style.opacity = "0.8";
	}, 0);
	gradientnavjs.style.opacity = "0";
	window.onscroll= function(){navline2.style.display="none";}

	function phoneMoveMatch(phonemove){
		if (phonemove.matches) {1+1;} else {
			divnavjs.style.position="absolute";
			divnavjs.style.top="-100px";
			divnav2js.style.display= "block";
		}
	}
	var phonemove = window.matchMedia("(max-width: 500px)");
	phoneMoveMatch(phonemove);
}

function closeMenu(){
	navline1.style.transform = "rotate(0deg)";
	navline1.style.transition= "transform 0s ease 0s";
	navline2.style.display= "block";
	navline3.style.transform = "rotate(0deg)";
	navline3.style.transition= "transform 0s ease 0s";
	navline1.style.top = "12%";
	navline3.style.top = "";
	setTimeout(function(){
	navline3.style.bottom = "12%";
	navline1.style.transition = "opacity 0.5s ease 0s";
	navline3.style.transition = "opacity 0.5s ease 0s";
	}, 0);
	closeline1js.style.display = "block";
	closeline2js.style.display = "none";
	menunavopenjs.style.opacity = "0";
	setTimeout(function(){
	menunavopenjs.style.display = "none";
	}, 300);
	menuulopenjs.style.opacity="0";
	setTimeout(function(){
	menuulopenjs.style.display = "none";
	}, 300);
	gradientnavjs.style.opacity = "0.25";
	window.onscroll= function(){navline2.style.display="block";}

	function phoneMoveMatch(phonemove){
		if (phonemove.matches) {1+1;} else {
			divnavjs.style.position="relative";
			divnavjs.style.top="";
			divnav2js.style.display= "none";
		}
	}
	var phonemove = window.matchMedia("(max-width: 500px)");
	phoneMoveMatch(phonemove);
}



let slideIndex = 1;
showSlides(slideIndex);

var prevevent = document.getElementById("prev");
var nextevent = document.getElementById("next");
prevevent.onclick = prevFunction;
nextevent.onclick = nextFunction;

function prevFunction() {
		headAnimationPrev();
		tempPrev();
}
let timeprev;
function tempPrev() {
  timeprev = setTimeout(funcionRetraso1, 350);
}
function funcionRetraso1() {
  plusSlides (-1);
}

function nextFunction() {
	headAnimationNext();
	tempNext();
}
let timenext;
function tempNext() {
  timenext = setTimeout(funcionRetraso2, 350);
}
function funcionRetraso2() {
  plusSlides (1);
}


function headAnimationPrev() {
	var slideanim = document.getElementsByClassName("headSlides");

    if (slideIndex-2 < 0) {headAnim(slideanim.length-1);} else {headAnim(slideIndex-2);}
    headAnim(slideIndex-1);
    function headAnim(n) {
    	slideanim[n].style.transform = "translate(102.5%)";
    	slideanim[n].style.transition = "transform 0.35s ease 0s";
    	setTimeout(function(){
    	slideanim[n].style.transform = "translate(0%)";
    	slideanim[n].style.opacity = "0";
		}, 350);
    }

    if (slideIndex == slideanim.length) {headAnim2(0);} else {headAnim2(slideIndex);}
    function headAnim2(n) {
    	slideanim[n].style.transform = "translate(102.25%)";
    	slideanim[n].style.transition = "transform 0.35s ease 0s";
    	setTimeout(function(){
    	slideanim[n].style.transform = "translate(0%)";
    	slideanim[n].style.opacity = "0";
		}, 350);
    }
}


function headAnimationNext() {
	var slideanim = document.getElementsByClassName("headSlides");

    if (slideIndex-2 < 0) {headAnim(slideanim.length-1);} else {headAnim(slideIndex-2);}
    headAnim(slideIndex-1);
    function headAnim(n) {
    	slideanim[n].style.transform = "translate(-102.5%)";
    	slideanim[n].style.transition = "transform 0.35s ease 0s";
    	setTimeout(function(){
    	slideanim[n].style.transform = "translate(0%)";
    	slideanim[n].style.opacity = "0";
		}, 350);
    }

    if (slideIndex == slideanim.length) {headAnim2(0);} else {headAnim2(slideIndex);}
    function headAnim2(n) {
    	slideanim[n].style.transform = "translate(-102.25%)";
    	slideanim[n].style.transition = "transform 0.35s ease 0s";
    	setTimeout(function(){
    	slideanim[n].style.transform = "translate(0%)";
    	slideanim[n].style.opacity = "0";
		}, 350);
    }
}




function plusSlides(n) {
  showSlides(slideIndex += n);
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("headSlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  slides[slideIndex-1].style.position = "absolute";
  slides[slideIndex-1].style.top = "0px";
  slides[slideIndex-1].style.left = "6%";
  slides[slideIndex-1].style.opacity= "1";
  slides[slideIndex-1].style.transition = "opacity 0s ease 0s";


  if (slideIndex == slides.length) {afterSlides(0);} else {afterSlides(slideIndex);}
  
  if (slideIndex-2 < 0) {beforeSlides(slides.length-1);} else {beforeSlides(slideIndex-2);}
  
  function afterSlides(n){
  slides[n].style.display = "block";
  slides[n].style.position = "absolute";
  slides[n].style.top = "0px";
  slides[n].style.left = "94%";
  slides[n].style.opacity = "0.3";
  slides[n].style.transition = "opacity 0s ease 0s";
  }
  function beforeSlides(n){
  slides[n].style.display= "block";
  slides[n].style.position = "absolute";
  slides[n].style.top = "0px";
  slides[n].style.left = "-82%";
  slides[n].style.opacity = "0.3";
  slides[n].style.transition = "opacity 0s ease 0s";
  }
}



function headHeight() {
var heighthead = document.getElementById("headimages");
var degradado1 = document.getElementById("gradienthead1");
var degradado2 = document.getElementById("gradienthead2");
var heightdegr = heighthead.clientHeight;
degradado1.style.height = heightdegr + "px";
degradado2.style.height = heightdegr + "px";
}
headHeight();


function divHomeHeight() {
	var homeheight1 = document.getElementById("divhomechoco");
	var homedivhe = document.getElementById("divhome")
	var heightdiv = homeheight1.offsetHeight;
	homedivhe.style.height = heightdiv + "px";
}
divHomeHeight();
window.onresize = divHomeHeight;
window.onload = divHomeHeight;


function divHomeMovement() {
	var homechoco = document.getElementById("divhomechoco");
	var homecrart = document.getElementById("divhomecrart");
	var homeswola = document.getElementById("divhomeswola");
	homechoco.onmouseover = homechocomouse; 
	homechoco.onmouseout = homechocomouseout;
	function homechocomouse() {
		homechoco.style.left="0%";
		homechoco.style.transition="left 0.7s ease 0s";
	}
	function homechocomouseout(){
		homechoco.style.left="25%";
		homechoco.style.transition="left 0.3s ease 0s";
	}
	homecrart.onmouseover = homecrartmouse; 
	homecrart.onmouseout = homecrartmouseout;
	function homecrartmouse() {
		homechoco.style.left="0%";
		homechoco.style.transition="left 0.7s ease 0s";
		homecrart.style.left="25%";
		homecrart.style.transition="left 0.7s ease 0s";
	}
	function homecrartmouseout(){
		homechoco.style.left="25%";
		homechoco.style.transition="left 0.3s ease 0s";
		homecrart.style.left="50%";
		homecrart.style.transition="left 0.3s ease 0s";
	}
	homeswola.onmouseover = homeswolamouse; 
	homeswola.onmouseout = homeswolamouseout;
	function homeswolamouse() {
		homechoco.style.left="0%";
		homechoco.style.transition="left 0.7s ease 0s";
		homecrart.style.left="25%";
		homecrart.style.transition="left 0.7s ease 0s";
	}
	function homeswolamouseout(){
		homechoco.style.left="25%";
		homechoco.style.transition="left 0.3s ease 0s";
		homecrart.style.left="50%";
		homecrart.style.transition="left 0.3s ease 0s";
	}
}
divHomeMovement();




function phoneMoveMatchBR(phonemovebr){
		var footerp2br = document.getElementById("footerp2");
		var footerp3br = document.getElementById("footerp3");
	if (phonemovebr.matches) {
		footerp2br.innerHTML = "TEL: 000000000<br>MAIL: anforafood@anforamail.es";
		footerp3br.innerHTML = "This is the website of a<br><span>fictitious</span> company"
	} else {
		footerp2br.innerHTML = "TEL: 000000000 &nbsp;&nbsp; MAIL: anforafood@anforamail.es";
		footerp3br.innerHTML = "This is the website of a <span>fictitious</span> company";
	}
}
var phonemovebr = window.matchMedia("(max-width: 500px)");
phoneMoveMatchBR(phonemovebr);
function matchMediaBR() {
	phoneMoveMatchBR(phonemovebr);
}
window.addEventListener ("resize", matchMediaBR);





var swipetouch = document.getElementById("headimages");
var swipex1 = swipetouch.addEventListener("touchstart", swipeTouch);
var swipex2 = swipetouch.addEventListener("touchend", swipeTouch);
function swipeTouch(e){
	if (e.touches){
		var touchx = e.touches[0].pageX;
		return touchx;
    }
}
if (swipex1 > swipex2) {nextFunction();}
if (swipex1 < swipex2) {prevFunction();}