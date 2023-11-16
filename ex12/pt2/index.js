function criarLabel(text, htmlFor) {
    const label = document.createElement('label')
    label.htmlFor = htmlFor
    label.innerText = text
    return label
} 

function criarInput(id, valor, name, type = 'text', placeholder = '') {
    const input = document.createElement('input')
    input.id = id
    input.value = valor
    input.name = name
    input.type = type
    input.placeholder = placeholder
    return input
}

const form = document.getElementById('devForm')
const adicionarTec = document.getElementById('addTechBtn')
const desenvolvedores = []
let inputRows = 0

adicionarTec.addEventListener('click', function (ev) {
    const stackRow = document.getElementById('stackInputs')

    const novaRow = document.createElement('li')
    const rowIndex = inputRows
    inputRows++
    novaRow.id = 'inputRow-' + rowIndex
    novaRow.className = 'inputRow'

    const techNome = criarLabel('Nome: ', 'techName-' + rowIndex)
    const techExp = criarInput('techName-' + rowIndex, null, 'techName')

    const expLabel = criarLabel('Experiencia: ')
    const id1 = 'expRadio-' + rowIndex + '.1'
    const expRadio1 = criarInput(id1, '0-2 Anos', 'techExp-' + rowIndex, 'radio')
    const expLabel1 = criarLabel('0-2 Anos', id1)
    const id2 = 'expRadio-' + rowIndex + '.2'
    const expRadio2 = criarInput(id2, '3-4 Anos', 'techExp-' + rowIndex, 'radio')
    const expLabel2 = criarLabel('3-4 Anos', id2)
    const id3 = 'expRadio-' + rowIndex + '.3'
    const expRadio3 = criarInput(id2, '5+ Anos', 'techExp-' + rowIndex, 'radio')
    const expLabel3 = criarLabel('5+ Anos', id3)

    const remove = document.createElement('button')
    remove.type = 'button'
    remove.innerText = 'Remover Linha'
    remove.addEventListener('click', function() {
        stackRow.removeChild(novaRow)
    })

    novaRow.append(
        techNome, techExp, expLabel, expRadio1, expLabel1, expRadio2, expLabel2, expRadio3, expLabel3, remove
    )

    stackRow.appendChild(novaRow)
})

form.addEventListener('submit', function(ev) {
    ev.preventDefault()

    const fullname = document.getElementById('fullname')
    const inputRow = document.querySelectorAll('.inputRow')

    let technologies = []
    inputRow.forEach(function (row) {
        const techName = document.querySelector('#' + row.id + ' input[name="techName"]').value
        const techExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value
        technologies.push({ name: techName, exp: techExp})
    })

    const newDev = { fullname: fullname.value, technologies: technologies}
    desenvolvedores.push(newDev)
    alert('Dev Cadastrado com Sucesso!')
    fullname.value = ''
    inputRow.forEach(function(row) {
        row.remove
    })
    
    console.log(desenvolvedores)
})