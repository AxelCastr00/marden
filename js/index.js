// scripts.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
      event.preventDefault(); // Evitar el envío real del formulario
      alert('Mensaje enviado. ¡Gracias por contactarnos!');
      form.reset(); // Reiniciar el formulario
  });
});
