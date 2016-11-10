
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


/* -------------------- THFLOR-DROPDOWN ---------------------- */

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

var navMenu = document.getElementById("nav");

nav.onmouseover = function(e) {
	var dropdowns = document.getElementsByClassName("dropdown-content");
	for (var d = 0; d < dropdowns.length; d++) {
		var openDropdown = dropdowns[d];
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
	var remove = true;
	if (e.toElement.parentElement != null) {
		if (e.toElement.parentElement.className == "dropdown-content show") {
			remove = false;
		}
	}
	
	if (remove) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		for (var d = 0; d < dropdowns.length; d++) {
  			var openDropdown = dropdowns[d];
  			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
    				openDropdown.removeEventListener("mouseout", mouseOut);
 			}
		}
	}

}

