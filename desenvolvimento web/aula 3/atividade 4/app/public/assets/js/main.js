const senainput = document.getElementById("sena-input");
const result = document.getElementById("result");
const senaListBody = document.getElementById("sena-list-body")

function showResult(message, type) {
    result.textContent = message;
    result.className = `result ${type}`;
}

async function loadSenas() {
    const response = await fetch("/senas")
    if (response.ok) {
        const senas = await response.json()
        console.log(senas);
    } else {
        showResult("Erro ao carregar jogos cadastrados.", "error");
    }
}

function renderSenas(senas) {
    if (senas.length == 0) {
        showResult("Nenhum jogo encontado.", "sucess");
    } else {
        for (let i = 0; i < senas.length; i++) {
            const dezenas = senas[i].nros.split(" ")
        }
    }
}

async function createSena() {
    const nros = senainput.value.trim().replace(/\s+/g, " ");
    if (nros.split(" ").length == 6) {
        showResult("Cadastrando...", "loading");
        const response = await fetch("/senas", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ nros })
        });
        if (response.ok) {
            console.log(response);
            showResult("Jogo cadastrado com sucesso.", "success");
            loadSenas()
        } else {
            showResult("Erro ao cadastrar jogo.", "error");
        }
    } else {
        showResult("Entre com 6 dezenas separadas por espaço", "error");
    }
}

senainput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        showResult("", ""); // Limpa mensagem
        createSena()
    }
})

loadSenas()