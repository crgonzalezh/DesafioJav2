function verificarStickers() {
    const num1 = document.getElementById('numero1').value;
    const num2 = document.getElementById('numero2').value;
    const num3 = document.getElementById('numero3').value;
    const mensaje = document.getElementById('mensaje');

    if (num1 === '' || num2 === ''|| num3 === '') {
        mensaje.textContent = 'Por favor, ingresa solo números.';
        return;
    }

    const suma = parseFloat(num1) + parseFloat(num2) + parseFloat(num3);

    if (isNaN(suma)) {
        mensaje.textContent = 'Por favor, ingresa solo números.';
    } 

    else if(suma===0){
        mensaje.textContent = 'No llevas stickers';

    } 
    else if(suma===1){
        mensaje.textContent = 'Llevas 1 sticker';

    } 
    else if (suma < 11) {
        mensaje.textContent = 'Llevas '+suma+' stickers';
    } 
    
    else {
        mensaje.textContent = 'Llevas demasiados stickers';
    }
}