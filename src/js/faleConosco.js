let inputs = document.querySelectorAll('.inputs')

inputs.forEach((input) =>{
  input.addEventListener('change', () => {
    if(input.value != ''){
        input.classList.add('campo-preenchido')
    }else{
        input.classList.remove('campo-preenchido')
    }
  })
})
