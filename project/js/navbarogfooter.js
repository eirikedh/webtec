var navdiv = document.getElementById("navdiv") //Bruker var istedenfor let, siden blant annet Safari og Firefox ikke støtter let her. 
let nav = document.createElement("ul")
nav.id ="nav"

function navbar(link,text){   //lager og fyller listeelemente som settes inn i div. 
  let li = document.createElement("li")
  let a = document.createElement("a")
  a.href = link
  a.appendChild(document.createTextNode(text))
  li.appendChild(a)
  nav.appendChild(li)
}




navbar("hjem.html", "Hjem")
function vareprodukter(){ //Egen kode nødvendig for Våre produkter siden den ikke følger stilen til de andre elementene i navbaren.
  let prodli = document.createElement("li")
  prodli.className = "dropdown"
  prodli.innerHTML = ' <a href="#" class="dropbtn">Våre Produkter</a>'
  let prodiv = document.createElement("div")
  prodiv.className = "dropdown-content"
  prodiv.id = "myDropdown"
  let vareli = document.createElement("li")
  let thli = document.createElement("li")
  let varea = document.createElement("a")
  let tha = document.createElement("a")
  varea.href = "vare_produkter.html"
  varea.appendChild(document.createTextNode("Gartneriet"))
  tha.href = "thflor_produkter.html"
  tha.appendChild(document.createTextNode("Utsalget"))
  prodiv.appendChild(varea)
  prodiv.appendChild(tha)
  prodli.appendChild(prodiv)
  nav.appendChild(prodli)
}
vareprodukter();
navbar("thflor.html", "TH Flor")
navbar("galleri.html", "Galleri")
navbar("tips_og_triks", "Tips Og Triks")
navbar("om_oss.html", "Om Oss")
navbar("kontakt.html", "Kontakt")

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

function createSpecialList(){ //Igjen så skapes Våre Produkter på en annen måte siden dette er underlister og kan ikke gjenbruke tidligere kode.
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
  a.appendChild(document.createTextNode("Gartneriet"))
  li.appendChild(a)
  nyul.appendChild(li)
  let THli = document.createElement("li")
  let THa = document.createElement("a")
  THa.href = "thflor_produkter"
  THa.appendChild(document.createTextNode("Utsalget"))
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
createListElement("om_oss.html","Om Oss", "map1ul")
createListElement("thflor.html","TH Flor", "map3ul");

createSpecialList()

createListElement("galleri.html","Galleri", "map1ul")
createListElement("tips_og_triks.html","Tips og Triks", "map3ul");
createListElement("kontakt.html","Kontakt", "map3ul")
