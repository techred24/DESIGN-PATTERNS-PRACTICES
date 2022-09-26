class Sprite {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.image = null;
    }
    draw (context) {
        context.drawImage(this.image, this.x, this.y, 50, 50);
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

class Plane extends Sprite {

}
class Bullet extends Sprite {
    draw(context) {
        this.move(0, -20);
        context.drawImage(this.image, this.x, this.y, 50, 50);
    }
}
class BulletDecorator {
    constructor(bullet) {
        this.bullet = bullet;
        this.x = 0;
        this.y = 0;
        this.image = null;
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
    draw(context) {
        this.bullet.draw(context);
        this.move(0, 20);
        context.drawImage(this.image, this.x, this.y, 50, 50);
    }
}
let myCanvas = document.getElementById("myCanvas");
let context = myCanvas.getContext("2d");

let canvasWidth = 250;
let canvasHeight = 300;

let bulletType = 1;

let plane = new Plane();
let planeImage = new Image();
planeImage.src = 'avion.png';
plane.setImage(planeImage);
planeImage.onload = function () {
    plane.setX(110);
    plane.setY(150);
    plane.draw(context);
};

let bullet = null;
let bulletImage = null;
function initBulletPosition() {
    bullet.setX(plane.getX() + plane.getImage().width/2 - bullet.getImage().width/2);
    bullet.setY(plane.getY());
}

function createBullet() {
    bulletImage = new Image();
    bulletImage.src = 'bullet.png';
    bullet = new Bullet();
    bullet.setImage(bulletImage);
    bulletImage.onload = function () {
        initBulletPosition();
    };
}
createBullet();

let bulletDecorator = null;
let bulletDecoratorImage = null;

function initDecoratorBulletPosition() {
    bulletDecorator.setX(plane.getX() + plane.getImage().width/2 - bulletDecorator.getImage().width/2);
    bulletDecorator.setY(plane.getY());
}

function createDecoratorBullet() {
    bulletDecoratorImage = new Image();
    bulletDecoratorImage.src = 'bullet2.png';
    bulletDecorator = new BulletDecorator(bullet);
    bulletDecorator.setImage(bulletDecoratorImage);
    bulletDecoratorImage.onload = function () {
        initDecoratorBulletPosition();
    };
}

createDecoratorBullet();

function doSelectBullet(obj) {
    bulletType = obj.value;
    if (bulletType == 1) {
        createBullet();
    } else if (bulletType == 2) {
        createDecoratorBullet();
    }
}

function redraw(context) {
    context.fillRect(0, 0, canvasWidth, canvasHeight);
    plane.draw(context);
    if (bulletType == 1) {
        if (bullet.getY() <= 0) {
            initBulletPosition();
        }
        bullet.draw(context);
    } else if (bulletType == 2) {
        if (bullet.getY() <= 0) {
            initBulletPosition();
        }
        if (bulletDecorator.getY() >= canvasHeight) {
            initDecoratorBulletPosition();
        }
        bulletDecorator.draw(context);
    }
}

setInterval(() => {
    redraw(context);
}, 200);