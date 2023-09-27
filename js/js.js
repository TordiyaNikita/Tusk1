let select = document.getElementById('create')
let form = document.getElementById('main_form')
let output = document.getElementById('main_output')

let autoIncrement = 0;
let neAutoIncrement = 0;


select.addEventListener('change', (e) => {
    e.defaultPrevented;

    let value = e.target.value;

    autoIncrement++
    if (value == 'text') {
        form.insertAdjacentHTML('beforeend', `
        <div id="form_block_${autoIncrement}" class="form_block">
            <span>${autoIncrement} Text:</span>
            <input type="text" >
            <button onclick="addText(${autoIncrement})">Add</button>
        </div>
        `)
    } else if (value == 'table') {
        form.insertAdjacentHTML('beforeend', `
        <div id="form_block_${autoIncrement}" class="form_block">
            <span>${autoIncrement} Table:</span>
            <input type="text" >
            <button onclick="addTable(${autoIncrement}, ${neAutoIncrement})">Add</button>
        </div>
            `
        )
        neAutoIncrement++

    } else {
        alert('ERROR: 403');
    }
    

    select.value = 'vibor';
    console.log(value);
})



function addText(id) {
    const div = document.getElementById(`form_block_${id}`)
    console.log(div.children[1].value);
    let text = div.children[1].value
    div.children[2].classList.toggle('hidden')
    div.insertAdjacentHTML('beforeend', `
        <button id="change" onclick="changeText(${id})">Change</button>
        <button id="delete" onclick="deleteBlock(${id})">Delete</button>
    `);
    output.insertAdjacentHTML('beforeend', `<p id="text_${id}">${text}</p>`);
}

function addTable(id, tableId) {
    const div = document.getElementById(`form_block_${id}`)
    console.log(div.children[1].value);
    div.children[2].classList.toggle('hidden')
    let text = div.children[1].value
    output.insertAdjacentHTML('beforeend', `
        <table id="table_block_${tableId}">
            <thead>
                <td>${id}</td>
                <td id="title_${tableId}">${text}</td>
            </thead>
            <tbody id="table_body_${tableId}"></tbody>
        </table>
        `);
    console.log("from addtable func", id);
    div.insertAdjacentHTML('beforeend', `
        <button id="addLines" onclick="addLines(${id}, ${tableId})">Add lines</button>
        <button id="change" onclick="changeTable(${id}, ${tableId})">Change</button>
        <button id="delete" onclick="deleteTable(${id}, ${tableId})">Delete</button></br>
        `);
}

function addLines(id, tableId) {
    autoIncrement++;

    const div = document.getElementById(`form_block_${id}`);
    div.insertAdjacentHTML('beforeend', `
    <div id="form_table_${autoIncrement}">
        <span>${autoIncrement} Line:</span>
        <input type="text" >
        <button onclick="addLine(${autoIncrement}, ${tableId})">Add</button>
    </div>
    `)
}

function addLine(id, tableId) {
    const div = document.getElementById(`form_table_${id}`)
    let text = div.children[1].value
    console.log(div.children[1].value);
    console.log(id,autoIncrement,neAutoIncrement);
    const table = document.getElementById(`table_body_${tableId}`)
    console.log(table);
    div.children[2].classList.toggle('hidden')
    table.insertAdjacentHTML('beforeend', `
        <tr id="klocl_${id}">
            <td>${id}</td>
            <td id="title_${id}">${text}</td>
        </tr>
    `)
    div.insertAdjacentHTML('beforeend', `
        <button id="change" onclick="changeLine(${id})">Change</button>
        <button id="delete" onclick="deleteLine(${id})">Delete</button>
    `);
}

function changeText(id) {
    const div = document.getElementById(`form_block_${id}`)
    let newText = div.children[1].value
    const text = document.getElementById(`text_${id}`)
    text.innerHTML = newText
}
function changeTable(id,tableId) {
    const div = document.getElementById(`form_block_${id}`)
    let newText = div.children[1].value
    const text = document.getElementById(`title_${tableId}`)
    text.innerHTML = newText
}

function deleteBlock(id) {
    const div = document.getElementById(`form_block_${id}`)
    div.remove()
    const text = document.getElementById(`text_${id}`)
    text.remove()
    console.log(text);
    console.log(id);
}

function deleteTable(id, tableId) {
    const div = document.getElementById(`form_block_${id}`)
    div.remove()
    const text = document.getElementById(`table_block_${tableId}`)
    text.remove()
}

function changeLine(id){
    const div = document.getElementById(`form_table_${id}`)
    let newText = div.children[1].value
    const text = document.getElementById(`title_${id}`)
    text.innerHTML = newText
    console.log(text);
}

function deleteLine(id){
    const div = document.getElementById(`form_table_${id}`)
    div.remove()
    const text = document.getElementById(`klocl_${id}`)
    text.remove()
}