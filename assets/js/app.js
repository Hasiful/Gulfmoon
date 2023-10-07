// client slider

// offer
$(function (e) {
  "use strict";
  e(".client_slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: !0,
    dots: false,
    autoplay: !1,
    autoplaySpeed: 5e3,
    swipe: true,
    swipeToSlide: true,
    responsive: [{
      breakpoint: 1200,
      settings: {
        autoplay: !1,
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 766,
      settings: {
        autoplay: !1,
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
        autoplay: !1,
        slidesToShow: 1,
      }
    }
    ]
  })
});

// // magnific popup

// $('.video_popup').magnificPopup({
//   type: 'iframe'
// });

// prealoader

// const preloader = document.querySelector(".preloader")
// window.addEventListener("load", function(){
//   preloader.style.display = "none"
// })

// dark theme
// let darkThemeBtn = document.getElementById("dark_theme")
// let body = document.getElementById("body")
// let ligt_theme = document.getElementById("ligt_theme")
// let dark_theme = document.getElementById("dark_themeicon")

// // set local storage class
// darkThemeBtn.addEventListener("click", () => {
//   body.classList.toggle("dark-theme");
//   const isDarkTheme = body.classList.contains("dark-theme");
//     localStorage.setItem("dark-theme", isDarkTheme ? "1" : "0");
//   setTheme()
// });


// function setTheme() {
//   const isDarkTheme = localStorage.getItem("dark-theme");
//   if (isDarkTheme === "1") {
//     document.body.classList.add("dark-theme");
//     ligt_theme.style.cssText = "display: none"
//     dark_theme.style.cssText = "display: block"
//   } else {
//     document.body.classList.remove("dark-theme");
//     dark_theme.style.cssText = "display: none"
//     ligt_theme.style.cssText = "display: block"
//   }
// }
// setTheme();
