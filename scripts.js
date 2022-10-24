const mario = document.getElementById("mario");
const pipe = document.getElementById("pipe");
const gameover = document.getElementById("gameover");


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

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

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


