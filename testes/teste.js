let btn = document.querySelector(".button");
btn.addEventListener("click", () => {
  if (btn.className === 'button') {
    btn.classList.add('teste-cor')
  } else {
    btn.classList.remove('teste-cor')
  }
});
