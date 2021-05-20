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