const bukaUndanganBtn = document.getElementById("bukaUndanganBtn");
const body = document.body;
const sectionPembuka = document.getElementById("pembuka");

bukaUndanganBtn.addEventListener("click", () => {
  sectionPembuka.classList.add("fade-out");
  body.classList.remove("hidden-scroll");
  setTimeout(function() {
    sectionPembuka.remove();
  }, 500);
});

// Menyembunyikan scroll di awal
body.classList.add("hidden-scroll");


