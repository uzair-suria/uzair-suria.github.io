var gallery = document.getElementsByClassName('gallery');

function imgFade(active) {
    for (i = 0; i < gallery.length; i++) {
        gallery[i].style.transition = "ease-in-out 0.5s";
        gallery[i].style.opacity = 0.5;
    }
    active.style.opacity = 1;
}

function clearFade() {
    for (i = 0; i < gallery.length; i++){
        gallery[i].style.transition = "ease-in-out 0.5s"
        gallery[i].style.opacity = 1
    }
}