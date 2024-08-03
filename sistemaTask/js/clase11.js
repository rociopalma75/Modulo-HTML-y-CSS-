const listTask = document.getElementById('list-task');
const txtTask = document.getElementById('titulo');
const seccionAdvertencia = document.querySelector('.seccionAdvertencia');

//Agregar una tarea
document.getElementById('btn-add').addEventListener('click', ()=>{
    if(txtTask.value.trim() === ''){
        alert('Ingrese una tarea');
    }else{
        let itemList = document.createElement('li');
        itemList.innerHTML = `${txtTask.value.trim()} <span><img src="./imgs/icono-cross.png" alt="eliminar" class="iconos"></span>`;
        listTask.appendChild(itemList);
    }

    txtTask.value = '';
})

//Cambiar a checked y Eliminar tarea
listTask.addEventListener("click", function(e){
    console.log(e);
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
    }else if(e.target.tagName === 'IMG'){
        e.target.parentElement.parentElement.remove(); //remueve el objetivo del padre
    }
})


