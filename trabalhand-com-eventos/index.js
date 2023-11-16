function register(ev) {
    const sectionElement = ev.currentTarget.parentNode
    const username = sectionElement.children.username.value
    const password = sectionElement.children.password.value
    const passwordConfirmation = sectionElement.children.passwordConfirmation.value

    if (password === passwordConfirmation) {
        alert('Usuario ' + username + ' registrado com sucesso!')
        const usuarios = document.getElementById("usuarios")
        const listUsuarios = document.createElement('li')
        listUsuarios.innerText = username
        usuarios.appendChild(listUsuarios)

    }else{
        alert('As senhas não conferem!')
    }

    console.log({ username, password, passwordConfirmation })
}

const button = document.getElementById('register-button')

button.addEventListener('click', register)

function removeEvent() {
    button.removeEventListener('click', register)
    alert('Evento Removido!')
}
