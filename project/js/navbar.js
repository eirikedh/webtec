let navdiv = document.getElementById("navdiv");

window.onload = function addNavBar(){
  let nav =document.createElement("ul");
  nav.id ="nav";
  for (let i = 1; i<6; i++){
    if (i = 1){
      let li = document.createElement("li");
      let nava = document.createElement("a");
      nava.href = "hjem.html";
      nava.appendChild(document.createTextNode("Hjem"));
      li.appendChild(nava)
      nav.appendChild(li)
    }
    if (i = 2){
      let li = document.createElement("li");
      let nava = document.createElement("a");
      nava.href = "vare_produkter.html";
      nava.appendChild(document.createTextNode("Våre Produkter"));
      li.appendChild(nava)
      nav.appendChild(li)
    }
    if (i = 3){
      let li = document.createElement("li");
      let nava = document.createElement("a");
      nava.href = "thflor.html";
      nava.appendChild(document.createTextNode("TH Flor"));
      li.appendChild(nava)
      nav.appendChild(li)
    }
    if (i = 4){
      let li = document.createElement("li");
      let nava = document.createElement("a");
      nava.href = "gallerihtml";
      nava.appendChild(document.createTextNode("Galleri"));
      li.appendChild(nava)
      nav.appendChild(li)
    }
    if (i = 5){
      let li = document.createElement("li");
      let nava = document.createElement("a");
      nava.href = "tips_og_triks.html";
      nava.appendChild(document.createTextNode("Tips og triks"));
      li.appendChild(nava)
      nav.appendChild(li)
    }
    if (i = 6){
      let li = document.createElement("li");
      let nava = document.createElement("a");
      nava.href = "om_oss.html";
      nava.appendChild(document.createTextNode("Om oss"));
      li.appendChild(nava)
      nav.appendChild(li)
    }
    if (i = 7){
      let li = document.createElement("li");
      let nava = document.createElement("a");
      nava.href = "kontakt.html";
      nava.appendChild(document.createTextNode("Kontakt"));
      li.appendChild(nava)
      nav.appendChild(li)
    }
  }
  navdiv.appendChild(nav)
}
