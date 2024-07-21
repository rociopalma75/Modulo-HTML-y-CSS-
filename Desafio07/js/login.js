document.addEventListener("DOMContentLoaded",() =>{
    form = document.getElementById("form");
    let titulo = document.querySelector("h1");
    
    let bandera = 0; //Bandera para permitir ingreso o no del form    
    let edad = parseInt(prompt("Ingrese su edad"));

    //EJERCICIO 1
    if(edad >= 18){
        bandera = 1;
        titulo.textContent = "Bienvenido";
    }else{
        titulo.textContent = "No puede ingresar";
    }  

    titulo.style.textAlign = "center";

    //EJERCICIO 2
    if(bandera){
        form.style.visibility = "visible";    
    }else{
        form.style.visibility ="hidden";
    }
})




//Validaciones del Ejercicio 2
document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault();

    const form = document.getElementById("form");
    const usuario = document.getElementById("usuario").value.trim();
    const clave = document.getElementById("clave").value.trim();
    let mensajeForm = document.getElementById("mensaje-form");

    //Validar que ingrese tanto usuario como clave
    if(!usuario || !clave){
        alert("¡Falta ingresar usuario y/o clave!");
        form.reset();
        return;
    }

    //Validar credenciales
    if(usuario === "admin" && clave === "1234"){
        mensajeForm.textContent = "Ingreso exitoso";
        mensajeForm.style.color = "green";
    }else{
        mensajeForm.textContent = "Ingreso incorrecto. Usuario y/o clave incorrecta";
        mensajeForm.style.color = "red";
        form.reset();
    }
})

