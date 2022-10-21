class Observable {
    constructor() {
        this.obseverList = [];
    }
    notifyObservers() {
        this.obseverList.forEach((observer) => {
            observer.draw(context);
        });
    }
    addObserver(observer) {
        this.obseverList.push(observer);
    }
}
class Color extends Observable {
    constructor(rgb) {
        super();
        this.rgb = rgb;
    }
    getRGB() {
        return this.rgb;
    }
    setRGB(rgb) {
        this.rgb = rgb;
        this.notifyObservers();
    }
}
class Observer {
    constructor(observable) {
        this.observable = observable;
        this.observable.addObserver(this);
    }
    draw(context) {}
}

class Histogram extends Observer {
    constructor(x,y,width,height,observable) {
        super(observable);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw(context) {
        context.fillStyle = this.observable.getRGB();
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}

class Pie extends Observer {
    constructor(x,y,r,observable) {
        super(observable);
        this.x = x;
        this.y = y;
        this.r = r;
    }
    draw(context) {
        context.fillStyle = this.observable.getRGB();
        context.beginPath();
        context.arc(this.x,this.y,this.r,0,2*Math.PI);
        context.fill();
    }
}

const myCanvas = document.getElementById('myCanvas');
let context = myCanvas.getContext('2d');
let color = new Color('#000000');
let histogram = new Histogram(100,50,50,100,color);
histogram.draw(context);
let pie = new Pie(300,100,50,color);
pie.draw(context);
function doChangeColor(rgb) {
    color.setRGB(rgb);
}