var placar = document.querySelector("#baseplacar");
var pincelPlacar = placar.getContext("2d");

var placar1 = "Algo";




function pontuacao () {
    if ( xBola < 5)
    {
        pointsPlayer2++;
        console.log(pointsPlayer2);
    }
    if ( xBola > 595)
    {
        pointsPlayer1++;
        console.log(pointsPlayer1);
    }
    
    pincelPlacar.fillStyle = "white";
    pincelPlacar.fillRect(0,0,600,50);
    pincelPlacar.fillStyle = "black";
    pincelPlacar.font = "30px Arial";
    pincelPlacar.fillText(pointsPlayer2, 550, 40);
    pincelPlacar.font = "30px Arial";
    pincelPlacar.fillText(pointsPlayer1, 40, 40);


}

