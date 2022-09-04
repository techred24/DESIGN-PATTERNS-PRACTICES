class Shape {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }
    draw (context) {}
}
class Rectangle extends Shape {
    constructor (x, y, width, height) {
        super (x, y);
        this.width = width;
        this.height = height;
    }
    draw (context) {
        context.fillStyle = '#ff0000';
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}

class Square extends Shape {
    constructor (x, y, length) {
        super (x, y);
        this.length = length;
    }
    draw (context) {
        context.fillStyle = '#00ff00';
        context.fillRect(this.x, this.y, this.length, this.length);
    }
}

class Round extends Shape {
    constructor (x, y, r) {
        super (x, y);
        this.r = r;
    }
    draw (context) {
        context.fillStyle = '#0000ff';
        context.beginPath();
        context.arc(this.x, this.y, this.r, 0, 2*Math.PI);
        context.fill();
    }
}

class ShapeFactory {
    static create (type) {
        let shape = null;
        if (type === 'Rectangle') {
            shape = new Rectangle(10, 10, 80, 50);
        }
        if (type === 'Square') {
            shape = new Square(100, 10, 50);
        }
        if (type === 'Round') {
            shape = new Round(190, 35, 25);
        }
        return shape;
    }
}

function doCreate (obj) {
    let shape = ShapeFactory.create(obj.value);

    let myCanvas = document.getElementById('myCanvas');
    let context = myCanvas.getContext('2d');
    shape.draw(context);
}