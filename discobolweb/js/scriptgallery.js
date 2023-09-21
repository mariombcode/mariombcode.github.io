let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}






function openmenu() {
	var button = document.getElementById("phonebutton");
	button.style.display = "none";
	var button2 = document.getElementById("phonebuttonexit");
	button2.style.display = "block";
	var menu = document.getElementById("navfixedmenu");
	menu.style.display = "block";
}

function closemenu() {
	var buttonexit = document.getElementById("phonebuttonexit")
	buttonexit.style.display = "none";
	var buttonexit2 = document.getElementById("phonebutton")
	buttonexit2.style.display = "block";
	var menuexit = document.getElementById("navfixedmenu");
	menuexit.style.display = "none";
}