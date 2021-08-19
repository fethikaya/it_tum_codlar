//* ======================================================
//*              FONKSİYONLAR
//* =======================================================

//! 1. YÖNTEM: FUNCTİON DECLARATTION YONTEMI

function yazdir() {
  // Function tanımlama
  console.log("Ilyas Kaya");
}

yazdir(); // Function call > function cağırıldığı yer

// Ornek: Parametreli Fonksiyon

function yazdirAd(ad, yas) {
  console.log("Adiniz " + ad + "Yaşınız " + yas);
}
yazdirAd("Ilyas ", 9); // Function call
yazdirAd("Fethi ", 42); // Function call

//Ornek: Parametreli, dönüş değerli Function

function yasHesapla(dogum) {
  return 2021 - dogum;
}

console.log(yasHesapla(1979) + " Yaşındasınız");
// Alternatif
const yas = yasHesapla(1995);
console.log(`Yasiniz: ${yas}`);

//==================================
// Ornek: Klavyede girilen sayinin tek veya çift oludğunu dönderen bir fonksiyon yazınız

/*
const sayi = +prompt("Bir sayı giriniz");

function tekCift(sayi) {
  if (sayi % 2 == 0) {
    console.log("Girdiğiniz sayı çift");
  } else if (sayi % 2 != 0) {
    console.log("Girdiğiniz sayı Tektir");
  }
}

console.log(tekCift(52));

*/

//** 2. Yöntem Turneri yöntemi

// console.log(tekCift(sayiniz));
// ? Function çağırma yukardan da olabilir. Yani methodun öncesinde veya sonrası olabilr.

const sayiniz = +prompt("Bir sayı giriniz");

function tekCift(sayiniz) {
  const sonuc =
    sayiniz % 2 == 0 ? `${sayiniz} Çift Sayi` : `${sayiniz} Tek Sayi`;
  return sonuc;
}
console.log(tekCift(sayiniz));

//======================================================

//! 2. YÖNTEM: FUNCTİON EXPRESSION

const tekCift1 = function (sayiniz) {
  return sayiniz % 2 == 0 ? "Çift" : "Tek";
};
console.log(tekCift1(5)); // Fuction call/ invoke

/*===========================================
    Ornek: Büyük sayıyı bulmu
========================================*/

let buyukBul = function (sayi1, sayi2, sayi3) {
  let buyukSayi;
  if (sayi1 > sayi2 && sayi1 > sayi3) {
    buyukSayi = sayi1;
  } else if (sayi2 > sayi1 && sayi2 > sayi3) {
    buyukSayi = sayi2;
  } else if (sayi3 > sayi1 && sayi3 > sayi2) {
    buyukSayi = sayi3;
  }
  return buyukSayi;
};

console.log("En büyük Sayi: " + buyukBul(5, 8, 3));

//!    3. YÖNTEM: ARROW (OK =>) FONKSIYONLAR YÖNTEMI

/*
const topla = (a, b) => a + b;

// Süslü parantes kullanmadıysak return yazmaya gerekyok. Otomatik yara

console.log(topla(5, 8)); // 13
console.log(topla(3, 28)); // 31
console.log(topla(15, 8)); // 23

const tekCiftMi = (num) => (num % 2 == 0 ? "Çift" : "Tek");

console.log(tekCiftMi(5));
console.log(tekCiftMi(8));
*/

//* Ornek: us alma girilen sayı ve üsnü bulunuz
/*
const taban = +prompt("Taban giriniz");
const us = +prompt("Us giriniz");

const usAl = (t, u) => t ** u;

console.log(usAl(taban, us));
*/

//* Ornek: Menü
//? Ok fonksiyonunda birden fazla ifade var ise
//?   fonksiyonda süslü parantes kullanmazı gerekiyor

const menu = () => {
  console.log("===================");
  console.log("   Javascript      ");
  console.log("===================");
  console.log("       HTNM        ");
  console.log("===================");
  console.log("        CSS        ");
};

menu();

//* Ornek: Bilgiver Fonksiyonu

// 1 Yöntem

const bilgiVer = (ad, soyad, dogum) => {
  const bilgi = `Adim ${ad}, Soyadim ${soyad} ve yasim ${2021 - dogum}`;
  return bilgi;
};

console.log("Ilyas", "Kaya", 2012);

// 2.yöntem

const bilgiVer = (ad, soyad, dogum) =>
  `Adim ${ad}, Soyadim ${soyad} ve yasim ${2021 - dogum}`;
console.log(bilgiVer("Fethi", "Kaya", 1989));

//* ORNEK; Daire alanı hesaplama

// * ORNEK: Silindirin hacmini hesaplayan bir fonksiyon yaziniz.
const r = prompt("Yaricapi giriniz:");
const h = prompt("Yukseklik giriniz:");
const hacimHesapla = (r, h) => Math.PI * r * r * h;
// * En yakın sayiya yuvarlar.
console.log("Silindir Hacmi:" + Math.round(hacimHesapla(r, h)));
// * Virgulden sonra 2 basamak alir.
console.log("Silindir Hacmi:" + hacimHesapla(r, h).toFixed(2));
