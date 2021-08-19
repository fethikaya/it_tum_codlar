function hesapla() {
  const r = document.getElementById("r").value;
  // ! Class'lara erişim için .class_adı
  // ! id'li bir HTML elemanına erisim için ise #id
  const h = document.querySelector(".h").value;
  const hacim = document.querySelector(".hacim");
  const sonuc = (Math.PI * r * r * h).toFixed(2);
  console.log(sonuc, r, h);
  hacim.innerHTML = sonuc;
}

const buton = document.querySelector(".btn");
buton.style.color = "red";
buton.style.backgroundColor = "black";
