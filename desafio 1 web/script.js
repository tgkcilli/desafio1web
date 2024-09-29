let vagas = JSON.parse(localStorage.getItem('vagas')) || [];

// Função para cadastrar a vaga
function Cadastrar() {
    const placa = document.getElementById('placa').value;
    const proprietario = document.getElementById('proprietario').value;
    const apartamento = document.getElementById('apartamento').value;
    const bloco = document.getElementById('bloco').value;
    const modelo = document.getElementById('modelo').value;
    const cor = document.getElementById('cor').value;
    const vaga = document.getElementById('vaga').value;

    // Cria um novo objeto de vaga
    const novaVaga = {
        placa,
        proprietario,
        apartamento,
        bloco,
        modelo,
        cor,
        vaga
    };

    // Adiciona a nova vaga ao array
    vagas.push(novaVaga);
    
    // Salva as vagas no localStorage
    localStorage.setItem('vagas', JSON.stringify(vagas));
    
    // Mostra mensagem de confirmação
    alert('Cadastro realizado com sucesso!');
    
    // Limpa o formulário
    limparFormulario();
}

// Adiciona o evento de submit ao formulário
document.getElementById('form-cadastro')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
    Cadastrar(); // Chama a função Cadastrar
});

// Função para listar as vagas na página de listagem
if (document.getElementById('lista-vagas')) {
    listarVagas();
}

// Função para listar as vagas
function listarVagas() {
    const listaElement = document.getElementById('lista-vagas');
    listaElement.innerHTML = ''; // Limpa a lista atual

    vagas.forEach((vaga) => {
        const li = document.createElement('li');
        li.textContent = `Vaga ${vaga.vaga}: ${vaga.placa} - ${vaga.proprietario} (${vaga.modelo}, ${vaga.cor})`;
        listaElement.appendChild(li);
    });
}

// Função para limpar o formulário
function limparFormulario() {
    document.getElementById('form-cadastro').reset();
}
