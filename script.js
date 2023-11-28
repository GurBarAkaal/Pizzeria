// PIZZERIA JS SCRIPT

// EVENT LISTENER
document.getElementById("btn").addEventListener("click", orderPizza);

// Event Function
function orderPizza() {
  //INPUT
  let firstTopping = document.getElementById("ft").value;
  let sizeOfpizza = document.getElementById("sp").value;
  let secondTopping = document.getElementById("st").value;
  // PROCESS
  let greeting = `  <p>You have ordered a pizza with:</p>
  <ol>
    <ul>${sizeOfpizza}</ul>
    <ul>${firstTopping}</ul>
    <ul>${secondTopping}</ul>
  </ol>
  <p>
    Thank you for ordering from Pizza 73! You pizza will be ready in 20
    minutes.
  </p>`;

  console.log(greeting);

  // OUTPUT
  document.getElementById("greeting-out").innerHTML = greeting;
  document.getElementById("pizza-img").innerHTML =
    '<img id="pizza-img" width = 500px src="img/pizza.jpg">';
}
