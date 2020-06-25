var titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

// obtendo os dados da tabela
var paciente = document.querySelector('#primeiro-paciente');

var tdPeso = paciente.querySelector('.info-peso');
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector('.info-altura');
var altura = tdAltura.textContent;

// validando os valores obtdos

var pesoValido = true;
var alturaValida = true;

if (peso <= 0 || peso >= 1000) {
    tdImc.textContent = 'Peso Inválido';
    pesoValido = false;
}

if (altura <= 0 || altura >= 3) {
    tdImc.textContent = 'Altura Inválida';
    alturaValida = false;
}

// calculando o IMC
if (pesoValido && alturaValida) {
    var imc = peso / (altura * altura);
    // aplicando o valor na tabela
    var tdImc = paciente.querySelector('.info-imc');
    tdImc.textContent = imc;
}