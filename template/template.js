class Sprite {
    constructor () {
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        this.image = null;
    }
    draw (context) {
        if (this.x && this.y && this.width && this.height && this.image) {
            context.drawImage(this.image, this.x, this.y, this.width, this.height);
            return
        }
        alert(`Missing data in ${this.constructor.name} class. It cannot be drawn`)
    }
    getX () {
        return this.x;
    }
    setX (x) {
        this.x = x;
    }
    getY () {
        return this.y;
    }
    setY (y) {
        this.y = y;
    }
    getWidth () {
        return this.width;
    }
    setWidth (width) {
        this.width = width;
    }
    getHeight () {
        return this.height;
    }
    setHeight (height) {
        this.height = height;
    }
    getImage () {
        return this.image;
    }
    setImage (image) {
        this.image = image;
    }
}

class MyPlane extends Sprite {

}
class EnemyPlane extends Sprite {

}
window.onload = function () {
    let myCanvas = document.getElementById('myCanvas');
    let context = myCanvas.getContext('2d');
    const myPlane = new MyPlane();
    myPlane.setX(110);
    myPlane.setY(250);
    myPlane.setWidth(20);
    // myPlane.setHeight(20);

    let myImage = new Image();
    myImage.src = 'https://freesvg.org/img/plane-red.png';
    myPlane.setImage(myImage);
    myImage.onload = function () {
        myPlane.draw(context);
    }

    const enemyPlane = new EnemyPlane();
    enemyPlane.setX(110);
    enemyPlane.setY(50);
    enemyPlane.setWidth(35);
    // enemyPlane.setHeight(35);
    
    let enemyImage = new Image();
    enemyImage.src = 'https://freesvg.org/img/plane-red.png';
    enemyPlane.setImage(enemyImage);
    enemyImage.onload = function () {
        enemyPlane.draw(context);
    }
}