
const selectElement = {
  navCollapse: document.getElementById("collapse_btn"),
  sideBar: document.getElementById("sidebar_nav"),
  closeBtn: document.getElementById("close_btn")
}

// destructure
const { navCollapse, sideBar, closeBtn } = selectElement

// collapse btn
navCollapse.addEventListener("click", function(){
  sideBar.style.cssText = "left: 0px"
})

// close btn
closeBtn.addEventListener("click", function(){
  sideBar.style.cssText = "left: -100%"
})

// window click remove sidebar

window.addEventListener("click", (e) => {
  let eTarget = e.target;
  if (!eTarget.closest("#collapse_btn") && !eTarget.closest("#sidebar_nav")) {
    sideBar.style.left = "-100%"
  }
});


// client slider
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
        slidesToShow: 2,
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
