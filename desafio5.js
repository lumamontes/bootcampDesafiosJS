// Usuários e tecnologias

const usuarios = [
    { nome: 'Luma', tecnologias: ['HTML', 'CSS'] },
    { nome: 'Lolena', tecnologias: ['JavaScript', 'CSS'] },
    { nome: 'Luaninha', tecnologias: ['HTML', 'Node.js'] }
  ]

for (let usuario of usuarios) {
    console.log(`${usuario.nome} trabalha com ${usuario.tecnologias}`)
}

// Busca por tecnologia
function checarCSS(usuario) {
    for (let tecnologia of usuario.tecnologias) {
        if (tecnologia == 'CSS') return true
    }

    return false
}

for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checarCSS(usuarios[i])

    if(usuarioTrabalhaComCSS) {
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
    }
}
