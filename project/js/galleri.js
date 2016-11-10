function checkSeason(whichstring, whichnumber){
  let season = document.getElementById(whichstring)
  let seasonnumber = document.getElementsByClassName(whichnumber)
    if  (season.checked == true){
      for (i = 0; i < seasonnumber.length; i++) {
        seasonnumber[i].style.display = 'block';
        }
      }
    if (season.checked == false  ){
      for (j = 0; j < seasonnumber.length; j++) {
        seasonnumber[j].style.display = 'none';
        }
      }
}

