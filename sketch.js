let cell = 20;
let snake = new Snake;
let fruit = new Fruit;
let inGame = true;
let score = 0;
const snakes = [];


function setup() {
  createCanvas(400, 400);
  frameRate(10);
  snakes.push(snake);
}

console.log(score);

function draw() {
  background(150);
  fruit.generate();

  if (inGame == true) {
    if (snake.x === fruit.x && snake.y == fruit.y) {
      snake.eat();
      fruit.newPosition();
      fruit.generate();
      score += 1;     
      console.clear()
      console.log(score);  
      snakes.push(new Snake)
      console.log(snakes);
           
    }

    for (let i = snakes.length -1; i > 0; i--) {
      console.log(snakes[i-1].x, snakes[i-1].y)
      snakes[i].newPosition(snakes[i-1].x, snakes[i-1].y);
      snakes[i].display()
    }
    
    snake.move();
    snake.display();
    snake.keyPressed();
    snake.checkIfDead();

    snakes.forEach((s, i) => {
      if (i > 0) {
        if (s.x === snake.x && s.y === snake.y) {
          inGame = !inGame;
        }
      }
    })
  }

}