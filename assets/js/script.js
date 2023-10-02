const form = document.getElementById('form')

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const peso = (parseFloat(document.getElementById('weight').value) || 0)
    const altura = (parseFloat(document.getElementById('height').value) || 0)

    const imc = (peso / Math.pow(altura / 100, 2)).toFixed(2)

    const value = document.getElementById('value')
    let description = ''

    value.classList.add('attencion')

    document.getElementById('infos').classList.remove('hidden')

    if (imc < 18.5) {
        description = 'Cuidado! Você está abaixo do peso!'
    } 
    else if (imc >= 18.5 && imc <= 25) {
        description = 'Você está no peso ideal!'
        value.classList.remove('attencion')
        value.classList.add('normal')
    }
     else if (imc > 25 && imc <= 30) {
        description = 'Cuidado! Você está com sobrepeso!'
    } 
    else if (imc > 30 && imc <= 35) {
        description = 'Cuidado! Você está com obesidade moderada!'
    } 
    else if (imc > 35 && imc <= 40) {
        description = 'Cuidado! Você está com obesidade severa!'
    } 
    else {
        description = 'Cuidado! Você está com obesidade mórbida!'
    }

    value.textContent = imc.replace('.', ',')

    document.getElementById('description').textContent = description;
})

form.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('calculate').click();
    }
});
