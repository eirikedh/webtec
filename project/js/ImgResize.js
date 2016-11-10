function imageResize(bilde){
  let cover = document.getElementById("fullsidediv");
  let whitegallery =document.getElementById("white_galleri")
  let bilde2 = bilde.cloneNode(true)
  cover.style.display = "inline-block"
  whitegallery.appendChild(bilde2)
  bilde2.style.width = "80%"
  bilde2.style.height = "80%"
  bilde2.style.position = "fixed";
  bilde2.style.zIndex = 10000;
  bilde2.style.top = "80px";
  bilde2.style.left = "200px";
  bilde2.style.opacity = 1

  //Ved bruk av klone var det lettest å ikke skape problemer i selve galleriet når vi gikk tilbake fra bildet
    
  cover.addEventListener("click", function (){
    cover.style.display = "none";
    bilde2.style.position ="static"
    bilde2.style.float = "left"
    bilde2.style.width = "180px"
    bilde2.style.height ="150px"
    bilde2.style.marginBottom = "18px"
    bilde2.style.zIndex = 1;
    bilde2.parentElement.removeChild(bilde2);
  })
}

