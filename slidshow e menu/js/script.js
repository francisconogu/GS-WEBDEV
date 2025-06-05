document.addEventListener("DOMContentLoaded", () => {
  const botaoHamburguer = document.getElementById("hamburger");
  const menu = document.getElementById("menu");

  botaoHamburguer.addEventListener("click", () => {
    if (!menu.className.includes("show")) {
      menu.className += " show";
    } else {
      menu.className = menu.className.replace(" show", "");
    }
  });

  const slides = document.getElementsByClassName("slide");
  let indiceSlide = 0;

  function mostrarSlide(indice) {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = (i === indice) ? "block" : "none";
    }
  }

  function avancarSlide() {
    indiceSlide = (indiceSlide + 1) % slides.length;
    mostrarSlide(indiceSlide);
  }

  mostrarSlide(indiceSlide);
  setInterval(avancarSlide, 3000);
});