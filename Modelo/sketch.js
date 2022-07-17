var path,boy;
var leftBoundary,rightBoundary;
var pathImg,boyImg;


function preload(){
    pathImg = loadImage("assets/path.png");
    boyImg = loadAnimation("assets/Runner-1.png","assets/Runner-2.png");
}

function setup(){
    createCanvas(400,400);

    // Crie aqui o código para mover o fundo



    // Crie aqui o código para fazer o menino que corre



    // Criando o boundary (limite) esquerdo
    leftBoundary = createSprite(0,0,100,800);
    leftBoundary.visible = false;


    // Crie aqui o boundary (limite) direito

}


function draw() {
    background(0);
    path.velocityY = 4;

    // Menino se movendo no eixo X com o mouse
    
    
    edges = createEdgeSprites();
    boy.collide(edges);

    // Crie aqui o código para o menino colidir com os limites


    
    //Crie aqui o código para fazer o fundo reiniciar
    



    drawSprites();

}




