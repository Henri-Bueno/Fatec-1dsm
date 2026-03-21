const input = document.getElementById('search-input');
const result = document.getElementById('result');

function showResult(message, type) {
    result.innerHTML = message;
    result.className = `result ${type}`;
}

async function handleCapSearch() {
    const rawCep = input.value.replace(/\D/g, '');

    if (rawCep.length !== 8) {
        showResult("CEP inválido. Por favor, insira 8 números (ex: 12345678 ou 12.345-678).", "error");
    } else {
        showResult("Consultando CEP...", "loading");
        const response = await fetch(`https://viacep.com.br/ws/${rawCep}/json/`)
        if (!response.ok) {
            showResult("Falha no serviço.", "error");
        } else {
            const data = await response.json();
            if (data.erro) {
                showResult("CEP não encontrado.", "error");
            } else {
            const message = 
            `<p><strong>CEP:</strong> ${data.cep || 'Não informado'}</p>
            <p><strong>Logradouro:</strong> ${data.logradouro || 'Não informado'}</p>
            <p><strong>Complemento:</strong> ${data.complemento || 'Não informado'}</p>
            <p><strong>Bairro:</strong> ${data.bairro || 'Não informado'}</p>
            <p><strong>Cidade:</strong> ${data.localidade || 'Não informado'}</p>
            <p><strong>UF:</strong> ${data.uf || 'Não informado'}</p>
            <p><strong>Estado:</strong> ${data.estado || 'Não informado'}</p>
            <p><strong>Região:</strong> ${data.regiao || 'Não informado'}</p>
            <p><strong>DDD:</strong> ${data.ddd || 'Não informado'}</p>`;
            showResult(message, "success");
            }   
        }
    }
}
input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        handleCapSearch();
    }
});

input.addEventListener('input', function() {
    if (input.value.trim() == "") {
     result.innerHTML = "";
    result.className = `result`
    }
});