var fly,flyImg
var deltaFighter,deltaFighterImg
var trident,tridentImg
var sideFighter,sideFighterImg
var pulseFighter,pulseFighterImg
var shadowX1,shadowX1,shadowX1Img
var yDefender,yDefenderImg
var asteroids,asteroidsImg
var diamonds,diamondsImg
var bg,backgroundImg


function preload(){
  flyImg=loadImage("starblast-1611154245120.png")
  deltaFighterImg=loadImage("starblast-1611154844277.png")
  tridentImg=loadImage("starblast-1611154902293.png")
  sideFighterImg=loadImage("starblast-1611154911512.png")
  pulseFighterImg=loadImage("starblast-1611154916695.png")
  shadowX1Img=loadImage("starblast-1611154924829.png")
  yDefenderImg=loadImage("starblast-1611154932369.png")
  asteroidsImg=loadImage("in.png")
  diamondsImg=loadImage("download (1).jpg")
  backgroundImg=loadImage("download (2).jpg")

}



function setup() {
  createCanvas(800, 400);

  bg=createSprite(400,200,800,400)
  bg.addImage("bg",backgroundImg)
  bg.scale=3.2
  bg.velocityY=5

  fly=createSprite(200,300,100,100)
  fly.addImage("fly",flyImg)
  fly.scale=0.3

asteroids=createSprite(200,100,100,100)
asteroids.addImage("asteroids",asteroidsImg)
asteroids.scale=0.2

diamonds=createSprite(200,100,100,100)
diamonds.addImage("diamonds",diamondsImg)
diamonds.visible=false


  
}





function draw() {
background(220);

if (bg.y>400){
  bg.y=200
}

if(keyDown==="UP_ARROW")
fly.y=-5

if (keyDown==="DOWN_ARROW")
fly.y=5

drawSprites();
}