// Aqui pegamos todos os botões do tipo radio com o name especificado nos valore de name
const radios = {
  option1: document.querySelectorAll('input[name="option1"]'),
  option2: document.querySelectorAll('input[name="option2"]'),
  option3: document.querySelectorAll('input[name="option3"]'),
  option4: document.querySelectorAll('input[name="option4"]'),
  option5: document.querySelectorAll('input[name="option5"]')
}
//Aqui pegamos os elemntos aos quais apareceram e desaparecerão ao ter o nome do jogador preencido
const screens = {
  home: document.querySelector('#home').style.display = "flex",
  form: document.querySelector('#form').style.display = "none"
}
const loading = document.querySelector('#loading').style.display = "none"
// Variavel que corresponte ao botão do formulario Enviar
const btn = document.querySelector('button[type="button"]')
// Variavel que pega o input de nome do jogador
const player = document.querySelector('#player')
//Variável que armazena a pontuação do Jogador 
let score = 0
// Aqui atribuimos um evento para ouvir o enter e mudar do home para as perguntas
player.addEventListener('keypress', function(event) {
  // Se o evento for enter  vai guardar o nome do jogar numa variavel
  if (event.key === 'Enter') {
    const playerName = player.value
    //após pegar o valor do input com o nome do jogador, inserimos ao elemento com id "welcome" o texto Seja bem vindo + Nome do Jogador que está na variável playerName
    document.getElementById("welcome").textContent = "Seja muito bem vindo(a): " + playerName
    // Se tiver nome troca o display de home para as perguntas
    if (playerName) {
      document.querySelector('#home').style.display = "none"
      setTimeout(() => {
        document.querySelector('#form').style.display = "flex"
      }, 300)
    }
  }
})
/* Nessa função  vamos receber por parametro os valores radios e o correctAnswer, que correspondem aos valores do botão e da resposta correta
passados ao chamar a função, abaixo, pra que a gente possa alterar a cor do texto e desabilitar os botões não clicados*/
function addChangeEventListener(radios, correctAnswer) {
  for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('change', function() {
      // Essa variavel guarda qual foi o botão clicado
      //console.log(this)
      const selectedRadio = this
      // Aqui diz que o label é o proximo elemento após o this, que é o botão clicado
      const label = this.nextElementSibling
      // condição que avalia se o valor do botão clicado é igual a resposta correta, que recebemos por parametro
      if (selectedRadio.value === correctAnswer) {
        // mudamos a cor do label para verde caso a resposta seja correta
        label.style.color = "green"
        label.style.fontWeight = "bold"
      } else {
        // mudamos a cor do label para vermelho caso a resposta seja incorreta
        label.style.color = "red"
      }
      for (let j = 0; j < radios.length; j++) {
        //Percorremos os botões e desabilitamos os demais para que não haja possibilidade de troca
        if (radios[j] !== selectedRadio) {
          radios[j].disabled = true
        }
      }
    })
  }
}
addChangeEventListener(radios.option1, 'Rachel de Queiroz')
addChangeEventListener(radios.option2, 'Cecília Meireles')
addChangeEventListener(radios.option3, 'Clarice Lispector')
addChangeEventListener(radios.option4, 'Aldravia')
addChangeEventListener(radios.option5, 'Prêmio Marcantonio Vilaça')
// Função que vai ouvir o click do botão e de acordo com as respostas enviadas, vai calcular a pontuação do Jogador
btn.addEventListener('click', function() {
  // const com as respostas corretas para cada botão
  const answers = {
    option1: 'Rachel de Queiroz',
    option2: 'Cecília Meireles',
    option3: 'Clarice Lispector',
    option4: 'Aldravia',
    option5: 'Prêmio Marcantonio Vilaça'
  }
  for (let option in radios) {
    for (let i = 0; i < radios[option].length; i++) {
      if (radios[option][i].checked && radios[option][i].value === answers[option]) {
        score++
      } else if (radios[option][i].checked && radios[option][i].value !== answers[option]) {
        score - 1
      }
    }
  }
  if (score >= 3) {
    alert("Parabéns, você alcançou a pontuação: " + score + "/5")
  } else {
    alert("O Próximo jogo será melhor! Sua pontuação foi:" + score + "/5")
  }
})
