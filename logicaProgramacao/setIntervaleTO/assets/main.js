function teste() {
  let data = new Date()

  return data.toLocaleTimeString('pt-br', {hour12: false})
}

const timer = setInterval(function() {
  console.log(teste())
}, 1000)

setTimeout(function() {
  clearInterval(timer)
},5000)

setTimeout(function() {
  let h1 = document.querySelector('h1')
  h1.innerHTML = 'aipim'
}, 3000)