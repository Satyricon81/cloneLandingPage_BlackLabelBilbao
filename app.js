function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

window.onscroll = function () { scrollNav() };

function scrollNav() {
    if (document.documentElement.scrollTop > 150) {
        document.getElementById("myImg").className = "slide__up";
        document.getElementById("navbar__id").className = "navbar__responsive"
    } else {
        document.getElementById("myImg").className = "navbar__logo";
        document.getElementById("navbar__id").className = "navbar__id"
    }
}
