var tela = document.querySelector("#telagame");
var pincel = tela.getContext("2d");

// ---------------- Variáveis

var up = 38;
var down = 40;
var rate = 10;
var raio = 10;
var ballspeed = 0;
var xBallSpeed = ballspeed;
var yBallSpeed = ballspeed;
var y = (400/2) - (raqueteAltura/2);

var raqueteAltura = 70;
var raqueteLargura = 7;
var xRaqueteA = 5;
var yRaqueteA = (400/2) - (raqueteAltura/2);

var xBola = 300;
var yBola = 200;

// 588
var xRaqueteB = 588;
var yRaqueteB = (400/2) - (raqueteAltura/2);

var velocidadeYOponente;

velocidadeYOponente = 0;

function movimentoOponente() {
    if (yRaqueteB + raqueteAltura/2 > 400 || yRaqueteB + raqueteAltura/2 < 0) {
        velocidadeYOponente *= -1;
    }
    yRaqueteB += velocidadeYOponente;
}

function estatoInicial() {
    xBallSpeed = 1;
    yBallSpeed = 1;
    xBola = 300;
    yBola = 200;
    velocidadeYOponente = parseFloat((Math.random() * (1.0200 - 0.9800) + 0.9800).toFixed(4));
    yRaqueteA = (400/2) - (raqueteAltura/2);
    yRaqueteB = (400/2) - (raqueteAltura/2);
    console.log(velocidadeYOponente);
    console.log(yRaqueteB);
}


var pointsPlayer1 = 0;
var pointsPlayer2 = 0;


// ---------------- Movimento

// ---------------- Colisão

// ---------------- Draw

// ---------------- Funcionamento

// ---------------- Play






