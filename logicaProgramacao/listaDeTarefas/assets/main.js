const inputNovaTarefa = document.querySelector('.input_nova_tarefa')
const btnAddTarefa = document.querySelector('.btn_add_tarefa')
const listaTarefa = document.querySelector('.lista_tarefa')

function criaLi() {
  const li = document.createElement('li')
  return li
}

function criaTarefa(textoInput) {
  const li = criaLi()
  li.innerText = textoInput
  listaTarefa.appendChild(li)
  limpaInput()
  criaBotaoApagar(li)
  salvarTarefas()
}

function limpaInput() {
  inputNovaTarefa.value = ''
  inputNovaTarefa.focus()
}

function criaBotaoApagar(li) {
  li.innerText += ' '
  const botaoApagar = document.createElement('button')
  botaoApagar.innerText = 'Apagar'
  botaoApagar.setAttribute('class', 'apagar')
  botaoApagar.setAttribute('title', 'Apagar esta tarefa')
  li.appendChild(botaoApagar)
}

inputNovaTarefa.addEventListener('keypress', function(e) {
  if (e.keyCode === 13) {
    if (!inputNovaTarefa.value) {
      return
    }
    criaTarefa(inputNovaTarefa.value)
  }
})

btnAddTarefa.addEventListener('click', function() {
  if (!inputNovaTarefa.value) {
    return
  }
  criaTarefa(inputNovaTarefa.value)
})

document.addEventListener('click', function(e) {
  const el = e.target

  if (el.classList.contains('apagar')) {
    el.parentElement.remove()
    salvarTarefas()
  }
})

function salvarTarefas() {
  const liTarefa = listaTarefa.querySelectorAll('li')
  const listaDeTarefas = []

  for (let tarefa of liTarefa) {
    let tarefaTexto = tarefa.innerText
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
    listaDeTarefas.push(tarefaTexto)
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas)
  localStorage.setItem('tarefas', tarefasJSON)
}

function adicionaTarefasSalvas() {
  const tarefas = localStorage.getItem('tarefas')
  const listaDeTarefas = JSON.parse(tarefas)

  for (let tarefa of listaDeTarefas) {
    criaTarefa(tarefa)
  }
}
adicionaTarefasSalvas()