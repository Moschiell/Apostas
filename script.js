const casasDeAposta = [
    "Aposta Ganha", "Apostatudo", "BateuBET", "bet365", "Betano", "Betbra", "Bet da Sorte", "BETesporte", "Betnacional", "BRBet", "BullSbet", "Esportes da Sorte", "Esportedasorte", "Estrelabet", "F12 bet", "Faz1bet", "FullBet", "KTO", "LuckBet", "Luvabet", "Novibet", "Outra", "Rei do Pitaco", "Sporty", "Stake", "Superbet", "Tivobet", "Vaidebet", "Vbet", "Verabet", "Outra"
];

let apostas = JSON.parse(localStorage.getItem("apostas"));
if (!apostas || apostas.length === 0) {
    const dadosIniciais = [{
        "jogo": "Coritba",
        "data": "2025-09-21",
        "apostas": [{
            "tipo": "Under",
            "casa": "BETesporte",
            "valor": 150,
            "odd": 3.3,
            "resultado": "Pendente"
        }, {
            "tipo": "Over",
            "casa": "Betano",
            "valor": 325.66,
            "odd": 1.52,
            "resultado": "Pendente"
        }]
    }, {
        "jogo": "Inter milao",
        "data": "2025-09-21",
        "apostas": [{
            "tipo": "Under",
            "casa": "BETesporte",
            "valor": 150,
            "odd": 3.3,
            "resultado": "Pendente"
        }, {
            "tipo": "Over",
            "casa": "Betbra",
            "valor": 320,
            "odd": 1.565,
            "resultado": "Pendente"
        }]
    }, {
        "jogo": "Faisaly",
        "data": "2025-09-21",
        "apostas": [{
            "tipo": "Under",
            "casa": "BETesporte",
            "valor": 150,
            "odd": 3,
            "resultado": "Pendente"
        }, {
            "tipo": "Over",
            "casa": "Superbet",
            "valor": 269.46,
            "odd": 1.67,
            "resultado": "Pendente"
        }]
    }, {
        "jogo": "Arsenal",
        "data": "2025-09-21",
        "apostas": [{
            "tipo": "Under",
            "casa": "BETesporte",
            "valor": 150,
            "odd": 2.5,
            "resultado": "Green"
        }, {
            "tipo": "Over",
            "casa": "Betbra",
            "valor": 202,
            "odd": 1.86,
            "resultado": "Red"
        }]
    }, {
        "jogo": "Leverkusen",
        "data": "2025-09-21",
        "apostas": [{
            "tipo": "Under",
            "casa": "BETesporte",
            "valor": 150,
            "odd": 3.3,
            "resultado": "Green"
        }, {
            "tipo": "Over",
            "casa": "Betbra",
            "valor": 305,
            "odd": 1.625,
            "resultado": "Red"
        }]
    }, {
        "jogo": "Bodo",
        "data": "2025-09-21",
        "apostas": [{
            "tipo": "Under",
            "casa": "BETesporte",
            "valor": 150,
            "odd": 3.3,
            "resultado": "Green"
        }, {
            "tipo": "Over",
            "casa": "BETesporte",
            "valor": 345,
            "odd": 1.523,
            "resultado": "Red"
        }]
    }, {
        "jogo": "Frankfurt",
        "data": "2025-09-21",
        "apostas": [{
            "tipo": "Under",
            "casa": "BETesporte",
            "valor": 150,
            "odd": 3,
            "resultado": "Red"
        }, {
            "tipo": "Over",
            "casa": "Betbra",
            "valor": 276,
            "odd": 1.628,
            "resultado": "Green"
        }]
    }, {
        "jogo": "Aston Villa",
        "data": "2025-09-21",
        "apostas": [{
            "tipo": "Under",
            "casa": "BETesporte",
            "valor": 150,
            "odd": 4,
            "resultado": "Red"
        }, {
            "tipo": "Over",
            "casa": "Betbra",
            "valor": 423,
            "odd": 1.42,
            "resultado": "Green"
        }]
    }, {
        "jogo": "Monterrey",
        "data": "2025-09-21",
        "apostas": [{
            "tipo": "Under",
            "casa": "BETesporte",
            "valor": 150,
            "odd": 2.7,
            "resultado": "Red"
        }, {
            "tipo": "Over",
            "casa": "Betbra",
            "valor": 231,
            "odd": 1.757,
            "resultado": "Green"
        }]
    }, {
        "jogo": "Deportivo cali",
        "data": "2025-09-20",
        "apostas": [{
            "tipo": "Under",
            "casa": "BETesporte",
            "valor": 150,
            "odd": 3.3,
            "resultado": "Red"
        }, {
            "tipo": "Over",
            "casa": "Betbra",
            "valor": 322,
            "odd": 1.543,
            "resultado": "Green"
        }]
    }];
    apostas = dadosIniciais;
    localStorage.setItem("apostas", JSON.stringify(apostas));
}

let apostaCount = 2;
let apostaSendoEditadaIndex = -1;

function openModal(tipo) {
    if (tipo === 'nova') {
        document.getElementById('modal-nova-aposta').style.display = "block";
        limparFormulario();
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

function popularCasas(selectElement) {
    selectElement.innerHTML = '';
    casasDeAposta.forEach(casa => {
        const option = document.createElement("option");
        option.value = casa;
        option.textContent = casa;
        selectElement.appendChild(option);
    });
}

function addBetFields() {
    const container = document.getElementById('apostas-dinamicas');
    const div = document.createElement('div');
    div.classList.add('aposta-input-group');
    div.innerHTML = `
        <label for="tipo-aposta-${apostaCount}">Tipo de Aposta:</label>
        <input type="text" id="tipo-aposta-${apostaCount}" placeholder="Ex: Casa/Empate">
        <label for="casa-aposta-${apostaCount}">Casa de Aposta:</label>
        <select id="casa-aposta-${apostaCount}" class="select-casa"></select>
        <label for="valor-aposta-${apostaCount}">Valor Apostado:</label>
        <input type="number" id="valor-aposta-${apostaCount}" step="0.01" placeholder="R$ 0.00">
        <label for="odd-aposta-${apostaCount}">Odd:</label>
        <input type="number" id="odd-aposta-${apostaCount}" step="0.01" placeholder="1.50">
        <label for="resultado-aposta-${apostaCount}">Resultado:</label>
        <select id="resultado-aposta-${apostaCount}" class="select-resultado">
            <option value="Pendente">Pendente</option>
            <option value="Green">Green</option>
            <option value="Red">Red</option>
        </select>
    `;
    container.appendChild(div);
    popularCasas(div.querySelector('.select-casa'));
    apostaCount++;
}

function saveBets() {
    const jogo = document.getElementById('jogo-select').value;
    const data = document.getElementById('data').value;
    const apostasDinamicas = document.querySelectorAll('.aposta-input-group');

    const novasApostas = [];
    apostasDinamicas.forEach(apostaDiv => {
        const tipo = apostaDiv.querySelector('input[id^="tipo-aposta"]').value;
        const casa = apostaDiv.querySelector('select[id^="casa-aposta"]').value;
        const valor = parseFloat(apostaDiv.querySelector('input[id^="valor-aposta"]').value);
        const odd = parseFloat(apostaDiv.querySelector('input[id^="odd-aposta"]').value);
        const resultado = apostaDiv.querySelector('select[id^="resultado-aposta"]').value;

        if (jogo && data && tipo && casa && valor && odd && resultado) {
            novasApostas.push({
                tipo,
                casa,
                valor,
                odd,
                resultado
            });
        }
    });

    if (novasApostas.length > 0) {
        apostas.push({
            jogo,
            data,
            apostas: novasApostas
        });
        localStorage.setItem("apostas", JSON.stringify(apostas));
        renderApostas();
        atualizarDashboard();
        renderGraficoLucroDiario();
        closeModal('nova');
    } else {
        alert("Por favor, preencha todos os campos da aposta.");
    }
}

function renderApostas() {
    const container = document.getElementById('historico-container');
    container.innerHTML = '';
    const apostasOrdenadas = apostas.sort((a, b) => new Date(b.data) - new Date(a.data));

    apostasOrdenadas.forEach((aposta, index) => {
        const card = document.createElement('div');
        card.classList.add('aposta-card');
        card.innerHTML = `
            <div class="aposta-header">
                <h3>${aposta.jogo}</h3>
                <p class="aposta-data">${new Date(aposta.data).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' })}</p>
            </div>
            <div class="apostas-list">
                ${aposta.apostas.map(subAposta => `
                    <div class="sub-aposta">
                        <p><strong>Tipo:</strong> ${subAposta.tipo}</p>
                        <p><strong>Casa:</strong> ${subAposta.casa}</p>
                        <p><strong>Valor:</strong> R$ ${subAposta.valor.toFixed(2).replace('.', ',')}</p>
                        <p><strong>Odd:</strong> ${subAposta.odd.toFixed(2).replace('.', ',')}</p>
                        <span class="aposta-card-status sub-status-${subAposta.resultado.toLowerCase()}">${subAposta.resultado}</span>
                    </div>
                `).join('')}
            </div>
        `;
        card.onclick = () => openEditModal(index);
        container.appendChild(card);
    });
}

function atualizarDashboard() {
    const agora = new Date();
    const primeiroDiaDoMes = new Date(agora.getFullYear(), agora.getMonth(), 1);
    const hoje = new Date(agora.getFullYear(), agora.getMonth(), agora.getDate());

    let totalApostadoMes = 0;
    let totalGanhosMes = 0;
    let totalPendenteMes = 0;
    let lucroMes = 0;
    let ganhoHoje = 0;

    apostas.forEach(aposta => {
        const dataAposta = new Date(aposta.data + 'T00:00:00');
        if (dataAposta >= primeiroDiaDoMes) {
            aposta.apostas.forEach(ap => {
                totalApostadoMes += ap.valor;

                if (ap.resultado === "Green") {
                    const ganho = ap.valor * ap.odd;
                    const lucro = ganho - ap.valor;
                    totalGanhosMes += lucro;
                    lucroMes += lucro;
                    if (dataAposta.toDateString() === hoje.toDateString()) {
                        ganhoHoje += lucro;
                    }
                } else if (ap.resultado === "Red") {
                    lucroMes -= ap.valor;
                    if (dataAposta.toDateString() === hoje.toDateString()) {
                        ganhoHoje -= ap.valor;
                    }
                } else if (ap.resultado === "Pendente") {
                    totalPendenteMes += ap.valor;
                }
            });
        }
    });

    const roiMes = totalApostadoMes > 0 ? (lucroMes / totalApostadoMes) * 100 : 0;

    document.getElementById("totalApostadoMes").textContent = `R$ ${totalApostadoMes.toFixed(2).replace('.', ',')}`;
    document.getElementById("ganhosMes").textContent = `R$ ${totalGanhosMes.toFixed(2).replace('.', ',')}`;
    document.getElementById("pendenteMes").textContent = `R$ ${totalPendenteMes.toFixed(2).replace('.', ',')}`;
    document.getElementById("lucroMes").textContent = `R$ ${lucroMes.toFixed(2).replace('.', ',')}`;
    document.getElementById("ganhoHoje").textContent = `R$ ${ganhoHoje.toFixed(2).replace('.', ',')}`;
    document.getElementById("roiMes").textContent = `${roiMes.toFixed(2).replace('.', ',')}%`;

    const lucroMesElement = document.getElementById("lucroMes");
    lucroMesElement.classList.remove('lucro-positive', 'lucro-negative', 'lucro-zero');
    if (lucroMes > 0) {
        lucroMesElement.classList.add('lucro-positive');
    } else if (lucroMes < 0) {
        lucroMesElement.classList.add('lucro-negative');
    } else {
        lucroMesElement.classList.add('lucro-zero');
    }
}

function reiniciarDiario() {
    if (confirm("Tem certeza que deseja limpar todos os dados do diário de apostas? Esta ação é irreversível.")) {
        localStorage.clear();
        apostas = [];
        renderApostas();
        atualizarDashboard();
        renderGraficoLucroDiario();
        alert("Diário de apostas reiniciado!");
    }
}

let chart;

function renderGraficoLucroDiario() {
    const lucroDiario = {};
    apostas.forEach(aposta => {
        const data = aposta.data;
        if (!lucroDiario[data]) {
            lucroDiario[data] = 0;
        }
        aposta.apostas.forEach(ap => {
            if (ap.resultado === "Green") {
                lucroDiario[data] += (ap.valor * ap.odd) - ap.valor;
            } else if (ap.resultado === "Red") {
                lucroDiario[data] -= ap.valor;
            }
        });
    });

    const datas = Object.keys(lucroDiario).sort();
    const lucros = datas.map(data => lucroDiario[data]);

    const ctx = document.getElementById('lucroDiarioChart').getContext('2d');
    if (chart) {
        chart.destroy();
    }
    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: datas.map(d => new Date(d).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' })),
            datasets: [{
                label: 'Lucro Diário (R$)',
                data: lucros,
                backgroundColor: 'rgba(59, 130, 246, 0.2)',
                borderColor: '#3b82f6',
                borderWidth: 2,
                tension: 0.4,
                pointBackgroundColor: '#3b82f6',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#3b82f6'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Lucro/Prejuízo (R$)'
                    },
                    grid: {
                        color: '#30363d'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Data'
                    },
                    grid: {
                        color: '#30363d'
                    }
                }
            }
        }
    });
}

function openEditModal(index) {
    apostaSendoEditadaIndex = index;
    const aposta = apostas[index];
    document.getElementById('edicao-jogo').value = aposta.jogo;
    document.getElementById('edicao-data').value = aposta.data;
    const container = document.getElementById('edicao-apostas-container');
    container.innerHTML = '';

    aposta.apostas.forEach((subAposta, subIndex) => {
        const div = document.createElement('div');
        div.classList.add('aposta-input-group');
        div.innerHTML = `
            <h4>Aposta ${subIndex + 1}</h4>
            <label>Tipo de Aposta:</label>
            <input type="text" value="${subAposta.tipo}" id="edit-tipo-${subIndex}">
            <label>Casa de Aposta:</label>
            <select id="edit-casa-${subIndex}" class="select-casa"></select>
            <label>Valor Apostado:</label>
            <input type="number" step="0.01" value="${subAposta.valor}" id="edit-valor-${subIndex}">
            <label>Odd:</label>
            <input type="number" step="0.01" value="${subAposta.odd}" id="edit-odd-${subIndex}">
            <label>Resultado:</label>
            <select id="edit-resultado-${subIndex}">
                <option value="Pendente" ${subAposta.resultado === 'Pendente' ? 'selected' : ''}>Pendente</option>
                <option value="Green" ${subAposta.resultado === 'Green' ? 'selected' : ''}>Green</option>
                <option value="Red" ${subAposta.resultado === 'Red' ? 'selected' : ''}>Red</option>
            </select>
        `;
        container.appendChild(div);
        const selectCasa = div.querySelector(`#edit-casa-${subIndex}`);
        popularCasas(selectCasa);
        selectCasa.value = subAposta.casa;
    });

    document.getElementById('btn-salvar-edicao').onclick = saveEditedBets;
    openModal('edicao');
}

function saveEditedBets() {
    const aposta = apostas[apostaSendoEditadaIndex];
    const dataEditada = document.getElementById('edicao-data').value;
    aposta.data = dataEditada;

    const apostasEditadas = [];
    const apostaDivs = document.querySelectorAll('#edicao-apostas-container .aposta-input-group');
    apostaDivs.forEach((div, index) => {
        const tipo = div.querySelector(`#edit-tipo-${index}`).value;
        const casa = div.querySelector(`#edit-casa-${index}`).value;
        const valor = parseFloat(div.querySelector(`#edit-valor-${index}`).value);
        const odd = parseFloat(div.querySelector(`#edit-odd-${index}`).value);
        const resultado = div.querySelector(`#edit-resultado-${index}`).value;
        apostasEditadas.push({ tipo, casa, valor, odd, resultado });
    });
    aposta.apostas = apostasEditadas;

    localStorage.setItem("apostas", JSON.stringify(apostas));
    renderApostas();
    atualizarDashboard();
    renderGraficoLucroDiario();
    closeModal('edicao');
}

document.addEventListener('DOMContentLoaded', () => {
    renderApostas();
    atualizarDashboard();
    renderGraficoLucroDiario();
});

// Mock da função de busca, pois ela depende de uma API externa que não está no código.
function searchTeamAndFixtures() {
    const select = document.getElementById('jogo-select');
    select.innerHTML = '';
    const option = document.createElement("option");
    const termoBusca = document.getElementById('jogo-search').value || "Exemplo de Jogo";
    option.value = termoBusca;
    option.textContent = termoBusca;
    select.appendChild(option);
    alert("Função de busca simulada. Por favor, adicione o código de API para que ela funcione de verdade.");
}
