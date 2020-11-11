//Lo que quiero hacer es tomar la información de las dos localidades con dos imputs, y cuando se haga click en el botón "Cotizar envío" suceda lo siguiente:
//Se ejecute la función donde el valor de la localidad de retiro se seguarde en la variable "localidadRetiro" y el valor de la localidad de entrega en "localidadEntrega". Con esto tengo las dos variables con valores y posteriormente se ejecuta la función que cotiza, llamada "cotizacionRapida"


var localidadesActuales = ["CABA", "Vicente Lopez", "San Isidro", "Tigre"]



var costo200Pesos = "El costo es de $200."
var costo260Pesos = "El costo es de $260."
var costo310Pesos = "El costo es de $310."
var costo340Pesos = "El costo es de $340."


function mismaLocalidad(){
    if ((localidadRetiro == "CABA") && (localidadEntrega == "CABA")) {
        alert (costo200Pesos)
    }   
    else if ((localidadRetiro == "Vicente Lopez") && (localidadEntrega == "Vicente Lopez")) {
        alert (costo200Pesos)
    }
    else if ((localidadRetiro == "San Isidro") && (localidadEntrega == "San Isidro")) {
        alert (costo200Pesos)
    }
    else if ((localidadRetiro == "Tigre") && (localidadEntrega == "Tigre")) {
        alert (costo200Pesos)
    }
    else alert("Todavía no llegamos a esa zona o estás escribiendo las localidades de forma incorrecta. El sistema solo acepta los lugares de la siguiente forma: 'CABA', 'Vicente Lopez', 'San Isidro', 'Tigre'.") 

}

function distintaLocalidad(){
    if ((localidadRetiro == "CABA") && (localidadEntrega == "Vicente Lopez")) {
        alert (costo260Pesos)
    }  
    else if ((localidadRetiro == "CABA") && (localidadEntrega == "San Isidro")) {
        alert (costo310Pesos)
    }  
    else if ((localidadRetiro == "CABA") && (localidadEntrega == "Tigre")) {
        alert (costo340Pesos)
    }  
    else if ((localidadRetiro == "Vicente Lopez") && (localidadEntrega == "CABA")) {
        alert (costo260Pesos)
    }  
    else if ((localidadRetiro == "Vicente Lopez") && (localidadEntrega == "San Isidro")) {
        alert (costo260Pesos)
    }  
    else if ((localidadRetiro == "Vicente Lopez") && (localidadEntrega == "Tigre")) {
        alert (costo310Pesos)
    }  
    else if ((localidadRetiro == "San Isidro") && (localidadEntrega == "CABA")) {
        alert (costo310Pesos)
    }  
    else if ((localidadRetiro == "San Isidro") && (localidadEntrega == "Vicente Lopez")) {
        alert (costo260Pesos)
    }  
    else if ((localidadRetiro == "San Isidro") && (localidadEntrega == "Tigre")) {
        alert (costo310Pesos)
    }  
    else if ((localidadRetiro == "Tigre") && (localidadEntrega == "CABA")) {
        alert (costo340Pesos)
    }  
    else if ((localidadRetiro == "Tigre") && (localidadEntrega == "Vicente Lopez")) {
        alert (costo310Pesos)
    }  
    else if ((localidadRetiro == "Tigre") && (localidadEntrega == "San Isidro")) {
        alert (costo340Pesos)
    }  

}


function cotizacionRapida (localidadRetiro, localidadEntrega) {
    if (localidadRetiro == localidadEntrega) {
        mismaLocalidad()
    }
    else {
        distintaLocalidad()
    }

}


function informacionYCotizar(){
    var localidadRetiro = document.getElementById("localidadUno").value
    var localidadEntrega = document.getElementById("localidadDos").value
    
    cotizacionRapida(localidadRetiro, localidadEntrega)

}