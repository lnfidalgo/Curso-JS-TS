const inputNovaTarefa = document.querySelector('.input_nova_tarefa')
const btnAddTarefa = document.querySelector('.btn_add_tarefa')
const listaTarefa = document.querySelector('.lista_tarefa')

btnAddTarefa.addEventListener('click', function() {
  if (!inputNovaTarefa.value) return;
  criaNovaTarefa(inputNovaTarefa.value)
})

function criaLi() {
  const li = document.createElement('li')
  return li
}

function criaNovaTarefa(textoInput) {
  const li = criaLi()
  li.innerText = textoInput
  listaTarefa.appendChild(li)
  limpaInput()
  criaBotaoApagar(li)
  salvarTarefas()
}

inputNovaTarefa.addEventListener('keypress', function(e) {
  if (e.keyCode === 13) {
    if (!inputNovaTarefa.value) return;
    criaNovaTarefa(inputNovaTarefa.value)
  }
})

function limpaInput() {
  inputNovaTarefa.value = ''
  inputNovaTarefa.focus()
}

function criaBotaoApagar(li) {
  li.innerText += ' '
  const botaoApagar = document.createElement('button')
  botaoApagar.innerText = 'Apagar'
  botaoApagar.setAttribute('class', 'apagar')
  botaoApagar.setAttribute('title', 'Apagar esta tarefa.')
  li.appendChild(botaoApagar)
}

document.addEventListener('click', function(e) {
  const el = e.target
  
  if (el.classList.contains('apagar')) {
    el.parentElement.remove()
    salvarTarefas()
  }
})

function salvarTarefas() {
  const tarefas = listaTarefa.querySelectorAll('li')
  const listaDeTarefa = []

  for (let tarefa of tarefas) {
    let tarefaTexto = tarefa.innerText
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
    listaDeTarefa.push(tarefaTexto)
  }

  const listaJSON = JSON.stringify(listaDeTarefa)
  localStorage.setItem('tarefas', listaJSON)
}


function adicionaTarefasSalvas() {
  const getTarefa = localStorage.getItem('tarefas')
  const listaDeTarefa = JSON.parse(getTarefa)

  for (let tarefa of listaDeTarefa) {
    criaNovaTarefa(tarefa)
  }
}
adicionaTarefasSalvas()