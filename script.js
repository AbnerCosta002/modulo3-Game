let n;
function setup() {
  createCanvas(600, 400);
  n = new Nave(200,200,5);
}

function draw() {
  background(220);
  fill('red')
  n.show();
  let sentido;
  if(keyIsDown(LEFT_ARROW)){
    sentido = "e";
  }
  if(keyIsDown(RIGHT_ARROW)){
    sentido = "d";
  }
  if(keyIsDown(UP_ARROW)){
    sentido = "c";
  }
  if(keyIsDown(DOWN_ARROW)){
    sentido = "b";
  }
  n.move(sentido);
  n.move2(sentido);
}