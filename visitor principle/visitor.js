class Web {
    accept(visitor) {}
}

class EBusinessWeb extends Web {
    accept(visitor) {
        visitor.visit(this);
    }
}

class VideoWeb extends Web {
    accept(visitor) {
        visitor.visit(this);
    }
}

class Visitor {
    visit(web) {}
}

class Visitor1 extends Visitor {
    visit(web) {
        if (web instanceof EBusinessWeb) {
            document.write('I want to buy books <br>');
        } else if (web instanceof VideoWeb) {
            document.write('I want to watch a movie <br>');
        }
    }
}

class Visitor2 extends Visitor {
    visit(web) {
        if (web instanceof EBusinessWeb) {
            document.write('I want to write a review <br>');
        } else if (web instanceof VideoWeb) {
            document.write('I want to download a movie <br>');
        }
    }
}

class WebServer {
    elements = [];
    attach(element) {
        this.elements.push(element);
    }
    detach(element) {
        this.elements.remove(this.elements);
    }
    accept(visitor) {
        for (let i = 0; i < this.elements.length; i++) {
            let web = this.elements[i];
            web.accept(visitor);
        }
    }
}

let webServer = new WebServer();

webServer.attach(new EBusinessWeb());
webServer.attach(new VideoWeb());

let visitor1 = new Visitor1();
webServer.accept(visitor1);

document.write('------------------------------ <br>');

let visitor2 = new Visitor2();
webServer.accept(visitor2);