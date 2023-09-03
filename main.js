//  istek atma komutu
// bizden parametre olarak:
// hangi API'a istek atacığımızı sorar
fetch('https://api.escuelajs.co/api/v1/categories')
  // istek başarılı olursa veriyi işle
  .then(function (cevap) {
    return cevap.json();
  })
  // veri işlendikten sonra bu fonksiyon çalışır
  .then(renderCategories);

const categoryList = document.querySelector('.categories');

// erkan bir kategori kardı basar
// kategoriler dizisindeki herbir obje için
function renderCategories(veri) {
  //  dizideki herbir eleman için fonksiyon çalıştır
  veri.forEach(function (category) {
    //* div oluşturma
    const div = document.createElement('div');

    //*  içerğini belirleme
    div.innerHTML = `
            <img src="${category.image}" />
            <h2>${category.name}</h2>
       `;

    //* elemanı html'e gönderme
    categoryList.appendChild(div);
  });
}

// ürünler için veritabanın istek atma
fetch('https://api.escuelajs.co/api/v1/products')
  // gelen veriyi işleme
  .then(function (response) {
    return response.json();
  })
  // verileri alıp ekran basma fonksiyonu çalıştır
  .then(renderProducts);

const productList = document.querySelector('.products');

// ürünleri ekrana basar
function renderProducts(data) {
  // her bir ürün için tekrarla
  data.forEach((product) => {
    // yeni bir div oluştur
    const div = document.createElement('div');

    // class ekleme
    div.classList.add('card');

    // divin içeriğini belirle
    div.innerHTML = `
            <img src="${product.images[0]}" />
            <p>${product.title}</p>
            <p>${product.category.name}</p>
            <div>
              <p>${product.price}$</p>
              <button>Sepete Ekle</button>
            </div>
    `;

    // kartı html gönder
    productList.appendChild(div);
  });
}
