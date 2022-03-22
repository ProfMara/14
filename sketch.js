var bola = {
    x: 20,
    y: 50,
    raio: 20,
    cor: "green"
};

function setup() {
    createCanvas(800, 400);
    console.log(bola);

}

function draw() {
    background("cyan");
    drawSprites();
    fill(bola.cor)
    ellipse(bola.x, bola.y, bola.raio);

}