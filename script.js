window.addEventListener('load', ()=> {
    const display = document.querySelector('.calculator-display');
    const keypadboton = document.getElementsByClassName('keypad-boton');

    const keypadbotonArray = Array.from(keypadboton);

    keypadbotonArray.forEach( (boton) => {

        boton.addEventListener('click', ()=>{
            calculadora(boton, display)
        })
    })
});
function calculadora(boton, display) {
    switch (boton.innerHTML) {
        case 'C':
            borrar(display);
            break;

            case '=':
            calcular(display);
            break;

        default:
            actualizar(display, boton);
            break;
    }
}
function calcular(display) {
    display.innerHTML= eval(display.innerHTML)
}
function actualizar(display, boton){
    if (display.innerHTML == 0) {
        display.innerHTML ='';
    }
    display.innerHTML += boton.innerHTML;
}
function borrar(display) {
    display.innerHTML = 0;
}