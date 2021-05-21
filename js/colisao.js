function colisaoParedes () {
    
    if (xBola > 600 - raio/2 || xBola < 0+raio/2)
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
    
    if (xBola + raio > xRaqueteB && yBola - raio < yRaqueteB + raqueteAltura && yBola + raio > yRaqueteB) 
    {
        xBallSpeed *= -1;
    }
}


