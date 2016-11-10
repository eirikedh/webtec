

function checkSeason() {
  let sommer = document.getElementById("sommer")
  let høst = document.getElementById("høst")
  let vinter = document.getElementById("vinter")
  let vår = document.getElementById("vår")


  /* HVIS KUN SOMMER ER VALGT */
  if  (sommer.checked == true)  {
    let season1 = document.getElementsByClassName("autumn");
    for (i = 0; i < season1.length; i++) {
      season1[i].style.display = 'none';
      }
    let season2 = document.getElementsByClassName("vinter");
    for (i = 0; i < season2.length; i++) {
      season2[i].style.display = 'none';
      }
    let season3 = document.getElementsByClassName("spring");
    for (i = 0; i < season3.length; i++) {
      season3[i].style.display = 'none';
      }
    }
  
  
  /* HVIS KUN HØST ER VALG */
  if  (høst.checked == true)  {
    let season1 = document.getElementsByClassName("summer");
    for (i = 0; i < season1.length; i++) {
      season1[i].style.display = 'none';
      }
    let season2 = document.getElementsByClassName("vinter");
    for (i = 0; i < season2.length; i++) {
      season2[i].style.display = 'none';
      }
    let season3 = document.getElementsByClassName("spring");
    for (i = 0; i < season3.length; i++) {
      season3[i].style.display = 'none';
      }
    }


  /* HVIS KUN VINTER ER VALG */
  if  (vinter.checked == true)  {
    let season1 = document.getElementsByClassName("summer");
    for (i = 0; i < season1.length; i++) {
      season1[i].style.display = 'none';
      }
    let season2 = document.getElementsByClassName("autumn");
    for (i = 0; i < season2.length; i++) {
      season2[i].style.display = 'none';
      }
    let season3 = document.getElementsByClassName("spring");
    for (i = 0; i < season3.length; i++) {
      season3[i].style.display = 'none';
      }
    }


  /* HVIS KUN VÅR ER VALG */
  if  (vår.checked == true)  {
    let season1 = document.getElementsByClassName("summer");
    for (i = 0; i < season1.length; i++) {
      season1[i].style.display = 'none';
      }
    let season2 = document.getElementsByClassName("vinter");
    for (i = 0; i < season2.length; i++) {
      season2[i].style.display = 'none';
      }
    let season3 = document.getElementsByClassName("autumn");
    for (i = 0; i < season3.length; i++) {
      season3[i].style.display = 'none';
      }
    }

  
/*
  if  (sommer.checked == true && høst.checked == true)  {
    let season1 = document.getElementsByClassName("spring");
    for (i = 0; i < season1.length; i++) {
      season1[i].style.display = 'none';
      }
    let season2 = document.getElementsByClassName("vinter");
    for (i = 0; i < season2.length; i++) {
      season2[i].style.display = 'none';
      }
    }

  if  (sommer.checked == true && vinter.checked == true)  {
    let season1 = document.getElementsByClassName("spring");
    for (i = 0; i < season1.length; i++) {
      season1[i].style.display = 'none';
      }
    let season1 = document.getElementsByClassName("autumn");
    for (i = 0; i < season1.length; i++) {
      season1[i].style.display = 'none';
      }
    }

  if  (sommer.checked == true && vinter.checked == true)  {
    let season1 = document.getElementsByClassName("spring");
    for (i = 0; i < season1.length; i++) {
      season1[i].style.display = 'none';
      }
    let season1 = document.getElementsByClassName("autumn");
    for (i = 0; i < season1.length; i++) {
      season1[i].style.display = 'none';
      }
    }
*/


  /* HVIS INGEN SESONGER ER VALGT: VISES ALLE BLOMSTER */
  if  (sommer.checked == false && høst.checked == false && vinter.checked == false && vår.checked == false)  {
    let season1 = document.getElementsByClassName("summer");
    for (i = 0; i < season1.length; i++) {
      season1[i].style.display = 'block';
      }
    let season2 = document.getElementsByClassName("autumn");
    for (i = 0; i < season2.length; i++) {
      season2[i].style.display = 'block';
      }
    let season3 = document.getElementsByClassName("vinter");
    for (i = 0; i < season3.length; i++) {
      season3[i].style.display = 'block';
      }
    let season4 = document.getElementsByClassName("spring");
    for (i = 0; i < season4.length; i++) {
      season4[i].style.display = 'block';
      }
    }

  /* HVIS ALLE SESONGENE ER VALGT: VISES ALLE BLOMSTER 
  if  (sommer.checked == true && høst.checked == true && vinter.checked == true && vår.checked == true)  {
    let season1 = document.getElementsByClassName("summer");
    for (i = 0; i < season1.length; i++) {
      season1[i].style.display = 'block';
      }
    let season2 = document.getElementsByClassName("autumn");
    for (i = 0; i < season2.length; i++) {
      season2[i].style.display = 'block';
      }
    let season3 = document.getElementsByClassName("vinter");
    for (i = 0; i < season3.length; i++) {
      season3[i].style.display = 'block';
      }
    let season4 = document.getElementsByClassName("spring");
    for (i = 0; i < season4.length; i++) {
      season4[i].style.display = 'block';
      }
    }
    */
}
