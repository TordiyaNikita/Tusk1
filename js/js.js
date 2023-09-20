let select = document.getElementById('create')
let form = document.getElementById('main_form')
let output = document.getElementById('main_output')

let autoIncrement = 0;


select.addEventListener('change', (e) => {
    e.defaultPrevented;

    let value = e.target.value;

    if (value == 'text') {
        autoIncrement++
        form.insertAdjacentHTML('beforeend', `
        <div id="form_block_${autoIncrement}" class="form_block">
            <span>${autoIncrement}</span>
            <input type="text" >
            <button onclick="addText(${autoIncrement})">Add</button>
        </div>
        `)
    }

    else if (value == 'table') {
        autoIncrement++
        form.insertAdjacentHTML('beforeend', `
        <div id="form_block_${autoIncrement}" class="form_block">
            <span>${autoIncrement}</span>
            <input type="text" >
            <button onclick="addTable(${autoIncrement})">Add</button>
        </div>
            `
        )
    }

    else {
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

function addTable(id) {
    autoIncrement++
    const div = document.getElementById(`form_block_${id}`)
    console.log(div.children[1].value);
    let text = div.children[1].value
    output.insertAdjacentHTML('beforeend', `
        <table id="table_block_${autoIncrement}">
            <tr>
                <th>${id}</th>
                <th id="title_${id}">${text}</th>
            </tr>
        </table>
        `);
    div.insertAdjacentHTML('beforeend', `
        <button id="change" onclick="changeTable(${id})">Change</button>
        <button id="delete" onclick="deleteTable(${id})">Delete</button></br>
        <div id="form_table_${autoIncrement}">
            <span>${autoIncrement}</span>
            <input type="text" >
            <button onclick="addLine(${autoIncrement})">Add</button>
        </div>
    `);
    
}
function addLine(id) {
    const div = document.getElementById(`form_table_${id}`)
    let text = div.children[1].value
    console.log(div.children[1].value);
    const table = document.getElementById(`table_block_${id}`)
    div.children[2].classList.toggle('hidden')
    table.insertAdjacentHTML('beforeend', `
        <tr>
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
function changeTable(id) {
    const div = document.getElementById(`form_block_${id}`)
    let newText = div.children[1].value
    const text = document.getElementById(`title_${id}`)
    text.innerHTML = newText
}

function deleteBlock(id) {
    const div = document.getElementById(`form_block_${id}`)
    div.remove()
    const text = document.getElementById(`text_${id}`)
    text.remove()
}

function deleteTable(id) {
    const div = document.getElementById(`form_block_${id}`)
    div.remove()
    const text = document.getElementById(`table_block_${id}`)
    text.remove()
}