
 
 let nums=[1,2,3,4,5,6,7];
 let check= nums.some((e)=>{
     e>5
})




let cart = parseInt(localStorage.getItem("data-count")) || 0; // Get cart count from local storage
const cartNav = document.getElementById("cart-nav");
cartNav.setAttribute("data-count", cart);

let myBtns = document.querySelectorAll(".shop-btn");
myBtns.forEach(function (myBtn) {
  // Iterate over each button
  myBtn.onclick = function () {
    cart += 1;

    console.log(`added to cart ${cart} times`);
    cartNav.setAttribute("data-count", cart);
    localStorage.setItem("data-count", cart );

  };
});


document.getElementById("hamburger").addEventListener("click", function () {
  const navbarList = document.getElementById("navbar-list");
  navbarList.classList.toggle("show"); // Toggle the display of the navbar items
});

// Change active class on menu link click

//chatgpt code :(
// document.addEventListener("DOMContentLoaded", function () {
const menuLinks = document.querySelectorAll(".menu-link");
const activeLinkKey = "activeLink"; // Key for local storage
// console.log(menuLinks); this returns a list of the links
// Function to set the active link based on local storage
function setActiveLink() {
  const activeLink = localStorage.getItem(activeLinkKey);
  menuLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.href === activeLink) {
      link.classList.add("active");
    }
    // console.log(activeLink);
  });
}

// Set active link on page load
setActiveLink();

menuLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Store the clicked link in local storage

    localStorage.setItem(activeLinkKey, this.href);
    // console.log(this.href)
  });
});

const products = document.querySelectorAll(".shop-btn");
products.forEach((btn) => {
  btn.addEventListener("click", function () {
    console.log("hi");

  });
});


let btn = document.getElementById("scroll-up");

window.onscroll = function () {
  if (window.scrollY >= 200) {
    btn.style.display = "block";
    btn.onclick = () => {
      window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
      });
    };
  } else {
    btn.style.display = "none";
  }
};
