/* Control para el Switch del DarkMode and LightMode */
document.addEventListener("DOMContentLoaded", (event) => {
  const htmlElement = document.documentElement;
  const switchElement = document.getElementById("darkModeSwitch");

  // Por default el color de la pagina comenzara en dark el cual se almacena en LocalStorage
  const currentTheme = localStorage.getItem("bsTheme") || "dark";
  htmlElement.setAttribute("data-bs-theme", currentTheme);
  switchElement.checked = currentTheme === "dark";

  switchElement.addEventListener("change", function () {
    if (this.checked) {
      htmlElement.setAttribute("data-bs-theme", "dark");
      localStorage.setItem("bsTheme", "dark");
    } else {
      htmlElement.setAttribute("data-bs-theme", "light");
      localStorage.setItem("bsTheme", "light");
    }
  });
});

/* JavaScript Cuenta Regresiva */

// Tiempo que se hara el Redirect
const redirectTime = 100;

function updateCountdown() {
  const countdownElement = document.getElementById("countdown");
  let timeLeft = redirectTime;

  const countdownInterval = setInterval(() => {
    timeLeft -= 2;
    countdownElement.textContent = timeLeft;

    if (timeLeft <= 1) {
      clearInterval(countdownInterval);
      // Aqui colocamos a cual documento html haria el redirect.
      window.location.href = "../html/TodoList.html";
    }
  }, 1000);
}
updateCountdown();

const div = document.getElementById("carta");

// Crear el contenedor de la tarjeta
const carta = document.createElement("div");
carta.className = "card text-bg-primary mb-3";
carta.style.maxWidth = "18rem";

// Crear el encabezado de la tarjeta
const header = document.createElement("div");
header.className = "card-header";
header.textContent = "Header";

// Crear el cuerpo de la tarjeta
const cuerpo = document.createElement("div");
cuerpo.className = "card-body";

// Crear el título de la tarjeta
const titulo = document.createElement("h5");
titulo.className = "card-title";
titulo.textContent = "Primary card title";

// Crear el texto del cuerpo
const texto = document.createElement("p");
texto.className = "card-text";
texto.textContent =
  "Some quick example text to build on the card title and make up the bulk of the card's content.";

// Crear el contenedor para los botones
const botonContainer = document.createElement("div");
botonContainer.className = "d-flex justify-content-between";

// Crear el botón de eliminar
const btnEliminar = document.createElement("button");
btnEliminar.className = "btn btn-danger";
btnEliminar.setAttribute("aria-label", "Delete");
const iconEliminar = document.createElement("i");
iconEliminar.className = "fa-solid fa-trash";
btnEliminar.appendChild(iconEliminar);

// Crear el botón de editar
const btnEditar = document.createElement("button");
btnEditar.className = "btn btn-warning";
btnEditar.setAttribute("aria-label", "Edit");
const iconEditar = document.createElement("i");
iconEditar.className = "fa-solid fa-pencil-alt";
btnEditar.appendChild(iconEditar);

// Crear el botón de marcar como completado
const btnCompletar = document.createElement("button");
btnCompletar.className = "btn btn-success";
btnCompletar.setAttribute("aria-label", "Mark as Completed");
const iconCompletar = document.createElement("i");
iconCompletar.className = "fa-solid fa-check";
btnCompletar.appendChild(iconCompletar);

// Armar la tarjeta
cuerpo.appendChild(titulo);
cuerpo.appendChild(texto);
botonContainer.appendChild(btnEliminar);
botonContainer.appendChild(btnEditar);
botonContainer.appendChild(btnCompletar);
cuerpo.appendChild(botonContainer);
carta.appendChild(header);
carta.appendChild(cuerpo);

// Agregar la carta al div con id "carta"
div.appendChild(carta);
