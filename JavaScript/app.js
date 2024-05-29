// main.js
import products from "./products.js";
import { FullProductDetailsPage } from "./getProductInfo.js";

const ourProducts = document.getElementsByClassName("ourProducts")[0];

{
  /* <article>
    <img src="image-path" alt="alt name" />
    <div class="item-info">
      <h4>Name</h4>
      <p>Price</p>
    </div>
</article> */
}

function CreatArticle(name, price, img, id) {
  let article = document.createElement("article");
  let image = document.createElement("img");
  let itemInfo = document.createElement("div");
  let title = document.createElement("h4");
  let itemPrice = document.createElement("p");
  let learnMore = document.createElement("a");
  let spanId = document.createElement("span");

  spanId.textContent = id;
  spanId.style.display = "none";
  learnMore.href = "../Pages/productDetails.html";
  learnMore.textContent = "Learn More...";
  learnMore.className = "moreAboutProduct";
  image.src = img;
  image.alt = "product";
  title.textContent = name;
  itemPrice.textContent = price;

  itemInfo.className = "item-info";
  itemInfo.appendChild(title);
  itemInfo.appendChild(itemPrice);
  itemInfo.appendChild(spanId);
  itemInfo.appendChild(learnMore);

  article.appendChild(image);
  article.appendChild(itemInfo);

  ourProducts.appendChild(article);
}

for (let i = 0; i < products.length; i++) {
  CreatArticle(
    products[i].prodName,
    products[i].price,
    products[i].imgPath,
    products[i].id
  );
}

const allButtons = document.querySelectorAll(".filters button");
allButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    ourProducts.innerHTML = "";
    for (let i = 0; i < products.length; i++) {
      if (e.currentTarget.getAttribute("data-id") == "all") {
        CreatArticle(
          products[i].prodName,
          products[i].price,
          products[i].imgPath,
          products[i].id
        );
      } else if (e.currentTarget.getAttribute("data-id") == products[i].type) {
        CreatArticle(
          products[i].prodName,
          products[i].price,
          products[i].imgPath,
          products[i].id
        );
      }
    }
    FullProductDetailsPage();
  });
});
