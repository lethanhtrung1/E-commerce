// Script for navigation bar
// const menuIcon = document.querySelector(".menu-icon");
// const nav = document.querySelector(".navbar");
// const closeIcon = document.querySelector(".close");

// if (menuIcon) {
//     menuIcon.addEventListener("click", () => {
//         nav.classList.add("active");
//     });
// }

// if (closeIcon) {
//     closeIcon.addEventListener("click", () => {
//         nav.classList.remove("active");
//     });
// }

// script for image change on click
let smallImg = document.querySelectorAll(".small-img-group .small-img");

if (smallImg) {
    let mainImg = document.querySelector("#main-img");
    for (let i = 0; i < smallImg.length; i++) {
        smallImg[i].addEventListener("click", (e) => {
            mainImg.src = smallImg[i].src;
        });
    }
}
