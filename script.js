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
    const hoje = new Date();
    const options = { timeZone: 'America/Sao_Paulo', year: 'numeric', month: '2-digit', day: '2-digit' };
    const hojeFormatado = hoje.toLocaleDateString('fr-CA', options);

    document.getElementById("jogo").value = "";
    document.getElementById("data").value = hojeFormatado;
    const apostasContainer = document.getElementById('apostas-dinamicas');
    apostasContainer.innerHTML = `
    <div class="aposta-container">
      <h3>Aposta 1</h3>
      <label>Tipo de Aposta:</label>
      <input type="text" class="tipo-aposta">
      <label>Casa de Aposta:</label>
      <select class="casa-aposta"></select>
      <label>Valor (R$):</label>
      <input type="number" class="valor-aposta" step="0.01">
      <label>ODD:</label>
      <input type="number" class="odd-aposta" step="0.01">
    </div>
    <div class="aposta-container">
      <h3>Aposta 2</h3>
      <label>Tipo de Aposta:</label>
      <input type="text" class="tipo-aposta">
      <label>Casa de Aposta:</label>
      <select class="casa-aposta"></select>
      <label>Valor (R$):</label>
      <input type="number" class="valor-aposta" step="0.01">
      <label>ODD:</label>
      <input type="number" class="odd-aposta" step="0.01">
    </div>
  `;
    apostaCount = 2;
    popularCasas();
}

function adicionarApostaCampos() {
    apostaCount++;
    const container = document.getElementById('apostas-dinamicas');
    const novaAposta = document.createElement('div');
    novaAposta.className = 'aposta-container';
    novaAposta.innerHTML = `
    <h3>Aposta ${apostaCount}</h3>
    <label>Tipo de Aposta:</label>
    <input type="text" class="tipo-aposta">
    <label>Casa de Aposta:</label>
    <select class="casa-aposta"></select>
    <label>Valor (R$):</label>
    <input type="number" class="valor-aposta" step="0.01">
    <label>ODD:</label>
    <input type="number" class="odd-aposta" step="0.01">
  `;
    container.appendChild(novaAposta);
    popularCasas();
}

function popularCasas() {
    const seletores = document.querySelectorAll('.casa-aposta');
    seletores.forEach(seletor => {
        if (seletor.options.length === 0) {
            casasDeAposta.forEach(casa => {
                let option = document.createElement("option");
                option.value = casa;
                option.text = casa;
                seletor.appendChild(option);
            });
        }
    });
}

function salvar() {
    localStorage.setItem("apostas", JSON.stringify(apostas));
}

function salvarApostas() {
    const jogo = document.getElementById("jogo").value;
    const data = document.getElementById("data").value;

    if (!jogo || !data) {
        alert("Preencha o campo 'Jogo' e 'Data'!");
        return;
    }

    const tiposAposta = document.querySelectorAll('.tipo-aposta');
    const casasAposta = document.querySelectorAll('.casa-aposta');
    const valoresAposta = document.querySelectorAll('.valor-aposta');
    const oddsAposta = document.querySelectorAll('.odd-aposta');

    let apostasIndividuais = [];
    let camposVazios = false;

    for (let i = 0; i < tiposAposta.length; i++) {
        let tipo = tiposAposta[i].value;
        let casa = casasAposta[i].value;
        let valor = parseFloat(valoresAposta[i].value);
        let odd = parseFloat(oddsAposta[i].value);

        if (!tipo || !casa || !valor || !odd) {
            camposVazios = true;
            break;
        }

        apostasIndividuais.push({
            tipo,
            casa,
            valor,
            odd,
            resultado: 'Pendente'
        });
    }

    if (camposVazios) {
        alert("Preencha todos os campos de aposta!");
        return;
    }

    const novaApostaConjunta = {
        jogo,
        data,
        apostas: apostasIndividuais,
    };

    apostas.unshift(novaApostaConjunta);
    salvar();
    fecharModal('nova');
    renderApostas();
    atualizarDashboard();
    renderGraficoLucroDiario();
}

function renderApostas() {
    const historicoContainer = document.getElementById('historico-container');
    historicoContainer.innerHTML = '';

    apostas.forEach((apostaConjunta, index) => {
        const totalApostado = apostaConjunta.apostas.reduce((acc, a) => acc + a.valor, 0);
        let totalLucro = apostaConjunta.apostas.reduce((acc, a) => {
            if (a.resultado === 'Green') {
                return acc + (a.valor * (a.odd - 1));
            } else if (a.resultado === 'Red') {
                return acc - a.valor;
            }
            return acc;
        }, 0);

        let status = 'Pendente';
        if (apostaConjunta.apostas.every(a => a.resultado !== 'Pendente')) {
            status = 'Finalizada';
        }

        const card = document.createElement('div');
        card.className = 'aposta-card';
        card.innerHTML = `
        <h3>${apostaConjunta.jogo}</h3>
        <p>${apostaConjunta.data}</p>
        <p>Casas: ${apostaConjunta.apostas.map(a => a.casa).join(', ')}</p>
        <p>Valor total: R$ ${totalApostado.toFixed(2)} (${apostaConjunta.apostas.length} apostas)</p>
        <span class="aposta-card-status status-${status.toLowerCase()}">${status}</span>
        <p class="aposta-card-lucro ${totalLucro > 0 ? 'green' : totalLucro < 0 ? 'red' : 'zero'}">
          R$ ${totalLucro.toFixed(2)}
        </p>
        <button class="btn-excluir" onclick="excluirAposta(event, ${index})">🗑️</button>
      `;
        card.onclick = (event) => {
            if (!event.target.classList.contains('btn-excluir')) {
                abrirModalEdicao(index);
            }
        };
        historicoContainer.appendChild(card);
    });
}

function abrirModalEdicao(index) {
    apostaSendoEditadaIndex = index;
    const aposta = apostas[index];

    document.getElementById('edicao-jogo').value = aposta.jogo;
    document.getElementById('edicao-data').value = aposta.data;

    const container = document.getElementById('edicao-apostas-container');
    container.innerHTML = '';

    aposta.apostas.forEach((a, i) => {
        const apostaDiv = document.createElement('div');
        apostaDiv.className = 'aposta-card-individual';
        apostaDiv.innerHTML = `
      <h4>Aposta ${i + 1}</h4>
      <label>Tipo de Aposta:</label>
      <input type="text" class="edicao-tipo-aposta" data-index="${i}" value="${a.tipo}">
      
      <label>Casa de Aposta:</label>
      <select class="edicao-casa-aposta" data-index="${i}"></select>
      
      <label>Valor (R$):</label>
      <input type="number" class="edicao-valor-aposta" step="0.01" data-index="${i}" value="${a.valor}">
      
      <label>ODD:</label>
      <input type="number" class="edicao-odd-aposta" step="0.01" data-index="${i}" value="${a.odd}">
      
      <label>Resultado:</label>
      <select class="edicao-resultado" data-index="${i}">
          <option value="Pendente" ${a.resultado === 'Pendente' ? 'selected' : ''}>Pendente</option>
          <option value="Green" ${a.resultado === 'Green' ? 'selected' : ''}>Green</option>
          <option value="Red" ${a.resultado === 'Red' ? 'selected' : ''}>Red</option>
      </select>
    `;
        container.appendChild(apostaDiv);

        const seletorCasa = apostaDiv.querySelector('.edicao-casa-aposta');
        casasDeAposta.forEach(casa => {
            let option = document.createElement("option");
            option.value = casa;
            option.text = casa;
            if (casa === a.casa) {
                option.selected = true;
            }
            seletorCasa.appendChild(option);
        });
    });

    abrirModal('edicao');
}

function salvarEdicao() {
    if (apostaSendoEditadaIndex === -1) return;

    const apostaConjunta = apostas[apostaSendoEditadaIndex];

    apostaConjunta.jogo = document.getElementById('edicao-jogo').value;
    apostaConjunta.data = document.getElementById('edicao-data').value;

    const tipos = document.querySelectorAll('.edicao-tipo-aposta');
    const casas = document.querySelectorAll('.edicao-casa-aposta');
    const valores = document.querySelectorAll('.edicao-valor-aposta');
    const odds = document.querySelectorAll('.edicao-odd-aposta');
    const resultados = document.querySelectorAll('.edicao-resultado');

    for (let i = 0; i < apostaConjunta.apostas.length; i++) {
        apostaConjunta.apostas[i].tipo = tipos[i].value;
        apostaConjunta.apostas[i].casa = casas[i].value;
        apostaConjunta.apostas[i].valor = parseFloat(valores[i].value);
        apostaConjunta.apostas[i].odd = parseFloat(odds[i].value);
        apostaConjunta.apostas[i].resultado = resultados[i].value;
    }

    salvar();
    fecharModal('edicao');
    renderApostas();
    atualizarDashboard();
    renderGraficoLucroDiario();
}

function excluirAposta(event, index) {
    event.stopPropagation();
    if (confirm("Tem certeza que deseja excluir esta aposta?")) {
        apostas.splice(index, 1);
        salvar();
        renderApostas();
        atualizarDashboard();
        renderGraficoLucroDiario();
    }
}

function atualizarDashboard() {
    let totalApostadoMes = 0;
    let totalLucroMes = 0;
    let totalLucroHoje = 0;
    let totalGreens = 0;
    let totalReds = 0;
    let totalPendente = 0;

    const hoje = new Date();
    const options = { timeZone: 'America/Sao_Paulo', year: 'numeric', month: '2-digit', day: '2-digit' };
    const hojeFormatado = hoje.toLocaleDateString('fr-CA', options);
    const mesAtual = hoje.getMonth();
    const anoAtual = hoje.getFullYear();

    apostas.forEach(apostaConjunta => {
        const dataAposta = new Date(apostaConjunta.data + 'T00:00:00-03:00');
        const mesAposta = dataAposta.getMonth();
        const anoAposta = dataAposta.getFullYear();

        let apostaPendente = false;
        apostaConjunta.apostas.forEach(apostaIndividual => {

            if (mesAposta === mesAtual && anoAposta === anoAtual) {
                totalApostadoMes += apostaIndividual.valor;

                if (apostaIndividual.resultado === 'Green') {
                    totalLucroMes += apostaIndividual.valor * (apostaIndividual.odd - 1);
                } else if (apostaIndividual.resultado === 'Red') {
                    totalLucroMes -= apostaIndividual.valor;
                }
            }

            if (apostaIndividual.resultado === 'Green') {
                totalGreens++;
            } else if (apostaIndividual.resultado === 'Red') {
                totalReds++;
            } else {
                apostaPendente = true;
            }

            if (apostaConjunta.data === hojeFormatado) {
                if (apostaIndividual.resultado === 'Green') {
                    totalLucroHoje += apostaIndividual.valor * (apostaIndividual.odd - 1);
                } else if (apostaIndividual.resultado === 'Red') {
                    totalLucroHoje -= apostaIndividual.valor;
                }
            }
        });
        if (apostaPendente) {
            totalPendente++;
        }
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

let meuGrafico = null;

function renderGraficoLucroDiario() {
    const lucrosPorDia = apostas.reduce((acc, apostaConjunta) => {
        if (!acc[apostaConjunta.data]) {
            acc[apostaConjunta.data] = 0;
        }
        apostaConjunta.apostas.forEach(apostaIndividual => {
            if (apostaIndividual.resultado === 'Green') {
                acc[apostaConjunta.data] += apostaIndividual.valor * (apostaIndividual.odd - 1);
            } else if (apostaIndividual.resultado === 'Red') {
                acc[apostaConjunta.data] -= apostaIndividual.valor;
            }
        });
        return acc;
    }, {});

    const datas = Object.keys(lucrosPorDia).sort();
    const lucros = datas.map(data => lucrosPorDia[data].toFixed(2));

    const ctx = document.getElementById('lucroDiarioChart').getContext('2d');

    if (meuGrafico) {
        meuGrafico.destroy();
    }

    meuGrafico = new Chart(ctx, {
        type: 'line',
        data: {
            labels: datas,
            datasets: [{
                label: 'Lucro Total por Dia (R$)',
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

renderApostas();
atualizarDashboard();
renderGraficoLucroDiario();
  
