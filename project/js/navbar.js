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

function createListElement(link,text, liste){
  let ul = document.getElementById(liste)
  let li = document.createElement("li")
  let a = document.createElement("a")
  a.href = link
  a.appendChild(document.createTextNode(text))
  li.appendChild(a)
  ul.appendChild(li)
}

function createSpecialList(){
  let endaul = document.getElementById("map2ul");
  let produktli = document.createElement("li")
  produktli.id = "produkter"
  produktli.appendChild(document.createTextNode("Våre Produkter"))
  endaul.appendChild(produktli)
  let nyli = document.createElement("li")
  endaul.appendChild(nyli)
  let nyul = document.createElement("ul")
  nyli.appendChild(nyul)
  let li = document.createElement("li")
  let a = document.createElement("a")
  a.href = "vare_produkter.html"
  a.appendChild(document.createTextNode("Løn Gartneri"))
  li.appendChild(a)
  nyul.appendChild(li)
  let THli = document.createElement("li")
  let THa = document.createElement("a")
  THa.href = "thflor_produkter"
  THa.appendChild(document.createTextNode("TH FLor"))
  THli.appendChild(THa)
  nyul.appendChild(THli)
}

function createImage(){
  let imgdiv = document.getElementById("logofooterdiv")
  let image = document.createElement("img")
  image.src = "img/logo2.png"
  image.alt = "Løn Gartneri logo"
  image.id = "footerlogo"
  imgdiv.appendChild(image)
}
createImage()

createListElement("hjem.html","Hjem", "map1ul");
createListElement("galleri.html","Galleri", "map1ul")
createListElement("om_oss.html","Om Oss", "map1ul")

createSpecialList()

createListElement("thflor.html","Hjem", "map3ul");
createListElement("kontakt.html","Kontakt", "map3ul")
createListElement("tips_og_triks.html","Tips og Triks", "map3ul")
