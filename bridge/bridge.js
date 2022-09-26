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

let redFly = new RedFly();
let redFlyImage = new Image();

redFlyImage.src = 'avion.png';
redFly.setImage(redFlyImage);
redFlyImage.onload = function () {
    redFly.setX(50);
    redFly.setY(250);
};

let redBullet = null;
let redBulletImage = null;
function initRedBulletPosition(fly) {
    redBullet.setX(fly.getX() + fly.getImage().width/2 - redBullet.getImage().width/2);
    redBullet.setY(fly.getY());
}

function createRedBullet(fly) {
    redBulletImage = new Image();
    redBulletImage.src = 'avion.png';
    redBullet = new RedBullet();
    redBullet.setImage(redBulletImage);
    redBulletImage.onload = function () {
        initRedBulletPosition(fly);
    };
    fly.loadBullet(redBullet);
}

let blueFly = new BlueFly();
let blueFlyImage = new Image();
blueFlyImage.src = 'avion.png';
blueFly.setImage(blueFlyImage);
blueFlyImage.onload = function () {
    blueFly.setX(200);
    blueFly.setY(250);
}

let laserBullet = null;
let laserBulletImage = null;

function initLaserBulletPosition(fly) {
    laserBullet.setX(fly.getX() + fly.getImage().width/2 - laserBullet.getImage().width/2);
    laserBullet.setY(fly.getY());
}

function createLaserBullet(fly) {
    laserBulletImage = new Image();
    laserBulletImage.src = 'avion.png';
    laserBullet = new LaserBullet();
    laserBullet.setImage(laserBulletImage);
    laserBulletImage.onload = function () {
        initLaserBulletPosition(fly);
    };
    fly.loadBullet(laserBullet);
}
createRedBullet(blueFly);
createLaserBullet(redFly);

function redraw (context) {
    context.fillRect(0,0, canvasWidth, canvasHeight);
    redFly.draw(context);
    blueFly.draw(context);

    if (redBullet.getY() <= 0) {
        initRedBulletPosition(blueFly);
    }
    if (laserBullet.getY() <= 0) {
        initLaserBulletPosition(redFly);
    }
}
setInterval(
    function () {
        redraw(context);
    },
    200
)