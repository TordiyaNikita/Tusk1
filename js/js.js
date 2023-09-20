let select = document.getElementById('create')
let form = document.getElementById('main_form')

let autoIncrement = 1;
let buttonId =1;
let textId =1;
let textId2 =1;

select.addEventListener('change', (e) => {
    e.defaultPrevented;

    let value = e.target.value;

    if (value == 'text') {
        form.insertAdjacentHTML('beforeend', `
        <div id="form_block${autoIncrement}">
            <p>${autoIncrement++}</p>
            <input type="text" id="text${textId++}">
            <button id="button_text${buttonId++}"  onclick="addText(document.getElementById('text${textId2++}').value)">Добавить</button>
        `)
    }

    else if (value == 'table') {

    }

    else {
        alert('ERROR: 403');
    }

    select.value = 'vibor';
    console.log(value);
})

function addText(value_text) {
    console.log(value_text);
}