// https://theportalwiki.com/wiki/List_of_Fact_Sphere_facts Facts sourced from here (Portal 2 Fact Sphere)
// Get images from websites like pixabay, pexels, or creative commons to avoid breaking copyright law since
// we are putting these websites on the internet via github.

var form = document.querySelector('form');
var display = document.getElementById('factDisplay');
var background = document.querySelector('body');
var main = document.querySelector('main');
form.a.addEventListener("click",factOne);
form.b.addEventListener("click",factTwo);
form.c.addEventListener("click",factThree);
form.d.addEventListener("click",factFour);
form.e.addEventListener("click",factFive);

function factOne() {
	display.innerHTML = "<p>An ostrich's eye is bigger than its brain.<p><br><img src='images/ostrich.jpg' alt='Close-up of Ostrich and its eye'>";
	background.style.backgroundColor = "#D3E298";
	main.style.borderColor = "#561D25";
	main.style.backgroundColor = "#CDE7BE";
	display.style.borderColor = "#CE8147";
	form.style.borderColor = "#CE8147";
	form.style.backgroundColor = "#F0E394";
}

function factTwo() {
	display.innerHTML = "<p>Iguanas can stay underwater for 28.7 minutes.<p><br><img src='images/iguana.jpg' alt='Iguana in water'>";
	background.style.backgroundColor = "#D183C9";
	main.style.borderColor = "#643A71";
	main.style.backgroundColor = "#E3879E";
	display.style.borderColor = "#8B5FBF";
	form.style.borderColor = "#8B5FBF";
	form.style.backgroundColor = "#FC9CB4";
} // factTwo

function factThree() {
	display.innerHTML = "<p>Honey does not spoil, it crystalizes instead.<p><br><img src='images/honey.jpg' alt='Jars of honey'>";
	background.style.backgroundColor = "#AEA798";
	main.style.borderColor = "#4F359B";
	main.style.backgroundColor = "#877A90";
	display.style.borderColor = "#585191";
	form.style.borderColor = "#585191";
	form.style.backgroundColor = "#A9AE5B";
}

function factFour() {
	display.innerHTML = "<p>Gently cleaning the tongue twice a day is the most effective way to fight bad breath.<p><br><img src='images/toothbrush.png' alt='Toothbrush approaching mouth'>";
	background.style.backgroundColor = "#CECFC7";
	main.style.borderColor = "#23022E";
	main.style.backgroundColor = "#ADA8B6";
	display.style.borderColor = "#573280";
	form.style.borderColor = "#573280";
	form.style.backgroundColor = "#EFF8E2";
}

function factFive() {
	display.innerHTML = "<p>In 1879, Sandford Fleming first proposed the adoption of worldwide standardized time zones at the Royal Canadian Institute.</p><br><img src='images/clock.jpg' alt='Clock in sunlight'>";
	background.style.backgroundColor = "#FCDDBC";
	main.style.borderColor = "#69585F";
	main.style.backgroundColor = "#F6B9AD";
	display.style.borderColor = "#A41623";
	form.style.borderColor = "#A41623";
	form.style.backgroundColor = "#77CDD1";
}