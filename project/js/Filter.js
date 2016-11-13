/*
FILE NAME: galleri.js
WRITTEN BY:  Eirik Kopperud Edh og Even Kronen Johansen
WHEN:  Oktober 2016
PURPOSE:  Brukes på vare_produkter.html for å sortere produktene etter årstid.
*/


function checkSeason(whichstring, whichnumber){
  let season = document.getElementById(whichstring) //Henter id fra sesong i checkboxen
  let seasonnumber = document.getElementsByClassName(whichnumber) //For å kunne endre alle bildene i samme class
    if  (season.checked == true){ //Sjekker om man har filtret for å se bildene i denne sesongen
      for (i = 0; i < seasonnumber.length; i++) {
        seasonnumber[i].style.display = 'block';  // Går gjennom alle bildene i classen seasonnumber og setter display block
        }
      }
    if (season.checked == false  ){ //Sjekker om season ikker er checked
      for (j = 0; j < seasonnumber.length; j++) {
        seasonnumber[j].style.display = 'none'; //Går gjennom alle bildene i classen og setter display none
        }
      }
}

