//Pour intégrer le canvas
let canvas=document.getElementById("canvas");
let ctx=canvas.getContext("2d");

//Toutes les variables définies ici
// Variable rectLeft
var rectLeft = {
x : 20,
y : 20,
l : 30,
h : 210
}
// Variable rectRight
var rectRight = {
x : 50,
y : 20,
l : 30, 
h : 210
}
//Variable du pong
var circle = {
r : 19,
x : 346,
y : 352,
vx : 3,
vy : -3
}
//Variable score
let lScore=0;
let rScore=0;




// Timer d'animation de jeu (tous les 40ms)
let tmr=setInterval(function(){timerVariable()},40);

function timerVariable(){

    
    // Appel de la fonction draw pour
    //Quelle s'éxecute
    draw();
}

//Fonction pour dessiner toutes les choses du monde
function draw(){
    // Fonction qui dessine la scène
    ctx.clearRect(0,0,canvas.width,canvas.height);

    //Score des 2 joueurs 
    //Rectleft
    ctx.fillStyle="white";
	ctx.font="30pt Arial";
	ctx.fillText(lScore,478,50);
    //Rectright
    ctx.fillStyle="white";
	ctx.font="30pt Arial";
	ctx.fillText(rScore,700,50);


    //Traitillés du millieu
    ctx.fillStyle="white";
	ctx.fillRect(595,20,10,70);
    
    ctx.fillStyle="white";
	ctx.fillRect(595,120,10,70);
    
    ctx.fillStyle="white";
	ctx.fillRect(595,220,10,70);
    
    ctx.fillStyle="white";
	ctx.fillRect(595,320,10,70);
    
    ctx.fillStyle="white";
	ctx.fillRect(595,420,10,70);
    
    ctx.fillStyle="white";
	ctx.fillRect(595,520,10,70);
    
    ctx.fillStyle="white";
	ctx.fillRect(595,620,10,70);
    
    
    //dessin du pong
    ctx.beginPath();
    ctx.arc(circle.x*1.72, circle.y, circle.r, 0, Math.PI*2);
    ctx.fillStyle="white";
    ctx.fill();
    ctx.closePath();

    // Rectangle de gauche
	ctx.fillStyle="white";
    ctx.fillRect(rectLeft.x*1.25,rectLeft.y*12.5,rectLeft.l,rectLeft.h);
    
    // Rectangle de droite
	ctx.fillStyle="white";
    ctx.fillRect(rectRight.x*22.9,rectRight.y*12.5,rectRight.l,rectRight.h);

}

//Marche pas du tout
function pongCollisionRect(){
    
}

//Collision du ballon contre certaines surfaces du canvas
function pongCollisionWalls(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw();
    
    //Rebondir coté du mur de droite
    if(circle.x + circle.vx > canvas.height-circle.r) {
      circle.vx = -circle.vx;
      lScore++; 
   }
    //Rebondir coté du mur de gauche
   if(circle.x +circle.vx < circle.r){
    circle.vx = -circle.vx;
    rScore++;
   }

    //Rebondir haut du mur et bas du mur
    if(circle.y + circle.vy > canvas.height-circle.r || circle.y + circle.vy < circle.r) {
        circle.vy = -circle.vy;
    }
    
    circle.x += circle.vx;
    circle.y += circle.vy;
}
setInterval(pongCollisionWalls, 12);

//Définir les déplacement avec les touches du clavier 
//Pour chaque rectangle blanc
function keyMoove(e){

    //Pour que le keycode soit pris en compte c'est à dire
    //Le code de la touche comme : "87" = à la touche W
    let touche = e.keyCode;

    //touche w
    if (touche==87){
        rectLeft.y=Math.max(rectLeft.y-5);
        if(rectLeft.y<0) rectLeft.y=0;
    }
    //touche s
    if (touche==83){
        rectLeft.y=Math.max(rectLeft.y+5);
        if (rectLeft.y>40) rectLeft.y=40;
    }

    //touche flèche du haut
    if (touche==38){
        rectRight.y=Math.max(rectRight.y-5);
        if(rectRight.y<0) rectRight.y=0;
    }

    //touche flèche du bas
    if (touche==40){
        rectRight.y=Math.max(rectRight.y+5);
        if (rectRight.y>40) rectRight.y=40;
    }

}

