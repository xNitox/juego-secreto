let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento (elemento, texto){
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento () {
    let numeroDeUsario = parseInt(document.getElementById('valorDeUsuario').value);
    if (numeroDeUsario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número secreto en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`); 
        document.getElementById('reiniciar').removeAttribute('disabled');
    }

    else { 
        //no acierta
        if (numeroDeUsario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        }
        else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        resetearCaja();
}   
    return;
}

function resetearCaja(){
document.querySelector('#valorDeUsuario').value = '';
    
    return;
}
function generarNumero() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1; 
    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);
    //se validara de si llego al maximo de numeros 
    if (listaNumeroSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Han sido sorteados todos los numeros posibles');
    }
        else{
        //Si el numero generado esta incluido en la lista
        
        if(listaNumeroSorteados.includes(numeroGenerado)){
            return generarNumero();
        }
        else{
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego de adivina el numero');
asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`); 
numeroSecreto = generarNumero();
intentos = 1;
}
function reiniciarJuego() {
    //limpiar el juego
    resetearCaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    //Inicializar el numero de intenetos
    condicionesIniciales();
}
condicionesIniciales();
//console.log(numeroSecreto);



