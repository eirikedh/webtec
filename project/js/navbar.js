let navdiv = document.getElementById("navdiv")
let nav = document.createElement("ul")
nav.id ="nav"

function navbar(link,text){
  let li = document.createElement("li")
  let a = document.createElement("a")
  a.href = link
  a.appendChild(document.createTextNode(text))
  li.appendChild(a)
  nav.appendChild(li)
}

navbar("hjem.html", "Hjem")
function vareprodukter(){
  let prodli = document.createElement("li")
  prodli.className = "dropdown"
  let proda = document.createElement("a")
  proli.innerHTML = ' <a href="javascript:void(0)" class="dropbtn" onclick="myFunction()">Våre Produkter</a>'
  prodli.appendChild(proda)
  let prodiv = document.createElement("div")
  prodiv.className = "dropdown-content"
  prodiv.id = "myDropdown"
  let vareli = document.createElement("li")
  let thli = document.createElement("li")
  let varea = document.createElement("a")
  let tha = document.createElement("a")
  varea.href = "vare_produkter.html"
  varea.appendChild(document.createTextNode("Våre Produkter"))
  vareli.appendChild(varea)
  tha.href = "thflor_produkter.html"
  tha.appendChild(document.createTextNode("TH Flor"))
  thli.appendChild(tha)
  prodiv.appendChild(vareli)
  prodiv.appendChild(thli)
  prodli.appendChild(prodiv)
  nav.appendChild(prodli)
}
vareprodukter();
navbar("thflor.html", "TH Flor")
navbar("galleri.html", "Galleri")
navbar("tips_og_triks", "Tips Og Triks")
navbar("om_oss.html", "Om Oss")
navbar("kontakt.html", "Kontak")

navdiv.appendChild(nav)
