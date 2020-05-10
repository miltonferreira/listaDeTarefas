let data = [{
    id: 1,
    title: "Estudar HTML"
},{
    id: 2,
    title: "Estudar CSS"
},{
    id: 3,
    title: "Estudar JavaScript"
},{
    id: 4,
    title: "Estudar PHP"
},{
    id: 5,
    title: "Estudar Java"
},{
    id: 6,
    title: "Estudar C#"
}];

function renderTodo(){

    document.querySelector('.todo').innerHTML = ''; //limpa a lista para não repetir quando add nova tarefa

    data.forEach(task => {

        let li = document.createElement('li');  // cria um li com a info

        li.innerHTML = `
            <input type="checkbox" id="task-${task.id}">
            <label for="task-${task.id}">${task.title}</label>
            <button type="button">x</button>
        `;

        li.querySelector('input').addEventListener("change", e => {

            if(e.target.checked){               // se tiver marcado
                li.classList.add('complete');   // add a classe
            } else {
                li.classList.remove('complete');   // remove a classe
            }

        });

        li.querySelector('button').addEventListener('click', e => {

            // console.dir(e.target.parentNode.querySelector('input').id.split('-')[1]);
            let button = e.target;
            let li = button.parentNode;
            let input = li.querySelector('input');
            let id = input.id;
            let idArray = id.split('-');
            let todoId = idArray[1];

            let title = li.querySelector('label').innerText;    //innerText só retorna texto sem as

            if(confirm(`Deseja excluir a tarefa "${title}?"`)){

                // filtra o elemento da array que foi clicado para excluir e devolve para o array data
                data = data.filter(task => task.id !== parseInt(todoId));

                renderTodo();   //chama novamente função atualizada com o novo valor
            }
        });

        document.querySelector('.todo').append(li); //adiciona no arquivo html

    });
}

// captura evento quando apertar o ENTER
document.querySelector('#new-task').addEventListener('keyup', e => {
    
    if(e.key === 'Enter'){

        data.push({
            id: data.length+1,
            title: e.target.value
        });

        e.target.value = "";

        renderTodo();   //chama novamente função atualizada com o novo valor

    }
    
});

renderTodo();   //chama o metodo para mostrar na tela