var gameState = "START"
var willyImg;
var baseImg;
var pts = 0


function preload(){
  willyImg = loadImage("willyLeft.png");
  baseImg = loadImage("base.png");
  cosasMalasImg = loadImage("badthing.png");
  cosasbuenas=loadImage("concha_kawai.png")
}

function setup(){
  createCanvas(450,700)
  player = createSprite(230,400,20,20);
  player.addImage(willyImg);
  player.scale= 0.07
  baseGroup = new Group()
  badthingsGroups=new Group()
  goodGroups=new Group()
}

function draw(){
  background("lightblue"); 
  
  if(gameState == "START" && keyDown("up")){
    
    gameState= "PLAY"
    
    
    
  }
  
  if(gameState == "PLAY"){
      if(keyDown("right")){
        player.x =player.x + 5

      }
    if(player.isTouching(goodGroups, removegoodGroups)){
      pts+=1
    }

      if(keyDown("left")){
        player.x =player.x - 5
      }

      if(keyDown("up")){
        player.velocityY = -10
        
      }

      //gravedad

      player.velocityY = player.velocityY +0.8
      crearBases();
      badThings();
    
    if(player.isTouching(baseGroup)){
      player.velocityY = 0
    }
    
  }
  
  if(gameState == "GAMEOVER"){
    
    
  }
  

  drawSprites();
  fill("rgb(20,119,121)")
  textSize(20)
  text("score: " +pts, 200,20) 
  textSize(10)
  text("x: "+ mouseX +"y: "+ mouseY, 10,20)
  
}


function crearBases(){
  if(frameCount%200==0){
    base = createSprite(random(50,400),0, 100,200)
    good=createSprite(base.x, -10, 70,20)
    good.velocityY=2
    good.addImage(cosasbuenas)
    good.scale=0.1
    base.addImage(baseImg);
    base.scale = 0.3
    base.shapeColor = "yellow"
    base.velocityY = 2
    baseGroup.add(base)
    goodGroups.add(good)
  //cosas amarillas klavderos pts invisible cosas malas manchas de lodo 
  }
}


function badThings(){
  var velo = 3; 
  if(frameCount%75==0){
    var bad = createSprite(random(50, 400), 0, 70,20)
    bad.velocityY = 3; 
    bad.addImage(cosasMalasImg); 
    bad.scale = 0.2;
    badthingsGroups.add(bad)
  }
}

function removegoodGroups(sprite, good){
  good.remove()
  
}
