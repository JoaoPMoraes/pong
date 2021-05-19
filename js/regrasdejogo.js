var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");

// ---------------- Movement

var up = 38;
var down = 40;
var rate = 10;
var raio = 10;
var xBallSpeed = 1;
var yBallSpeed = 1;
var y = (400/2) - (raqueteAltura/2);

var raqueteAltura = 70;
var raqueteLargura = 7;
var xRaqueteA = 20;
var yRaqueteA = (400/2) - (raqueteAltura/2);

var xRaqueteB = 573;
var yRaqueteB = yBola;



var xBola = 300;
var yBola = 200;

function move(evento) {
    if (evento.keyCode == down)
    {
        yRaqueteA += rate;
    }
    if (evento.keyCode == up)
    {
        yRaqueteA -= rate;
    }
}

function moveBall() {
    ball(xBola,yBola,raio);
    xBola+=xBallSpeed;
    yBola+=yBallSpeed;

}



// ---------------- Colisão

function paredes () {
    
    if (xBola > 600-raio/2 || xBola < 0+raio/2)
    {
        xBallSpeed = xBallSpeed * -1;
    }
    if (yBola > 400-raio/2 || yBola < 0+raio/2)
    {
        yBallSpeed = yBallSpeed * -1;
    }
}

function colisaoRaqueteA () {
    
    if (xBola - raio < xRaqueteA + raqueteLargura && yBola - raio < yRaqueteA + raqueteAltura && yBola + raio > yRaqueteA)
    {
        xBallSpeed = xBallSpeed * -1;
    }
}

function colisaoRaqueteB () {
    
    if (xBola + raio > xRaqueteB || xBola < yRaqueteB + raqueteAltura || xBola > yRaqueteB) 
    {
        xBallSpeed *= -1;
    }
}




// ---------------- Draw

function racquet(x,y,w,h) {
    pincel.fillStyle = "white";
    pincel.fillRect(x,y,w,h)
}

function ball(bx,by,raio) {
    pincel.fillStyle = "white";
    pincel.beginPath();
    pincel.arc(bx,by,raio,0,2*Math.PI);
    pincel.fill();
}

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

var play = 1;
var startGame = document.querySelector("#startgame");
startGame.addEventListener("click", function(){
    play *= -1
    if (play == -1)
    {
        playgame();
        console.log(play);
    } 
})

document.onkeydown = move;




