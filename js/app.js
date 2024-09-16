
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
