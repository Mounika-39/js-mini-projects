addButton.addEventListener("click", function () {
  //Select Elements
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let addButton = document.getElementById("addButton");
  let result = document.getElementById("result");

  //perform calculations
  let sum = parseFloat(num1) + parseFloat(num2);

  //add event

  result.innerHTML = '<i class="fas fa-equals icon"></i>' + sum;
});
