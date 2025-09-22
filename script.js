const casasDeAposta = [
    "Aposta Ganha", "Apostatudo", "BateuBET", "bet365", "Betano", "Betbra", "Bet da Sorte", "BETesporte", "Betnacional", "BRBet", "BullSbet", "Esportes da Sorte", "Esportedasorte", "Estrelabet", "F12 bet", "Faz1bet", "FullBet", "KTO", "LuckBet", "Luvabet", "Novibet", "Outra", "Rei do Pitaco", "Sporty", "Stake", "Superbet", "Tivobet", "Vaidebet", "Vbet", "Verabet", "Outra"
];

let apostas = JSON.parse(localStorage.getItem("apostas")) || [];
let apostaCount = 2;
let apostaSendoEditadaIndex = -1;

function abrirModal(tipo) {
    if (tipo === 'nova') {
        document.getElementById('modal-nova-aposta').style.display = "block";
        limparFormulario();
        popularCasas();
    } else if (tipo === 'edicao') {
        document.getElementById('modal-edicao').style.display = "block";
    }
}

function fecharModal(tipo) {
    if (tipo === 'nova') {
        document.getElementById('modal-nova-aposta').style.display = "none";
        limparFormulario();
    } else if (tipo === 'edicao') {
        document.getElementById('modal-edicao').style.display = "none";
    }
}

function limparFormulario() {
    document.getElementById("apostaTipo").value = "";
    document.getElementById("apostaCasa").value = "";
    document.getElementById("apostaValor").value = "";
    document.getElementById("apostaOdd").value = "";
}

function popularCasas() {
    const select = document.getElementById("apostaCasa");
    select.innerHTML = '<option value="">Selecione uma casa...</option>';
    casasDeAposta.forEach(casa => {
        const option = document.createElement("option");
        option.value = casa;
        option.textContent = casa;
        select.appendChild(option);
    });
}

function adicionarAposta() {
    const jogo = document.getElementById("jogo").value;
    const data = document.getElementById("data").value;
    const tipo = document.getElementById("apostaTipo").value;
    const casa = document.getElementById("apostaCasa").value;
    const valor = parseFloat(document.getElementById("apostaValor").value);
    const odd = parseFloat(document.getElementById("apostaOdd").value);

    if (jogo && data && tipo && casa && !isNaN(valor) && !isNaN(odd)) {
        const aposta = { tipo, casa, valor, odd, resultado: "Pendente" };
        const jogoExistente = apostas.find(a => a.jogo.toLowerCase() === jogo.toLowerCase() && a.data === data);

        if (jogoExistente) {
            jogoExistente.apostas.push(aposta);
        } else {
            apostas.unshift({ jogo, data, apostas: [aposta] });
        }

        localStorage.setItem("apostas", JSON.stringify(apostas));
        limparFormulario();
        renderApostas();
        atualizarDashboard();
        renderGraficoLucroDiario();
        fecharModal('nova');
        document.getElementById("jogo").value = "";
        document.getElementById("data").value = "";
    } else {
        alert("Preencha todos os campos da aposta.");
    }
}

function renderApostas() {
    const container = document.getElementById("historico-container");
    container.innerHTML = "";

    apostas.forEach((item, index) => {
        const apostaCard = document.createElement("div");
        apostaCard.className = "aposta-card";
        apostaCard.innerHTML = `
            <h3>${item.jogo} - ${item.data}</h3>
            ${item.apostas.map(aposta => `
                <p><strong>Tipo:</strong> ${aposta.tipo}</p>
                <p><strong>Casa:</strong> ${aposta.casa}</p>
                <p><strong>Valor:</strong> R$ ${aposta.valor.toFixed(2)}</p>
                <p><strong>Odd:</strong> ${aposta.odd}</p>
                <p><strong>Resultado:</strong> <span class="aposta-card-status status-${aposta.resultado.toLowerCase()}">${aposta.resultado}</span></p>
            `).join('')}
            <div class="card-buttons">
                <button class="btn-editar" onclick="abrirModalEdicao(${index})">Editar</button>
                <button class="btn-excluir" onclick="excluirAposta(${index})">Excluir</button>
            </div>
        `;
        container.appendChild(apostaCard);
    });
}

function abrirModalEdicao(index) {
    apostaSendoEditadaIndex = index;
    const aposta = apostas[index];
    document.getElementById('modal-edicao').style.display = 'block';

    const apostaEdicaoContainer = document.getElementById('aposta-edicao-container');
    apostaEdicaoContainer.innerHTML = aposta.apostas.map((item, subIndex) => `
        <div class="aposta-edicao-item">
            <h4>Aposta ${subIndex + 1}</h4>
            <label for="tipo-edicao-${subIndex}">Tipo:</label>
            <input type="text" id="tipo-edicao-${subIndex}" value="${item.tipo}">
            
            <label for="casa-edicao-${subIndex}">Casa:</label>
            <select id="casa-edicao-${subIndex}"></select>
            
            <label for="valor-edicao-${subIndex}">Valor:</label>
            <input type="number" step="0.01" id="valor-edicao-${subIndex}" value="${item.valor}">
            
            <label for="odd-edicao-${subIndex}">Odd:</label>
            <input type="number" step="0.01" id="odd-edicao-${subIndex}" value="${item.odd}">
            
            <label for="resultado-edicao-${subIndex}">Resultado:</label>
            <select id="resultado-edicao-${subIndex}">
                <option value="Green" ${item.resultado === 'Green' ? 'selected' : ''}>Green</option>
                <option value="Red" ${item.resultado === 'Red' ? 'selected' : ''}>Red</option>
                <option value="Pendente" ${item.resultado === 'Pendente' ? 'selected' : ''}>Pendente</option>
            </select>
        </div>
    `).join('');

    aposta.apostas.forEach((item, subIndex) => {
        popularCasasEdicao(item.casa, subIndex);
    });
}

function popularCasasEdicao(casaSelecionada, subIndex) {
    const select = document.getElementById(`casa-edicao-${subIndex}`);
    casasDeAposta.forEach(casa => {
        const option = document.createElement("option");
        option.value = casa;
        option.textContent = casa;
        if (casa === casaSelecionada) {
            option.selected = true;
        }
        select.appendChild(option);
    });
}

function salvarEdicao() {
    if (apostaSendoEditadaIndex !== -1) {
        const aposta = apostas[apostaSendoEditadaIndex];
        aposta.apostas.forEach((item, subIndex) => {
            item.tipo = document.getElementById(`tipo-edicao-${subIndex}`).value;
            item.casa = document.getElementById(`casa-edicao-${subIndex}`).value;
            item.valor = parseFloat(document.getElementById(`valor-edicao-${subIndex}`).value);
            item.odd = parseFloat(document.getElementById(`odd-edicao-${subIndex}`).value);
            item.resultado = document.getElementById(`resultado-edicao-${subIndex}`).value;
        });

        localStorage.setItem("apostas", JSON.stringify(apostas));
        renderApostas();
        atualizarDashboard();
        renderGraficoLucroDiario();
        fecharModal('edicao');
    }
}

function excluirAposta(index) {
    if (confirm("Você tem certeza que deseja excluir esta aposta?")) {
        apostas.splice(index, 1);
        localStorage.setItem("apostas", JSON.stringify(apostas));
        renderApostas();
        atualizarDashboard();
        renderGraficoLucroDiario();
    }
}

function atualizarDashboard() {
    let totalApostadoMes = 0;
    let totalGreens = 0;
    let totalPendente = 0;
    let totalLucroMes = 0;
    let totalLucroHoje = 0;
    const dataHoje = new Date().toISOString().slice(0, 10);

    apostas.forEach(item => {
        item.apostas.forEach(aposta => {
            if (aposta.resultado !== "Pendente") {
                totalApostadoMes += aposta.valor;
            }
            if (aposta.resultado === "Green") {
                totalGreens++;
                totalLucroMes += (aposta.valor * aposta.odd) - aposta.valor;
            } else if (aposta.resultado === "Red") {
                totalLucroMes -= aposta.valor;
            } else {
                totalPendente++;
            }
            if (item.data === dataHoje) {
                if (aposta.resultado === "Green") {
                    totalLucroHoje += (aposta.valor * aposta.odd) - aposta.valor;
                } else if (aposta.resultado === "Red") {
                    totalLucroHoje -= aposta.valor;
                }
            }
        });
    });

    const roi = totalApostadoMes > 0 ? ((totalLucroMes / totalApostadoMes) * 100).toFixed(2) : 0;
    const lucroMesElemento = document.getElementById("lucroMes");
    const ganhoHojeElemento = document.getElementById("ganhoHoje");

    document.getElementById("totalApostadoMes").innerText = `R$ ${totalApostadoMes.toFixed(2)}`;
    document.getElementById("ganhosMes").innerText = totalGreens;
    document.getElementById("pendenteMes").innerText = totalPendente;

    lucroMesElemento.innerText = `R$ ${totalLucroMes.toFixed(2)}`;
    if (totalLucroMes > 0) {
        lucroMesElemento.className = 'lucro-positive';
    } else if (totalLucroMes < 0) {
        lucroMesElemento.className = 'lucro-negative';
    } else {
        lucroMesElemento.className = 'lucro-zero';
    }

    ganhoHojeElemento.innerText = `R$ ${totalLucroHoje.toFixed(2)}`;
    if (totalLucroHoje > 0) {
        ganhoHojeElemento.className = 'lucro-positive';
    } else if (totalLucroHoje < 0) {
        ganhoHojeElemento.className = 'lucro-negative';
    } else {
        ganhoHojeElemento.className = 'lucro-zero';
    }

    document.getElementById("roiMes").innerText = `${roi}%`;
}

function renderGraficoLucroDiario() {
    const lucroDiario = {};
    apostas.forEach(item => {
        if (!lucroDiario[item.data]) {
            lucroDiario[item.data] = 0;
        }
        item.apostas.forEach(aposta => {
            if (aposta.resultado === "Green") {
                lucroDiario[item.data] += (aposta.valor * aposta.odd) - aposta.valor;
            } else if (aposta.resultado === "Red") {
                lucroDiario[item.data] -= aposta.valor;
            }
        });
    });

    const datas = Object.keys(lucroDiario).sort();
    const lucros = datas.map(data => lucroDiario[data]);

    const ctx = document.getElementById('lucroDiarioChart').getContext('2d');
    if (window.lucroDiarioChart instanceof Chart) {
        window.lucroDiarioChart.destroy();
    }
    window.lucroDiarioChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: datas,
            datasets: [{
                label: 'Lucro Diário',
                data: lucros,
                borderColor: '#2184e9',
                backgroundColor: 'rgba(33, 132, 233, 0.2)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    ticks: { color: '#8b949e' },
                    grid: { color: 'rgba(255, 255, 255, 0.1)' }
                },
                y: {
                    ticks: { color: '#8b949e' },
                    grid: { color: 'rgba(255, 255, 255, 0.1)' }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#e6edf3'
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            label += 'R$ ' + context.raw;
                            return label;
                        }
                    }
                }
            }
        }
    });
}

function reiniciarDiario() {
    if (confirm("Você tem certeza que deseja reiniciar o diário? Todos os dados serão perdidos.")) {
        localStorage.clear();
        location.reload();
    }
}

// Inicialização
renderApostas();
atualizarDashboard();
renderGraficoLucroDiario();
