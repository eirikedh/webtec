/*
FILE NAME: imgResize.js
WRITTEN BY:  Eirik Kopperud Edh, Erling Moen
WHEN:  Oktober 2016
PURPOSE:  Brukes til runde navigasjonsknapper og til dropdown-meny
*/


/* -------------------- HJEMMESIDE-BUTTONS ---------------------- */

/* Sender brukeren til en bestemt url-side */
function buttonclick1() {
	window.location.href="om_oss.html";
  	}

function buttonclick2() {
	window.location.href="vare_produkter.html";
  	}

function buttonclick3() {
	window.location.href="galleri.html";
	}


/* -------------------- ÅPNINGSTIDER-DROPDOWN ---------------------- */


/* Kode inspirert og lånt fra http://www.w3schools.com/howto/howto_js_dropdown.asp */
/* Når åpningstider-knappen klikkes, enten vises eller skjules dropdownen */
function openTimes() {
	document.getElementById("myOpentime").classList.toggle("show");
	}

/* Lukke dropdownen hvis man klikker utenfor */
window.onclick = function(event) {
	if (!event.target.matches('.open')) {
		let dropdowns = document.getElementsByClassName("open-content");
		let i;
		for (i = 0; i < dropdowns.length; i++) {
			let openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
      			}
		}
	}
}


/* -------------------- NAVBAR DROPDOWN ---------------------- */

let navMenu = document.getElementById("nav");

nav.onmouseover = function(e) {
	let dropdowns = document.getElementsByClassName("dropdown-content");
	for (let d = 0; d < dropdowns.length; d++) {
		let openDropdown = dropdowns[d];
		if (!openDropdown.classList.contains('show')) {
			if (e.target.className == "dropbtn") {
  				openDropdown.classList.add('show');
  				openDropdown.addEventListener("mouseout", mouseOut);
			}
		}
		
		else {
			if (e.target.className != "dropbtn" && e.target.parentElement.className != "dropdown-content show") {
  				openDropdown.classList.remove('show');
			}
		}
	}
}

function mouseOut(e) {
	let remove = true;
	if (e.relatedTarget.parentElement != null) {
		if (e.relatedTarget.parentElement.className == "dropdown-content show") {
			remove = false;
		}
	}
	
	if (remove) {
		let dropdowns = document.getElementsByClassName("dropdown-content");
		for (let d = 0; d < dropdowns.length; d++) {
  			let openDropdown = dropdowns[d];
  			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
    				openDropdown.removeEventListener("mouseout", mouseOut);
 			}
		}
	}

}

