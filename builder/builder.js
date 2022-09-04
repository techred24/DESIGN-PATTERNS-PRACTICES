class Button {
    constructor (name, value) {
        this.name = name;
        this.value = value;
    }
    getName () {
        return this.name;
    }
    setName (name) {
        this.name = name;
    }
    getValue () {
        return this.value;
    }
    setValue (value) {
        this.value = value;
    }
}

class Dialog {
    constructor () {
        this.message = '';
        this.buttons = new Array();
    }
    getMessage () {
        return this.message;
    }
    setMessage (message) {
        this.message = message;
    }
    getButtons () {
        return this.buttons;
    }
    addButton (button) {
        this.buttons.push(button);
    }
    show () {
        let dialogDiv = document.createElement('div');
        dialogDiv.setAttribute('id', 'dialog');
        dialogDiv.innerHTML = this.getMessage();
        dialogDiv.innerHTML += '<br><br>';

        for (let i = 0; i < this.buttons.length; i++) {
            let button = this.buttons[i];
            dialogDiv.innerHTML += `<input type='button' name='${button.getName()}' value='${button.getValue()}'/>`
        }
        document.body.appendChild(dialogDiv);
    }
}

class Builder {
    constructor () {
        this.dialog = new Dialog();
    }
    setMessage (message) {
        this.dialog.setMessage(message);
    }
    addButton (button) {
        this.dialog.addButton(button);
    }
    create () {
        return this.dialog;
    }
}

function showMessageDialog () {
    let builder = new Builder();
    builder.setMessage('Have a nice day!');
    builder.addButton(new Button('close', 'Close'));
    let dialog = builder.create();
    dialog.show();
}
function showConfirmDialog () {
    let builder = new Builder();
    builder.setMessage('Do you want to delete?');
    builder.addButton(new Button('ok', 'Ok'));
    builder.addButton(new Button('close', 'Close'));
    let dialog = builder.create();
    dialog.show();
}