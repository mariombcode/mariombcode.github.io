var web1js = document.getElementById("web1");
var divweb1js = document.getElementById("divweb1");
var web2js = document.getElementById("web2");
var divweb2js = document.getElementById("divweb2");
var web1pjs = document.getElementById("web1p");
var web2pjs = document.getElementById("web2p");
var web1imgjs = document.getElementById("web1img");
var web2imgjs = document.getElementById("web2img");

web1js.onmouseover = web1hover;
web1js.onmouseout = web1hoverout;
function web1hover(){
	divweb1js.style.padding = "40px";
	web1pjs.style.color = "#bccbff";
	web1imgjs.style.opacity = "1";
}
function web1hoverout(){
	divweb1js.style.padding = "50px";
	web1pjs.style.color = "#1d0751";
	web1imgjs.style.opacity = "0.8";
}

web2js.onmouseover = web2hover;
web2js.onmouseout = web2hoverout;
function web2hover(){
	divweb2js.style.padding = "40px";
	web2pjs.style.color = "#bccbff";
	web2imgjs.style.opacity = "1";
}
function web2hoverout(){
	divweb2js.style.padding = "50px";
	web2pjs.style.color = "#1d0751";
	web2imgjs.style.opacity = "0.8";
}