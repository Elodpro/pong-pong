//Pour intégrer le canvas
let canvas=document.getElementById("canvas");
let ctx=canvas.getContext("2d");

//Toutes les variables définies ici
// Variable rectLeft
let xl=20;
let yl=20;
let lL=30;
let hl=210;

// Variable rectRight
let xr=50;
let yr=20;
let lR=30; 
let hr=210;

//Variable du pong
let xp=2;
let yp=2;
let lp=120;
let hp=185;


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
    
    

    // Rectangle de gauche
	ctx.fillStyle="white";
    ctx.drawImage(rectLeft,xl*1.25,yl*12.5,lL,hl);
    
    // Rectangle de droite
	ctx.fillStyle="white";
    ctx.drawImage(rectRight,xr*22.9,yr*12.5,lR,hr);

    //Le pong donc la balle
    ctx.fill="white";
    ctx.drawImage(pong,xp,yp,lp,hp)


}


//Définir les déplacement avec les touches du clavier 
//Pour chaque rectangle blanc
function keyMoove(e){

    //Pour que le keycode soit pris en compte c'est à dire
    //Le code de la touche comme : "87" = à la touche W
    let touche = e.keyCode;

    //touche w
    if (touche==87){
        yl=Math.max(yl-5);
        if(yl<0) yl=0;
    }
    //touche s
    if (touche==83){
        yl=Math.max(yl+5);
        if (yl>40) yl=40;
    }

    //touche flèche du haut
    if (touche==38){
        yr=Math.max(yr-5);
        if(yr<0) yr=0;
    }

    //touche flèche du bas
    if (touche==40){
        yr=Math.max(yr+5);
        if (yr>40) yr=40;
    }

}