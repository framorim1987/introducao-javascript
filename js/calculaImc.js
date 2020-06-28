// alterando o título
var titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

// criando lista dos pacientes
var pacientes = document.querySelectorAll('.paciente');

//percorrendo a lista de pacientes
for (var i = 0; i < pacientes.length; i++) {

    //obtendo os dados dos pacientes
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector('.info-peso');
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector('.info-altura');
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector('.info-imc');

    // validando os valores obtdos
    var pesoValido = true;
    var alturaValida = true;

    if (peso <= 0 || peso >= 1000) {
        tdImc.textContent = 'Peso Inválido';
        pesoValido = false;
        // paciente.style.backgroundColor = 'lightcoral';
        paciente.classList.add('paciente-invalido');
    }

    if (altura <= 0 || altura >= 3) {
        tdImc.textContent = 'Altura Inválida';
        alturaValida = false;
        // paciente.style.backgroundColor = 'lightcoral';
        paciente.classList.add('paciente-invalido');
    }

    // calculando o IMC
    if (pesoValido && alturaValida) {
        var imc = calculaImc(peso, altura);
        // aplicando o valor na tabela
        tdImc.textContent = imc;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}