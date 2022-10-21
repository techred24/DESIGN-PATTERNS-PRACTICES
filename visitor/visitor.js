function allowDrop(event) {
    event.preventDefault();
}
function drag(event) {
    event.dataTransfer.setData('visitor_id',event.target.id);
}
function drop(event) {
    event.preventDefault();
    let visitor_id = event.dataTransfer.getData('visitor_id');
    event.target.appendChild(document.getElementById(visitor_id));
}