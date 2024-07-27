const API_URL = "https://dummyjson.com/products";
const productContainer = document.querySelector(".product");
const toggle = document.querySelector(".toggle__btn");
const hidden = document.querySelector(".hidden__navbar");

async function getProducts(api) {
  let query = new URLSearchParams(window.location.search);
  let id = query.get("id");
  fetch(`${api}/${id}`)
    .then((response) => response.json())
    .then((res) => createCard(res))
    .catch((err) => console.error("Error fetching product:", err));
}

getProducts(API_URL);

function createCard(data) {
  console.log(data);
  productContainer.innerHTML = `
    <div class="product__images">
      <img src="${data.images[0]}" alt="Product Image 1" />
      <img src="${data.images[1]}" alt="Product Image 2" />
      <img src="${data.images[2]}" alt="Product Image 3" />
    
    </div>
    <div class="product__hero">
      <img src="${data.thumbnail}" alt="Product Thumbnail" />
    </div>

    <div class="product__right">
      <div class="product__info">
        <h3>${data.title}</h3>
        <div class="product__rating">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <p>(${data.rating}) |</p>
          <span>In stock</span>
        </div>
      </div>
      <div class="product__price">
        <span>${data.price}</span>
      </div>
      <div class="product__desc">
        <p>${data.description}</p>
      </div>
      <div class="product__select">
        <span>Colours: </span>
        <input type="radio" id="color1" name="color" />
        <label for="color1">Color 1</label>
        <input type="radio" id="color2" name="color" />
        <label for="color2">Color 2</label>
      </div>
      <div class="product__size">
        <span>Size:</span>
        <a href="#">XS</a>
        <a href="#">S</a>
        <a href="#">L</a>
        <a href="#">XL</a>
      </div>

      <div class="product__btns">
        <div class="kolvo">
          <button>-</button>
          <span>2</span>
          <button>+</button>
        </div>
        <a href="#">BUY NOW</a>
        <i class="fa-regular fa-heart"></i>
      </div>
      <div class="delivery">
        <div class="delivery__item">
          <div class="delivery__logo">
            <img src="../img/icon-delivery.png" alt="Delivery Icon" />
          </div>
          <div class="delivery__desc">
            <span>Free Delivery</span>
            <p>Enter your postal code for Delivery Availability</p>
          </div>
        </div>
        <div class="delivery__item">
          <div class="delivery__logo">
            <img src="../img/icon-delivery.png" alt="Delivery Icon" />
          </div>
          <div class="delivery__desc">
            <span>Free Delivery</span>
            <p>Enter your postal code for Delivery Availability</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

toggle.addEventListener("click", function () {
  hidden.classList.toggle("active");
});
