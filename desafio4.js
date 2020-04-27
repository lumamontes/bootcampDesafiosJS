const usuario =  {
    nome: 'Luma',
    idade: 17,
    tecnologias: [ {
        nome: 'C++',
        especialidade: 'Desktop'
    }, {
        nome: 'python',
        especialidade: 'Data Science'
    },
    {
    nome: 'JavaScript',
    especialidade: 'web/mobile'
    }
]
}

console.log(`O usuário ${usuario.nome} tem ${usuario.idade} anos e usa a tecnologia ${usuario.tecnologias[0].nome} e tem a especialidade ${usuario.tecnologias[0].especialidade}`)


