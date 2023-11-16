const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function () {
    input.value = input.value === '' ? 'Olá, Mundo!' : ''
})

document.getElementById('type').addEventListener('click', function () {
    // maneira mais longa: input.placeholder = input.placeholder != 'Digite aqui' ? 'Digite aqui' : 'Muito Bem!'
    // maneira mais dinamica:
    input.setAttribute('type', 'radio')
})

document.getElementById('placeholder').addEventListener('click', function () {
    input.placeholder = input.placeholder != 'Digite aqui' ? 'Digite aqui' : 'Muito Bem!'
})

document.getElementById('disable').addEventListener('click', function () {
    input.setAttribute('disabled', !input.disabled)
})

document.getElementById('data').addEventListener('click', function() {
    const data = input.dataset.something
    console.log('O valor do atributo data-something é: ' + data)
    input.dataset.something = 'Outro valor qualquer'
    console.log('Agora o valor atribuido a data-somenthing é: ' + input.dataset.something)
})