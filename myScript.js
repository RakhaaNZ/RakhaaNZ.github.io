// const li=document.querySelectorAll(".active");
// const sec=document.querySelectorAll("section");

// function activeMenu(){
//     let len = sec.length;
//     while(--len && window.scrollY + 64 < sec[len].offsetTop){}
//     li.forEach(ltx => ltx.classList.remove("now"));
//     li[len].classList.add("now");
// }

// activeMenu();
// window.addEventListener("scroll", activeMenu);

// let section = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header ul li a');

// window.onscroll = () =>{
//     section.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top >= offset && top < offset + height){
//             navLinks.forEach(links =>{
//                 links.classList.remove('active');
//                 document.querySelector('header  ul li a[href*=' + id + ']').classList.add('active');
//             });
//         };

//     });
// };

// var header = document.querySelector("header");
// var links = document.querySelectorAll(".links");
// var sections = document.querySelectorAll(".sections");

// window.onscroll = function(){
//     if(window.pageYOffset > header.offsetHeight){
//         header.style.background = "blue";
//     }
//     else{
//         header.style.background = "green";
//     }

//     var current = "HOME";
//     sections.forEach((section)=>{
//         const sectionTop = section.offsetTop;
//         if( pageYOffset >= sectionTop-60){
//             current = section.getAttribute("id");
//         }
//     })

//     links.forEach((item)=>{
//         item.classList.remove("active");
//         if(item.href.includes(current)){
//             item.classList.add("active");
//         }
//         else{
//             item.classList.remove("active");
//         }
//     })

// }

// const sections = document.querySelectorAll("section");
// const navLi = document.querySelectorAll("header .menu ul li");
// window.addEventListener("scroll", () => {
//   let current = "";
//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop;
//     const sectionHeight = section.clientHeight;
//     if (pageYOffset >= sectionTop - sectionHeight / 3) {
//       current = section.getAttribute("id");
//     }
//   });

//   navLi.forEach((li) => {
//     li.classList.remove("active");
//     if (li.classList.menu(current)) {
//       li.classList.add("active");
//     }
//   });
// });


// const updateBar = () => {
//     const bodyEL = document.body;
//     const barEL = document.querySelector('.linebar');
//     let scrollpos = 
//     (window.screenY / (bodyEL.scrollHeight + window.innerHeight) * 100);

//     barEL.style.width = '$(scrollpos)%';
//     requestAnimationFrame(updateBar);
// }
// updateBar();

window.onscroll = function() {
    var windowScroll = document.documentElement.scrollTop;
    var windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollAmount = (windowScroll / windowHeight) * 100;
    document.getElementById("mybar").style.width = scrollAmount + "%";
};     