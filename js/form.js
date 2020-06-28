// seleciona o botão do formulário
var btnAdicionar = document.querySelector('#adicionar-paciente');

// escuta evento click do botão do formulário
btnAdicionar.addEventListener('click', function (event) {
    event.preventDefault();

    // seleciona o form
    var form = document.querySelector('#form-adiciona');

    // obtém valores dos campos do formulário
    var paciente = obtemPacienteDoFormulario(form);

    // criação do novo paciente
    var pacienteTr = montaTr(paciente);

    // adiciona o novo paciente a tabela
    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);

    // limpa o form
    form.reset();
    
});

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