let button = document.getElementById("btnColor");
let displayColorName = document.getElementById("colorName");
let color;

let randomColor = () => {
  color = "#";
  let hexDecimal = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    color = color + hexDecimal[Math.floor(Math.random() * 16)];
  }
  return color;
};

button.addEventListener("click", () => {
  document.body.style.backgroundColor = randomColor();
  displayColorName.innerHTML = color;
});
