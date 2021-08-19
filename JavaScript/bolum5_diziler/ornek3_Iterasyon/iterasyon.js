const koordinatlar = [120, 100, -100, 220, 330];

let negatif = 0;
let pozitif = 0;

/*
for (let i = 0; i < koordinatlar.length; i++) {
  koordinatlar[i] < 0 ? negatif++ : pozitif++;
}
console.log(
  "Negatif Koordinat Sayisi :" +
    negatif +
    " Pazitif Koordinat Sayısı : " +
    pozitif
);
*/

// FOR IN DONGUSU

for (let i in koordinatlar) {
  koordinatlar[i] < 0 ? negatif++ : pozitif++;
}

//---------------------------------------------------------------
// SORU: Bir hayvanat bahçesinde bulunan hayvan türlerinin bir dizide
// saklandığı varsayalım.Bu hayvanları türüne göre aramamızı sağlayacak
// ve o türden kaç adet bulunduğu ana programa döndürecek fonksiyonu
// yazınız. Eğer o türden bir hayvan yok ise bulunamdığını yazdırsın.
//----------------------------------------------------------------

//? ================= FOR IN==================
const hayvanlar = ["fil", "deve", "kuş", "deve", "fare", "kedi", "deve"];
const ara = prompt("aramak istenilen hayvan türünü giriniz:");
const bulDondur = function (ara) {
  let hayvanSayisi = 0;
  for (let i in hayvanlar) {
    if (hayvanlar[i] == ara.toLowerCase()) {
      hayvanSayisi++;
    }
  }
  return hayvanSayisi;
};
const sayi = bulDondur(ara);
sayi == 0
  ? console.log("Aradiginiz hayvan bulunamadi")
  : console.log(`Aradiginiz ${ara} 'den ${sayi} adet bulunmaktadir`);

//? =============== FOR OF DONGUSU==================

// for of dongusu for in dongusunun bir cok veri yapisini kapsayacak sekilde guncellenmis halidir.
// Bu dongude dizi icersindeki veriye erisirken indisleme kullanmaya gerek yoktur.
let arabalar = ["BMW", "Volvo", "Mini", "Honda", "Toyota"];
let yazı = "";
for (let i of arabalar) {
  console.log(i);
  yazı += i + " "; // i:  dizinin i. elemani demektir.
}
console.log(yazı);

//? =============== FOR EACH METHODU==================

let ogrenciler = ["Ali", "Can", "Ahmet", "Zeynep"];
function yazdir(i) {
  console.log(i);
}

ogrenciler.forEach(yazdir);

ogrenciler.forEach((i) => console.log(i));

// Toplama örneği // İterasyon ile sonucu buldu
const fiyatlar = [200, 300, 125, 450, 333];
let toplam = 0;
fiyatlar.forEach((f) => (toplam += f));
console.log(toplam);
document.querySelector(".toplam").innerHTML = toplam + " TL";

// ÇOK PARAMETRELİ

toplam = 0;
fiyatlar.forEach((fiyat, indis, dizi) => {
  console.log(toplam);
  toplam += fiyat;
});

console.log(toplam);
document.querySelector(".toplam").innerHTML = `${toplam} TL`;

//===========================
// Fiyatlar dizisindeki her bir fiyata % 10 zam yapalım

const yenifiyat = [];
fiyatlar.forEach((dizi, indis) => (yenifiyat[indis] = (dizi * 1.1).toFixed(2)));
console.log(yenifiyat);

//? =========== MAP METHODU =================
// Verilen listedeki her bir elemanın iki katını alınız
const rakamlar = [3, 5, 3, 2, 6, 7, 9];
const rakamlarIkiKat = rakamlar.map((x) => x * 2);
console.log(rakamlarIkiKat);

// Ornek: İsimler dizisinin içindeki her bir ismi büyük harf olarak yeni bir diziye ekleyiniz

const isimler = ["Ahmet", "Mehmet", "Emel", "Ayşe", "ILYAS", "fethi"];

const buyukHarf = isimler.map((isim) => isim.toUpperCase());
console.log(buyukHarf);

// ORNEK: Dolar Euro Kuru hesaplama
tlFiyat = [120, 340, 550, 245, 322.5, 789];
const dolarKur = document.querySelector(".dolar");
const yuroKur = document.querySelector(".yuro");

const dolar = document.querySelector(".dolar-fiyat");
const yuro = document.querySelector(".yuro-fiyat");

dolarKur.onchange = function () {
  const dolarFiyatlar = tlFiyat.map((tl) => Math.round(tl / dolarKur.value));
  dolar.innerHTML = dolarFiyatlar;
};

yuroKur.onchange = function () {
  const yuroFiyatlar = tlFiyat.map((tl) => Math.round(tl / yuroKur.value));
  yuro.innerHTML = yuroFiyatlar;
};

// tlFiyatlar dizisindeki ürün fiytların 250 tl altında olanlara % 10 zam
// üstünde olanlara da %20 zam yapalım

// tlFiyatlar dizisindeki ürün fiyatlarinin 250 TL altında olanlarına %10 zam, üstünde olanlarına da %20 zam yapılmak isteniyor.
// 1. ürünün zamlı fiyati 110 TL
// ! tlFiyatlar = [120, 340, 550, 245, 322.5, 789];
const zamliTlFiyatlar = tlFiyat.map((deger, indis) => {
  if (deger < 250) {
    return `${indis + 1}.ürünün zamli fiyati : ${deger * 1.1} <br>`;
  } else {
    return `${indis + 1}.ürünün zamli fiyati : ${deger * 1.2} <br>`;
  }
});
// const virguldenKurtarmakIcin = virguldenKurtarmakIcin.join("");
document.querySelector(".zamli-fiyat").innerHTML = zamliTlFiyatlar;
console.log(zamliTlFiyatlar);

//? ============= FILTRELEME ============

// tlFiyatlar listesinde fiyatı 250 TL den az olanlari ayri bir diziye saklayalim.
const kucuk250 = tlFiyat.filter((d) => d < 250);
console.log(kucuk250);
//fiyati 350 küçük olanlari yazdiriniz.
tlFiyat.filter((d) => d < 350).forEach((x) => console.log(x));
// Küçükten büyüğe sıralama
console.log(tlFiyat.sort((a, b) => a - b));
// Büyükten küçüğe  sıralama
console.log(tlFiyat.sort((a, b) => b - a));

//? ============ PIPELINE =======================

// Maaşı 4 bin ve aşağısında olanlara %25 zam yapalım.
// ve bunu ayrı bir dizi olarak saklamak istiyoruz

const maaslar = [3000, 5000, 4000, 6000, 6500];

const zamliMaas = maaslar.filter((d) => d <= 4000).map((d) => d * 1.5);
// Burada maaşı 4 bin den az olanları seçti %10 zam yaptı
console.log(zamliMaas);

// Başka bir yöntem, maaşı 4 binden fazla olanları %25 zam yapıy for each ile yazdırdık.
maaslar
  .filter((d) => d > 400)
  .map((d) => d * 1.25)
  .forEach((d) => console.log(d));

//=========== ÖRNEK ===========

const adlar = [
  "Samet",
  "Hakkı",
  "Duygu",
  "Emrullah",
  "Bilal",
  "Ali",
  "Defne",
  "Serdar",
  "Hasan",
];
const isimBul = (harf) => {
  const bHarf = harf.toUpperCase();
  const dizi = adlar.filter((x) => x.startsWith(bHarf));
  console.log(dizi);
};
// Methot call
isimBul("a");
isimBul("A");
isimBul("s");
isimBul("S");

//? ============ REDUCE METHODU ================

// Maaşlar dizisindeki maaşları toplayıp yazdırın
//! x başlangıcta defualt olarak 0 sıfır alır. bunu kendimiz de belirleybilirz
//! çarpmada 1 verilmeli. toplamada 0 değeri verilmeli.

const toplamMaas = maaslar.reduce((x, y) => x + y);
console.log(toplamMaas);

// 2.yöntem indis ile kullanımı
const toplamMaas1 = maaslar.reduce((x, y, i) => {
  console.log(i + " Iteresiyon :" + x);
  return x + y;
});
console.log(toplamMaas1);

// 4 bin den büyük olan maaşların toplamını heseplayınız.

const buyukDortBin = maaslar.filter((x) => x >= 4000).reduce((x, y) => x + y);
console.log(buyukDortBin);

// Maaşı ortalamanin altında olanlara %20 zam yapılmak isteniyor.

const ortalamaMaas = maaslar.reduce((x, y) => x + y) / maaslar.length;
const yeniMaaslar = maaslar
  .filter((m) => m >= ortalamaMaas)
  .map((m) => m * 1.2);
console.log(yeniMaaslar);
