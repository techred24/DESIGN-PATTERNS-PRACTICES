class Button {
    constructor(name) {
        this.name = name;
        this.command = null;
    }
    addEventListener(command) {
        this.command = command;
    }
    onClick () {
        this.command();
    }
}
class Mouse {
    click (button) {
        button.onClick();
    }
}
let okCommand = function () {
    document.write('OK button is clicked <br>');
}
let cancelCommand = function () {
    document.write('Cancel button is clicked <br>');
}

let okButton = new Button('Ok');
okButton.addEventListener(okCommand);
let cancelButton = new Button('Cancel');
cancelButton.addEventListener(cancelCommand);

let mouse = new Mouse();
mouse.click(okButton);
mouse.click(cancelButton);