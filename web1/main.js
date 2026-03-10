const caja = document.getElementById('caja');
const boton = document.getElementById('boton');
const boton2 = document.getElementById('boton2');
let body = document.getElementById('body')

//EJERCICIO 1

caja.addEventListener('keypress', function (e){
    if(e.key === 'Enter'){
        alert("Mensaje: " + caja.value);
    }
});


boton.addEventListener('click', function(e){
    alert("Mensaje: " + caja.value)
});

//EJERCICIO 2

let state = 0;

boton2.addEventListener('click', () =>{
    state = (state + 1) %3 ;
    if (state === 0) {
        body.style.backgroundColor = "white";
        body.style.color = "black";
    } else if (state === 1) {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    } else {
        body.style.backgroundColor = "skyblue";
        body.style.color = "red";
    }
});