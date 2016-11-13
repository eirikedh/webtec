function imageResize(bilde){
  let cover = document.getElementById("fullsidediv"); // For å skape bakgrunn så er det laget en div som dekker hele skjermen, som via css er satt til display "none"
  let resized = document.getElementById("ResizedImage") // For å sette bildet sentralt på skjermen, har vi laget en tom div der bildet vil sendes til. 
  let bilde2 = bilde.cloneNode(true) // Den enkleste løsningen funnet for å være sikker på minst mulig endring i bildeelementene som ligger i galleriet når vi går ut av bildet, velger vi å klone bildet
  cover.style.display = "inline-block" //Viser diven og skaper mørk bakgrunn til bildet.
  resized.appendChild(bilde2) //Legger inn bildet i den tomme diven
  bilde2.style.height = "85%"
  bilde2.style.maxWidth = "80%"
  bilde2.style.position = "fixed";
  bilde2.style.zIndex = 10000; //Bringer bildet fremst.
  bilde2.style.top = "80px";
  bilde2.style.left = "200px";
  bilde2.style.borderStyle = "solid"
  bilde2.style.borderWidth = "4px"
  bilde2.style.borderColor = "#205F08"

  cover.addEventListener("click", function (){ //Gjør at når man trykker på coveret bak bildet ås returnerer man til standardskjerm
    cover.style.display = "none";
    bilde2.parentElement.removeChild(bilde2);//sletter klonen
  })
}
