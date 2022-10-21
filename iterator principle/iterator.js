class Iterator {
    constructor(list) {
        this.index = 0;
        this.list = list;
    }

    hasNext() {
        return this.index < this.list.length;
    }

    next() {
        let element = null;
        if (this.index < this.list.length) {
            element = this.list[this.index];
            this.index = this.index + 1;
        }
        return element;
    }
}


class List {
    constructor() {
        this.size = 0;
        this.element = new Array();
    }

    add(element) {
        this.element.push(element);
        this.size = this.size + 1;
    }

    get(index) {
        return this.element[index];
    }
    size() {
        return this.size;
    }
    iterator() {
        return new Iterator(this.element);
    }
}

let list = new List();
list.add('Barkeley University');
list.add('Market Street');
list.add('Polo Alto');
list.add('Cuptino');

let iterator = list.iterator();

while(iterator.hasNext()) {
    obj = iterator.next();
    document.write(obj + '->');
}