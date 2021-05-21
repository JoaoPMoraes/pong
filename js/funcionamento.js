function refreshScreenPlay () {
    pincel.clearRect(0,0,600,400);

    
    pontuacao();
    moveBall();
    
    //yRaqueteB = yBola - raqueteAltura/2;
    
    movimentoOponente();

    
    racquet(xRaqueteA,yRaqueteA,raqueteLargura,raqueteAltura);
    racquet(xRaqueteB,yRaqueteB,raqueteLargura,raqueteAltura);
    
    
    colisaoParedes();
    colisaoRaqueteA();
    colisaoRaqueteB();
    
    finishgame();
    
    
}

function playgame() {
    setInterval(refreshScreenPlay, 1);
}
var movimento = false;

var startGame = document.querySelector("#startgame");
    startGame.addEventListener("click", function(){
        // console.log(ballspeed);
        
        
    xBallSpeed = 1;
    yBallSpeed = 1;
    velocidadeYOponente = 1;
    console.log(movimento);
    

})

function finish () {
    xBallSpeed = 0;
    yBallSpeed = 0;
    xBola = 300;
    yBola = 200;
    pointsPlayer1 = 0;
    pointsPlayer2 = 0;
    yRaqueteA = (400/2) - (raqueteAltura/2);
    yRaqueteB = (400/2) - (raqueteAltura/2);
}

var stopgame = document.querySelector("#stopgame");
    stopgame.addEventListener("click", function(){
    // console.log(ballspeed);
    velocidadeYOponente = 0;
    finish();
})

function finishgame() {
    if (pointsPlayer2 == 10 || pointsPlayer1 == 10) {
        pointsPlayer1 = 0;
        pointsPlayer2 = 0;
        finish();
    }
}

playgame();
document.onkeydown = move;
