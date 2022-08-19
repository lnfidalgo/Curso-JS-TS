document.addEventListener('click', e =>{
  let teste = e.target
  if(teste.classList.contains('testando')) {
    alert('PAU')
    teste.classList.add('brincando')
  }
})