const maaslar = [4000, 5000, 3500, 4200, 2850, 5000, 7500];
const liste = document.createElement("ul");
liste.className = "liste";
document.querySelector(".liste-div").appendChild(liste);
const listeyeEkle = function (satir) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(satir));
  liste.appendChild(li);
};
const diziyiListeyeEkle = function () {
  for (let i in maaslar) {
    listeyeEkle(maaslar[i]);
  }
};
const aciklamaGuncelle = function (dizi) {
  const aciklama = document.querySelector(".aciklama");
  const yeniMaaslar = dizi.join(" ");
  aciklama.innerHTML = `Maaşlar: ${yeniMaaslar} <br> 
  Toplam Maaş: ${dizi.reduce((x, y) => x + y, 0)}`;
};
diziyiListeyeEkle();
aciklamaGuncelle(maaslar);
document.querySelector(".ekle").onclick = function () {
  const satir = document.querySelector(".input-liste");
  if (!satir.value) {
    alert("Lutfen veri girisi yapiniz.");
  } else {
    //input'tan gelen veriyi diziye kaydet
    maaslar.push(Number(satir.value));
    //input'tan gelen veriyi listeye yazdir
    listeyeEkle(satir.value);
    //işlemler bittikten sonra input'da kalan veriyi sil.
    satir.value = "";
    aciklamaGuncelle(maaslar);
  }
};
document.querySelector(".sil").onclick = function () {
  if (maaslar.length == 0) {
    alert("Silinecek oge kalmadi.");
  } else {
    maaslar.pop();
    const liste = document.querySelector(".liste");
    liste.removeChild(liste.lastElementChild);
    aciklamaGuncelle(maaslar);
  }
};
document.querySelector(".ara").onclick = function () {
  const satir = document.querySelector(".input-liste");
  if (!satir.value) {
    alert("Aranacak maaş limiti giriniz.");
  } else {
    const flitreli = maaslar.filter((m) => m <= satir.value);
    if (flitreli.length == 0) {
      alert("Aradaginiz kriterlerde maas bulunamadi.");
    } else {
      aciklamaGuncelle(flitreli);
    }
  }
  satir.value = "";
};

// Enter tuşu ile ekleme
document.querySelector(".input-liste").onkeydown = function (e) {
  console.log(e);
  if (e.keyCode === 13) {
    // Enter tusuna basildi ise
    document.querySelector(".ekle").onclick();
  }
  if (e.keyCode === 46) {
    document.querySelector(".sil").onclick();
  }
};
