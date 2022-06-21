//Pour intégrer le canvas
let canvas=document.getElementById("canvas");
let ctx=canvas.getContext("2d");

//Toutes les variables définies ici
// Variable rectLeft
xl=450;
yl=800;
lL=100;
hl=200;

// Variable rectRight
xr=200
yr=200
lR=110 
hr=270


//Platforme de gauche
let rectLeft=new Image();
rectLeft.src="/Images/rect-white.png";

//Platforme de droite
let rectRight=new Image();
rectRight.src="/Images/rect-white.png";




// Timer d'animation de jeu (tous les 40ms)
let tmr=setInterval(function(){timerVariable()},40);

function timerVariable(){

    

}

//Fonction pour dessiner toutes les choses du monde
function draw(){
    // Fonction qui dessine la scène
    ctx.clearRect(0,0,canvas.width,canvas.height);
}


//Définir les déplacement avec les touches du clavier 
//Pour chaque rectangle blanc
function keyMoove(e){

    //Pour que le keycode soit pris en compte c'est à dire
    //Le code de la touche comme : "87" = à la touche W
    let touche = e.keyCode;

    //touche w
    if (touche==87){
        yl=Math.max(yv-20);
    }
    //touche s
    if (touche==83){
        yl=Math.max(yv+20);
    }

    //touche flèche du haut
    if (touche==38){
        yr=Math.max(yr-20);
    }

    //touche flèche du bas
    if (touche==40){
        yr=Math.max(yr+20);
    }

}