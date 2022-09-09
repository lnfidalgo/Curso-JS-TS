const request = obj => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open(obj.method, obj.url, true)
    xhr.send()

    xhr.addEventListener('load', () => {
      // Quando chegar aqui já vou ter recebido a resposta do servidor
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText)
      } else {
        reject(xhr.statusText)
      }
    })
  })
}

document.addEventListener('click', e => {
  const el = e.target
  const tag = el.tagName.toLowerCase()
  if (tag === 'a') {
    e.preventDefault()
    carregaPagina(el)
  }
})

async function carregaPagina(el) {
  try {
    const href = el.getAttribute('href')
    const response = await fetch(href) // Carregando o link
    if (response.status !== 200) throw new Error('ERRO 404!!!')
    const html = await response.text()
    carregaResultado(html)
  } catch (e) {
    console.error('Não foi pô')
  }
}

function carregaResultado(response) {
  const resultado = document.querySelector('.resultado')
  resultado.innerHTML = response
}

fetch('pagina5.html')
  .then(resposta => {
    // Os dados não vem prontos, é preciso converter
    if (resposta.status !== 200) throw new Error('Erro aqui PÔ')
    return resposta.text()
  })
  .then(html => console.log(html)) //Preciso desse then pq o text() retorna uma Promise
  .catch(e => console.log(e))
