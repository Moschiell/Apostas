const casasDeAposta = [
    "Aposta Ganha", "Apostatudo", "BateuBET", "bet365", "Betano", "Betbra", "Bet da Sorte", "BETesporte", "Betnacional", "BRBet", "BullSbet", "Esportes da Sorte", "Esportedasorte", "Estrelabet", "F12 bet", "Faz1bet", "FullBet", "KTO", "LuckBet", "Luvabet", "Novibet", "Outra", "Rei do Pitaco", "Sporty", "Stake", "Superbet", "Tivobet", "Vaidebet", "Vbet", "Verabet", "Outra"
];

const dadosIniciais = [
    {"jogo":"Coritba","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.3,"resultado":"Pendente"},{"tipo":"Over","casa":"Betano","valor":325.66,"odd":1.52,"resultado":"Pendente"}]},{"jogo":"Inter milao","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.3,"resultado":"Pendente"},{"tipo":"Over","casa":"Betbra","valor":320,"odd":1.565,"resultado":"Pendente"}]},{"jogo":"Faisaly","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3,"resultado":"Pendente"},{"tipo":"Over","casa":"Superbet","valor":269.46,"odd":1.67,"resultado":"Pendente"}]},{"jogo":"Arsenal","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":2.5,"resultado":"Green"},{"tipo":"Over","casa":"Betbra","valor":202,"odd":1.86,"resultado":"Red"}]},{"jogo":"Leverkusen ","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.3,"resultado":"Green"},{"tipo":"Over","casa":"Betbra","valor":305,"odd":1.625,"resultado":"Red"}]},{"jogo":"Bodo ","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.3,"resultado":"Green"},{"tipo":"Over ","casa":"BETesporte","valor":345,"odd":1.523,"resultado":"Red"}]},{"jogo":"Frankfurt","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":276,"odd":1.628,"resultado":"Green"}]},{"jogo":"Aston Villa ","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":4,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":423,"odd":1.42,"resultado":"Green"}]},{"jogo":"Monterrey ","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":2.7,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":231,"odd":1.757,"resultado":"Green"}]},{"jogo":"Deportivo cali","data":"2025-09-20","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.3,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":322,"odd":1.543,"resultado":"Green"}]},{"jogo":"Guadalajara","data":"2025-09-20","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":2.6,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":212,"odd":1.819,"resultado":"Green"}]},{"jogo":"Deportivo","data":"2025-09-20","apostas":[{"tipo":"Over","casa":"BETesporte","valor":150,"odd":3.2,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":310,"odd":1.546,"resultado":"Green"}]},{"jogo":"Chelsea Duplo","data":"2025-09-20","apostas":[{"tipo":"Casa","casa":"Superbet","valor":93.64,"odd":2.67,"resultado":"Green"},{"tipo":"Empate","casa":"bet365","valor":64.44,"odd":3.88,"resultado":"Red"},{"tipo":"Fora","casa":"Superbet","valor":100,"odd":2.5,"resultado":"Red"},{"tipo":"Proteção","casa":"Superbet","valor":342.59,"odd":1.2,"resultado":"Green"}]},{"jogo":"Fluminense ","data":"2025-09-20","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.4,"resultado":"Green"},{"tipo":"Over","casa":"Sportingbet","valor":319,"odd":1.6,"resultado":"Red"}]},{"jogo":"Philadelphia","data":"2025-09-20","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.3,"resultado":"Green"},{"tipo":"Over","casa":"Betbra","valor":321,"odd":1.546,"resultado":"Red"}]},{"jogo":"Benfica","data":"2025-09-20","apostas":[{"tipo":"Under","casa":"BETesporte","valor":100,"odd":3.2,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":167.05,"odd":1.753,"resultado":"Green"},{"tipo":"Over","casa":"Betbra","valor":17.95,"odd":1.76,"resultado":"Green"}]},{"jogo":"Midj","data":"2025-09-20","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.5,"resultado":"Green"},{"tipo":"Over","casa":"Betbra","valor":349,"odd":1.507,"resultado":"Red"}]},{"jogo":"Tottenham Duplo","data":"2025-09-20","apostas":[{"tipo":"Casa","casa":"Superbet","valor":142,"odd":2.17,"resultado":"Green"},{"tipo":"Fora","casa":"Betano","valor":100,"odd":3.05,"resultado":"Red"},{"tipo":"Empate","casa":"bet365","valor":79.43,"odd":3.82,"resultado":"Green"},{"tipo":"Empate","casa":"Betbra","valor":81,"odd":3.787,"resultado":"Green"},{"tipo":"Proteção duplo","casa":"Betano","valor":400,"odd":1.62,"resultado":"Red"},{"tipo":"Proteção duplo","casa":"Superbet","valor":200,"odd":1.62,"resultado":"Red"}]},{"jogo":"Liverpool","data":"2025-09-20","apostas":[{"tipo":"Casa","casa":"Superbet","valor":213.38,"odd":1.5,"resultado":"Green"},{"tipo":"Empate","casa":"Betbra","valor":48,"odd":6.672,"resultado":"Red"},{"tipo":"Fora","casa":"KTO","valor":50.01,"odd":6.4,"resultado":"Red"},{"tipo":"Proteção duplo","casa":"Betbra","valor":350,"odd":1.234,"resultado":"Green"}]},{"jogo":"Bayern","data":"2025-09-20","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":2.7,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":238,"odd":1.711,"resultado":"Green"}]},{"jogo":"Daej","data":"2025-09-20","apostas":[{"tipo":"Under ","casa":"BETesporte","valor":150,"odd":2.9,"resultado":"Red"},{"tipo":"Over","casa":"Luvabet","valor":269,"odd":1.67,"resultado":"Green"}]},{"jogo":"Liverpool","data":"2025-09-20","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.1,"resultado":"Red"},{"tipo":"Over","casa":"Vaidebet","valor":161.97,"odd":1.63,"resultado":"Green"},{"tipo":"Over","casa":"Stake","valor":120,"odd":1.7,"resultado":"Green"}]},{"jogo":"Tijuana","data":"2025-09-19","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.2,"resultado":"Red"},{"tipo":"Over ","casa":"Novibet","valor":310,"odd":1.54,"resultado":"Green"}]},{"jogo":"America cali","data":"2025-09-19","apostas":[{"tipo":"Over","casa":"BETesporte","valor":150,"odd":4,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":459,"odd":1.39,"resultado":"Green"}]},{"jogo":"Novorizontino","data":"2025-09-19","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.7,"resultado":"Green"},{"tipo":"Over","casa":"Sportingbet","valor":348.99,"odd":1.47,"resultado":"Red"},{"tipo":"Over","casa":"Vaidebet","valor":27.75,"odd":1.46,"resultado":"Red"}]},{"jogo":"Huracan","data":"2025-09-19","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":2.8,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":260,"odd":1.699,"resultado":"Green"}]},{"jogo":"Bingo","data":"2025-09-19","apostas":[{"tipo":"Bingo","casa":"Superbet","valor":2.5,"odd":16.925,"resultado":"Green"},{"tipo":"Bingo","casa":"Superbet","valor":3,"odd":16.925,"resultado":"Green"}]},{"jogo":"Stuttgart ","data":"2025-09-19","apostas":[{"tipo":"Over","casa":"BETesporte","valor":78,"odd":2,"resultado":"Red"},{"tipo":"Under","casa":"Betbra","valor":200,"odd":2,"resultado":"Red"}]},{"jogo":"Betis","data":"2025-09-19","apostas":[{"tipo":"Casa","casa":"Betano","valor":234.61,"odd":1.93,"resultado":"Red"},{"tipo":"Empate","casa":"Esportivabet","valor":113.2,"odd":4,"resultado":"Green"}]},{"jogo":"Bielefeld","data":"2025-09-19","apostas":[{"tipo":"Under ","casa":"BETesporte","valor":150,"odd":3.5,"resultado":"Red"},{"tipo":"Over","casa":"Rei do Pitaco","valor":322,"odd":1.543,"resultado":"Green"}]}
];

// Inicia as apostas do localStorage ou com dados iniciais se não houver dados salvos
let apostas = JSON.parse(localStorage.getItem("apostas")) || dadosIniciais;
let apostaCount = 2;
let apostaSendoEditadaIndex = -1;

function abrirModal(tipo) {
    if (tipo === 'nova') {
        document.getElementById('modal-nova-aposta').style.display = "block";
        limparFormulario();
        popularCasas();
        carregarJogosOnline();
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
    document.getElementById('jogo').value = '';
    document.getElementById('data').value = '';
    document.getElementById('apostas-dinamicas').innerHTML = '';
    apostaCount = 1;
    adicionarApostaCampos();
}

function popularCasas() {
    const selects = document.querySelectorAll('.casa-de-aposta');
    selects.forEach(select => {
        select.innerHTML = '<option value="">Selecione a Casa</option>';
        casasDeAposta.forEach(casa => {
            const option = document.createElement("option");
            option.value = casa;
            option.textContent = casa;
            select.appendChild(option);
        });
    });
}

function adicionarApostaCampos(aposta = {}) {
    const container = document.getElementById('apostas-dinamicas');
    const div = document.createElement('div');
    div.classList.add('aposta-fields');
    div.innerHTML = `
        <hr>
        <label for="tipo-${apostaCount}">Tipo de Aposta:</label>
        <input type="text" id="tipo-${apostaCount}" placeholder="Ex: Over 2.5" value="${aposta.tipo || ''}" required>
        
        <label for="casa-${apostaCount}">Casa de Aposta:</label>
        <select id="casa-${apostaCount}" class="casa-de-aposta" required>
        </select>
        
        <label for="valor-${apostaCount}">Valor Apostado:</label>
        <input type="number" id="valor-${apostaCount}" step="0.01" placeholder="R$ 0,00" value="${aposta.valor || ''}" required>
        
        <label for="odd-${apostaCount}">Odd:</label>
        <input type="number" id="odd-${apostaCount}" step="0.001" placeholder="1.00" value="${aposta.odd || ''}" required>

        <label for="resultado-${apostaCount}">Resultado:</label>
        <select id="resultado-${apostaCount}" required>
            <option value="Pendente" ${aposta.resultado === 'Pendente' ? 'selected' : ''}>Pendente</option>
            <option value="Green" ${aposta.resultado === 'Green' ? 'selected' : ''}>Green</option>
            <option value="Red" ${aposta.resultado === 'Red' ? 'selected' : ''}>Red</option>
        </select>
    `;
    container.appendChild(div);
    popularCasas();
    const selectCasa = document.getElementById(`casa-${apostaCount}`);
    if (aposta.casa) {
        selectCasa.value = aposta.casa;
    }
    apostaCount++;
}

function salvarApostas() {
    const jogo = document.getElementById('jogo').value;
    const data = document.getElementById('data').value;
    const apostasDoForm = [];

    const campos = document.querySelectorAll('.aposta-fields');
    campos.forEach(campo => {
        const tipo = campo.querySelector('[id^="tipo-"]').value;
        const casa = campo.querySelector('[id^="casa-"]').value;
        const valor = parseFloat(campo.querySelector('[id^="valor-"]').value);
        const odd = parseFloat(campo.querySelector('[id^="odd-"]').value);
        const resultado = campo.querySelector('[id^="resultado-"]').value;

        if (tipo && casa && valor && odd && resultado) {
            apostasDoForm.push({
                tipo,
                casa,
                valor,
                odd,
                resultado
            });
        }
    });

    if (jogo && data && apostasDoForm.length > 0) {
        const novaAposta = {
            jogo,
            data,
            apostas: apostasDoForm
        };
        apostas.unshift(novaAposta);
        localStorage.setItem('apostas', JSON.stringify(apostas));
        fecharModal('nova');
        renderApostas();
        atualizarDashboard();
        renderGraficoLucroDiario();
        limparFormulario();
    } else {
        alert("Por favor, preencha todos os campos obrigatórios.");
    }
}

function renderApostas() {
    const container = document.getElementById('historico-container');
    container.innerHTML = '';
    apostas.forEach((aposta, index) => {
        const div = document.createElement('div');
        div.classList.add('aposta-card');
        div.setAttribute('data-index', index);
        div.innerHTML = `
            <h3>${aposta.jogo}</h3>
            <p><strong>Data:</strong> ${aposta.data}</p>
            <hr>
            ${aposta.apostas.map(a => `
                <p><strong>Tipo:</strong> ${a.tipo}</p>
                <p><strong>Casa:</strong> ${a.casa}</p>
                <p><strong>Valor:</strong> R$ ${a.valor.toFixed(2)}</p>
                <p><strong>Odd:</strong> ${a.odd.toFixed(3)}</p>
                <span class="aposta-card-status status-${a.resultado.toLowerCase()}">${a.resultado}</span>
                <hr>
            `).join('')}
            <div class="aposta-card-actions">
                <button class="btn-editar" onclick="editarAposta(${index})">Editar</button>
                <button class="btn-excluir" onclick="excluirAposta(${index})">Excluir</button>
            </div>
        `;
        container.appendChild(div);
    });
}

function editarAposta(index) {
    apostaSendoEditadaIndex = index;
    const aposta = apostas[index];
    document.getElementById('edicao-jogo').value = aposta.jogo;
    document.getElementById('edicao-data').value = aposta.data;
    const container = document.getElementById('edicao-apostas-container');
    container.innerHTML = '';

    aposta.apostas.forEach((a, i) => {
        const div = document.createElement('div');
        div.classList.add('edicao-aposta-fields');
        div.innerHTML = `
            <hr>
            <label for="edicao-tipo-${i}">Tipo de Aposta:</label>
            <input type="text" id="edicao-tipo-${i}" value="${a.tipo}">
            
            <label for="edicao-casa-${i}">Casa de Aposta:</label>
            <select id="edicao-casa-${i}" class="edicao-casa-de-aposta">
            </select>
            
            <label for="edicao-valor-${i}">Valor Apostado:</label>
            <input type="number" id="edicao-valor-${i}" step="0.01" value="${a.valor}">
            
            <label for="edicao-odd-${i}">Odd:</label>
            <input type="number" id="edicao-odd-${i}" step="0.001" value="${a.odd}">

            <label for="edicao-resultado-${i}">Resultado:</label>
            <select id="edicao-resultado-${i}">
                <option value="Pendente" ${a.resultado === 'Pendente' ? 'selected' : ''}>Pendente</option>
                <option value="Green" ${a.resultado === 'Green' ? 'selected' : ''}>Green</option>
                <option value="Red" ${a.resultado === 'Red' ? 'selected' : ''}>Red</option>
            </select>
        `;
        container.appendChild(div);

        const selectCasa = document.getElementById(`edicao-casa-${i}`);
        casasDeAposta.forEach(casa => {
            const option = document.createElement("option");
            option.value = casa;
            option.textContent = casa;
            selectCasa.appendChild(option);
        });
        selectCasa.value = a.casa;
    });

    fecharModal('nova');
    abrirModal('edicao');
}

function salvarEdicao() {
    const aposta = apostas[apostaSendoEditadaIndex];
    aposta.jogo = document.getElementById('edicao-jogo').value;
    aposta.data = document.getElementById('edicao-data').value;
    
    const campos = document.querySelectorAll('.edicao-aposta-fields');
    aposta.apostas = [];
    campos.forEach(campo => {
        const tipo = campo.querySelector('[id^="edicao-tipo-"]').value;
        const casa = campo.querySelector('[id^="edicao-casa-"]').value;
        const valor = parseFloat(campo.querySelector('[id^="edicao-valor-"]').value);
        const odd = parseFloat(campo.querySelector('[id^="edicao-odd-"]').value);
        const resultado = campo.querySelector('[id^="edicao-resultado-"]').value;

        if (tipo && casa && valor && odd && resultado) {
            aposta.apostas.push({
                tipo,
                casa,
                valor,
                odd,
                resultado
            });
        }
    });

    localStorage.setItem('apostas', JSON.stringify(apostas));
    fecharModal('edicao');
    renderApostas();
    atualizarDashboard();
    renderGraficoLucroDiario();
}

function excluirAposta(index) {
    if (confirm("Tem certeza que deseja excluir esta aposta?")) {
        apostas.splice(index, 1);
        localStorage.setItem('apostas', JSON.stringify(apostas));
        renderApostas();
        atualizarDashboard();
        renderGraficoLucroDiario();
    }
}

function atualizarDashboard() {
    const agora = new Date();
    const mesAtual = agora.getMonth();
    const anoAtual = agora.getFullYear();

    const apostasDoMes = apostas.filter(aposta => {
        const dataAposta = new Date(aposta.data);
        return dataAposta.getMonth() === mesAtual && dataAposta.getFullYear() === anoAtual;
    });

    const apostasDeHoje = apostas.filter(aposta => {
        const dataAposta = new Date(aposta.data);
        return dataAposta.getDate() === agora.getDate() && dataAposta.getMonth() === mesAtual && dataAposta.getFullYear() === anoAtual;
    });

    let totalApostadoMes = 0;
    let ganhosMes = 0;
    let pendenteMes = 0;
    let lucroMes = 0;
    let ganhoHoje = 0;
    let totalApostadoHoje = 0;

    apostasDoMes.forEach(aposta => {
        aposta.apostas.forEach(a => {
            totalApostadoMes += a.valor;
            if (a.resultado === 'Green') {
                ganhosMes++;
                lucroMes += (a.valor * a.odd) - a.valor;
            } else if (a.resultado === 'Red') {
                lucroMes -= a.valor;
            } else if (a.resultado === 'Pendente') {
                pendenteMes++;
            }
        });
    });

    apostasDeHoje.forEach(aposta => {
        aposta.apostas.forEach(a => {
            totalApostadoHoje += a.valor;
            if (a.resultado === 'Green') {
                ganhoHoje += (a.valor * a.odd) - a.valor;
            } else if (a.resultado === 'Red') {
                ganhoHoje -= a.valor;
            }
        });
    });

    const roiMes = totalApostadoMes > 0 ? (lucroMes / totalApostadoMes) * 100 : 0;

    document.getElementById('totalApostadoMes').textContent = `R$ ${totalApostadoMes.toFixed(2)}`;
    document.getElementById('ganhosMes').textContent = ganhosMes;
    document.getElementById('pendenteMes').textContent = pendenteMes;
    document.getElementById('lucroMes').textContent = `R$ ${lucroMes.toFixed(2)}`;
    document.getElementById('roiMes').textContent = `${roiMes.toFixed(2)}%`;
    document.getElementById('ganhoHoje').textContent = `R$ ${ganhoHoje.toFixed(2)}`;

    // Atualiza a cor do texto do lucro
    const lucroMesElement = document.getElementById('lucroMes');
    lucroMesElement.classList.remove('lucro-positive', 'lucro-negative', 'lucro-zero');
    if (lucroMes > 0) {
        lucroMesElement.classList.add('lucro-positive');
    } else if (lucroMes < 0) {
        lucroMesElement.classList.add('lucro-negative');
    } else {
        lucroMesElement.classList.add('lucro-zero');
    }

    const ganhoHojeElement = document.getElementById('ganhoHoje');
    ganhoHojeElement.classList.remove('lucro-positive', 'lucro-negative', 'lucro-zero');
    if (ganhoHoje > 0) {
        ganhoHojeElement.classList.add('lucro-positive');
    } else if (ganhoHoje < 0) {
        ganhoHojeElement.classList.add('lucro-negative');
    } else {
        ganhoHojeElement.classList.add('lucro-zero');
    }
}

// Gráfico de Lucro Diário
let lucroDiarioChart;

function renderGraficoLucroDiario() {
    const lucroPorDia = {};

    apostas.forEach(aposta => {
        const data = aposta.data;
        if (!lucroPorDia[data]) {
            lucroPorDia[data] = 0;
        }
        aposta.apostas.forEach(a => {
            if (a.resultado === 'Green') {
                lucroPorDia[data] += (a.valor * a.odd) - a.valor;
            } else if (a.resultado === 'Red') {
                lucroPorDia[data] -= a.valor;
            }
        });
    });

    const datasOrdenadas = Object.keys(lucroPorDia).sort();
    const dadosGrafico = datasOrdenadas.map(data => lucroPorDia[data]);
    
    if (lucroDiarioChart) {
        lucroDiarioChart.destroy();
    }

    const ctx = document.getElementById('lucroDiarioChart').getContext('2d');
    lucroDiarioChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: datasOrdenadas,
            datasets: [{
                label: 'Lucro Diário',
                data: dadosGrafico,
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
                            label += 'R$ ' + context.raw.toFixed(2);
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

// Funcionalidade para carregar jogos online (API)
const API_KEY = "Ee702040c0fae28b74e1c6e680a357a9";

async function carregarJogosOnline() {
    const selectJogo = document.getElementById("jogo");
    selectJogo.innerHTML = '<option value="">Carregando jogos...</option>';

    const url = `https://v3.football.api-sports.io/fixtures?live=all`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'x-rapidapi-key': API_KEY,
                'x-rapidapi-host': 'v3.football.api-sports.io'
            }
        });
        const data = await response.json();

        if (data && data.response && data.response.length > 0) {
            selectJogo.innerHTML = '<option value="">Selecione um jogo...</option>';
            data.response.forEach(fixture => {
                const homeTeam = fixture.teams.home.name;
                const awayTeam = fixture.teams.away.name;
                const jogo = `${homeTeam} vs ${awayTeam}`;
                const option = document.createElement("option");
                option.value = jogo;
                option.textContent = jogo;
                selectJogo.appendChild(option);
            });
        } else {
            selectJogo.innerHTML = '<option value="">Nenhum jogo online encontrado.</option>';
        }
    } catch (error) {
        console.error("Erro ao carregar jogos:", error);
        selectJogo.innerHTML = '<option value="">Erro ao carregar jogos. Tente novamente.</option>';
    }
}


renderApostas();
atualizarDashboard();
renderGraficoLucroDiario();
