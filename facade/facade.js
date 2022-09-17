class NumberUtil {
    isInteger(str) {
        let reg = /^(-|\+)?\d+$/;
        return (reg.test(str));
    }
    isUnsignInteger(str) {
        let reg = /^\d+$/;
        return (reg.test(str));
    }
}

class StringUtil {
    isCharNumber(str) {
        let reg = /^[0-9a-zA-Z]+$/;
        return (reg.test(str));
    }
    startWithChar(str) {
        let firstChar = str.substring(0,1);
        let reg = /^[a-zA-Z]+$/;
        return (reg.test(firstChar));
    }
    isLengthInRange(str, min, max) {
        if(str.length >= min && str.length <= max) {
            return true;
        } else {
            return false;
        }
    }
}

class Facade {
    constructor() {
        this.numberUtil = new NumberUtil();
        this.stringUtil = new StringUtil();
    }
    checkUsername(str) {
        if (this.stringUtil.isCharNumber(str) && this.stringUtil.startWithChar(str)) {
            return true;
        } else {
            return false;
        }
    }
    checkAge(str) {
        if (this.numberUtil.isUnsignInteger(str) && this.stringUtil.isLengthInRange(str, 1, 3)) {
            return true;
        } else {
            return false;
        }
    }
}

function doRegister() {
    let facade = new Facade();
    if (!facade.checkUsername(document.getElementById("username").value)) {
        document.getElementById("message").innerHTML = "username must be char, number and start with char!";
        return
    }
    if (!facade.checkAge(document.getElementById("age").value)) {
        document.getElementById("message").innerHTML = "age must be unsign integer and length between [1,3]!";
        return;
    }
    document.getElementById("message").innerHTML = "Register successfully!";
}