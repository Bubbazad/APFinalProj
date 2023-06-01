//General Variables////////////////////////////////////////////
var startTime = Date.now();
var timerEl = document.getElementById("timer");
var maxTime = 30;
var x = 15;
var y = 10;
var score = 0;
var scoreEl = document.getElementById("Score");
setTimeout(() => {
  timerEl.innerText = maxTime - (Date.now() - startTime);
}, 1);
function scorep(el) {
  if (el.style.opacity != '1') { 
    score++;
    scoreEl.innerText = score;
    
  }
  if (score >= 3) {
    alert('you win!');
  }
}
//Pikachu/////////////////////
var PikX = (((Math.random() * 30) | 0) * 55) + 15;
var PikY = (((Math.random() * 19) | 0) * 52) + 10;
var pikachuE1 = document.getElementById('pikachu');
//Snorlax/////////////////////
var SnorX = (((Math.random() * 30) | 0) * 55) + 15;
var SnorY = (((Math.random() * 19) | 0) * 52) + 10;
var snorlaxE1 = document.getElementById('snorlax');
//Tornadus///////////////////
var TornX = (((Math.random() * 30) | 0) * 55) + 15;
var TornY = (((Math.random() * 19) | 0) * 52) + 10;
var tornadusE1 = document.getElementById('tornadus');
//Player/////////////////////
var player = {x:15, y:10};
var speedx = 55;
var speedy = 52;
var playerEl = document.getElementById('player');
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
document.body.addEventListener('keydown',move);

snorlaxE1.style.top = SnorY + 'px';
snorlaxE1.style.left = (SnorX - 7) + 'px';
pikachuE1.style.top = PikY + 'px';
pikachuE1.style.left = (PikX - 7) + 'px';
playerEl.style.top = y + 'px';
playerEl.style.left = x + 'px';
tornadusE1.style.top = TornY + 'px';
tornadusE1.style.left = (TornX - 7) + 'px';
///////////////////////////////////////////

function move (e) {
  e.preventDefault();
  switch(e.key){
      case "ArrowLeft":
        player.x -= speedx;
        if(player.x < 0){
          player.x += speedx;
        }
        break;
      case "ArrowRight":
        player.x += speedx;
        if(player.x > 1610){
          player.x -= speedx;
        }
        break;
      case "ArrowUp":
        player.y -= speedy;
        if(player.y < 0){
          player.y += speedy;
        }
        break;
      case "ArrowDown":
        player.y += speedy;
        if(player.y > 946){
          player.y -= speedy;
        }
        break;
  }
  playerEl.style.top = player.y + 'px';
  playerEl.style.left = player.x + 'px';
  detectPokemon(player.x,player.y);
}
////////////////////////////////////////////
////////////////////////////////////////////

function detectPokemon(x,y){
  if(x == SnorX && y == SnorY){
    alert("A Wild Snorlax Appeared!");
    scorep(snorlaxE1);
    snorlaxE1.style.opacity="1";
    // snorlaxE1.style.top = 1035 + 'px';
    // snorlaxE1.style.left = 50 + 'px';
  }
  else if(x == PikX && y == PikY){
    alert("A Wild Pikachu Appeared!");
    scorep(pikachuE1);
    pikachuE1.style.opacity="1";
    // pikachuE1.style.top = 1020 + 'px';
    // pikachuE1.style.left = 200 + 'px';
  }
  else if(x == TornX && y == TornY){
    alert("A Wild Tornadus Appeared!");
    scorep(tornadusE1);
    tornadusE1.style.opacity="1";
    // tornadusE1.style.top = 1020 + 'px';
    // tornadusE1.style.left = 350 + 'px';
  }
}

////////////////////////////////////////////




