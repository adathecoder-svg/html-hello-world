const wave = document.getElementById("wave");
const echo = document.getElementById("echo");

const greetings = [
  "Hello, World.",
  "Xin ch\u00e0o th\u1ebf gi\u1edbi.",
  "It works.",
];

let index = 0;

wave.addEventListener("click", () => {
  echo.hidden = false;
  echo.textContent = greetings[index % greetings.length];
  index += 1;
});
