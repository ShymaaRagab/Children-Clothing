import products from "./products.js";
let moreAboutProduct = document.getElementsByClassName("moreAboutProduct");


export function FullProductDetailsPage() {
  Array.from(moreAboutProduct).forEach((links) => {
    links.addEventListener("click", (e) => {
      e.preventDefault();
      let targetId = e.currentTarget.previousSibling.textContent;
      // console.log(targetId);
      for (let i = 0; i < products.length; i++) {
        if (targetId == products[i].id) {
          const ProductInfo = products[i];

          // Convert the data object to a query string
          const queryString = new URLSearchParams(ProductInfo).toString();
          window.location.href = `../Pages/productDetails.html?${queryString}`;
        }
      }
    });
  });
}

window.onload = function () {
  FullProductDetailsPage();
};
