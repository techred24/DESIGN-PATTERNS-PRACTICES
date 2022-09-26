class Fly {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.image = null;
        this.bullet = null;
    }
    draw(context) {
        context.drawImage(this.image, this.x,this.y);
        this.bullet.draw(context);
    }
    loadBullet(bullet) {
        this.bullet = bullet;
    }
    move(x, y) {
        this.x += x;
        this.y += y;
    }
    getX() {
        return this.x;
    }
    setX(x) {
        this.x = x;
    }
    getY() {
        return this.y;
    }
    setY(y) {
        this.y = y;
    }
    getImage() {
        return this.image;
    }
    setImage(image) {
        this.image = image;
    }
}
class BlueFly extends Fly {

}
class RedFly extends Fly {

}
class Bullet {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.image = null;
    }
    draw(context) {
        context.drawImage(this.image, this.x, this.y);
    }
    move(x,y) {
        this.x += x;
        this.y += y;
    }
    getX() {
        return this.x;
    }
    setX(x) {
        this.x = x;
    }
    getY() {
        return this.y;
    }
    setY(y) {
        this.y = y;
    }
    getImage() {
        return this.image;
    }
    setImage(image) {
        this.image = image;
    }
}

class RedBullet extends Bullet {
    draw(context) {
        this.move(0,-20);
        context.drawImage(this.image,this.x,this.y);
    }
}
class LaserBullet extends Bullet {
    draw(context) {
        this.move(0,-20);
        context.drawImage(this.image,this.x,this.y);
    }
}
let myCanvas = document.getElementById('myCanvas');
let context = myCanvas.getContext('2d');

let canvasWidth = 300;
let canvasHeight = 300;

let redFlyBulletType = 1;
let blueFlyBulletType = 2;