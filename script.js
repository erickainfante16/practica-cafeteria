// Seleccionar los elementos
const boton = document.getElementById("enviar")
const campoNombre = document.getElementById("nombre")
const mensaje = document.getElementById("mensaje")

boton.addEventListener("clic",function(){
    //Leer lo que escruibe el usuario
    const nombre = campoNombre.value;

    //Condicion para mostrar
    if(nombre === ""){
        mensaje.textContent = "Por favor escribe tu nombre :D"
    }else{
        mensaje.textContent = "¡Gracias! ${nombre} te esperamos en Café Luna'
    }

})