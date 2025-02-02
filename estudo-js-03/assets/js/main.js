function calcImc() {
    const form = document.querySelector('.form');
    const res = document.querySelector('#res')

    function formSubmit(event) {
        event.preventDefault();

        const peso = Number(document.querySelector('#peso').value);
        const altura = Number(document.querySelector('#altura').value);
        const imc = (peso / (altura * altura)).toFixed(2)
        this.reset();

        if (peso > 0 && altura > 0){
        if (imc < 18.5) {
            res.innerHTML = `Seu IMC é ${imc}. Isto significa que você está abaixo do peso ideal.`;
        } else if (imc >= 18.5 && imc <= 24.9){
            res.innerHTML = `Seu IMC é ${imc}. Isto significa que você está no peso ideal.`;
        } else if(imc >= 25 && imc <= 29.9){
            res.innerHTML = `Seu IMC é ${imc}. Isto significa que você está em sobrepeso.`;
        } else if(imc >= 30 && imc <= 34.9){
            res.innerHTML = `Seu IMC é ${imc}. Isto significa que você está em obesidade grau 1.`;
        } else if (imc >= 35.9 && imc <= 39.9){
            res.innerHTML = `Seu IMC é ${imc}. Isto significa que você está em obesidade grau 2`;
        } else {
            res.innerHTML = `Seu IMC é ${imc}. Isto significa que você está em obesidade grau 3.`;
        }
    } else {
        res.innerHTML = 'Inválido. Tente novamente.'
    }
    }
    form.addEventListener('submit', formSubmit);
}

calcImc();
