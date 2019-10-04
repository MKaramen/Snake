class Fruit {
    constructor() {
        this.x = Math.floor((Math.random() * 20)) * 20;
        this.y = Math.floor((Math.random() * 20)) * 20;
    }

    generate() {
        noStroke();
        fill(255, 0, 100);

        if (this.x === 0) this.x += cell;
        if (this.y === 0) this.y += cell;

        if (this.x === 20) this.x -= cell;
        if (this.y === 20) this.y -= cell;


        rect(this.x, this.y, cell, cell);
    }
}