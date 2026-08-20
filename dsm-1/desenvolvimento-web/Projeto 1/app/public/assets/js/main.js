const input = document.getElementById('search-input');
const result = document.getElementById('result');
const form = document.getElementById('search-form');

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
        try {
            const response = await fetch(`https://viacep.com.br/ws/${rawCep}/json/`);
        if (!response.ok) {
            showResult("Falha no serviço.", "error");
        } else {
            const data = await response.json();
            if (data.erro) {
                showResult("CEP não encontrado.", "error");
            } else {
            const value = (field) => escapeHtml(data[field] || 'Não informado');
            const message = `
                <div class="result-header">
                    <div><p class="result-label">CEP LOCALIZADO</p><h3 class="result-cep">${value('cep')}</h3></div>
                    <span class="result-badge">ATIVO</span>
                </div>
                <dl class="data-grid">
                    <div class="data-item"><dt>Logradouro</dt><dd>${value('logradouro')}</dd></div>
                    <div class="data-item"><dt>Complemento</dt><dd>${value('complemento')}</dd></div>
                    <div class="data-item"><dt>Bairro</dt><dd>${value('bairro')}</dd></div>
                    <div class="data-item"><dt>Cidade</dt><dd>${value('localidade')}</dd></div>
                    <div class="data-item"><dt>UF</dt><dd>${value('uf')}</dd></div>
                    <div class="data-item"><dt>Região</dt><dd>${value('regiao')}</dd></div>
                    <div class="data-item"><dt>Estado</dt><dd>${value('estado')}</dd></div>
                    <div class="data-item"><dt>DDD</dt><dd>${value('ddd')}</dd></div>
                    <div class="data-item"><dt class="phone-label"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M7 3h3l1.5 4-2 1.5a13 13 0 0 0 6 6l1.5-2 4 1.5v3c0 1-1 2-2 2C11 19 5 13 5 5c0-1 1-2 2-2Z"></path></svg>Telefone</dt><dd>Não informado</dd></div>
                </dl>`;
            showResult(message, "success");
            }   
        }
    } catch (error) {
        showResult("Não foi possível conectar ao serviço. Tente novamente.", "error");
    }
    }
}

function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, (character) => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
    }[character]));
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    handleCapSearch();
});

input.addEventListener('input', function() {
    if (input.value.trim() === "") {
        result.innerHTML = "";
        result.className = "result";
    }
});