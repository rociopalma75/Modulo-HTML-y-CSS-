const listTask = document.getElementById('list-task');
const txtTask = document.getElementById('titulo');
const seccionAdvertencia = document.querySelector('.seccionAdvertencia');

//Agregar una tarea
document.getElementById('btn-add').addEventListener('click', ()=>{
    if(txtTask.value === ''){
        alert('Ingrese una tarea');
    }else{
        let itemList = document.createElement('li');
        itemList.innerHTML = txtTask.value;
        listTask.appendChild(itemList);
    }

    txtTask.value = '';
})

//Cambiar a checked 
listTask.addEventListener("click", function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove(); //remueve el objetivo del padre
    }
})

