function imageResize(bilde){
  let cover = document.getElementById("fullsidediv");
  cover.style.display = "inline-block"
  bilde.style.width = "80%"
  bilde.style.height = "80%"
  bilde.style.position = "fixed";
  bilde.style.zIndex = 10000;
  bilde.style.top = "80px";
  bilde.style.left = "200px";

  cover.addEventListener("click", function (){
    cover.style.display = "none";
    bilde.style.position ="static"
    bilde.style.float = "left"
    bilde.style.width = "180px"
    bilde.style.height ="150px"
    bilde.style.marginBottom = "18px"
  })
}
