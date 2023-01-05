// Scroll Bar
window.onscroll = function() {
    var windowScroll = document.documentElement.scrollTop;
    var windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollAmount = (windowScroll / windowHeight) * 100;
    document.getElementById("linebar").style.width = scrollAmount + "%";
};

// //responsive navbar
// function myNavbar() {
//     var x = document.getElementById("myMenu");
//     if (x.className === "menu") {
//       x.className += " responsive";
//     } else {
//       x.className = "menu";
//     }
//   }