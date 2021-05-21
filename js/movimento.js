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

