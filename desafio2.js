const nome = 'Tenzin'
const sexo = 'M'
const idade = 20
const contribuicao = 2

const aposentadoriaM = idade + contribuicao 
const aposentadoriaF = idade + contribuicao


if (aposentadoriaM >= 95){
if (aposentadoriaF >= 85){
    
    console.log(`${nome} você pode se aposentar!`)
} else { 
    console.log(`${nome} você ainda não pode se aposentar!`)
  } 
} else { 
    console.log(`${nome} você ainda não pode se aposentar!`)
  }


