let cell = 20;
let snake = new Snake();
let fruit = new Fruit();
inGame = true;


function setup() {
  createCanvas(400, 400);
  frameRate(10);
}

function draw() {
  background(150);
  fruit.generate();
  if (inGame == true) {
    snake.display();
    snake.move();
    snake.keyPressed();
    snake.checkIfDead();
  }

  if (snake.x === fruit.x && snake.y == fruit.y) snake.eat()

}