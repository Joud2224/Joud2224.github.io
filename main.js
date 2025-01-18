let cart = JSON.parse(localStorage.getItem("cart")) || []; // Get cart array from local storage
const cartNav = document.getElementById("cart-nav");
cartNav.setAttribute("data-count", cart.length); // Update cart count

const myBtns = document.querySelectorAll(".shop-btn");
myBtns.forEach(function (myBtn, index) {
  myBtn.onclick = function () {
    // Get product details
    const product = {
      name: document.querySelectorAll(".product h2")[index].innerText,
      price: document.querySelectorAll(".product p")[index].innerText.replace('Price: $', ''),
      image: document.querySelectorAll(".product img")[index].src,
    };

    // Add product to cart
    cart.push(product);
    console.log(`Added to cart: ${product.name}`);

    // Update local storage
    localStorage.setItem("cart", JSON.stringify(cart));
    
    // Update cart count
    cartNav.setAttribute("data-count", cart.length);
  };
});

document.getElementById("hamburger").addEventListener("click", function () {
  const navbarList = document.getElementById("navbar-list");
  navbarList.classList.toggle("show"); // Toggle the display of the navbar items
});

// Change active class on menu link click
const menuLinks = document.querySelectorAll(".menu-link");
const activeLinkKey = "activeLink"; 

function setActiveLink() {
  const activeLink = localStorage.getItem(activeLinkKey);
  menuLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.href === activeLink) {
      link.classList.add("active");
    }
  });
}

// Set active link on page load
setActiveLink();

menuLinks.forEach((link) => {
  link.addEventListener("click", function () {
    localStorage.setItem(activeLinkKey, this.href);
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

document.addEventListener("DOMContentLoaded", function() {
  const cartContainer = document.getElementById("cart-container");
  const emptyCartBtn = document.querySelector(".empty-cart-btn");
  const checkoutBtn = document.querySelector(".checkout-btn");

  function renderCart() {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      cartContainer.innerHTML = ""; // Clear previous items

      if (cart.length > 0) {
          cart.forEach(item => {
              const productDiv = document.createElement("div");
              productDiv.classList.add("product");
              productDiv.innerHTML = `
                  <h2>${item.name}</h2>
                  <img src="${item.image}" alt="${item.name}" />
                  <p>Price: $${item.price}</p>
              `;
              cartContainer.appendChild(productDiv);
          });
      } else {
          cartContainer.innerHTML = "<p>Your cart is empty!</p>";
      }
  }

  emptyCartBtn.addEventListener("click", function() {
      localStorage.removeItem("cart"); // Clear the cart in localStorage
      renderCart(); // Re-render the cart
  });

  // Initial render of the cart
  renderCart();
});


document.querySelector('.empty-cart-btn').addEventListener('click', function() {
  // Clear the cart items from the DOM
  document.querySelector('.cart-items').innerHTML = '';

  // Update the total amount to 0
  document.querySelector('.cart-total').textContent = 'Total: $0.00';

  // Optionally, show a message indicating the cart is empty
  const emptyMessage = document.createElement('div');
  emptyMessage.className = 'empty-cart';
  emptyMessage.textContent = 'Your cart is now empty.';
  document.querySelector('.cart-container').appendChild(emptyMessage);
});