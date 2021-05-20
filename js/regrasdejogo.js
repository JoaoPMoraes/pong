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
var xRaqueteA = 20;
var yRaqueteA = (400/2) - (raqueteAltura/2);

var xRaqueteB = 573;
var yRaqueteB = yBola;

var xBola = 300;
var yBola = 200;

var pointsPlayer1 = 0;
var pointsPlayer2 = 0;


// ---------------- Movimento

// ---------------- Colisão

// ---------------- Draw

// ---------------- Funcionamento

// ---------------- Play



playgame();
document.onkeydown = move;



