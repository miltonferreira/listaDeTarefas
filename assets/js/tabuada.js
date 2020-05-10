
function calculaTabuada() {

    let tabuada = document.querySelector('#tabuada tbody');

    let valorA = parseInt(document.querySelector('#valorA').value);

    tabuada.innerHTML = '';

    for (let  valorB = 0; valorB <= 10; valorB++) {

        let template = `
            <td>${valorA}</td>
            <td>X</td>
            <td>${valorB}</td>
            <td>=</td>
            <td>${valorA * valorB}</td>
        `;

        let tr = document.createElement('tr');

        tr.innerHTML = template;

        tabuada.append(tr);

    }

}

calculaTabuada();

document.querySelector('#valorA').addEventListener('change', calculaTabuada);