const inputs = document.querySelectorAll('.input')
const botaoEnviar = document.getElementById('botao-enviar')

botaoEnviar.addEventListener('click', () => {
  inputs.forEach((input) => {
    if(input.value) {
      input.classList.add('input-preenchido')
      input.nextElementSibling.remove('mostrar-campo')
    }else {
      input.classList.remove('input-preenchido')
      input.classList.add('input-nao-preenchido')
      input.nextElementSibling.classList.add('mostrar-campo')
    }
  })
})