function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    id: params.get("id"),
    name: params.get("prodName"),
    price: params.get("price"),
    imgPath: params.get("imgPath"),
    discription: params.get("discription"),
    type: params.get("type"),
    fav: params.get("fav"),
    inCart: params.get("inCart"),
    sizes: params.get("sizes"),
  };
}

// Retrieve the parameters
const ProductInfo = getQueryParams();

// Display the information
document.getElementById("imageProDetails").src = ProductInfo.imgPath;
document.getElementById("type").textContent = ProductInfo.type;
document.getElementById("titlePro").textContent = ProductInfo.name;
document.getElementById("discription").textContent = ProductInfo.discription;
document.getElementById("productPrice").textContent = ProductInfo.price;

let sizes = ProductInfo.sizes.split(",");
for (let i = 0; i < sizes.length; i++) {
  let option = document.createElement("option");
  option.value = sizes[i];
  option.textContent = sizes[i];
  document.querySelector("optgroup").appendChild(option);
}
