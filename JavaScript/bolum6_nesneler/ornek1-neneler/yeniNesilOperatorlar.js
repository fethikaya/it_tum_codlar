// ======================================================
//      YENİ NESİL OPERATORLER: DESTRUCTURING (OBJECT)
// ======================================================
// ES6 ile birlikte bir dizi ya da nesnenin içerisindeki
// elemanlar kolaylıkla ayrıştırılabilir.

const birey = {
  ad: "Can",
  konum: "Diyarbakır",
  email: "can@gmail.com",
};

//? Klasik yöntem erişirsek
const ad1 = birey.ad;
const konum1 = birey.konum;
console.log(ad1, konum1);

//? 2. Yöntem OBJECT DESTRUCTRING
// ! Destructing kullanilirken "Key" isimleri nesneninki ile ayni olmalıdır aksi takdirde undefined degerler donerler*/
let { ad, konum, email } = birey; // Birey nesnesindeki property'leri ayrıştırır. okumak için
// Sonra değişiklik yapabilmek için let kullanıyoruz
console.log(ad, konum, email);
birey.ad = "Mustafa"; // birey nesnesindeki adı günceller
console.log(birey);

function bilgiAl() {
  return {
    id: "101",
    urunAdi: "Apple",
    fiyat: 15000,
  };
}

console.log(bilgiAl());
const { id, urunAdi, fiyat } = bilgiAl();
console.log(id, urunAdi);

// ======================================================
//    YENİ NESİL OPERATORLER: DESTRUCTURING(ARRAY)
// ======================================================
const isimler = ["Ahmet", "Can", "Veli"];
//Klasik yöntem
const isim1 = isimler[0];
const isim2 = isimler[1];
// Destructring
const [kisi1, , kisi3] = isimler;
console.log(kisi1, kisi3);
// ======================================================
//        YENİ NESİL OPERATORLER: SPREAD VEYA REST
// ======================================================
// Spread operatoru dizileri ve nesneleri birleştirmek
// veya ayırımak icin kullanilabilir.
// Kullanmak içini dizinin onune ... karakterleri konulur.
// DİZİLERDE DESTRUCTURING YAPARKEN GERİ KALANLARI SEÇMEK İÇİN KULLANILABİLİR.

const arabalar = ["bmw", "fiat", "citroen", "reno", "audi", "opel"];
const [araba1, araba2, ...geriKalanArabalar] = arabalar;
// Bir diziyi 2 ye bödük. araba 1 ve 2 bir dizi, geri kalanlar da başka dizi (...) 3 nokta ile yaptık
console.log(araba1, araba2);
console.log(geriKalanArabalar); // Rest işlemi, geri kalanları işledi

// NESNELERDE DESTRUCTURING YAPARKEN GERİ KALANLARI SEÇMEK İÇİN KULLANILABİLİR.
const personel = {
  ad: "john",
  soyad: "smith",
  meslek: "developer",
};
const { meslek, ...geriKalan } = personel;
console.log(meslek, geriKalan);

// DIZILERI BIRLESTIRMEK ICIN DE KULLANILABILIR
const araclar = ["Ucak", "Helikopter", "Bisiklet"];
const otomobiller = ["Kamyon", "Kamyonet", "Otobus", "Araba"];
const birlesim = ["Ucak", "Helikopter", "Bisiklet", ...otomobiller];
console.log(birlesim);
const birlesim1 = [...araclar, ...otomobiller];

const meyveler = ["kiraz", "armut", "üzum", "şeftali"];
const turunclar = ["limon", "portakal", "mandalina", "greyfurt", ...meyveler];

console.log(birlesim1);
console.log(turunclar);
