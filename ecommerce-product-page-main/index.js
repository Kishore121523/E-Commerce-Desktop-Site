const images = document.querySelectorAll(".imgOut");
const imgFocussed = document.querySelector(".imgFocussed");
const cartBtn = document.querySelector(".icon-cart");
const cart = document.querySelector(".cart-details");

images.forEach((image) => {
  image.addEventListener("click", () => {
    if (image.classList.contains("active")) return;
    else {
      images.forEach((imageAll) => {
        imageAll.classList.remove("active");
      });
      image.classList.add("active");
      imgFocussed.src = `./images/${image.children[0].id}.jpg`;
    }
  });
});

cartBtn.addEventListener("click", () => {
  cart.style.display == "none"
    ? (cart.style.display = "flex")
    : (cart.style.display = "none");
});

const count = document.querySelector(".item-number");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");

let countItem = 0;
plus.addEventListener("click", () => {
  countItem++;
  count.innerHTML = countItem;
});
minus.addEventListener("click", () => {
  if (countItem > 0) {
    countItem--;
    count.innerHTML = countItem;
  }
});

const addCartBtn = document.querySelector(".add-to-cart-buttton");

addCartBtn.addEventListener("click", () => {
  let totalCartElement = count.innerHTML;
  let amount = document.querySelector(".offer-price-amount").innerHTML;
  document.querySelector(".quantity").innerHTML = totalCartElement;
  document.querySelector(".amount").innerHTML = amount;

  let total = parseFloat(amount.substring(1)) * parseFloat(totalCartElement);
  document.querySelector(".total").innerHTML = `$${total.toString()}`;

  cart.style.display = "flex";
  document.querySelector(".cart-details-body").style.display = "none";
  document.querySelector(".cart-details-body-added").style.display = "flex";
  document.querySelector(".checkout-button").style.display = "flex";
  var box = document.querySelector(".div1");
  box.setAttribute("data", count.innerHTML);
});

const deleteBtn = document.getElementById("delete-cart");
