let count = 0;
const countEL = document.getElementById("counter");

document.getElementById("btn1").addEventListener("click", function () {
  count++;
  countEL.innerText = count;
});

document.getElementById("btn2").addEventListener("click", function () {
  count--;
  countEL.innerHTML = count;
});

document.getElementById("reset").addEventListener("click", function () {
  count = 0;
  countEL.innerHTML = count;
});
