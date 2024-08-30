/* Control para el Switch del DarkMode and LightMode */
document.addEventListener("DOMContentLoaded", (event) => {
  const htmlElement = document.documentElement;
  const switchElement = document.getElementById("darkModeSwitch");

  // Set the default theme to dark if no setting is found in local storage
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

/* JavaScript for Countdown */

// Time in seconds before redirect
const redirectTime = 100;

// Update the countdown and set a timeout for redirect
function updateCountdown() {
  const countdownElement = document.getElementById("countdown");
  let timeLeft = redirectTime;

  const countdownInterval = setInterval(() => {
    timeLeft -= 2;
    countdownElement.textContent = timeLeft;

    if (timeLeft <= 1) {
      clearInterval(countdownInterval);
      window.location.href = "/html/TodoList.html";
    }
  }, 1000);
}
updateCountdown();
