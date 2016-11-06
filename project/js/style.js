
function buttonclick1() {
  window.location.href="om_oss.html";
  
  }


function buttonclick2() {
  window.location.href="vare_produkter.html";
  
  }



function buttonclick3() {
  window.location.href="galleri.html";
  
  }

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

