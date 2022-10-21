class Flow {
    action() {}
}

class ViewFlow extends Flow {
    constructor() {
        super();
    }
    action() {
        return '';
    }
}

class EditFlow extends Flow {
    constructor() {
        super();
    }

    action() {
        return "<input type='button' value='Update' />"
    }
}

class VerifyFlow extends Flow {
    constructor() {
        super();
    }

    action() {
        return "<input type='button' value='Update' /> <input type='button' value='Delete' />"
    }
}

class Context {
    constructor() {
        this.flow = null;
    }
    setFlow(flow) {
        this.flow = flow;
    }

    process() {
        return this.flow.action();
    }
}

let newsArray = [
    {'title':'Happy Labor Day', 'date':'05/01/2019','state':'view'},
    {'title':'New book has been released', 'date':'07/07/2019','state':'edit'},
    {'title':'Merry Christmas', 'date':'12/25/2019','state':'verify'}
];

newsArray.forEach((item) => {
    let news_tr = news_table.insertRow();
    let title = news_tr.insertCell();
    let date = news_tr.insertCell();
    let state = news_tr.insertCell();
    let action = news_tr.insertCell();

    title.innerHTML = item.title;
    date.innerHTML = item.date;
    state.innerHTML = item.state;

    let context = new Context();
    if (item.state === 'view') {
        context.setFlow(new ViewFlow());
    } else if (item.state === 'edit') {
        context.setFlow(new EditFlow());
    } else if (item.state === 'verify') {
        context.setFlow(new VerifyFlow());
    }

    action.innerHTML = context.process();
});