
class MenuItem {
    constructor(name) {
        this.name = name;
        this.childMenuItems = new Array();
    }
    getName () {
        return this.name;
    }
    setName (name) {
        this.name = name;
    }
    getChildMenuItems () {
        return this.childMenuItems;
    }
    add(menuItem) {
        this.childMenuItems.push(menuItem);
    }
}

let root = new MenuItem('');

let lifeBook = new MenuItem('Life Book');

root.add(lifeBook);

let childMenu01_1 = new MenuItem('Better Mind Better Life');
let childMenu01_2 = new MenuItem('Happy Strong Family');
let childMenu01_3 = new MenuItem('Life Not Limited');
let childMenu01_4 = new MenuItem('Love Forever');

lifeBook.add(childMenu01_1);
lifeBook.add(childMenu01_2);
lifeBook.add(childMenu01_3);
lifeBook.add(childMenu01_4);

let programmingBook = new MenuItem('Programming Book');

root.add(programmingBook);

let childMenu02_1 = new MenuItem('Easy Learning HTML CSS');
let childMenu02_2 = new MenuItem('Easy Learning Java');
let childMenu02_3 = new MenuItem('Easy Learning Python 3');
let childMenu02_4 = new MenuItem('Easy Learning Javascript');

programmingBook.add(childMenu02_1);
programmingBook.add(childMenu02_2);
programmingBook.add(childMenu02_3);
programmingBook.add(childMenu02_4);

function menuShowHidden (param1, param2) {
    let menuItem = document.getElementById(param1);
    let childMenu = document.getElementById(param2);

    menuItem.onmouseover = function () {
        childMenu.style.display = 'block';
    }
    menuItem.onmouseout = function () {
        childMenu.style.display = 'none';
    }
}

function createMenu () {
    // Combine the menu array with tags <ul> and <li> into the html structure
    let menuHTML = '<ul>';
    for (let i = 0; i < root.getChildMenuItems().length; i++ ) {
        let menuItem = root.getChildMenuItems()[i];

        let menuItemId = `menuItem0${i}`;
        let childItemId = `childMenu0${i}`;
        menuHTML += `<li id='${menuItemId}'>`;
        menuHTML += `<a href='#'>${menuItem.getName()}</a>`
        menuHTML += `<ul id='${childItemId}'>`;
        for (let j = 0; j < menuItem.getChildMenuItems().length; j++) {
            let childMenu = menuItem.getChildMenuItems()[j];
            
            menuHTML += `<li><a href='#'>${childMenu.getName()}</a></li>`
        }
        menuHTML += `</ul>`;
        menuHTML += `</li>`;
    }
    menuHTML += `</ul>`;
    document.getElementById('menu').innerHTML = menuHTML;
    for (let i = 0; i < root.getChildMenuItems().length; i++ ) {
        // let menuItem = root.getChildMenuItems()[i];

        let menuItemId = `menuItem0${i}`;
        let childItemId = `childMenu0${i}`;
        menuShowHidden(menuItemId, childItemId);
    }
}
window.onload = function () {
    createMenu();
}