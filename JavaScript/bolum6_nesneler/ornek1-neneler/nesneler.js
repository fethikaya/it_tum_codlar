//! ============== NESNELER ==================
/*
  Diziler sıralı bellek bölgelerinde kullanılır. Diziler de erişim sıra ile (indisleme)
  yolu ile yapılır

  Sıralı belleklere ihtiyaç varsa bu durumda birinci öncelik dizi kullanmak mantıklıdır.
*/
//* Eğer veri sıralı değilse, compleks karışık yapı ise o zaman dizilerde erişim güçlüğü ortaya çıkıyor
//* bu durumda en uykgun kullanım şekli NESNELER (OBJECT) kullanılır

//! OBJECT
// Nesneler de Key-value (property-value) yapısı kullanılır.
// Nesnelerde aradığımız veriye erişmek için property adını kullanmak yeterlidir.

//? OBJECT TANIMLAMA YÖNTEMİ

//* 1. Yöntem Object Literal

const insan = {
  ad: "Ilyas",
  soyad: "Kaya",
  yas: 9,
  meslek: "developer",
  diller: ["Java", "js", "C++", "SQL", "Phyton"],
};
console.log(insan);

//? .dot notasyonu ile verilere erişelibilir
console.log(insan.ad); // Ad ulaşıp yazdırdık

//? Köşeli parentes erişimi => (Köşeli parentez içerisine bir expression yazmak mümkün)
console.log(insan["yas"]); // Bu şekil de de verilere ulaşılabilir.

const yazi = "Adim";
console.log(`${yazi} ${insan.ad} ve yasim ${insan["yas"]}`);

const bilgiSecimi = prompt(
  "Personel hakkında ne bilmek istersiniz? Seçiminizi giriniz: ad, soyad, yas, meslek ve diller"
);

if (insan[bilgiSecimi]) {
  console.log(insan[bilgiSecimi]);
} else {
  console.log(
    "Yanlış seçim, lütfen ad, soyad, meslek, yaş, diller şeklinde giriniz"
  );
}
// Obje ye sonradan da bilgi ekleyebiliriz

insan.konum = "Türkiye";
insan.email = "insan@gmail.com";
insan["dogumTarihi"] = 1990;
console.log(insan);

//! ============== Nesne Methodları ==================

const kisi = {
  ad: "Ahmet",
  soyad: "Can",
  dogumTarihi: 1990,
  meslek: "Tester",
  bildigiTool: "Selenium",
  ehliyet: true,

  yasHesapla: function () {
    // kişi objesinin içinde yaşhesapla diye bir function oluşturduk.
    // Arror function burada kulanamaz. çünkü this kabul etmez.
    console.log(this); // Burda içinde bulunduğumuz kişi objesini return eder.
    // return 2021 - this.dogumTarihi;
    return new Date().getFullYear() - this.dogumTarihi; // Bu şekilde güncel tarihi alabiliriz.
  },
  // Başka bir function oluşturuyouz

  ozet: function () {
    return `${this.ad} ${
      this.soyad
    } ${this.yasHesapla()}  yasindadir. Mesleği ${
      this.meslek
    } mesleğine sahiptir`;
  },
};

console.log(kisi.yasHesapla()); // Call function
console.log(kisi.ozet());

const tarih = new Date();
console.log(tarih.getFullYear()); // Yıl
console.log(tarih.getTime()); // Saat
console.log(tarih.getDay()); // gün

//! ============== Nesne Iterasyon Ornekleri ==================
// Kişiler dizisinin içinde nesler oluşturduk
const kisiler = [
  {
    ad: "Fethi",
    soyad: "Kaya",
    meslek: "Developer",
    yas: 42,
  },
  {
    ad: "Rohat",
    soyad: "Zinar",
    meslek: "Futbolcu",
    yas: 9,
  },
  {
    ad: "Ilyas",
    soyad: "Kevir",
    meslek: "team lead",
    yas: 22,
  },
  {
    ad: "Robin",
    soyad: "Kaya",
    meslek: "Maneger",
    yas: 32,
  },
];

console.log(kisiler);

// Kişiler dizindeki kişilerin mesleklerini konsola yazdıralım.
kisiler.forEach((x) => console.log(x.meslek)); // Burda x her bir objeyi ifade eder.
kisiler.forEach((x) => console.log(x.meslek));

//ÖRNEK2:kisiler dizisindeki tüm bireylerin yaşını bir arttırarak yazdırınız.

const yaslar = kisiler.map((x) => x.yas + 1);
console.log(yaslar);

//ÖRNEK3: kisilerdizisinindeki kişilerin isimlerini büyük harf olarak değiştiren ve yaşlarini da 5 artırak yeni bir nesne oluşturan kodu yaziniz.
const isimlerBuyukHarf = kisiler.map((x) => {
  return {
    // Rutern ederken object olarak return edip, opje formatında yazdık
    ad: x.ad.toUpperCase(),
    yas: x.yas + 5,
  };
});
console.log(isimlerBuyukHarf);

//ÖRNEK4: Yaşı 25' eşit veya küçük olanların adlarını yazdıran kodu yazınız.
kisiler.filter((x) => x.yas <= 25).forEach((x) => console.log(x.ad));

// ÖRNEK5:Mesleği developer olanların isim ve yaşlarını bir diziye kaydediniz.
// kisilerin ortalama yasini hesaplayiniz.
const developer = kisiler
  .filter((x) => x.meslek == "developer")
  .map((x) => {
    return {
      ad: x.ad,
      yas: x.yas,
    };
  });
console.log();

// ÖRNEK5:kişilerin ortalama yaşını hesaplayın

const yasOrtalama =
  kisiler.reduce((toplam, kisi) => toplam + kisi.yas, 0) / kisiler.length;
console.log(yasOrtalama);
