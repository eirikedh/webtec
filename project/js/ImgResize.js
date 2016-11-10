function imageResize(bilde){
  let cover = document.getElementById("fullsidediv");
  let resized = document.getElementById("ResizedImage")
  let bilde2 = bilde.cloneNode(true)
  cover.style.display = "inline-block"
  resized.appendChild(bilde2)
  bilde2.style.width = "80%"
  bilde2.style.height = "80%"
  bilde2.style.position = "fixed";
  bilde2.style.zIndex = 10000;
  bilde2.style.top = "80px";
  bilde2.style.left = "200px";
  bilde2.style.opacity = 1
  bilde2.style.borderStyle = "solid"
  bilde2.style.borderWidth = "4px"
  bilde2.style.borderColor = "#205F08"

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
