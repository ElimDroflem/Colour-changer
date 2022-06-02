const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  //create random array variable
  const randomNumber = colors[Math.floor(Math.random() * colors.length)];
  //assign the random array color to the background & text
  document.body.style.backgroundColor = randomNumber;
  color.textContent = randomNumber;
});
