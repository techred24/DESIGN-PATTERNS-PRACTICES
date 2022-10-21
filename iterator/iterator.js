let bookArray = [
    { 'title': 'Easy Learning Javascript', 'date': '09/09/2019' },
    { 'title': 'Easy Learning Python 3', 'date': '07/07/2019' },
    { 'title': 'Easy Learning Java', 'date': '06/06/2019' },
];

let book_table = document.getElementById('book_table');

bookArray.forEach((item) => {
    let book_tr = book_table.insertRow();
    let title = book_tr.insertCell();
    let date = book_tr.insertCell();

    title.innerHTML = item.title;
    date.innerHTML = item.date;
});