class Server {
    constructor(mediator) {
        this.mediator = mediator;
    }
    getMediator() {
        return this.mediator;
    }
}

class ServerA extends Server {
    constructor(mediator) {
        super(mediator);
    }
    sendMessage(message) {
        this.message = message;
        this.getMediator().changed(this);
    }
    receiveMessage(message) {
        if ('ServerB_Port_201' === message) {
            document.write(`ServerA receive message: ${message} <br>`);
            document.write(`ServerA disconnect with ${message} <br>`);
        } else if ('ServerB_Port_200' === message) {
            document.write(`ServerA receive message: ${message} <br>`);
            document.write(`ServerA connect with ${message} successfully <br>`)
        }
    }
    getMessage() {
        return this.message;
    }
}

class ServerB extends Server {
    constructor(mediator) {
        super(mediator);
    }
    sendMessage(message) {
        this.message = message;
        this.getMediator().changed(this);
    }
    receiveMessage(message) {
        if ('ServerA_Port_201' === message) {
            document.write(`ServerB receive message: ${message} <br>`);
            document.write(`ServerB disconnect with ${message} <br>`);
        } else if('ServerA_Port_200' === message) {
            document.write(`ServerB receive message: ${message} <br>`);
            document.write(`ServerB connect with ${message} successfully <br>`);
        }
    }
    getMessage() {
        return this.message;
    }
}

class Mediator {
    changed(server) {}
}

class SwitchMediator extends Mediator {
    setServerA(serverA) {
        this.serverA = new ServerA();
    }
    setServerB(serverB) {
        this.serverB = serverB;
    }

    changed(server) {
        if (server instanceof ServerA) {
            this.serverB.receiveMessage(server.getMessage());
        } else if (server instanceof ServerB) {
            this.serverA.receiveMessage(server.getMessage());
        }
    }
}


let mediator = new SwitchMediator();
let serverA = new ServerA(mediator);
let serverB = new ServerB(mediator);

mediator.setServerA(serverA);
mediator.setServerB(serverB);

serverA.sendMessage('ServerA_Port_201');
document.write('------------------------<br>');
serverA.sendMessage('ServerA_Port_200');