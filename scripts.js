const mario = document.getElementById("mario");
const pipe = document.getElementById("pipe");
const gameover = document.getElementById("gameover");
const pontuacao = document.getElementById("pontuacao");
let pontuacaoAtual = 0


function jump () {
  if (mario.classList != "jump"){
    mario.classList.add("jump");
    
    setTimeout(function () {
      mario.classList.remove("jump");
    }, 500);
  }
} 

let loop = setInterval(function () {

  const pipePosition = parseInt(window.getComputedStyle(pipe).getPropertyValue("left"));
  const marioPosition = parseInt(window.getComputedStyle(mario).getPropertyValue("bottom"));
  /* 
  - pipePosition e marioPosition recebem a posicao atual do elemento
  - window.getComputedStyle() retorna um objeto contendo os valores de todas as propriedades CSS de um elemento
  - getPropertyValue() retorna uma string contendo o valor de uma propriedade CSS especificada
  - getComputedStyle().getPropertyValue() retorna uma string contendo o valor de uma determinada propriedade do CSS
  - parseInt() analisa um argumento string e retorna um inteiro
  */
  pontuacaoAtual = pontuacaoAtual + 0.09;
  //aumenta a pontuacao enquanto o jogo ainda esta rodando
  
  const info = "Pontuação: " + pontuacaoAtual.toFixed(0); 
  //toFixed() formata um número. Se 0 (zero) formata para numero sem casas decimais (numero inteiro)
  
  pontuacao.textContent = info
  //adiciona a nova string 
  

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
  //Se esses parametros forem atendidos significa que o 'mario' e 'pipe' colidiram

    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;
    
    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;
    mario.src = './img/mario-gameover.webp';
    mario.style.width = '120px';
    mario.style.marginLeft = "40px";
    
    gameover.style.marginLeft = "35%"
    
    clearInterval(loop);
  }

}, 10);

document.addEventListener("keydown", function (event) {
  jump()
});


