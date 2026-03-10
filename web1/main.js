const caja = document.getElementById('caja');
const boton = document.getElementById('boton');

caja.addEventListener('keypress', function (e){
    if(e.key === 'Enter'){
        alert("Mensaje: " + caja.value);
    }
})


boton.addEventListener('click', function(e){
    alert("Mensaje: " + caja.value)
})