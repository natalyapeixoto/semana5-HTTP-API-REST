const btnEnviar = document.getElementById('inputAluna')
const nome = document.getElementById('name')
const dateOfBirth = document.getElementById('dataDeNascimento')
const checkbox = document.getElementsByName('nasceuEmSp')
const btnListar = document.getElementById('listarAlunas')

const reprograma = {
	alunas: [],

	listarAlunas: function() {
		request()
	}
}

btnListar.addEventListener('click', function(e) {
	e.preventDefault()
	reprograma.listarAlunas()
})

async function request() {
	const response = await fetch('http://localhost:3000/alunas').then(data => data.json())
	console.log(response)
}
