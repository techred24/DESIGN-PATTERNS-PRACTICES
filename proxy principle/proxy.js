let Target = {
    doSomething: function() {
        document.write('Agency registration company');
    }
}

function Proxy() {
    this.call = function(target,method) {
        document.write('<br> before <br>');
        result = target[method]();
        document.write('<br> after <br>');
        return result;
    }
}

let proxy = new Proxy();
proxy.call(Target, 'doSomething');