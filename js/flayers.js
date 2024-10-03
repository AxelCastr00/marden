// Aquí puedes añadir interacciones con JavaScript si lo necesitas.
// Este archivo es donde puedes manejar cualquier evento que requieras en la página.

window.addEventListener("scroll", function() {
  const flyer = document.querySelector(".flyer-container");
  const title = document.querySelector(".main-title");
  const subtitle = document.querySelector(".sub-title");

  let scrollPos = window.scrollY;

  if (scrollPos > 100) {
      flyer.style.transform = "translateY(-10px)";
      title.style.opacity = "0.8";
      subtitle.style.opacity = "0.8";
  } else {
      flyer.style.transform = "translateY(0px)";
      title.style.opacity = "1";
      subtitle.style.opacity = "1";
  }
});
