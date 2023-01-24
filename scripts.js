const mario = document.getElementById("mario");
const pipe = document.getElementById("pipe");
const gameover = document.getElementById("gameover");
const pontuacao = document.getElementById("pontuacao");
const record = document.getElementById("record");
const atualizar = document.getElementById("atualizar");

let pontuacaoAtual = 0
let pontuacaoMaxima = localStorage.getItem("maxScore") || 0;

const numberToString = parseInt(pontuacaoMaxima)
record.textContent = "Record: " + numberToString.toFixed(0)

function updateScore(pontos) {
  if (pontos > pontuacaoMaxima) {
    pontuacaoMaxima = pontos;
    localStorage.setItem("maxScore", pontuacaoMaxima);
  }
}

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
  pontuacaoAtual = pontuacaoAtual + 0.09;
  const info = "Pontuação: " + pontuacaoAtual.toFixed(1); 
  pontuacao.textContent = info
    

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;
    
    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;
    mario.src = './img/mario-gameover.webp';
    mario.style.width = '120px';
    mario.style.marginLeft = "40px";
    
    gameover.style.marginLeft = "35%"
    atualizar.style.marginLeft = "48%"

    updateScore(pontuacaoAtual);

    clearInterval(loop);
  }

}, 10);

document.addEventListener("keydown", function (event) {
  jump()
});


