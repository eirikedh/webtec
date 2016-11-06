let navdiv = document.getElementById("navdiv");

window.onload = function addNavBar(){
  let nav =document.createElement("ul");
  nav.id ="nav";
  for (let i = 1; i<6; i++){
    if (i = 1){
      let li = document.createElement("li");
      let navlink = document.createElement("a");
      navlink.href = "hjem.html";
      navlink.appendChild(document.createTextNode("Hjem"));
      li.appendChild(navlink)
      nav.appendChild(li)
    }
    if (i = 2){
      let li = document.createElement("li");
      let navlink = document.createElement("a");
      navlink.href = "vare_produkter.html";
      navlink.appendChild(document.createTextNode("Våre Produkter"));
      li.appendChild(navlink)
      nav.appendChild(li)
    }
    if (i = 3){
      let li = document.createElement("li");
      let navlink = document.createElement("a");
      navlink.href = "thflor.html";
      navlink.appendChild(document.createTextNode("TH Flor"));
      li.appendChild(navlink)
      nav.appendChild(li)
    }
    if (i = 4){
      let li = document.createElement("li");
      let navlink = document.createElement("a");
      navlink.href = "gallerihtml";
      navlink.appendChild(document.createTextNode("Galleri"));
      li.appendChild(navlink)
      nav.appendChild(li)
    }
    if (i = 5){
      let li = document.createElement("li");
      let navlink = document.createElement("a");
      navlink.href = "tips_og_triks.html";
      navlink.appendChild(document.createTextNode("Tips og triks"));
      li.appendChild(navlink)
      nav.appendChild(li)
    }
    if (i = 6){
      let li = document.createElement("li");
      let navlink = document.createElement("a");
      navlink.href = "om_oss.html";
      navlink.appendChild(document.createTextNode("Om oss"));
      li.appendChild(navlink)
      nav.appendChild(li)
    }
    if (i = 7){
      let li = document.createElement("li");
      let navlink = document.createElement("a");
      navlink.href = "kontakt.html";
      navlink.appendChild(document.createTextNode("Kontakt"));
      li.appendChild(navlink)
      nav.appendChild(li)
    }
  }
  navdiv.appendChild(nav)
}
