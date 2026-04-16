// ================= DATA PRODUK =================
const productList = document.getElementById("productList");
const searchInput = document.getElementById("searchInput");

// ambil URL halaman
const page = window.location.href;

// tentukan kategori
let category = "";

// ABAYA (index atau abaya page)
if (page.includes("index.html") || page.endsWith("/") || page.includes("abaya")) {
  category = "abaya";
}

// FASHION
else if (page.includes("fashion")) {
  category = "fashion";
}

// JAKET
else if (page.includes("jaket")) {
  category = "jaket";
}

// filter berdasarkan kategori
const filteredProducts = products.filter(p => p.category === category);

// fungsi render produk
function render(data) {
  productList.innerHTML = data.map(p => `
    <div class="card">
      <img src="${p.image}" alt="${p.name}">
      <div class="card-content">
        <h3>${p.name}</h3>
        <p>${p.price}</p>
        <a class="btn-shopee" href="${p.link}" target="_blank">Beli Sekarang</a>
      </div>
    </div>
  `).join("");
}

// render awal (kategori saja)
render(filteredProducts);

// ================= SEARCH GLOBAL =================
searchInput.addEventListener("input", function () {
  const keyword = this.value.toLowerCase();

  const result = filteredProducts.filter(p =>
    p.name.toLowerCase().includes(keyword)
  );

  render(result);
});
