const dogum = 1980;
const yaslar = [30, 25, 44, 77];
const isimler = [
  "Ahmet",
  "Ayşe",
  "Can",
  "Fatma",
  "Ilyas",
  20,
  40,
  2021 - dogum,
  yaslar,
];
// Farklı tadat type kullanabiliriz.
// değişken kullanabiliriz.
// işlem kulanabiliriz.
// bir dizi içinde başka dizi olabilir
console.log(isimler); // ["Ahmet", "Ayşe", "Can", "Fatma", "Ilyas"]

console.log(isimler[0]); // Ahmet

console.log((isimler[3] = "canan")); // Fatma yerine Canan yazdı. değiştirdi
console.log(isimler);

isimler[isimler.length - 2] = 22; // Sondan 2. elamanı 20 olan elamanı 22 olarak değiştirdik.

console.log(isimler[9]); // Array içindeki array e ulaşmak için yaslar array isimler arry içinde bir eleman. ve 9 indexli.

console.log([10][0]); // İsimler içinden yaslar arrayın birinci elemanı

isimler[11] = "Ipek"; // İsimler dizisinin sonuna İpek ekledik.

///=========DIZI DEĞİŞTİREN METHOTLAR============

const h1 = document.getElementById("meyveler"); // html deki elemente ulaştık
deneme = "kiraz";
let meyveler = ["Elma", "Armut", "Muz", "Kivi", 30, deneme]; // ekledik

meyveler.pop(); // son elemanı siler. Kivi silinecek.
meyveler.push("Çilek"); // En sona ekler. Sona çilek ekledik
// meyveler.push("Çilek","Karpus"); // Birden fazla eleman eklenebilir

const boyut = meyveler.push("Çilek", "Karpus"); //Ekleme sonrası return eder
meyveler.unshift("Ayva"); // En başa ekler. 0 indexe ekler
meyveler.shift(); // ilk elemanı siller. 0 indexi siler
const silinen = meyveler.shift(); // sildiği elemanı yazdırır
console.log(silinen);

meyveler.reverse(); // Listeyi terse çevirir
meyveler.push("Kavun"); // sona kavun ekle
meyveler.sort(); // Alfabedik sıraya göre sıralar
meyveler.splice(1, 0, "Erik"); // 1 ile 2 arasına silmeden Erik ekle
// ikinci rakam => 0 silme, 1=> sil
meyveler.splice(4, 1, "Mango"); // 4 Elamanı sil üzerine mango yaz
h1.innerHTML = meyveler; // meyveler listesini inner ile html ye ekledik
console.log(meyveler); // Consolle yazdırır
console.log(meyveler); // HTMl içinde yazdırır

//=========== DIZIYE ERIŞIM METHODLARI===========

const sayilar = [3, 5, 2, "üç", "bes"];
sayilar.includes("5"); // false > cünkü trnak içinde yazdık
sayilar.includes(5); // true
// Olup olmadığını kontrol eder
// true var, false yok

const ikiIndex = sayilar.indexOf(1); // indexi 1 olan elamanı bul
console.log(ikiIndex); // 5
console.log("Bir sonraki 2 kaçıncı index'te : " + sayilar.lastIndexOf(2));

//! Aranan eleman bulunamazsa -1 dönüdür
sayilar.indexOf(5); // -1 => bulunamadı. 5 index yok
const ucIndex = sayilar.indexOf(5);
ucIndex < 0
  ? alert("Aranan nesle bulunamadı")
  : alert("Aranan elemanin indexi :" + ucIndex);

const sayilar1 = sayilar.join(); // 352üçbes
//  elemanları birleştirir, string hale getirir
console.log(sayilar1);

const sayilar2 = sayilar.toString(); // 3,5,2,üç,bes
// Stirgne çevirir. araya virgül koyarak birleştirir
console.log(sayilar2);

//============ SLICE==============
const arabalar = ["bmw", "mercedes", "audi", "ferrari", "anadol"];

const arabalar1 = arabalar.slice(2);
console.log(arabalar1);
// ["audi", "ferrari", "anadol"] => index 2 den sonra al
// yazılan index dahil ve sonrasını alır

const arabalar2 = arabalar.slice(1, 3);
console.log(arabalar2); // ["mercedes", "audi"]
// 1 ile 3 arasını alır. 1 dahil 3 dahil değil

//========  CONCAT=========
const yazilar = ["a", "b", "ad", "soyad", "yas"];
const rakamlar = [3, 5, 1, 4, 7];

const birlesik = yazilar.concat(rakamlar, true, false, [2, 6, 8]);
// Birleştirirken iki dizine farklı eleman de ekleyebiliriz.
// ve dizi içinde dizi de ekleyebiliriz
console.log(birlesik); // ["a", "b", "ad", "soyad", "yas", 3, 5, 1, 4, 7]
// İki diziyi birleştirdi
h1.innerHTML = birlesik;
