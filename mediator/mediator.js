class User {
    constructor(name) {
        this.name = name;
        this.chatroom = null;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getChatroom() {
        return this.chatroom;
    }
    setChatroom(chatroom) {
        this.chatroom = chatroom;
    }
    send(message, to) {
        this.chatroom.send(message, this, to);
    }
    receive(message, from) {
        let element = document.createElement('div');
        element.innerHTML = from.getName() + ' to ' + this.getName() + ':' + message;
        document.getElementById('chatroom').appendChild(element);
    }
}

class Chatroom {
    constructor() {
        this.userMap = {};
    }
    register(user) {
        this.userMap[user.getName()] = user;
        user.setChatroom(this);
    }
    getUser(name) {
        return this.userMap[name];
    }
    send(message, from, to) {
        if (to) {
            to.receive(message, from);
        } else {
            for (let key in this.userMap) {
                if (this.userMap[key] !== from) {
                    this.userMap[key].receive(message, from);
                }
            }
        }
    }
}

let david = new User('David');
let grace = new User('Grace');
let renia = new User('Renia');

let chatroom = new Chatroom();
chatroom.register(david);
chatroom.register(grace);
chatroom.register(renia);

david.send('Have a nice day!');
grace.send('Good morning!', renia);

document.getElementById('send').addEventListener('click',sendCommand);

function sendCommand(event) {
    let fromName = document.getElementById('fromUser').options[document.getElementById('fromUser').selectedIndex].value;
    let fromUser = chatroom.getUser(fromName);
    let toName = document.getElementById('toUser').options[document.getElementById('toUser').selectedIndex].value;
    let toUser = chatroom.getUser(toName);

    if (toName === '') {
        fromUser.send(document.getElementById('message').value);
    } else {
        fromUser.send(document.getElementById('message').value, toUser);
    }
}