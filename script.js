const casasDeAposta = [
    "Aposta Ganha", "Apostatudo", "BateuBET", "bet365", "Betano", "Betbra", "Bet da Sorte", "BETesporte", "Betnacional", "BRBet", "BullSbet", "Esportes da Sorte", "Esportedasorte", "Estrelabet", "F12 bet", "Faz1bet", "FullBet", "KTO", "LuckBet", "Luvabet", "Novibet", "Outra", "Rei do Pitaco", "Sporty", "Stake", "Superbet", "Tivobet", "Vaidebet", "Vbet", "Verabet", "Outra"
];

// usa o localStorage OU dados iniciais
let apostas = JSON.parse(localStorage.getItem("apostas")) || [];

// SE o localStorage estiver vazio, carrega os dados iniciais
if (apostas.length === 0) {
    apostas = [...dadosIniciais];
}

let apostaCount = 2;
let apostaSendoEditadaIndex = -1;

// === DADOS INICIAIS ATUALIZADOS ===
const dadosIniciais = [
    {"jogo":"Coritba","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.3,"resultado":"Pendente"},{"tipo":"Over","casa":"Betano","valor":325.66,"odd":1.52,"resultado":"Pendente"}]},
    {"jogo":"Inter milao","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.3,"resultado":"Pendente"},{"tipo":"Over","casa":"Betbra","valor":320,"odd":1.565,"resultado":"Pendente"}]},
    {"jogo":"Faisaly","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3,"resultado":"Pendente"},{"tipo":"Over","casa":"Superbet","valor":269.46,"odd":1.67,"resultado":"Pendente"}]},
    {"jogo":"Arsenal","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":2.5,"resultado":"Green"},{"tipo":"Over","casa":"Betbra","valor":202,"odd":1.86,"resultado":"Red"}]},
    // ... (mantém TODAS as apostas que você colou no seu último código)
    {"jogo":"Flamengo","data":"2025-09-15","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.1,"resultado":"Green"},{"tipo":"Over","casa":"Betano","valor":280,"odd":1.64,"resultado":"Red"}]}
];

// ====================== FUNÇÕES ======================

function openModal(tipo) {
    if (tipo === 'nova') {
        document.getElementById('modal-nova-aposta').style.display = "block";
        limparFormulario();
        popularCasas();
        addBetFields();
    } else if (tipo === 'edicao') {
        document.getElementById('modal-edicao').style.display = "block";
    }
}

function closeModal(tipo) {
    if (tipo === 'nova') {
        document.getElementById('modal-nova-aposta').style.display = "none";
        limparFormulario();
    } else if (tipo === 'edicao') {
        document.getElementById('modal-edicao').style.display = "none";
    }
}

function limparFormulario() {
    document.getElementById('jogo-search').value = "";
    document.getElementById('jogo-select').innerHTML = "";
    document.getElementById('data').value = "";
    document.getElementById('apostas-dinamicas').innerHTML = "";
    apostaCount = 2;
}

function popularCasas() {
    const selectsCasa = document.querySelectorAll('.select-casa');
    selectsCasa.forEach(select => {
        select.innerHTML = '';
        casasDeAposta.forEach(casa => {
            const option = document.createElement("option");
            option.value = casa;
            option.textContent = casa;
            select.appendChild(option);
        });
    });
}

function addBetFields() {
    const container = document.getElementById('apostas-dinamicas');
    const div = document.createElement('div');
    div.classList.add('aposta-input-group');
    div.innerHTML = `
        <label>Tipo de Aposta:</label>
        <input type="text" placeholder="Ex: Casa/Empate">
        <label>Casa de Aposta:</label>
        <select class="select-casa"></select>
        <label>Valor Apostado:</label>
        <input type="number" step="0.01" placeholder="R$ 0.00">
        <label>Odd:</label>
        <input type="number" step="0.01" placeholder="1.50">
        <label>Resultado:</label>
        <select class="select-resultado">
            <option value="Pendente">Pendente</option>
            <option value="Green">Green</option>
            <option value="Red">Red</option>
        </select>
    `;
    container.appendChild(div);
    popularCasas();
}

function saveBets() {
    const jogo = document.getElementById('jogo-select').value;
    const data = document.getElementById('data').value;
    const apostasDinamicas = document.querySelectorAll('.aposta-input-group');

    const novasApostas = [];
    apostasDinamicas.forEach(apostaDiv => {
        const tipo = apostaDiv.querySelector('input[type="text"]').value;
        const casa = apostaDiv.querySelector('select.select-casa').value;
        const valor = parseFloat(apostaDiv.querySelector('input[type="number"]').value);
        const odd = parseFloat(apostaDiv.querySelectorAll('input[type="number"]')[1].value);
        const resultado = apostaDiv.querySelector('select.select-resultado').value;

        if (jogo && data && tipo && casa && valor && odd && resultado) {
            novasApostas.push({ tipo, casa, valor, odd, resultado });
        }
    });

    if (novasApostas.length > 0) {
        apostas.push({ jogo, data, apostas: novasApostas });
        localStorage.setItem("apostas", JSON.stringify(apostas));
        renderApostas();
        atualizarDashboard();
        renderGraficoLucroDiario();
        closeModal('nova');
    } else {
        alert("Por favor, preencha todos os campos da aposta.");
    }
}

// renderização do histórico
function renderApostas() {
    const container = document.getElementById("historico-container");
    container.innerHTML = "";

    const apostasOrdenadas = apostas.sort((a, b) => new Date(b.data) - new Date(a.data));

    apostasOrdenadas.forEach((aposta, index) => {
        const apostaCard = document.createElement('div');
        apostaCard.classList.add('aposta-card');
        apostaCard.onclick = () => openEditModal(index);
        
        let totalLucro = 0;

        let apostasHtml = aposta.apostas.map(ap => {
            const lucro = ap.resultado === "Green" ? (ap.valor * ap.odd) - ap.valor : ap.resultado === "Red" ? -ap.valor : 0;
            totalLucro += lucro;
            return `
                <p>${ap.tipo} - ${ap.casa} - R$${ap.valor} @ ${ap.odd} → ${ap.resultado} (${lucro.toFixed(2)})</p>
            `;
        }).join("");

        apostaCard.innerHTML = `
            <h4>${aposta.jogo} (${aposta.data})</h4>
            ${apostasHtml}
            <p><b>Lucro total: R$ ${totalLucro.toFixed(2)}</b></p>
        `;

        container.appendChild(apostaCard);
    });
}

// === outras funções: editar, dashboard, gráfico ===
// (mesmo do script que já te mandei antes)

// inicialização
renderApostas();
atualizarDashboard();
renderGraficoLucroDiario();