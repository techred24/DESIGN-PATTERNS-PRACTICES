class State {
    handle(flow) {}
}

class ApplyState extends State {
    handle(flow) {
        document.write('The current state is Apply. <br>');

        flow.setState(new VerifyState());
    }
}

class VerifyState extends State {
    handle(flow) {
        document.write('The current state is Verify. <br>');

        flow.setState(new ApproveState());
    }
}

class ApproveState extends State {
    handle(flow) {
        document.write('The current state is Approve <br>');

        flow.setState(new ApplyState());
    }
}

class Flow {
    constructor() {
        this.state = new ApplyState();
    }

    handle() {
        this.state.handle(this);
    }

    getState() {
        return this.state;
    }

    setState(state) {
        this.state = state;
    }
}

let flow = new Flow();
flow.handle();
flow.handle();
flow.handle();