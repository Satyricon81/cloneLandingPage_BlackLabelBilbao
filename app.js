function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


// window.addEventListener('scroll', () => {
//     let scroll = document.querySelector('#scrollNav')
//     if (window.scrollY > 200) {
//         scroll.classList.add('navbar__logo')
//     } else {
//         scroll.classList.remove('navbar__logo')
//     }
//   })


  window.onscroll = function() {scrollNav()};

  function scrollNav() {
    if (document.documentElement.scrollTop > 150) {
      document.getElementById("myImg").className = "slide__up";
      document.getElementById("navbar__id").classname = "navbar__id"
    } else {
        document.getElementById("myImg").className = "navbar__logo";
        document.getElementById("navbar__id").classname = "navbar__icon"
    }
  }