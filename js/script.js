const productsContainer = document.querySelector(".products");
const API_URL = "https://dummyjson.com/products";
const seeMore = document.querySelector(".see__more");
const toggle = document.querySelector(".toggle__btn");
const hidden = document.querySelector(".hidden__navbar");

let offset = 1;
let count = 8;

async function getProducts(api, limit) {
  let response = await fetch(`${api}?limit=${limit}`);
  response
    .json()
    .then((res) => createCard(res.products))
    .catch((err) => err);
}

getProducts(API_URL, count);

function createCard(products) {
  while (productsContainer.firstChild) {
    productsContainer.firstChild.remove();
  }

  products.forEach((product) => {
    let card = document.createElement("div");
    card.classList.add("product");
    card.dataset.id = product.id;

    card.innerHTML = `
      <div class="product__img">
        <img src="${product.thumbnail}" alt="${product.title}" />
        <div class="product__btn">
          <i class="fa-regular fa-heart"></i>
          <i class="fa-regular fa-eye"></i>
        </div>
        <div class="product__add">
          <a href="#">Add to</a>
        </div>
      </div>

      <div class="product__desc">
        <div class="product__title">
          <p>${product.title}</p>
        </div>
        <div class="product__price">
          <span>${product.price}$</span>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <span>${product.rating}</span>
        </div>
      </div>
    `;

    productsContainer.appendChild(card);
  });
}

seeMore.addEventListener("click", (e) => {
  e.preventDefault();
  offset++;
  getProducts(API_URL, count * offset);
});

productsContainer.addEventListener("click", (e) => {
  const productElement = e.target.closest(".product");

  if (productElement) {
    const productId = productElement.dataset.id;

    if (productId) {
      console.log(productId);
      console.log("ok");

      window.open(`/pages/singlePage.html?id=${productId}`, "_self");
    } else {
      console.log("Product ID is undefined");
    }
  }
});

toggle.addEventListener("click", function () {
  hidden.classList.toggle("active");
});
