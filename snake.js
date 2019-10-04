class Snake {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.speedX = cell;
        this.speedY = 0;
    }

    move() {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    display() {
        fill(255);
        rect(this.x, this.y, cell, cell);
    }

    keyPressed() {
        switch (keyCode) {
            case UP_ARROW:
                if (this.speedY == 0) {
                    this.speedY = -cell;
                    this.speedX = 0;
                }
                break;
            case DOWN_ARROW:
                if (this.speedY == 0) {
                    this.speedY = cell;
                    this.speedX = 0;
                }
                break;
            case LEFT_ARROW:
                if (this.speedX == 0) {
                    this.speedY = 0;
                    this.speedX = -cell;
                }
                break;

            case RIGHT_ARROW:
                if (this.speedX == 0) {
                    this.speedY = 0;
                    this.speedX = cell;
                }
                break;

        }
    }

    checkIfDead() {
        if (this.x == 0 - cell || this.x == width + cell || this.y == height + cell || this.y == 0 - cell) {
            inGame = false
        }
    }

    eat() {
        console.log("yes");
    }


}