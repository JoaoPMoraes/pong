function refreshScreenPLay () {
    pincel.clearRect(0,0,600,400);
    
    racquet(xRaqueteA,yRaqueteA,raqueteLargura,raqueteAltura);
    racquet(xRaqueteB,(yBola-raqueteAltura/2),raqueteLargura,raqueteAltura);

    

    moveBall();
    paredes();
    colisaoRaqueteA();
    colisaoRaqueteB();
    
}

function playgame() {
    setInterval(refreshScreenPLay, 1);
}

var startGame = document.querySelector("#startgame");
startGame.addEventListener("click", function(){
    // console.log(ballspeed);
    xBallSpeed = 1;
    yBallSpeed = 1;
    console.log(ballspeed);
})

var stopgame = document.querySelector("#stopgame");
stopgame.addEventListener("click", function(){
    // console.log(ballspeed);
    xBallSpeed = 0;
    yBallSpeed = 0;
    xBola = 300;
    yBola = 200;
    console.log(ballspeed);
})

