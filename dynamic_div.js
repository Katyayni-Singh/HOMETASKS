document.getElementById("insertButton").addEventListener('click', function() {

    let firstDiv = document.getElementById("div1");
    console.log(firstDiv);
    firstDiv.insertAdjacentHTML('afterend', '<div class="insertDiv">Div 2</div>');
    let button = document.getElementById("insertButton");

});

function generateDynamicDivs() {

    let row = document.getElementById('row').value;
    let col = document.getElementById('col').value;
    createTable(row, col);
    return false;

}

function createTable(row, col) {

    let tableDiv = document.getElementById('tableDiv');
    tbl = document.createElement('table');

    let margin = 25;

    tbl.style.width = '400px';
    tbl.style.marginLeft = margin + '%';
    tbl.style.height = '300px';


    let divIndex = 1;
    for (let i = 0; i < row; i++) {
        let tr = tbl.insertRow();
        for (let j = 0; j < col; j++) {

            let td = tr.insertCell();
            divChild = document.createElement('div');
            divChild.className = 'child';

            divChild.id = divIndex++;
            td.appendChild(divChild);
        }
    }

    tableDiv.insertAdjacentElement('beforeend', tbl);


}

function changeColor() {
    let rowId = document.getElementById('rowID').value;
    let colId = document.getElementById('colID').value;

    var row = document.getElementById('row').value;
    var col = document.getElementById('col').value;

    if (rowId > row || rowId < 0 || colId > col || colId < 0) {
        window.alert("You entered an invalid row and column number");
    }

    let color = document.getElementById('colorName').value;

    let divIndex = col * (Number(rowId) - 1) + Number(colId);

    document.getElementById(divIndex).style.backgroundColor = color;

    return false;

}
