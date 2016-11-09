

function checkSeason() {
  if  (document.getElementById("sommer").checked == true)  {
    let autumn = document.getElementsByClassName("autumn");
    for (i = 0; i < autumn.length; i++) {
      autumn[i].style.display = 'none';
      }
    let vinter = document.getElementsByClassName("vinter");
    for (i = 0; i < vinter.length; i++) {
      vinter[i].style.display = 'none';
      }
    let spring = document.getElementsByClassName("spring");
    for (i = 0; i < spring.length; i++) {
      spring[i].style.display = 'none';
      }
  }


}
