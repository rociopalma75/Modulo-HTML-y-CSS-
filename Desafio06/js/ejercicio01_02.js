//EJERCICIO 1
document.getElementById('btn-ejercicio1').addEventListener('click', function(){
    
    let costosFijos = parseFloat(prompt("Ingrese el valor de costos fijos"));
    let precioVenta = parseFloat(prompt("Ingrese el valor de precio de venta"));
    let costosVariables = parseFloat(prompt("Ingrese el valor de costos variable")); 

    let cv = (costosFijos) / (precioVenta - costosVariables);

    let spanCV = document.getElementById('rdoPuntoEquilibrio');

    spanCV.textContent = cv;

    //Estilos para la respuesta del ejercicio 1
    spanCV.style.backgroundColor = 'black';
    spanCV.style.padding = '10px';
    spanCV.style.borderRadius = '5px';
    spanCV.style.color = 'white';
})

//EJERCICIO 2
document.getElementById('btn-ejercicio02').addEventListener('click', function(){
    let tbody = document.getElementById("tbody-ejercicio2");


    let ingresoTotal = parseFloat(prompt('Ingrese el ingreso total'));
    
    let tipos = [
        {descripcion: "Gastos necesarios", porcentaje: 0.50},
        {descripcion: "Gastos opcionales", porcentaje: 0.30},
        {descripcion: "Ahorro e Inversión", porcentaje: 0.20}
    ];
    
    tipos.forEach(tipo =>{
        let row = document.createElement('tr');
        row.innerHTML = `<td>${tipo.descripcion}</td><td>${ingresoTotal * tipo.porcentaje}</td>`;

        tbody.appendChild(row);
    })

} )
