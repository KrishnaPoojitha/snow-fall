function setup() {
  createCanvas(800,400);
  if(frameCount % 150===0){
    for(var i=0;i<maxDrops;i++){
      drops.push(new createDrop(random(0,400),random(0,400)));
    }
  }
}
function preload(){
  bgImg=loadImage("snow3.png");
}

function draw() {
  background(bgImg);
  for(var i=0;i<maxDrops;i++){
    drops[i].snowDrops();
    drops[i].updateY();
  }  
  drawSprites();
}