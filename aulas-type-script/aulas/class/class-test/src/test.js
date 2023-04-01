const button = document.querySelector(".js-button");
const result = document.querySelector(".js-result");

let votes = 0;
result.innerText = votes;

const test = () => {
  votes++
  result.innerText = votes
};

button.addEventListener("click", test);
