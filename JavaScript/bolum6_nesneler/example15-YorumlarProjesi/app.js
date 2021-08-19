/*const yorumlar = [
  {
    id: 1,
    ad: "Ayşe yılmaz",
    meslek: "Developer",
    yorum: "Uygulamayı çok beğendim...",
    resim:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
  },
  {
    id: 2,
    ad: "İsmail Can",
    meslek: "Tester",
    yorum: "Uygulama çok zor.",
    resim:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
  },
  {
    id: 3,
    ad: "Canan Can",
    meslek: "Grafiker",
    yorum: "Tebrikler çok başarılı",
    resim:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
  },
  {
    id: 4,
    ad: "Tayyar Baki",
    meslek: "Stajer",
    yorum: "Geliştirilmesi gerekiyor.",
    resim:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
  },
];
*/
//? Data dosyyasındaki verileri buraya aşağıdaki gibi import ettik

import yorumlar from "./data.js";

//! Bilgilere erişelim
const foto = document.getElementById("kisi-resim");
const yazar = document.getElementById("yazar");
const aciklama = document.getElementById("aciklama");
const is = document.getElementById("meslek");
//! Butonlara eriselim
const ileriBtn = document.querySelector(".ileri-btn");
const geriBtn = document.querySelector(".geri-btn");
const rasgeleBtn = document.querySelector(".rasgele-btn");
let index = 0;
const kisiyiGoster = function (index) {
  const kisi = yorumlar[index];
  const { resim, ad, meslek, yorum } = kisi; // Destructring
  foto.src = resim;
  yazar.textContent = ad;
  is.innerHTML = meslek;
  aciklama.textContent = yorum;
};
kisiyiGoster(index);
ileriBtn.onclick = function () {
  index++;
  if (index > yorumlar.length - 1) {
    index = 0;
  }
  kisiyiGoster(index);
};
geriBtn.onclick = function () {
  index--;
  if (index < 0) {
    index = yorumlar.length - 1;
  }
  kisiyiGoster(index);
};
rasgeleBtn.onclick = function () {
  index = Math.floor(Math.random() * yorumlar.length);
  kisiyiGoster(index);
};
