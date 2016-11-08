let bilder = 0;
loop();

function loop() {
    let i;
    let x = document.getElementsByClassName("slideshow_auto");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    bilder++;
    if (bilder > x.length) {bilder = 1}
    x[bilder-1].style.display = "block";
    setTimeout(loop, 4000);
}

//Hentet fra W3
