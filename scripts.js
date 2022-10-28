const mario = document.getElementById("mario");
const pipe = document.getElementById("pipe");
const gameover = document.getElementById("gameover");
const pontuacao = document.getElementById("pontuacao");
let pontuacaoAtual = 0


function jump () {
  if (mario.classList != "jump"){
  //se no html <img src="./img/mario.gif" id="mario"> nao estiver adicionado a class jump
    mario.classList.add("jump");
    //eh adicionado a class jump <img src="./img/mario.gif" id="mario" class="jump"> e aplicado a animacao para pular do css 
    //(enquanto a classe jump estiver ativa) 
    
    setTimeout(function () {
      mario.classList.remove("jump");
    }, 500);
    //apos 500ms (tempo de pulo do Mario) é removido a classe jump de <img src="./img/mario.gif" id="mario"> e a animacao jump é interrompida
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
  //adiciona a nova string ao <h1 id="pontuacao">Pontuação: 0</h1> do html
  

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
  //Se esses parametros forem atendidos significa que o 'mario' e 'pipe' colidiram

    pipe.style.animation = "none";
    //para a animacao do tubo (pipe)
    pipe.style.left = `${pipePosition}px`;
    //para a animacao na posicao da colisao
    
    mario.style.animation = "none";
    //para a animacao do mario
    mario.style.bottom = `${marioPosition}px`;
    //para o mario na posicao da colisao
    mario.src = './img/mario-gameover.webp';
    //muda a imagem do mario para uma imagem de mario game over
    mario.style.width = '120px';
    mario.style.marginLeft = "40px";
    
    gameover.style.marginLeft = "35%"
    //adiciona a imagem de gameover na tela
    
    clearInterval(loop);
    //para o loop
  }

}, 10);
//chama a funcao a cada 10 ms

document.addEventListener("keydown", function (event) {
  jump()
});
//verifica se foi pressionado alguma tecla, se sim a funcao jump é chamada e o mario pula


