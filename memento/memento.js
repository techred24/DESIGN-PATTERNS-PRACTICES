class Memento {
    constructor(state) {
        this.state = state;
    }
    getState() {
        return this.state;
    }
    setState(state) {
        this.state = state;
    }
}

class Stack {
    constructor() {
        this.mementos = [];
        this.index = 0;
    }
    push(memento) {
        this.mementos.push(memento);
        this.index += 1;
    }
    forward() {
        let memento = this.mementos[this.index];
        if (this.index < this.mementos.length) {
            this.index += 1;
        }
        return memento;
    }
    back() {
        if (this.index > 0) {
            this.index -= 1;
        }
        let memento = this.mementos[this.index];
        return memento;
    }
}

class Originator {
    constructor() {
        this.state = '';
    }
    getState() {
        return this.state;
    }
    setState(state) {
        this.state = state;
    }

    createMemento() {
        return new Memento(this.state);
    }
    setMemento(memento) {
        this.state = memento.getState();
    }
    show() {
        document.write(this.state);
    }
}

document.getElementById('undo').addEventListener('click', undoCommand);
document.getElementById('redo').addEventListener('click',redoCommand);

let stack = new Stack();
let originator = new Originator();

function undoCommand(event) {
    if (stack.back() !== null) {
        document.getElementById('editor').innerHTML = stack.back().getState();
    }
}

function redoCommand(event) {
    if (stack.forward() !== null) {
        document.getElementById('editor').innerHTML = stack.forward().getState();
    }
}

document.getElementById('editor').onkeyup = function () {
    originator.setState(document.getElementById('editor').innerHTML);
    stack.push(originator.createMemento());
}