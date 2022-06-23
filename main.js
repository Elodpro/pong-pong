//Pour intégrer le canvas
let canvas=document.getElementById("canvas");
let ctx=canvas.getContext("2d");

//Toutes les variables définies ici
// Variable rectLeft
let xl=20;
let yl=20;
let lL=35;
let hl=250;

// Variable rectRight
let xr=50;
let yr=20;
let lR=35; 
let hr=250;

//Variable du pong



//Platforme de gauche
let rectLeft=new Image();
rectLeft.src="/Images/rect-white.png";

//Platforme de droite
let rectRight=new Image();
rectRight.src="/Images/rect-white.png";

//Balle pong-pong
let pong=new Image();
pong.src="/Images/pong.png";




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

    // Rectangle de gauche
	ctx.fillStyle="white";
    ctx.drawImage(rectLeft,xl*57,yl,lL,hl);
    
    // Rectangle de droite
	ctx.fillStyle="white";
    ctx.drawImage(rectRight,xr/2,yr/1.1,lR,hr);


}


//Définir les déplacement avec les touches du clavier 
//Pour chaque rectangle blanc
function keyMoove(e){

    //Pour que le keycode soit pris en compte c'est à dire
    //Le code de la touche comme : "87" = à la touche W
    let touche = e.keyCode;

    //touche w
    if (touche==87){
        yl=Math.max(yl-50);
        if(yl<-6) yl=-6;
    }
    //touche s
    if (touche==83){
        yl=Math.max(yl+50);
        if (yl>508) yl=508;
    }

    //touche flèche du haut
    if (touche==38){
        yr=Math.max(yr-50);
        if(yr<-6) yr=-6;
    }

    //touche flèche du bas
    if (touche==40){
        yr=Math.max(yr+50);
        if (yr>508) yr=508;
    }

}