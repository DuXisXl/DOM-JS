function addContact() {
    const contactSection = document.getElementById('contact-list')

    const h3 = document.createElement('h3')
    h3.innerText = "Contato"

    const ul = document.createElement('ul')

    const nameli = document.createElement('li')
    nameli.innerText = "Nome"
    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.name = 'fullname'
    ul.appendChild(document.createElement('br'))
    nameli.appendChild(nameInput)
    ul.appendChild(nameli)

    const phoneli = document.createElement('li')
    phoneli.innerText = "Telefone"
    const phoneInput = document.createElement('input')
    phoneInput.type = 'number'
    phoneInput.name = 'phone'
    phoneli.appendChild(phoneInput)
    ul.appendChild(document.createElement('br'))
    ul.appendChild(phoneli)

    const addressli = document.createElement('li')
    addressli.innerHTML = '<label for="address">Endereço: </label>'
    const addresInput = document.createElement('input')
    addresInput.type = 'text'
    addresInput.name = 'address'
    addresInput.id = 'address'
    addressli.appendChild(addresInput)
    ul.appendChild(document.createElement('br'))
    ul.appendChild(addressli)

    contactSection.append(h3, ul)
}

function removeContact() {
    const contactSection = document.getElementById('contact-list')

    const titles = document.getElementsByTagName('h3')
    const contacts = document.getElementsByTagName('ul')

    contactSection.removeChild(titles[titles.length - 1])
    contactSection.removeChild(contacts[contacts.length - 1])
}