class Adapter {
    createPopupMenu () {}
}
class ListAdapter extends Adapter {
    constructor (listArray) {
        super (listArray);
        this.listArray = listArray;
    }
    createPopupMenu () {
        let viewData = '<ul>';
        for (let i = 0; i < this.listArray.length; i++) {
            let data = this.listArray[i];
            viewData += `<li>${data}</li>`;
        }
        viewData += '</ ul>';
        return viewData;
    }
}
class ListImageAdapter extends Adapter {
    constructor (listArray) {
        super (listArray);
        this.listArray = listArray;
    }
    createPopupMenu () {
        let viewData = '<ul>';
        for (let i = 0; i < this.listArray.length; i++) {
            let data = this.listArray[i];
            viewData += `<li><img src='https://c.wallhere.com/photos/72/fc/Formula_1_Mercedes_Benz_Mercedes_F1_Lewis_Hamilton_Mercedes_AMG_Petronas_IWC-1947359.jpg!d'/>${data}</li>`;
        }
        viewData += '</ ul>';
        return viewData;
    }
}
class ListView {
    static popupMenu (adapter) {
        let menuDiv = document.createElement('div');
        menuDiv.setAttribute('id', 'popup_menu');
        menuDiv.innerHTML = adapter.createPopupMenu();
        document.body.appendChild(menuDiv);
    }
}

let listArray = [
    'Happy Strong Family',
    'Go Straight to the benchmark',
    'Love can beat everything',
    'Easy Learning Java',
    'Easy Learning Python 3',
    'Easy Learning Design Patterns'
];

function popupListMenu () {
    let adapter = new ListAdapter(listArray);
    ListView.popupMenu(adapter);
}

function popupListImageMenu () {
    let adapter = new ListImageAdapter(listArray);
    ListView.popupMenu(adapter);
}