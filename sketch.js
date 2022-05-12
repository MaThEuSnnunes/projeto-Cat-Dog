var montanha = createSprite(200, 200);
montanha.setAnimation("montanha");
var bola = createSprite(200, 200, 10, 10);
var raqueteJ = createSprite(10, 200, 10, 50);
var raqueteC = createSprite(400, 200, 10, 50);
raqueteC.setAnimation("Gato");
raqueteC.scale = 0.2;
raqueteJ.setAnimation("Cachorro");
raqueteJ.scale = 0.2;
bola.setAnimation("bola");
bola.scale = 0.1;


var modoDoJogo = "inicio";
var placarC = 0;
var placarJ = 0;


function draw() {
 
background("white");
 drawSprites();
 raqueteJ.x = 0;
 raqueteC.x = 400;
 if (modoDoJogo == "inicio") {
   textSize(15);
   fill("black");
   text("Pressione espaço para começar", 105, 150);
 }
 textSize(15);
 textFont("Gemunu Libre");
 fill("black");
 text(placarJ, 165, 20);
 text(placarC, 230, 20);
 if (bola.isTouching(raqueteJ) || bola.isTouching(raqueteC)) {
   playSound("sound://category_hits/retro_game_hit_block_3.mp3");
 }
 if (bola.x <0) {
   placarC = placarC+1;
   playSound("sound://category_points/negative_point_counter_2.mp3");
   raqueteJ.setAnimation("Dead (1).png_1");
 }
 if (bola.x >400) {
   placarJ = placarJ+1;
   playSound("sound://category_points/negative_point_counter_2.mp3");
   raqueteC.setAnimation("Dead (2).png");
 }
 if (placarJ==5 || placarC==5 ) {
   text("Game Over", 160, 200);
   modoDoJogo = "fim";
 }
createEdgeSprites();
bola.bounceOff(topEdge);
bola.bounceOff(bottomEdge);
 if (bola.isTouching(topEdge) || bola.isTouching(bottomEdge)) {
   playSound("sound://category_hits/retro_game_simple_impact_2.mp3");
 }
//raqueteJ.y=World.mouseY;
//raqueteC.y=bola.y; 
bola.bounceOff(raqueteJ);
bola.bounceOff(raqueteC);
 if (bola.x < 0) {
   raqueteC.x = 400;
   raqueteC.y = 200;
 }
 if (keyDown("space") && modoDoJogo=="inicio") {
 Velocidadedabola();
 modoDoJogo = "jogando";
 raqueteJ.setAnimation("Cachorro");
 raqueteC.setAnimation("Gato");
}
 Criarrede();
 if (bola.x <0 || (bola.x >400)) {
 Reiniciar();
 }
 if (keyDown("W")) {
   raqueteJ.velocityY = -5;
 }
 if (keyDown("S")) {
   raqueteJ.velocityY = 5;
 }
 if (keyDown("up")) {
   raqueteC.velocityY = -5;
 }
 if (keyDown("down")) {
   raqueteC.velocityY = 5;
 }
 raqueteJ.bounceOff(edges);
 raqueteC.bounceOff(edges);
 

}
//Divide o Campo
function Criarrede() {
  for (var rede = 0; rede < 400; rede=rede+20) {
    line(200, rede, 200, rede+10);
  }
}
function Reiniciar() {
  modoDoJogo = "inicio";
  bola.x=200;
  bola.y=200;
  bola.velocityY = 0;
  bola.velocityX = 0;
}
function Velocidadedabola() {
  bola.velocityX=5;
  bola.velocityY=5;
}
