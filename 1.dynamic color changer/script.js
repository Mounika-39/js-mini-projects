const btn1EL = document.querySelector(".btn1");
const btn2EL = document.querySelector(".btn2");
const titleEL = document.querySelector(".title");
const btn3EL = document.querySelector(".btn3");
const bodyEL = document.querySelector("body");

btn1EL.addEventListener("click", function () {
  bodyEL.style.backgroundColor = "yellow";
});

btn2EL.addEventListener("click", () => {
  titleEL.style.fontSize = "50px";
});

btn3EL.addEventListener("click", () => {
  bodyEL.style.backgroundColor = "white";
  titleEL.style.fontSize = "20px";
});
