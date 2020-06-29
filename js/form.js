// seleciona o botão do formulário
var btnAdicionar = document.querySelector('#adicionar-paciente');

// escuta evento click do botão do formulário
btnAdicionar.addEventListener('click', function (event) {
    event.preventDefault();

    // seleciona o form
    var form = document.querySelector('#form-adiciona');

    // obtém valores dos campos do formulário
    var paciente = obtemPacienteDoFormulario(form);

    // valida paciente
    var erros = validaPaciente(paciente);

    if (erros.length > 0) {
        exibeMensagemDeErro(erros);
        return;
    }

    //adiciona paciente na tabela
    adionaPacienteNaTabela(paciente);

    // limpa o form
    form.reset();
    var mensagemDeErro = document.querySelector('#mensagem-de-erro');
    mensagemDeErro.innerHTML = '';
});

//_____________________________Funcções________________________________________

// função adicionar os pacientes na tabela
function adionaPacienteNaTabela(paciente) {
    // criação do novo paciente
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);
    // adiciona o novo paciente a tabela
    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);
}

// função para obter valores dos campos do formulário
function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

// funcão para montar tr com dados do novo paciente
function montaTr(paciente) {
    // cria a tr
    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');

    // cria as td's e adiona dentro da tr
    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'));
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));

    return pacienteTr;
}

// função para montar as td's
function montaTd(dado, classe) {
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push('Informe um nome para o paciente');
    }
    
    if (paciente.peso.length == 0) {
        erros.push('Informe o peso do paciente');
    }

    if (!validaPeso(paciente.peso)) {
        erros.push('O peso é inválido');
    }

    if (paciente.altura.length == 0) {
        erros.push('Informe a altura do paciente');
    }

    if (!validaAltura(paciente.altura)) {
        erros.push('A altura é inválida');
    }

    if (paciente.gordura.length == 0) {
        erros.push('Informe o percentual de gordura');
    }

    return erros;
}

function exibeMensagemDeErro(erros) {
    var ul = document.querySelector('#mensagem-de-erro');
    ul.innerHTML = '';

    erros.forEach(function(erro) {
        var li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li);
    });

}