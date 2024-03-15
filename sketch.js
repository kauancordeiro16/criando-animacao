let cor;

function setup() {
createCanvas(400, 400);
background("black");
cor = color(random(0, 255), random(0, 255), random(0, 255));
posicaoHorizontal = 200;
posicaoVertical = 200;
}

function draw() {
  fill("pink")
circle(80,39,50);
}

function draw() {
fill(cor);
circle(posicaoHorizontal,
posicaoVertical, 80);
if(mouseX < posicaoHorizontal) {
posicaoHorizontal--;
}
if(mouseX > posicaoHorizontal) {
posicaoHorizontal++;
} 
  if(mouseY < posicaoVertical) {
posicaoVertical--;
}
if(mouseY > posicaoVertical) {
posicaoVertical++;
}
}

