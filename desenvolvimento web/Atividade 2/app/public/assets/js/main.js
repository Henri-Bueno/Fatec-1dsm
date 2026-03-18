const input = document.getElementById('search-input');
const result = document.getElementById('result');

function showResult(message, type) {
    result.textContent = message;
    result.className = `result ${type}`;
}

async function handleCapSearch() {
    const rawCep = input.value.replace(/\D/g, '');

    if (rawCep.length !== 8) {
        showResult("CEP inválido. Por favor, insira 8 números (ex: 12345678 ou 12.345-678).", "error");
    } else {
        const response = await fetch(`https://viacep.com.br/ws/${rawCep}/json/`)
        if (!response.ok) {
            showResult("Falha no serviço.", "error");
        } else {
            console.log("ok");
        }
    }
}
input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        handleCapSearch();
    }
});