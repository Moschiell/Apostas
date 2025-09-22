const casasDeAposta = ["Aposta Ganha", "Apostatudo", "BateuBET", "bet365", "Betano", "Betbra", "Bet da Sorte", "BETesporte", "Betnacional", "BRBet", "BullSbet", "Esportes da Sorte", "Esportedasorte", "Estrelabet", "F12 bet", "Faz1bet", "FullBet", "KTO", "LuckBet", "Luvabet", "Novibet", "Outra", "Rei do Pitaco", "Sporty", "Stake", "Superbet", "Tivobet", "Vaidebet", "Vbet", "Verabet", "Outra"];

const dadosIniciais = [{"jogo":"Coritba","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.3,"resultado":"Pendente"},{"tipo":"Over","casa":"Betano","valor":325.66,"odd":1.52,"resultado":"Pendente"}]},{"jogo":"Inter milao","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.3,"resultado":"Pendente"},{"tipo":"Over","casa":"Betbra","valor":320,"odd":1.565,"resultado":"Pendente"}]},{"jogo":"Faisaly","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3,"resultado":"Pendente"},{"tipo":"Over","casa":"Superbet","valor":269.46,"odd":1.67,"resultado":"Pendente"}]},{"jogo":"Arsenal","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":2.5,"resultado":"Green"},{"tipo":"Over","casa":"Betbra","valor":202,"odd":1.86,"resultado":"Red"}]},{"jogo":"Leverkusen ","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.3,"resultado":"Green"},{"tipo":"Over","casa":"Betbra","valor":305,"odd":1.625,"resultado":"Red"}]},{"jogo":"Bodo ","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.3,"resultado":"Green"},{"tipo":"Over ","casa":"BETesporte","valor":345,"odd":1.523,"resultado":"Red"}]},{"jogo":"Frankfurt","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":276,"odd":1.628,"resultado":"Green"}]},{"jogo":"Aston Villa ","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":4,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":423,"odd":1.42,"resultado":"Green"}]},{"jogo":"Monterrey ","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":2.7,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":231,"odd":1.757,"resultado":"Green"}]},{"jogo":"Deportivo cali","data":"2025-09-20","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.3,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":322,"odd":1.543,"resultado":"Green"}]},{"jogo":"Guadalajara","data":"2025-09-20","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":2.6,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":212,"odd":1.819,"resultado":"Green"}]},{"jogo":"Deportivo","data":"2025-09-20","apostas":[{"tipo":"Over","casa":"BETesporte","valor":150,"odd":3.2,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":310,"odd":1.546,"resultado":"Green"}]},{"jogo":"Chelsea Duplo","data":"2025-09-20","apostas":[{"tipo":"Casa","casa":"Superbet","valor":93.64,"odd":2.67,"resultado":"Green"},{"tipo":"Empate","casa":"bet365","valor":64.44,"odd":3.88,"resultado":"Red"},{"tipo":"Fora","casa":"Superbet","valor":100,"odd":2.5,"resultado":"Red"},{"tipo":"Proteção","casa":"Superbet","valor":342.59,"odd":1.2,"resultado":"Green"}]},{"jogo":"Fluminense ","data":"2025-09-20","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.4,"resultado":"Green"},{"tipo":"Over","casa":"Sportingbet","valor":319,"odd":1.6,"resultado":"Red"}]},{"jogo":"Philadelphia","data":"2025-09-20","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.3,"resultado":"Green"},{"tipo":"Over","casa":"Betbra","valor":321,"odd":1.546,"resultado":"Red"}]},{"jogo":"Benfica","data":"2025-09-20","apostas":[{"tipo":"Under","casa":"BETesporte","valor":100,"odd":3.2,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":167.05,"odd":1.753,"resultado":"Green"},{"tipo":"Over","casa":"Betbra","valor":17.95,"odd":1.76,"resultado":"Green"}]},{"jogo":"Midj","data":"2025-09-20","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.5,"resultado":"Green"},{"tipo":"Over","casa":"Betbra","valor":349,"odd":1.507,"resultado":"Red"}]},{"jogo":"Tottenham Duplo","data":"2025-09-20","apostas":[{"tipo":"Casa","casa":"Superbet","valor":142,"odd":2.17,"resultado":"Green"},{"tipo":"Fora","casa":"Betano","valor":100,"odd":3.05,"resultado":"Red"},{"tipo":"Empate","casa":"bet365","valor":79.43,"odd":3.82,"resultado":"Green"},{"tipo":"Empate","casa":"Betbra","valor":81,"odd":3.787,"resultado":"Green"},{"tipo":"Proteção duplo","casa":"Betano","valor":400,"odd":1.62,"resultado":"Red"},{"tipo":"Proteção duplo","casa":"Superbet","valor":200,"odd":1.62,"resultado":"Red"}]},{"jogo":"Liverpool","data":"2025-09-20","apostas":[{"tipo":"Casa","casa":"Superbet","valor":213.38,"odd":1.5,"resultado":"Green"},{"tipo":"Empate","casa":"Betbra","valor":48,"odd":6.672,"resultado":"Red"},{"tipo":"Fora","casa":"KTO","valor":50.01,"odd":6.4,"resultado":"Red"},{"tipo":"Proteção duplo","casa":"Betbra","valor":350,"odd":1.234,"resultado":"Green"}]},{"jogo":"Bayern","data":"2025-09-20","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":2.7,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":238,"odd":1.711,"resultado":"Green"}]},{"jogo":"Daej","data":"2025-09-20","apostas":[{"tipo":"Under ","casa":"BETesporte","valor":150,"odd":2.9,"resultado":"Red"},{"tipo":"Over","casa":"Luvabet","valor":269,"odd":1.67,"resultado":"Green"}]},{"jogo":"Liverpool","data":"2025-09-20","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.1,"resultado":"Red"},{"tipo":"Over","casa":"Vaidebet","valor":161.97,"odd":1.63,"resultado":"Green"},{"tipo":"Over","casa":"Stake","valor":120,"odd":1.7,"resultado":"Green"}]},{"jogo":"Tijuana","data":"2025-09-19","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.2,"resultado":"Red"},{"tipo":"Over ","casa":"Novibet","valor":310,"odd":1.54,"resultado":"Green"}]},{"jogo":"America cali","data":"2025-09-19","apostas":[{"tipo":"Over","casa":"BETesporte","valor":150,"odd":4,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":459,"odd":1.39,"resultado":"Green"}]},{"jogo":"Novorizontino","data":"2025-09-19","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.7,"resultado":"Green"},{"tipo":"Over","casa":"Sportingbet","valor":348.99,"odd":1.47,"resultado":"Red"},{"tipo":"Over","casa":"Vaidebet","valor":27.75,"odd":1.46,"resultado":"Red"}]},{"jogo":"Huracan","data":"2025-09-19","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":2.8,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":260,"odd":1.699,"resultado":"Green"}]},{"jogo":"Bingo","data":"2025-09-19","apostas":[{"tipo":"Bingo","casa":"Superbet","valor":2.5,"odd":16.925,"resultado":"Green"},{"tipo":"Bingo","casa":"Superbet","valor":3,"odd":16.925,"resultado":"Green"}]},{"jogo":"Stuttgart ","data":"2025-09-19","apostas":[{"tipo":"Over","casa":"BETesporte","valor":78,"odd":2,"resultado":"Red"},{"tipo":"Under","casa":"Betbra","valor":200,"odd":2,"resultado":"Red"}]},{"jogo":"Betis","data":"2025-09-19","apostas":[{"tipo":"Casa","casa":"Betano","valor":234.61,"odd":1.93,"resultado":"Red"},{"tipo":"Empate","casa":"Esportivabet","valor":113.2,"odd":4,"resultado":"Green"}]},{"jogo":"Bielefeld","data":"2025-09-19","apostas":[{"tipo":"Under ","casa":"BETesporte","valor":150,"odd":3.5,"resultado":"Red"},{"tipo":"Over","casa":"Rei do Pitaco","valor":355,"odd":1.48,"resultado":"Green"}]},{"jogo":"Khaleej","data":"2025-09-19","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":278,"odd":1.626,"resultado":"Green"}]},{"jogo":"Salpa","data":"2025-09-19","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.6,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":393,"odd":1.458,"resultado":"Green"}]},{"jogo":"Cassino","data":"2025-09-19","apostas":[{"tipo":"Cassino","casa":"bet365","valor":17,"odd":2,"resultado":"Green"},{"tipo":"Cassino","casa":"bet365","valor":0.75,"odd":2,"resultado":"Green"}]},{"jogo":"Dhafra","data":"2025-09-19","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":2.9,"resultado":"Green"},{"tipo":"Over","casa":"Betbra","valor":278,"odd":1.628,"resultado":"Red"}]},{"jogo":"Hof","data":"2025-09-19","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":2.8,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":268,"odd":1.624,"resultado":"Green"}]},{"jogo":"Rodez","data":"2025-09-19","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.1,"resultado":"Red"},{"tipo":"Over","casa":"bet365","valor":300,"odd":1.564,"resultado":"Green"}]},{"jogo":"Kaiserslautern","data":"2025-09-19","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":2.9,"resultado":"Red"},{"tipo":"Over","casa":"Novibet","valor":274,"odd":1.61,"resultado":"Green"}]},{"jogo":"Barcelona","data":"2025-09-19","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.1,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":302,"odd":1.613,"resultado":"Green"}]},{"jogo":"Gamba Osaka","data":"2025-09-18","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":2.8,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":273,"odd":1.66,"resultado":"Green"}]},{"jogo":"Bayer Leverkusen ","data":"2025-09-18","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.5,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":350,"odd":1.512,"resultado":"Green"}]},{"jogo":"Real Madrid","data":"2025-09-18","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":2.6,"resultado":"Green"},{"tipo":"Over","casa":"Betbra","valor":234,"odd":1.782,"resultado":"Red"}]},{"jogo":"Juventus","data":"2025-09-18","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.3,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":300,"odd":1.602,"resultado":"Green"}]},{"jogo":"Bahia","data":"2025-09-18","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":2.7,"resultado":"Red"},{"tipo":"Over","casa":"bet365","valor":260,"odd":1.696,"resultado":"Green"}]},{"jogo":"Fortaleza","data":"2025-09-18","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.3,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":325,"odd":1.527,"resultado":"Green"}]},{"jogo":"Botafogo","data":"2025-09-18","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.5,"resultado":"Green"},{"tipo":"Over","casa":"Betbra","valor":356,"odd":1.48,"resultado":"Red"}]},{"jogo":"Cuiabá","data":"2025-09-18","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":2.7,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":265,"odd":1.68,"resultado":"Green"}]},{"jogo":"América mg","data":"2025-09-18","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":2.7,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":236,"odd":1.78,"resultado":"Green"}]},{"jogo":"Atlético mineiro","data":"2025-09-18","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.1,"resultado":"Green"},{"tipo":"Over","casa":"Betbra","valor":306,"odd":1.56,"resultado":"Red"}]},{"jogo":"Corinthians","data":"2025-09-18","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":2.6,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":255,"odd":1.705,"resultado":"Green"}]},{"jogo":"Athletico-pr","data":"2025-09-18","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.5,"resultado":"Green"},{"tipo":"Over","casa":"Betbra","valor":350,"odd":1.503,"resultado":"Red"}]},{"jogo":"Manchester United","data":"2025-09-17","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":2.5,"resultado":"Green"},{"tipo":"Over","casa":"Betbra","valor":223,"odd":1.78,"resultado":"Red"}]},{"jogo":"Villarreal","data":"2025-09-17","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":2.6,"resultado":"Green"},{"tipo":"Over","casa":"Betbra","valor":212,"odd":1.854,"resultado":"Red"}]},{"jogo":"Union Berlin","data":"2025-09-17","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":2.8,"resultado":"Green"},{"tipo":"Over","casa":"Betbra","valor":245,"odd":1.716,"resultado":"Red"}]},{"jogo":"Fiorentina","data":"2025-09-17","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.1,"resultado":"Red"},{"tipo":"Over","casa":"bet365","valor":280,"odd":1.663,"resultado":"Green"}]},{"jogo":"Goa FC","data":"2025-09-17","apostas":[{"tipo":"Under ","casa":"BETesporte","valor":150,"odd":2.3,"resultado":"Green"},{"tipo":"Over","casa":"bet365","valor":177,"odd":1.975,"resultado":"Red"}]},{"jogo":"PSG x Atalanta","data":"2025-09-17","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3,"resultado":"Red"},{"tipo":"Over","casa":"bet365","valor":280,"odd":1.604,"resultado":"Green"}]},{"jogo":"Ajax X Inter Milão ","data":"2025-09-17","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":2.9,"resultado":"Green"},{"tipo":"Over","casa":"bet365","valor":268,"odd":1.624,"resultado":"Red"}]},{"jogo":"Botafogo x Mirassol ","data":"2025-09-17","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":4.1,"resultado":"Red"},{"tipo":"Over","casa":"Outra","valor":431,"odd":1.43,"resultado":"Green"}]},{"jogo":"New York city","data":"2025-09-17","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":2.8,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":245,"odd":1.716,"resultado":"Green"}]}];

let apostas = JSON.parse(localStorage.getItem("apostas")) || dadosIniciais;
let apostaSendoEditadaIndex = -1;

const API_KEY = "ee702040c0fae28b74e1c6e680a357a9"; // SUBSTITUA AQUI PELA SUA CHAVE DA API-FOOTBALL

const updateUI = () => {
    renderApostas();
    atualizarDashboard();
    renderGraficoLucroDiario();
};

async function searchTeamAndFixtures() {
    const teamName = document.getElementById('jogo-search').value.trim();
    const selectJogo = document.getElementById("jogo-select");
    
    selectJogo.innerHTML = '<option value="">Buscando time...</option>';

    if (teamName.length < 3) {
        selectJogo.innerHTML = '<option value="">Digite pelo menos 3 letras</option>';
        return;
    }

    try {
        // Busca o ID do time
        const teamResponse = await fetch(`https://v3.football.api-sports.io/teams?search=${teamName}`, {
            method: 'GET',
            headers: {
                'x-rapidapi-key': API_KEY,
                'x-rapidapi-host': 'v3.football.api-sports.io'
            }
        });
        const teamData = await teamResponse.json();
        
        const teamId = teamData?.response?.[0]?.team?.id;

        if (!teamId) {
            selectJogo.innerHTML = '<option value="">Time não encontrado. Tente outro nome.</option>';
            return;
        }

        // Busca os próximos jogos do time com o ID
        const fixturesResponse = await fetch(`https://v3.football.api-sports.io/fixtures?team=${teamId}&next=10`, {
            method: 'GET',
            headers: {
                'x-rapidapi-key': API_KEY,
                'x-rapidapi-host': 'v3.football.api-sports.io'
            }
        });
        const fixturesData = await fixturesResponse.json();

        if (fixturesData && fixturesData.response && fixturesData.response.length > 0) {
            selectJogo.innerHTML = '<option value="">Selecione um jogo...</option>';
            fixturesData.response.forEach(fixture => {
                const homeTeam = fixture.teams.home.name;
                const awayTeam = fixture.teams.away.name;
                const jogo = `${homeTeam} vs ${awayTeam}`;
                const option = document.createElement("option");
                option.value = jogo;
                option.textContent = jogo;
                selectJogo.appendChild(option);
            });
        } else {
            selectJogo.innerHTML = '<option value="">Nenhum jogo encontrado para este time.</option>';
        }

    } catch (error) {
        console.error("Erro ao carregar jogos:", error);
        selectJogo.innerHTML = '<option value="">Erro ao carregar jogos. Verifique sua chave de API.</option>';
    }
}

const getBetDataFromForm = (containerId, prefix = '') => {
    const bets = [];
    document.querySelectorAll(`#${containerId} .${prefix}-aposta-fields`).forEach(field => {
        const data = Object.fromEntries(['tipo', 'casa', 'valor', 'odd', 'resultado'].map(key => [key, field.querySelector(`[id^="${prefix}-${key}"]`).value]));
        data.valor = parseFloat(data.valor);
        data.odd = parseFloat(data.odd);
        if (data.tipo && data.casa && !isNaN(data.valor) && !isNaN(data.odd)) {
            bets.push(data);
        }
    });
    return bets;
};

const renderBetFields = (containerId, betData = [{}], prefix = '') => {
    const container = document.getElementById(containerId);
    container.innerHTML = betData.map((aposta, i) => `
        <div class="${prefix}-aposta-fields">
            <hr>
            <label for="${prefix}-tipo-${i}">Tipo de Aposta:</label>
            <input type="text" id="${prefix}-tipo-${i}" placeholder="Ex: Over 2.5" value="${aposta.tipo || ''}" required>
            <label for="${prefix}-casa-${i}">Casa de Aposta:</label>
            <select id="${prefix}-casa-${i}" class="${prefix}-casa-de-aposta" required>
                ${casasDeAposta.map(casa => `<option value="${casa}" ${aposta.casa === casa ? 'selected' : ''}>${casa}</option>`).join('')}
            </select>
            <label for="${prefix}-valor-${i}">Valor Apostado:</label>
            <input type="number" id="${prefix}-valor-${i}" step="0.01" placeholder="R$ 0,00" value="${aposta.valor || ''}" required>
            <label for="${prefix}-odd-${i}">Odd:</label>
            <input type="number" id="${prefix}-odd-${i}" step="0.001" placeholder="1.00" value="${aposta.odd || ''}" required>
            <label for="${prefix}-resultado-${i}">Resultado:</label>
            <select id="${prefix}-resultado-${i}" required>
                <option value="Pendente" ${aposta.resultado === 'Pendente' ? 'selected' : ''}>Pendente</option>
                <option value="Green" ${aposta.resultado === 'Green' ? 'selected' : ''}>Green</option>
                <option value="Red" ${aposta.resultado === 'Red' ? 'selected' : ''}>Red</option>
            </select>
        </div>
    `).join('');
};

const openModal = type => {
    document.getElementById(`modal-${type}`).style.display = "block";
    if (type === 'nova') {
        clearForm();
    }
};

const closeModal = type => {
    document.getElementById(`modal-${type}`).style.display = "none";
    if (type === 'nova') clearForm();
};

const clearForm = () => {
    document.getElementById('jogo-search').value = '';
    document.getElementById('jogo-select').innerHTML = '<option value="">Busque por um time</option>';
    document.getElementById('data').value = '';
    renderBetFields('apostas-dinamicas', [{}], 'aposta');
};

const addBetFields = () => {
    const container = document.getElementById('apostas-dinamicas');
    const newBetIndex = container.querySelectorAll('.aposta-fields').length;
    const div = document.createElement('div');
    div.classList.add('aposta-fields');
    div.innerHTML = `
        <hr>
        <label for="aposta-tipo-${newBetIndex}">Tipo de Aposta:</label>
        <input type="text" id="aposta-tipo-${newBetIndex}" placeholder="Ex: Over 2.5" required>
        <label for="aposta-casa-${newBetIndex}">Casa de Aposta:</label>
        <select id="aposta-casa-${newBetIndex}" class="aposta-casa-de-aposta" required>
            ${casasDeAposta.map(c => `<option value="${c}">${c}</option>`).join('')}
        </select>
        <label for="aposta-valor-${newBetIndex}">Valor Apostado:</label>
        <input type="number" id="aposta-valor-${newBetIndex}" step="0.01" placeholder="R$ 0,00" required>
        <label for="aposta-odd-${newBetIndex}">Odd:</label>
        <input type="number" id="aposta-odd-${newBetIndex}" step="0.001" placeholder="1.00" required>
        <label for="aposta-resultado-${newBetIndex}">Resultado:</label>
        <select id="aposta-resultado-${newBetIndex}" required>
            <option value="Pendente" selected>Pendente</option>
            <option value="Green">Green</option>
            <option value="Red">Red</option>
        </select>`;
    container.appendChild(div);
};

const saveBets = () => {
    const jogo = document.getElementById('jogo-select').value;
    const data = document.getElementById('data').value;
    const bets = getBetDataFromForm('apostas-dinamicas', 'aposta');

    if (jogo && data && bets.length) {
        apostas.unshift({ jogo, data, apostas: bets });
        localStorage.setItem('apostas', JSON.stringify(apostas));
        closeModal('nova');
        updateUI();
    } else {
        alert("Por favor, selecione um jogo e preencha a data e pelo menos uma aposta.");
    }
};

const renderApostas = () => {
    const container = document.getElementById('historico-container');
    container.innerHTML = apostas.map((aposta, index) => {
        let lucroTotalDoJogo = 0;
        aposta.apostas.forEach(a => {
            const lucro = a.resultado === 'Green' ? (a.valor * a.odd) - a.valor : a.resultado === 'Red' ? -a.valor : 0;
            lucroTotalDoJogo += lucro;
        });

        const lucroClass = lucroTotalDoJogo >= 0 ? 'lucro-positive' : 'lucro-negative';

        return `
            <div class="aposta-card" data-index="${index}">
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
                <div class="lucro-total-container">
                    <p><strong>Lucro do Jogo:</strong> <span class="${lucroClass}">R$ ${lucroTotalDoJogo.toFixed(2)}</span></p>
                </div>
                <div class="aposta-card-actions">
                    <button class="btn-editar" onclick="editBet(${index})">Editar</button>
                    <button class="btn-excluir" onclick="deleteBet(${index})">Excluir</button>
                </div>
            </div>
        `;
    }).join('');
};

const editBet = index => {
    apostaSendoEditadaIndex = index;
    const { jogo, data, apostas: betData } = apostas[index];
    document.getElementById('edicao-jogo').value = jogo;
    document.getElementById('edicao-data').value = data;
    renderBetFields('edicao-apostas-container', betData, 'edicao');
    closeModal('nova');
    openModal('edicao');
};

const saveEdit = () => {
    const aposta = apostas[apostaSendoEditadaIndex];
    aposta.jogo = document.getElementById('edicao-jogo').value;
    aposta.data = document.getElementById('edicao-data').value;
    aposta.apostas = getBetDataFromForm('edicao-apostas-container', 'edicao');
    localStorage.setItem('apostas', JSON.stringify(apostas));
    closeModal('edicao');
    updateUI();
};

const deleteBet = index => {
    if (confirm("Tem certeza que deseja excluir esta aposta?")) {
        apostas.splice(index, 1);
        localStorage.setItem('apostas', JSON.stringify(apostas));
        updateUI();
    }
};

const atualizarDashboard = () => {
    const now = new Date();
    const [month, year, today] = [now.getMonth(), now.getFullYear(), now.toISOString().slice(0, 10)];
    
    let totalApostadoMes = 0, gainsMonth = 0, pendingMonth = 0, profitMonth = 0, profitToday = 0;
    
    apostas.forEach(({ apostas: bets, data }) => {
        bets.forEach(b => {
            const isMonthly = new Date(data).getMonth() === month && new Date(data).getFullYear() === year;
            const isToday = data === today;

            if (isMonthly) {
                totalApostadoMes += b.valor;
                if (b.resultado === 'Green') gainsMonth++;
                if (b.resultado === 'Pendente') pendingMonth++;
            }

            const profit = b.resultado === 'Green' ? (b.valor * b.odd) - b.valor : b.resultado === 'Red' ? -b.valor : 0;
            if (isMonthly) profitMonth += profit;
            if (isToday) profitToday += profit;
        });
    });

    const roi = totalApostadoMes > 0 ? (profitMonth / totalApostadoMes) * 100 : 0;

    document.getElementById('totalApostadoMes').textContent = `R$ ${totalApostadoMes.toFixed(2)}`;
    document.getElementById('ganhosMes').textContent = gainsMonth;
    document.getElementById('pendenteMes').textContent = pendingMonth;
    document.getElementById('lucroMes').textContent = `R$ ${profitMonth.toFixed(2)}`;
    document.getElementById('roiMes').textContent = `${roi.toFixed(2)}%`;
    document.getElementById('ganhoHoje').textContent = `R$ ${profitToday.toFixed(2)}`;

    const setClass = (id, value) => {
        const el = document.getElementById(id);
        el.className = '';
        el.classList.add(value > 0 ? 'lucro-positive' : value < 0 ? 'lucro-negative' : 'lucro-zero');
    };
    setClass('lucroMes', profitMonth);
    setClass('ganhoHoje', profitToday);
};

let lucroDiarioChart;

const renderGraficoLucroDiario = () => {
    const profitByDay = {};
    apostas.forEach(({ apostas: bets, data }) => {
        if (!profitByDay[data]) profitByDay[data] = 0;
        bets.forEach(b => {
            if (b.resultado === 'Green') profitByDay[data] += (b.valor * b.odd) - b.valor;
            else if (b.resultado === 'Red') profitByDay[data] -= b.valor;
        });
    });
    
    const dates = Object.keys(profitByDay).sort();
    const dataPoints = dates.map(d => profitByDay[d]);
    
    if (lucroDiarioChart) lucroDiarioChart.destroy();
    
    const ctx = document.getElementById('lucroDiarioChart').getContext('2d');
    lucroDiarioChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dates,
            datasets: [{ label: 'Lucro Diário', data: dataPoints, borderColor: '#2184e9', backgroundColor: 'rgba(33, 132, 233, 0.2)', fill: true, tension: 0.4 }]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            scales: { x: { ticks: { color: '#8b949e' }, grid: { color: 'rgba(255, 255, 255, 0.1)' } }, y: { ticks: { color: '#8b949e' }, grid: { color: 'rgba(255, 255, 255, 0.1)' } } },
            plugins: { legend: { labels: { color: '#e6edf3' } }, tooltip: { callbacks: { label: ctx => `R$ ${ctx.raw.toFixed(2)}` } } }
        }
    });
};

const reiniciarDiario = () => {
    if (confirm("Você tem certeza que deseja reiniciar o diário? Todos os dados serão perdidos.")) {
        localStorage.clear();
        location.reload();
    }
};

document.addEventListener('DOMContentLoaded', () => {
    updateUI();
});
