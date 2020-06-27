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
        var imc = peso / (altura * altura);
        // aplicando o valor na tabela
        tdImc.textContent = imc.toFixed(2);
    }
}

// seleciona o botão do formulário
var btnAdicionar = document.querySelector('#adicionar-paciente');

// escuta evento click do botão do formulário
btnAdicionar.addEventListener('click', function (event) {
    event.preventDefault();
    
    // seleciona o form
    var form = document.querySelector('#form-adiciona');

    // guarda o valor dos campos do formulário
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    // cria novo paciente
    var pacienteTr = document.createElement('tr');
    var nomeTd = document.createElement('td');
    var pesoTd = document.createElement('td');
    var alturaTd = document.createElement('td');
    var gorduraTd = document.createElement('td');
    var imcTd = document.createElement('td');

    // adiciona os valores do formulário ao novo paciente
    nomeTd.textContent = nome
    pesoTd.textContent = peso
    alturaTd.textContent = altura
    gorduraTd.textContent = gordura

    // adciona os td's no tr
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    //adiciona o novo paciente a tabela
    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);
    
});