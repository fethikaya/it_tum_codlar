console.log("Hello Javascript");
console.log();
// console kısa yolu. ==> log yazıp entere tıklıyoruz..
// Yorum satırı almak için  iki slaşş
/* yada yıldız slaş olarak kullanabilriz */

console.error("Bu bir hatadir");
// Hata bildirgesi, kırmızı önleme ile yazılır.

console.warn("Bu bir uyarıdır");
// Ünlem işareti ile uyarı verir

// alert("Dikkat");
// Kullanıcı bunu uyarı olarak görür. Ayrı bir pencerede açılır ve uyarı gelir.
// Allert'den sonra kodlara devam etmez. Onay olmadan devam etmez.

// ** =======DEĞIŞKEN TANIMLAMA===============

var pi = 3.14;
console.log(pi);
console.log(typeof pi); // number
// typeof => değişkenin türünü belirtir

pi = "3";
console.log(pi);
console.log(typeof pi);

// Var keyword ile değişten tanımlanabilir, ancak modern js ile var keyword'nun kullanımı azaldı.
// Çünkü var global bir değişken gibi düşünüyor.

var isim = "Kullanıcı Fethi"; // var yazmasak da olur. Ama genelde yazılır
console.log(isim);
console.log(typeof isim);

isim = 4;
console.log(isim);
console.log(typeof isim);

// !const ve let yeni değişken tanımlama keyword'lerdir.
// !Const: Sadece başlangıçta değer atılabilir, sonra değer değiştirelemez
const piSayisi = 3.14; // Başta pi'ye değer vermedik hata verdi. çünkü değer ataması yapılmalı
console.log(piSayisi);

//============= LET===============
// ?Eğer ki değişkenimizin değeri değişmesi gerekiyor ise Const kullanamayaz
// ?bunun yerine let kullanılmalıdır.

let fiyat;
console.log(fiyat); //> console undifand yazar, çünkü fiyat belirlmedik

// !let Block scope bir değişkendir.
// !Var ise global scope bir tanımlamadır
// ?Block scope = Sadece tanımlı olduğu alanda geçerli demektir. local değişken gibi

fiyat = 5.5;
console.log(fiyat);
console.log(typeof fiyat);

let isim1 = "Mustafa"; // Çift tırnak
let isim2 = "Ahmet"; // Tek tırnak
let isim3 = `Alican`; // Backthick

const dil = null;
console.log(dil); // nul
console.log(typeof dil); // Object

const sucuk = 40;
const ekmek = 2;
const kola = 5;
const toplamFiyat = sucuk + ekmek + kola;
console.log(toplamFiyat);
// consol da birden fazla değeri virgul koyarak yazdırabilirz

console.log("Toplam Fiyat =", toplamFiyat);

//+ operatorö strig birleştirme işlem de gerçekleştirir

const s1 = 7,
  s2 = 8;
console.log(s1 + s2);

const s3 = 7,
  s4 = "8";
console.log(s3 + s4); // Birleştirme yapar

//? Template literal (String şablonları, ES6 ile gelişmiştir)

const ad = "Mesut";
const yas = 55;
console.log("Benim adim " + ad + " yaşım " + yas + " dir"); // Kalasik yöntem

// console.log("Benim adim ${ad} yasim ${yas} dir"); // Script de bu bu begtik yöntemi kullanılır

const yil = 2021;
const dogumTarihi = 1979;
const sene = yil - dogumTarihi;
console.log("Yaş :" + sene);

// Mod alma %
const sayi = 123;
// ? Math.floor asagi yuvarlama Math.ceil yukari yuvarlama Math.round hangi tam sayiya yakinsa ona yuvarlama
const birler = sayi % 10;
const onlar = Math.floor(sayi / 10) % 10;
const yuzler = Math.floor(sayi / 100);
console.log("Birler:" + birler);
console.log("Onlar:" + onlar);
console.log("Yuzler:" + yuzler);
//?========================= karsılastırma operatörleri=========================
/*
==    İki değişkenin veri tipine bakmaksızın eşitliğini kontrol eder. Eşitse true
       aksi takdirde false döndürür.
===    Veri tipi de dahil olmak üzere eşitliğini kontrol eder. Eşitse true aksi
       takdirde false döndürür.
 !=    İki değişkenin eşit olmamasını kontrol eder. Eşit değilse true aksi
       takdirde false döndürür.
>     Soldaki değişkenin değeri sağdakinden büyükse true aksi takdirde
      false döndürür.
<     Soldaki değişkenin değeri sağdakinden küçükse true aksi takdirde
      false döndürür.
>=     Soldaki değişkenin değeri sağdakine eşit veya büyükse true aksi
       takdirde false döndürür.
<=     Soldaki değişkenin değeri sağdakine eşit veya küçükse true aksi
       takdirde false döndürür.
*/
const sayi1 = 100;
const sayi2 = "100";
console.log(typeof sayi1, typeof sayi2); //number, String
console.log(sayi1 == sayi2); //true
console.log(sayi1 === sayi2); //false
/*const s1 = 5;
console.log(s1 == 5); //true
console.log(s1 == "5"); //true
console.log(s1 === "5"); //false
console.log(s1 !== 5); //false;  === ve !== operatörleri veri tipini de kontrol eder.
console.log(s1 != "5"); //false;
console.log(s1 !== "5"); //true
//JS, operatörlere bakarak gerektiğinde string formatındaki sayıyı number formatına çevirerek işlemi gerçekleştiriyor.
console.log(s1 > 5); //false;
console.log(s1 > "4"); //true
//Büyük eşit ve küçük eşit işlemlerinde veri tipi kontrolü yapılamıyor.
console.log(s1 >= 5); //true
console.log(s1 > "6"); //false;
*/
// ?========================= MANTIKSAL OPERATÖRLER=========================
/*
&& :
MANTIKSAL VE işlemi gerçekleştirir. Kontrol ettiği değişkenlerin tamamı
TRUE ise TRUE değer döndürür. Aksi takdirde FALSE değer döndürür.
|| :
MANTIKSAL VEYA işlemi gerçekleştirir. Kontrol ettiği değişkenlerin
sadece bir tanesi bile TRUE ise TRUE değer döndürür. Ancak tamamı
FALSE ise FALSE değer döndürür.
! :
MANTIKSAL DEĞİL işlemi gerçekleştirir. Yani, kontrol ettiği değişkenin
değerinin tersini döndürür. Değişken TRUE ise FALSE, FALSE ise TRUE
değer döndürür.
ÖNEMLİ: & ve | operatörleri Bit-temelli VE ,VEYA işlemi gerçekleştirir.
*/
/*
let s2 = true;
let s3 = true;
console.log(s2 && true); // true
console.log(s2 && s3); // true
console.log(s2 && s3 && false); // false
s3 = false;
console.log(s2 || s3 || false); // true
s3 = null;
console.log(s2 && s3); // null
console.log(s2 || s3); // true
// ÖNEMLİ: 0, FALSE, NULL, undefined, "" ve NaN dışındaki durumlar TRUE kabul edilir.
//NULL, undefined, NaN  ---> JS False kabul eder
s2 = "kuş";
s3 = "kedi";
console.log(s2 || s3); // kuş
console.log(s2 && s3); // kedi
s2 = true;
s3 = false;
console.log(!s2); // false
console.log(!s3); // true
s3 = null;
console.log(!s3); // true
*/
// ÖNEMLİ: • VEYA işleminde ilk TRUE değerin bulunması yeterlidir. Diğerlerinin kontrolüne gerek yoktur.
//Bu yüzden, ilk değişkenin değeri döndürülür.
// • VE işleminde ise en sona kadar kontrol edilmesi gerekir. Dolayısıyla, hepsi doğru ise en sondaki değişkenin değeri döndürülür.
// ?========================= ATAMA OPERATÖRLERİ=========================
/*
=      x = y        Soldaki değişkenin değerini sağdakine kopyalar.
+=     x += 1       x= x+1 işlemi gerçekleştirir.
-=     x -= 2       x= x-2 işlemi gerçekleştirir.
*=     x *= 3       x= x*3 işlemi gerçekleştirir.
/=     x /= 4       x= x/4 işlemi gerçekleştirir.
**=    x **= 2      x= x2 işlemi gerçekleştirir.
%=     x %= 3       x = x mod 3 işlemi gerçekleştirir.
&=     x &= y       x = x VE y işlemi gerçekleştirir.
|=     x |= y       x = x VEYA y işlemi gerçekleştirir.
*/
const x = null;
const y = true;
const z = undefined;
const t = true;
console.log(x && y); //null
console.log(y && t && z); //undefined
//? =========================KOŞUL OPERATÖRÜ=========================
/*
Koşul Operatörü, if-else ifadelerinin tek satırlık hali gibi
düşünülebilir.
• 3 parametre alır.
• Koşul ? ifade1 : ifade2
• Eğer Koşul doğru ise ifade1, yanlış ise ifade2 çalıştırılır.
*/
let yaş = 7;
let okul = yaş >= 7 ? "ilkokul" : "anaokulu";
console.log(okul); //ilkokul
yaş = 6;
okul = yaş >= 7 ? "ilkokul" : "anaokulu";
console.log(okul); //anaokulu
//? ========================= TERNARY=========================
//const age = +prompt("yasinizi giriniz:");
const age = Number(prompt("yasinizi giriniz:"));
console.log("Yasiniz;" + age);
console.log(typeof age);
const name1 = prompt("Adiniz giriniz");
/*
// 1. yöntem
age >= 18
  ? console.log(`${name1} ehliyet alabilir`)
  : console.log(`${name1} ehliyet alamaz`);
*/
// 2. yöntem
const result =
  age >= 18 ? `${name1} ehliyet alabilir` : `${name1} ehliyet alamaz`;
console.log(result);

const sayi4 = 41;
console.log(String(sayi4), sayi4);
