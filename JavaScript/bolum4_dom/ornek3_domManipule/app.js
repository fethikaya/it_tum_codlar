/*
// Ac butonuna her tiklandiginda lamba_on resmini goster.
document.querySelector(".on").onclick = function () {
  document.querySelector(".resim").src = "./img/lamba_on.gif";
};
// Kapa butonuna her tiklandiginda lamba_off resmini goster.
document.querySelector(".off").onclick = function () {
  document.querySelector(".resim").src = "./img/lamba_off.gif";
};
// resmin uzerine mouse her geldiginde lamba_on resmini goster.
document.querySelector(".resim").addEventListener("mouseover", () => {
  document.querySelector(".resim").src = "./img/lamba_on.gif";
});
// resmin uzerinden mouse her ayrıldiginda lamba_off resmini goster.
document.querySelector(".resim").addEventListener("mouseout", function () {
  document.querySelector(".resim").src = "img/lamba_off.gif";
});

// Klavyeden her bir tusa basildiginda bu fonksiyon tetiklenecek.
// Küçük girdiğimiz harfler büyük olacaktır
document.querySelector(".textbox").onkeyup = function () {
  const checkbox = document.querySelector(".checkbox");
  const textbox = document.querySelector(".textbox");
  if (checkbox.checked == true) {
    textbox.value = textbox.value.toUpperCase();
  }
};

// HTML'de input-div'in altına yeni bir h1 elamanı oluştalım.
// Bunu dışardan, yani html den değil. js den yaptık.
// html de görünmeyecek.

const sonDiv = document.querySelector(".input-div");
// Bunun devamına eklemek için bunu aldık.
const h1 = document.createElement("h1"); // h1 texti oluşturduk
const yazi = document.createTextNode("Programa Dilleri"); // Yazıyı yazdık
h1.appendChild(yazi); // Birbirine bağladık
sonDiv.after(h1); // Nereye koyacağımızı belirledik
h1.className = "yeni-h1";
// css'te stiyl vermek için calass name oluştuşturduk

// h1.style.marginTop = "20px"; // stil verdik
// h1.style.color = "red";
// h1.style.textAlign = "left";

// ============= EKLE SIL ==============================

// Ekleme yapacak listeyi al
document.querySelector(".ekle").onclick = function () {
  const liste = document.querySelector(".liste");
  // input elemanına girilen yeni satırın değerini al
  const satir = document.querySelector(".dil").value;
  // Yeni girilen satırılı oluşturmak için li oluşturduk
  const yeniLi = document.createElement("li");
  // yeni li için textnode oluşturduk
  const textNode = document.createTextNode(satir);
  // oluşturduğumuz textnodu yeni li ye bağladık
  yeniLi.appendChild(textNode);
  // yeni eklenen satırı var olan listeye (ul) bağlayalım
  liste.appendChild(yeniLi);
};

// Silme butunonu çağırdık
document.querySelector(".sil").onclick = function () {
  const liste = document.querySelector(".liste");
  liste.removeChild(liste.lastElementChild); // Son girilen elemanı siler
  // liste.removeChild(liste.firstElementChild); // ilk eleman başdakini siller
};

*/

/* IPEK HANIM <ANLATIM></ANLATIM */

// Aç buttuna her tıklandığnıda lamba_on resmi göster

document.querySelector(".on").onclick = function () {
  document.querySelector(".resim").src = "./img/lamba_on.gif";
};

// kapa butonuna her bastığımızda lamba_of resmini göster

document.querySelector(".off").onclick = function () {
  document.querySelector(".resim").src = "./img/lamba_off.gif";
};

// CHECK BOX KUTUSU

document.querySelector(".textbox").onkeyup = function () {
  const checkbox = document.querySelector(".checkbox");
  const textbox = document.querySelector(".textbox");
  if (checkbox.checked == true) {
    textbox.value = textbox.value.toUpperCase();
  } else {
    textbox.value = textbox.value.toLowerCase();
  }
};

// HTML 'ye dışardan ekleme yapma. Oluşturma..

const h1 = document.createElement("h1");
const yazi = document.createTextNode("Programlama Dilleri");
h1.appendChild(yazi);
document.querySelector(".input-div").after(h1);
h1.className = "yeni-h1";

//ekle butonuna tıklandığında
document.querySelector(".ekle").onclick = function () {
  // ekleme yapılacak listeyi al
  const liste = document.querySelector(".liste");
  //input elemanina girilen yeni satirin degerini al
  const satir = document.querySelector(".dil").value;
  liste.innerHTML += `<li>${satir}</li>`;
};
document.querySelector(".sil").onclick = function () {
  const liste = document.querySelector(".liste");
  // liste.removeChild(liste.firstElementChild);  // ilk elemani sil
  liste.removeChild(liste.lastElementChild); // son elemani sil
};
