var wall1 ,wall2 ,wall3 ,wall4 ,wall5 ,wall6 ,wall7 ,wall8 ,wall9 ,wall10 ,wall11 ,wall12;
var dong1 ,dong2 ,dong3 ,dong4;
var ding;

function setup(){
    createCanvas(1900,1900);
    
    ding = createSprite(470,275,15,15);
    ding.shapeColor = "orange";
    
    dong1 = createSprite(525,275,15,15);
    dong1.shapeColor = "red";
    
    dong2 = createSprite(570,275,15,15);
    dong2.shapeColor = "red";

    dong3 = createSprite(625,275,15,15);
    dong3.shapeColor = "red";
    
    dong4 = createSprite(675,275,15,15);
    dong4.shapeColor = "red";

    wall1 = createSprite(600,200,190,10);
    wall1.shapeColor = "green";

    wall2 = createSprite(600,350,190,10);
    wall2.shapeColor = "green";
        
    wall3 = createSprite(500,220,10,50);
    wall3.shapeColor = "green"
    
    wall4 = createSprite(700,220,10,50);
    wall4.shapeColor = "green"

    wall5 = createSprite(500,330,10,50);
    wall5.shapeColor = "green"

    wall6 = createSprite(700,330,10,50);
    wall6.shapeColor = "green"

    wall7 = createSprite(720,300,50,10);
    wall7.shapeColor = "green"
 
    wall8 = createSprite(480,300,50,10);
    wall8.shapeColor = "green"
 
    wall9 = createSprite(480,250,50,10);
    wall9.shapeColor = "green"
  
    wall10 = createSprite(720,250,50,10);
    wall10.shapeColor = "green"

    wall11 = createSprite(750,275,10,60);
    wall11.shapeColor = "green";

    wall12 = createSprite(450,275,10,60);
    wall12.shapeColor = "green";
}

function draw(){
    background("black");
    
    
    
    
    drawSprites();
}