class PayStrategy {
    pay(price) {}
}

class MasterCard extends PayStrategy {
    pay(price) {
        document.getElementById('result').innerHTML = `Pay ${price} $ by MasterCard`;
    }
}
class VisaCard extends PayStrategy {
    pay(price) {
        document.getElementById('result').innerHTML = `Pay ${price} $ by VisaCard`;
    }
}
class Paypal extends PayStrategy {
    pay(price) {
        document.getElementById('result').innerHTML = `Pay ${price} $ by Paypal`;
    }
}
class PayManager {
    constructor(payStrategy) {
        this.payStrategy = payStrategy;
    }
    pay(price) {
        return this.payStrategy.pay(price);
    }
}

function doTestPay(obj) {
    if (obj.value === "MasterCard") {
        let payManager = new PayManager(new MasterCard());
        payManager.pay(100);
    }
    if (obj.value === "VisaCard") {
        let payManager = new PayManager(new VisaCard());
        payManager.pay(100);
    }
    if (obj.value === "Paypal") {
        let payManager = new PayManager(new Paypal());
        payManager.pay(100);
    }
}