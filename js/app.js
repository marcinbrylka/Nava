import '../scss/main.scss';
import '../scss/reset.css';
import '../scss/media.scss';

document.addEventListener("DOMContentLoaded", function () {


    function getDistance() {
        let topDist = header.offsetTop;
        return topDist;
    }
    const header = document.querySelector(".header");
    const hamburger = $(".hamburger");
    const mobileMenu = $(".mobileMenu");
    let stuck = false;
    window.addEventListener("scroll", function () {
        let distance = getDistance() - window.pageYOffset;
        let offset = window.pageYOffset;
        if ((distance <= 0) && !stuck) {
            header.classList.add("sticky");
            stuck = true;
        } else if (stuck && (offset-37 <= header.offsetTop)) {
            header.classList.remove("sticky");
            stuck = false;
        }
    });

    hamburger.click(function(){
        mobileMenu.slideToggle();
    });

});
