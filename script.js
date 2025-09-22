const casasDeAposta = [
    "Aposta Ganha", "Apostatudo", "BateuBET", "bet365", "Betano", "Betbra", "Bet da Sorte", "BETesporte", "Betnacional", "BRBet", "BullSbet", "Esportes da Sorte", "Esportedasorte", "Estrelabet", "F12 bet", "Faz1bet", "FullBet", "KTO", "LuckBet", "Luvabet", "Novibet", "Outra", "Rei do Pitaco", "Sporty", "Stake", "Superbet", "Tivobet", "Vaidebet", "Vbet", "Verabet", "Outra"
];

// Sua chave da API, agora incluída no código
const API_KEY = "ee702040c0fae28b74e1c6e680a357a9";

const dadosIniciais = [
    {"jogo":"Coritba","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.3,"resultado":"Pendente"},{"tipo":"Over","casa":"Betano","valor":325.66,"odd":1.52,"resultado":"Pendente"}]},
    {"jogo":"Inter milao","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.3,"resultado":"Pendente"},{"tipo":"Over","casa":"Betbra","valor":320,"odd":1.565,"resultado":"Pendente"}]},
    {"jogo":"Faisaly","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3,"resultado":"Pendente"},{"tipo":"Over","casa":"Superbet","valor":269.46,"odd":1.67,"resultado":"Pendente"}]},
    {"jogo":"Arsenal","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":2.5,"resultado":"Green"},{"tipo":"Over","casa":"Betbra","valor":202,"odd":1.86,"resultado":"Red"}]},
    {"jogo":"Leverkusen ","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.3,"resultado":"Green"},{"tipo":"Over","casa":"Betbra","valor":305,"odd":1.625,"resultado":"Red"}]},
    {"jogo":"Bodo ","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.3,"resultado":"Green"},{"tipo":"Over ","casa":"BETesporte","valor":345,"odd":1.523,"resultado":"Red"}]},
    {"jogo":"Frankfurt","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":276,"odd":1.628,"resultado":"Green"}]},
    {"jogo":"Aston Villa ","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":4,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":423,"odd":1.42,"resultado":"Green"}]},
    {"jogo":"Monterrey ","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":2.7,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":231,"odd":1.757,"resultado":"Green"}]},
    {"jogo":"Deportivo cali","data":"2025-09-20","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.3,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":322,"odd":1.543,"resultado":"Green"}]},
    {"jogo":"Guadalajara","data":"2025-09-20","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":2.6,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":212,"odd":1.819,"resultado":"Green"}]},
    {"jogo":"Deportivo","data":"2025-09-20","apostas":[{"tipo":"Over","casa":"BETesporte","valor":150,"odd":3.2,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":310,\"odd\":1.546,\"resultado\":\"Green\"}]},
    {"jogo":"Chelsea Duplo","data":"2025-09-20","apostas":[{"tipo":"Casa","casa":"Superbet","valor":93.64,"odd":2.67,"resultado":"Green"},{"tipo":"Empate","casa":"bet365","valor":64.44,"odd":3.88,"resultado":"Red"},{"tipo":"Fora","casa":"Superbet","valor":100,"odd":2.5,"resultado":"Red"},{"tipo":"Proteção","casa":"Superbet","valor":342.59,"odd":1.2,"resultado":"Green"}]},
    {"jogo":"Fluminense ","data":"2025-09-20","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.4,"resultado":"Green"},{"tipo":"Over","casa":"Sportingbet","valor":319,"odd":1.6,"resultado":"Red"}]},
    {"jogo":"Philadelphia","data":"2025-09-20","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.3,"resultado":"Green"},{"tipo":"Over","casa":"Betbra","valor":321,"odd":1.546,"resultado":"Red"}]},
    {"jogo":"Benfica","data":"2025-09-20","apostas":[{"tipo":"Under","casa":"BETesporte","valor":100,"odd":3.2,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":167.05,"odd":1.753,"resultado":"Green"},{"tipo":"Over","casa":"Betbra","valor":17.95,"odd":1.76,"resultado":"Green"}]},
    {"jogo":"Midj","data":"2025-09-20","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.5,"resultado":"Green"},{"tipo":"Over","casa":"Betbra","valor":349,"odd":1.507,"resultado":"Red"}]},
    {"jogo":"Tottenham Duplo","data":"2025-09-20","apostas":[{"tipo":"Casa","casa":"Superbet","valor":142,"odd":2.17,"resultado":"Green"},{"tipo":"Fora","casa":"Betano","valor":100,"odd":3.05,"resultado":"Red"},{"tipo":"Empate","casa":"bet365","valor":79.43,"odd":3.82,"resultado":"Green"},{"tipo":"Empate","casa":"Betbra","valor":81,"odd":3.787,"resultado":"Green"},{"tipo":"Proteção duplo","casa":"Betano","valor":400,"odd":1.62,"resultado":"Red"},{"tipo":"Proteção duplo","casa":"Superbet","valor":200,"odd":1.62,"resultado":"Red"}]},
    {"jogo":"Liverpool","data":"2025-09-20","apostas":[{"tipo":"Casa","casa":"Superbet","valor":213.38,"odd":1.5,"resultado":"Green"},{"tipo":"Empate","casa":"Betbra","valor":48,"odd":6.672,"resultado":"Red"},{"tipo":"Fora","casa":"KTO","valor":50.01,"odd":6.4,"resultado":"Red"},{"tipo":"Proteção duplo","casa":"Betbra","valor":350,"odd":1.234,"resultado":"Green"}]},
    {"jogo":"Bayern","data":"2025-09-20","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":2.7,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":238,"odd":1.711,"resultado":"Green"}]},
    {"jogo":"Daej","data":"2025-09-20","apostas":[{"tipo":"Under ","casa":"BETesporte","valor":150,"odd":2.9,"resultado":"Red"},{"tipo":"Over","casa":"Luvabet","valor":269,"odd":1.67,"resultado":"Green"}]},
    {"jogo":"Liverpool","data":"2025-09-20","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.1,"resultado":"Red"},{"tipo":"Over","casa":"Vaidebet","valor":161.97,"odd":1.63,"resultado":"Green"},{"tipo":"Over","casa":"Stake","valor":120,"odd":1.7,"resultado":"Green"}]},
    {"jogo":"Tijuana","data":"2025-09-19","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.2,"resultado":"Red"},{"tipo":"Over ","casa":"Novibet","valor":310,"odd":1.54,"resultado":"Green"}]},
    {"jogo":"America cali","data":"2025-09-19","apostas":[{"tipo":"Over","casa":"BETesporte","valor":150,"odd":4,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":459,"odd":1.39,"resultado":"Green"}]},
    {"jogo":"Novorizontino","data":"2025-09-19","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.7,"resultado":"Green"},{"tipo":"Over","casa":"Sportingbet","valor":348.99,"odd":1.47,"resultado":"Red"},{"tipo":"Over","casa":"Vaidebet","valor":27.75,"odd":1.46,"resultado":"Red"}]},
    {"jogo":"Huracan","data":"2025-09-19","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":2.8,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":260,"odd":1.699,"resultado":"Green"}]},
    {"jogo":"Bingo","data":"2025-09-19","apostas":[{"tipo":"Bingo","casa":"Superbet","valor":2.5,"odd":16.925,"resultado":"Green"},{"tipo":"Bingo","casa":"Superbet","valor":3,"odd":16.925,"resultado":"Green"}]},
    {"jogo":"Stuttgart ","data":"2025-09-19","apostas":[{"tipo":"Over","casa":"BETesporte","valor":78,"odd":2,"resultado":"Red"},{"tipo":"Under","casa":"Betbra","valor":200,"odd":2,"resultado":"Red"}]},
    {"jogo":"Betis","data":"2025-09-19","apostas":[{"tipo":"Casa","casa":"Betano","valor":234.61,"odd":1.93,"resultado":"Red"},{"tipo":"Empate","casa":"Esportivabet","valor":113.2,"odd":4,"resultado":"Green"}]},
    {"jogo":"Bielefeld","data":"2025-09-19","apostas":[{"tipo":"Under ","casa":"BETesporte","valor":150,"odd":3.5,"resultado":"Red"},{"tipo":"Over","casa":"Rei do Pitaco","valor":355,"odd":1.48,"resultado":"Green"}]},
    {"jogo":"Khaleej","data":"2025-09-19","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":278,"odd":1.626,"resultado":"Green"}]},
    {"jogo":"Salpa","data":"2025-09-19","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.6,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":393,"odd":1.458,"resultado":"Green"}]},
    {"jogo":"Cassino","data":"2025-09-19","apostas":[{"tipo":"Cassino","casa":"bet365","valor":17,"odd":2,"resultado":"Green"},{"tipo":"Cassino","casa":"bet365","valor":0.75,"odd":2,"resultado":"Green"}]},
    {"jogo":"Dhafra","data":"2025-09-19","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":4.3,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":461,"odd":1.409,"resultado":"Green"}]},
    {"jogo":"Wuhan Three Towns","data":"2025-09-19","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.3,"resultado":"Green"},{"tipo":"Over","casa":"Betbra","valor":305,"odd":1.625,"resultado":"Red"}]},
    {"jogo":"Guangzhou FC","data":"2025-09-19","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.3,"resultado":"Green"},{"tipo":"Over","casa":"Betbra","valor":306,"odd":1.623,"resultado":"Red"}]},
    {"jogo":"Uruguai ","data":"2025-09-18","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,\"odd\":3,\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"Betbra\",\"valor\":283,\"odd\":1.611,\"resultado\":\"Green\"}]},
    {"jogo":"Vasco","data":"2025-09-18","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.2,"resultado":"Green"},{"tipo":"Over","casa":"Betbra","valor":298,"odd":1.58,"resultado":"Red"}]},
    {"jogo":"Al Ahli","data":"2025-09-18","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":2.5,"resultado":"Green"},{"tipo":"Over","casa":"Betbra","valor":194,"odd":1.9,"resultado":"Red"}]},
    {"jogo":"Al Nasr","data":"2025-09-18","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.2,"resultado":"Green"},{"tipo":"Over","casa":"Betbra","valor":307,"odd":1.57,"resultado":"Red"}]},
    {"jogo":"Al Riyadh","data":"2025-09-18","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.2,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":300,"odd":1.579,"resultado":"Green"}]},
    {"jogo":"Hatta club","data":"2025-09-18","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.2,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":300,"odd":1.583,"resultado":"Green"}]},
    {"jogo":"Poli Iasi","data":"2025-09-18","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.4,"resultado":"Green"},{"tipo":"Over","casa":"Betbra","valor":300,"odd":1.54,"resultado":"Red"}]},
    {"jogo":"Lazio","data":"2025-09-18","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3,"resultado":"Green"},{"tipo":"Over","casa":"Betbra","valor":286,"odd":1.61,"resultado":"Red"}]},
    {"jogo":"Ajax","data":"2025-09-18","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":2.7,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":238,"odd":1.711,"resultado":"Green"}]},
    {"jogo":"Gwangju","data":"2025-09-18","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.3,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":321,"odd":1.546,"resultado":"Green"}]},
    {"jogo":"Goiás","data":"2025-09-18","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.7,"resultado":"Green"},{"tipo":"Over","casa":"Betbra","valor":331,"odd":1.554,"resultado":"Red"}]},
    {"jogo":"Bahia","data":"2025-09-18","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.1,"resultado":"Green"},{"tipo":"Over","casa":"Betbra","valor":298,"odd":1.583,"resultado":"Red"}]},
    {"jogo":"Ponte preta","data":"2025-09-17","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":2.4,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":182,"odd":1.94,"resultado":"Green"}]},
    {"jogo":"Atletico mg","data":"2025-09-17","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.2,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":289,"odd":1.6,"resultado":"Green"}]},
    {"jogo":"Al Taawon","data":"2025-09-17","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.1,"resultado":"Red"},{"tipo":"Over","casa":"bet365","valor":280,"odd":1.663,"resultado":"Green"}]},
    {"jogo":"Goa FC","data":"2025-09-17","apostas":[{"tipo":"Under ","casa":"BETesporte","valor":150,"odd":2.3,"resultado":"Green"},{"tipo":"Over","casa":"bet365","valor":177,"odd":1.975,"resultado":"Red"}]},
    {"jogo":"PSG x Atalanta","data":"2025-09-17","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3,"resultado":"Red"},{"tipo":"Over","casa":"bet365","valor":280,"odd":1.604,"resultado":"Green"}]},
    {"jogo":"Ajax X Inter Milão ","data":"2025-09-17","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":2.9,"resultado":"Green"},{"tipo":"Over","casa":"bet365","valor":268,"odd":1.624,"resultado":"Red"}]},
    {"jogo":"Botafogo x Mirassol ","data":"2025-09-17","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":4.1,"resultado":"Red"},{"tipo":"Over","casa":"Outra","valor":431,"odd":1.43,"resultado":"Green"}]},
    {"jogo":"New York city","data":"2025-09-17","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":2.8,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":250,"odd":1.7,"resultado":"Green"}]}
];

let apostas = JSON.parse(localStorage.getItem("apostas")) || dadosIniciais;

let apostaCount = 2;
let apostaSendoEditadaIndex = -1;

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
        selectJogo.innerHTML = '<option value="">Erro ao carregar jogos.</option>';
    }
}

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
    const apostasDinamicasDiv = document.getElementById('apostas-dinamicas');
    apostasDinamicasDiv.innerHTML = '';
    apostaCount = 2;
    adicionarApostaCampos();
    adicionarApostaCampos();
}

function popularCasas(prefixo = '') {
    const seletores = document.querySelectorAll(`select[id^=\"${prefixo}casa\"]`);
    seletores.forEach(seletor => {
        if (seletor.options.length === 0) {
            casasDeAposta.forEach(casa => {
                const option = document.createElement('option');
                option.value = casa;
                option.textContent = casa;
                seletor.appendChild(option);
            });
        }
    });
}

function adicionarApostaCampos() {
    const container = document.getElementById('apostas-dinamicas');
    const novoDiv = document.createElement('div');
    novoDiv.classList.add('aposta-campo');
    novoDiv.innerHTML = `
        <h4>Aposta ${apostaCount}</h4>
        <label for="tipo-${apostaCount}">Tipo:</label>
        <input type="text" id="tipo-${apostaCount}" placeholder="Ex: Over/Under">
        <label for="casa-${apostaCount}">Casa:</label>
        <select id="casa-${apostaCount}"></select>
        <label for="valor-${apostaCount}">Valor:</label>
        <input type="number" step="0.01" id="valor-${apostaCount}" placeholder="R$ 0.00">
        <label for="odd-${apostaCount}">Odd:</label>
        <input type="number" step="0.001" id="odd-${apostaCount}" placeholder="1.50">
    `;
    container.appendChild(novoDiv);
    popularCasas(`casa-${apostaCount}`);
    apostaCount++;
}

function salvarApostas() {
    const jogo = document.getElementById('jogo').value;
    const data = document.getElementById('data').value;
    const apostasDoFormulario = [];

    for (let i = 1; i < apostaCount; i++) {
        const tipo = document.getElementById(`tipo-${i}`).value;
        const casa = document.getElementById(`casa-${i}`).value;
        const valor = parseFloat(document.getElementById(`valor-${i}`).value);
        const odd = parseFloat(document.getElementById(`odd-${i}`).value);

        if (tipo && casa && valor && odd) {
            apostasDoFormulario.push({ tipo, casa, valor, odd, resultado: 'Pendente' });
        }
    }

    if (jogo && data && apostasDoFormulario.length > 0) {
        apostas.push({ jogo, data, apostas: apostasDoFormulario });
        salvarDados();
        fecharModal('nova');
        renderApostas();
        atualizarDashboard();
        renderGraficoLucroDiario();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

function salvarEdicao() {
    const novoJogo = document.getElementById('edicao-jogo').value;
    const novaData = document.getElementById('edicao-data').value;
    const novasApostas = [];

    document.querySelectorAll('.edicao-aposta').forEach((apostaDiv) => {
        const index = apostaDiv.dataset.index;
        const tipo = document.getElementById(`edicao-tipo-${index}`).value;
        const casa = document.getElementById(`edicao-casa-${index}`).value;
        const valor = parseFloat(document.getElementById(`edicao-valor-${index}`).value);
        const odd = parseFloat(document.getElementById(`edicao-odd-${index}`).value);
        const resultado = document.getElementById(`edicao-resultado-${index}`).value;
        novasApostas.push({ tipo, casa, valor, odd, resultado });
    });

    if (apostaSendoEditadaIndex !== -1 && novoJogo && novaData && novasApostas.length > 0) {
        apostas[apostaSendoEditadaIndex].jogo = novoJogo;
        apostas[apostaSendoEditadaIndex].data = novaData;
        apostas[apostaSendoEditadaIndex].apostas = novasApostas;
        salvarDados();
        fecharModal('edicao');
        renderApostas();
        atualizarDashboard();
        renderGraficoLucroDiario();
    }
}

function salvarDados() {
    localStorage.setItem('apostas', JSON.stringify(apostas));
}

function renderApostas() {
    const container = document.getElementById('historico-container');
    container.innerHTML = '';
    apostas.forEach((aposta, index) => {
        const apostaDiv = document.createElement('div');
        apostaDiv.classList.add('aposta-card');
        apostaDiv.innerHTML = `
            <h3>${aposta.jogo}</h3>
            <p><strong>Data:</strong> ${new Date(aposta.data + "T00:00:00").toLocaleDateString('pt-BR')}</p>
        `;
        const totalApostado = aposta.apostas.reduce((total, item) => total + item.valor, 0);
        const totalResultado = aposta.apostas.reduce((total, item) => {
            if (item.resultado === 'Green') {
                return total + (item.valor * item.odd - item.valor);
            } else if (item.resultado === 'Red') {
                return total - item.valor;
            } else {
                return total;
            }
        }, 0);
        const statusClass = aposta.apostas.every(a => a.resultado !== 'Pendente') ? 'status-finalizada' : 'status-pendente';
        const statusText = aposta.apostas.every(a => a.resultado !== 'Pendente') ? 'Finalizada' : 'Pendente';
        apostaDiv.innerHTML += `
            <div class="aposta-card-status ${statusClass}">${statusText}</div>
        `;
        aposta.apostas.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('aposta-item');
            itemDiv.innerHTML = `
                <p><strong>Tipo:</strong> ${item.tipo}</p>
                <p><strong>Casa:</strong> ${item.casa}</p>
                <p><strong>Valor:</strong> R$ ${item.valor.toFixed(2)}</p>
                <p><strong>Odd:</strong> ${item.odd}</p>
                <p><strong>Resultado:</strong> <span class="resultado-${item.resultado.toLowerCase()}">${item.resultado}</span></p>
            `;
            apostaDiv.appendChild(itemDiv);
        });
        apostaDiv.innerHTML += `
            <p><strong>Total Apostado:</strong> R$ ${totalApostado.toFixed(2)}</p>
            <p><strong>Resultado:</strong> <span class="${totalResultado >= 0 ? 'resultado-green' : 'resultado-red'}">R$ ${totalResultado.toFixed(2)}</span></p>
            <button onclick="prepararEdicao(${index})">Editar</button>
            <button onclick="deletarAposta(${index})">Deletar</button>
        `;
        container.appendChild(apostaDiv);
    });
}

function prepararEdicao(index) {
    apostaSendoEditadaIndex = index;
    const aposta = apostas[index];
    document.getElementById('edicao-jogo').value = aposta.jogo;
    document.getElementById('edicao-data').value = aposta.data;

    const container = document.getElementById('edicao-apostas-container');
    container.innerHTML = '';

    aposta.apostas.forEach((apostaItem, itemIndex) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('edicao-aposta');
        itemDiv.dataset.index = itemIndex;
        itemDiv.innerHTML = `
            <h4>Aposta ${itemIndex + 1}</h4>
            <label for="edicao-tipo-${itemIndex}">Tipo:</label>
            <input type="text" id="edicao-tipo-${itemIndex}" value="${apostaItem.tipo}">
            <label for="edicao-casa-${itemIndex}">Casa:</label>
            <select id="edicao-casa-${itemIndex}"></select>
            <label for="edicao-valor-${itemIndex}">Valor:</label>
            <input type="number" step="0.01" id="edicao-valor-${itemIndex}" value="${apostaItem.valor}">
            <label for="edicao-odd-${itemIndex}">Odd:</label>
            <input type="number" step="0.001" id="edicao-odd-${itemIndex}" value="${apostaItem.odd}">
            <label for="edicao-resultado-${itemIndex}">Resultado:</label>
            <select id="edicao-resultado-${itemIndex}">
                <option value="Pendente" ${apostaItem.resultado === 'Pendente' ? 'selected' : ''}>Pendente</option>
                <option value="Green" ${apostaItem.resultado === 'Green' ? 'selected' : ''}>Green</option>
                <option value="Red" ${apostaItem.resultado === 'Red' ? 'selected' : ''}>Red</option>
            </select>
        `;
        container.appendChild(itemDiv);
        popularCasas(`edicao-casa-${itemIndex}`);
        document.getElementById(`edicao-casa-${itemIndex}`).value = apostaItem.casa;
    });

    abrirModal('edicao');
}
     function deletarAposta(index) {
    if (confirm("Tem certeza que deseja deletar esta aposta?")) {
        apostas.splice(index, 1);
        salvarDados();
        renderApostas();
        atualizarDashboard();
        renderGraficoLucroDiario();
    }
}

function atualizarDashboard() {
    const totalApostadoMes = apostas.reduce((total, aposta) => total + aposta.apostas.reduce((soma, item) => soma + item.valor, 0), 0);
    const totalLucroMes = apostas.reduce((total, aposta) => total + aposta.apostas.reduce((soma, item) => {
        if (item.resultado === 'Green') return soma + (item.valor * item.odd - item.valor);
        if (item.resultado === 'Red') return soma - item.valor;
        return soma;
    }, 0), 0);
    const totalGreens = apostas.reduce((total, aposta) => total + aposta.apostas.filter(item => item.resultado === 'Green').length, 0);
    const totalPendente = apostas.reduce((total, aposta) => total + aposta.apostas.filter(item => item.resultado === 'Pendente').length, 0);

    const today = new Date().toISOString().split('T')[0];
    const totalLucroHoje = apostas
        .filter(aposta => aposta.data === today)
        .reduce((total, aposta) => total + aposta.apostas.reduce((soma, item) => {
            if (item.resultado === 'Green') return soma + (item.valor * item.odd - item.valor);
            if (item.resultado === 'Red') return soma - item.valor;
            return soma;
        }, 0), 0);

    const roiMes = totalApostadoMes > 0 ? ((totalLucroMes / totalApostadoMes) * 100).toFixed(2) : 0;
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

    document.getElementById("roiMes").innerText = `${roiMes}%`;
}

let lucroDiarioChart = null;

function renderGraficoLucroDiario() {
    const dadosPorData = apostas.reduce((acc, aposta) => {
        const data = aposta.data;
        const lucroDia = aposta.apostas.reduce((soma, item) => {
            if (item.resultado === 'Green') return soma + (item.valor * item.odd - item.valor);
            if (item.resultado === 'Red') return soma - item.valor;
            return soma;
        }, 0);

        if (!acc[data]) {
            acc[data] = 0;
        }
        acc[data] += lucroDia;
        return acc;
    }, {});

    const datas = Object.keys(dadosPorData).sort();
    const lucros = datas.map(data => dadosPorData[data]);

    if (lucroDiarioChart) {
        lucroDiarioChart.destroy();
    }

    const ctx = document.getElementById('lucroDiarioChart').getContext('2d');
    lucroDiarioChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: datas.map(data => new Date(data + "T00:00:00").toLocaleDateString('pt-BR')),
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

renderApostas();
atualizarDashboard();
renderGraficoLucroDiario();
