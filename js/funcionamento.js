function refreshScreenPlay () {
    pincel.clearRect(0,0,600,400);
    
    racquet(xRaqueteA,yRaqueteA,raqueteLargura,raqueteAltura);
    racquet(xRaqueteB,(yBola-raqueteAltura/2),raqueteLargura,raqueteAltura);

    pontuacao();
    moveBall();
    paredes();
    colisaoRaqueteA();
    colisaoRaqueteB();
    
}

function playgame() {
    setInterval(refreshScreenPlay, 1);
}

function start() {
    var startGame = document.querySelector("#startgame");
    startGame.addEventListener("click", function(){
        // console.log(ballspeed);
        xBallSpeed = 1;
        yBallSpeed = 1;
    })
}

function finish() {
    var stopgame = document.querySelector("#stopgame");
    stopgame.addEventListener("click", function(){
        // console.log(ballspeed);
        xBallSpeed = 0;
        yBallSpeed = 0;
        xBola = 300;
        yBola = 200;
        yRaqueteA = (400/2) - (raqueteAltura/2);
    })
}

start();
finish();


