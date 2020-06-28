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
    var pesoValido = validaPeso(peso);
    var alturaValida = validaPeso(altura);

    if (!pesoValido) {
        tdImc.textContent = 'Peso Inválido';
        pesoValido = false;
        // paciente.style.backgroundColor = 'lightcoral';
        paciente.classList.add('paciente-invalido');
    }

    if (!alturaValida) {
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

function validaPeso(peso) {
    if (peso >= 0 && peso < 300) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura < 3) {
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}