const btnEnviar = document.getElementById("inputAluna")
const nome = document.getElementById("name")
const dateOfBirth = document.getElementById("dataDeNascimento")
const checkbox = document.getElementsByName("nasceuEmSp")
const btnListar = document.getElementById("listarAlunas")
const divListagem = document.querySelector(".aluninhas")

async function request() {
  const response = await fetch("http://localhost:3000/alunas").then(data =>
    data.json()
  )
  return response
}

async function listarAlunas() {
  const dados = await request()
  console.log(dados)
  divListagem.innerHTML = ""
  dados.forEach(aluna => {
    divListagem.innerHTML += `
      <li id="${aluna.id}" onclick="getAluna(${aluna.id})"class="aluninha">Nome: ${aluna.nome}</li>
    `
  })
}

btnListar.addEventListener("click", function(e) {
  e.preventDefault()
  listarAlunas()
})

async function requestAluna(id) {
  const response = await fetch(`http://localhost:3000/alunas/${id} `).then(
    data => data.json()
  )
  return response
}
async function getAluna(id) {
  const aluna = await requestAluna(id)
  console.log(aluna)
  divListagem.innerHTML = ""
  divListagem.innerHTML = `
      <li class="alunaView">Nome: ${aluna.nome}</li><br>
      <li class="alunaView">Nascida em SP: ${aluna.nasceuEmSp}</li><br>
      <li class="alunaView">Data de Nascimento: ${aluna.dateOfBirth}</li>
      `
}
