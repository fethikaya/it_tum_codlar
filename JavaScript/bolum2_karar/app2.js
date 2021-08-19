/*
const s1 = +prompt("Birinci sayı");
const islem = prompt("Işlem giriniz");
const s2 = +prompt("İkinci Sayı");

let sonuc = 0; // burada const kullanamayız çünkü const kullansak sonra değerini değiştiremyeiz

if (islem == "+") {
  sonuc = s1 + s2;
} else if (islem == "-") {
  sonuc = s1 - s2;
} else if (islem == "*") {
  sonuc = s1 * s2;
} else if (islem == "/") {
  sonuc = s1 / s2;
} else {
  alert("Yanlış işlem yaptınız.");
}
// console.log("Işlem sonucu " + sonuc);

console.log(s1 + " " + islem + " " + s2 + " = " + sonuc);

*/

//===========================

/*
const age = prompt("Yasinizi griniz :");
const healt = prompt("Saglıklımmısınız e/h");

const result =
  age > 18 && healt == "e" ? "Askere gidebilir" : "Askere gideremez";
console.log(result);
*/
//=================================

/*
const gunNo = +prompt("Lütfen gün No giriniz");
switch (gunNo) {
  case 1:
    gunAdi = "Pazartesi";
    break;
  case 2:
    gunAdi = "Salı";
    break;
  case 3:
    gunAdi = "Çarşamba";
    break;
  case 4:
    gunAdi = "Perşembe";
    break;
  case 5:
    gunAdi = "Cuma";
    break;
  case 6:
    gunAdi = "Cumartesi";
    break;
  case 7:
    gunAdi = "Pazar";
    break;
  default:
    alert("Gün 1-7 arasında olmalıdır");
    break;
}
console.log(gunAdi);

*/
//===========================

const hiz = 90;
const mesaj = hiz >= 120 ? "Hızlı" : hiz >= 90 ? "Normal" : "Yavas";
console.log(mesaj);

//============================
/*
const maas = +prompt("Maasınızı girniiz");
const calismaYili = +prompt("Calısma suresini giriniz");

const zamlimaas = calismaYili>=10 ? maas*1.5 : calismaYili>5 ? maas*1.2 : maas*1.1;
console.log(zamlimaas);


//>>>>>>>>>>>>>>>>>>>>>>>>>
// 2. yöntem

if (calismaYili < 5) {
  sonuc = maas * 1.1;
} else if (calismaYili >= 5 && calismaYili <= 10) {
  sonuc = maas * 1.2;
} else if (calismaYili > 11) {
  sonuc = maas * 1.5;
}
console.log(sonuc);

*/

//======================================

/*
const borç = 0;
const maaş = 3000;
console.log(!borç && maaş > 2825.9 ? "Kredi Alabilir 😊" : "Kredi Alamaz 😂");
// windows sembolu + .

*/

// !==========DONGÜLER=========================
/*
const sayi = prompt("Dungu miktarı girniniz");
for (let i = 0; i <= sayi; i++) {
  // const kullanamayız çünkü sonra değeri değiştirelemez
  console.log(i + " Ilyas Kaya");
}

// ?Asal sayıyı bulma
const number = 7 + prompt("Sayiyi giriniz");

let asal = false;
for (let i = 2; i < number; i++) {
  if (number % i == 0) {
    asal = false;
    break;
  }
  asal = true;
}
const sonuc = asal ? "ASAL" : "ASAL DEĞİL";
console.log(sonuc);
*/
//!========== WHILE DÖNGÜSÜ ====================
/*
// 10 sefer Merhaba yazdırın
let i = 1;
while (i <= 10) {
  console.log(i + "Merhaba");
  i++;
}
*/

//!========== DO WHILE ===============
/*
let not;
do {
not = prompt("0-100 arasında bir not giriniz:");
} while (not < 0 || not > 100);
console.log("Giridiğiniz not 0-100 arasındadır");

*/

/*
// while ile yapalım
not = +prompt("Lütfen 1-100 arası bir sayı giriniz");
let i = 0;
while (not < 0 || not > 100) {
  console.error = "Girdiğniz not 1-100 arası olmalı";
  not = prompt("0-100 arası bir not giriniz");
}
console.log("Girdiğiniz not 1-100 arasandadir");
*/

// Örnek: Klayveyden Q karekteri girilene kadar not girişi yapan bir porgramı
// döngü kullanarak yazınız
// Çözüm: Sonsuz döngü oluşturup sonra onu if ile kıracağız.

let not1,
  i = 1;
while (true) {
  not1 = prompt(i + ".kişinin notunu giriniz:");
  not1 = not1.toLowerCase(); //  toLowerCase yaparak, küçük harfe çevirdik. ve büyük küçük harf uyumluğunu kaldırdık

  if (not1 == "q") {
    break;
  }
  i++;
  console.log(Number(not1));
}
