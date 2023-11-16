function addInput () {
    const ul = document.getElementById('inputs')

    const newLi = document.createElement('li')
    newLi.className = 'list-item'
    newLi.innerText = 'Novo Input: '

    const newInput = document.createElement('input')
    newInput.type = 'text'
    newInput.name = 'input'

    const inputNumbers = document.createElement('input')
    inputNumbers.type = 'number'

    const space = document.createElement('br')
    space.innerHtml = '<br>'

    inputNumbers.appendChild(space)

    newLi.appendChild(newInput)
    newLi.appendChild(inputNumbers)
    ul.appendChild(newLi)

}