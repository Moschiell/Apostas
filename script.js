const casasDeAposta = [
    "Aposta Ganha", "Apostatudo", "BateuBET", "bet365", "Betano", "Betbra", "Bet da Sorte", "BETesporte", "Betnacional", "BRBet", "BullSbet", "Esportes da Sorte", "Esportedasorte", "Estrelabet", "F12 bet", "Faz1bet", "FullBet", "KTO", "LuckBet", "Luvabet", "Novibet", "Outra", "Rei do Pitaco", "Sporty", "Stake", "Superbet", "Tivobet", "Vaidebet", "Vbet", "Verabet", "Outra"
];

let apostas = JSON.parse(localStorage.getItem("apostas")) || [];
let apostaCount = 2;
let apostaSendoEditadaIndex = -1;

const dadosIniciais = [{"jogo":"Coritba","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.3,"resultado":"Pendente"},{"tipo":"Over","casa":"Betano","valor":325.66,"odd":1.52,"resultado":"Pendente"}]},{"jogo":"Inter milao","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.3,"resultado":"Pendente"},{"tipo":"Over","casa":"Betbra","valor":320,"odd":1.565,"resultado":"Pendente"}]},{"jogo":"Faisaly","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3,"resultado":"Pendente"},{"tipo":"Over","casa":"Superbet","valor":269.46,"odd":1.67,"resultado":"Pendente"}]},{"jogo":"Arsenal","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":2.5,"resultado":"Green"},{"tipo":"Over","casa":"Betbra","valor":202,"odd":1.86,"resultado":"Red"}]},{"jogo":"Leverkusen ","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.3,"resultado":"Green"},{"tipo":"Over","casa":"Betbra","valor":305,"odd":1.625,"resultado":"Red"}]},{"jogo":"Bodo ","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.3,"resultado":"Green"},{"tipo":"Over ","casa":"BETesporte","valor":345,"odd":1.523,"resultado":"Red"}]},{"jogo":"Frankfurt","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":276,"odd":1.628,"resultado":"Green"}]},{"jogo":"Aston Villa ","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":4,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":423,"odd":1.42,"resultado":"Green"}]},{"jogo":"Monterrey ","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":2.7,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":231,"odd":1.757,"resultado":"Green"}]},{"jogo":"Deportivo cali","data":"2025-09-20","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.3,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":322,"odd":1.543,"resultado":"Green"}]},{"jogo":"Guadalajara","data":"2025-09-20","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":2.6,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":212,"odd":1.819,"resultado":"Green"}]},{"jogo":"Deportivo","data":"2025-09-20","apostas":[{"tipo":"Over","casa":"BETesporte","valor":150,"odd":3.2,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":310,"odd":1.546,"resultado":"Green"}]},{"jogo":"Chelsea Duplo","data":"2025-09-20","apostas":[{"tipo":"Casa","casa":"Superbet","valor":93.64,"odd":2.67,"resultado":"Green"},{"tipo":"Empate","casa":"bet365","valor":64.44,"odd":3.88,"resultado":"Red"},{"tipo":"Fora","casa":"Superbet","valor":100,"odd":2.5,"resultado":"Red"},{"tipo":"Proteção","casa":"Superbet","valor":342.59,"odd":1.2,"resultado":"Green"}]},{"jogo":"Fluminense ","data":"2025-09-20","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.4,"resultado":"Green"},{"tipo":"Over","casa":"Sportingbet","valor":319,"odd":1.6,"resultado":"Red"}]},{"jogo":"Philadelphia","data":"2025-09-20","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.3,"resultado":"Green"},{"tipo":"Over","casa":"Betbra","valor":321,"odd":1.546,"resultado":"Red"}]},{"jogo":"Benfica","data":"2025-09-20","apostas":[{"tipo":"Under","casa":"BETesporte","valor":100,"odd":3.2,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":167.05,"odd":1.753,"resultado":"Green"},{"tipo":"Over","casa":"Betbra","valor":17.95,"odd":1.76,"resultado":"Green"}]},{"jogo":"Midj","data":"2025-09-20","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.5,"resultado":"Green"},{"tipo":"Over","casa":"Betbra","valor":349,"odd":1.507,"resultado":"Red"}]},{"jogo":"Tottenham Duplo","data":"2025-09-20","apostas":[{"tipo":"Casa","casa":"Superbet","valor":142,"odd":2.17,"resultado":"Green"},{"tipo":"Fora","casa":"Betano","valor":100,"odd":3.05,"resultado":"Red"},{"tipo":"Empate","casa":"bet365","valor":79.43,"odd":3.82,"resultado":"Green"},{"tipo":"Empate","casa":"Betbra","valor":81,"odd":3.787,"resultado":"Green"},{"tipo":"Proteção duplo","casa":"Betano","valor":400,"odd":1.62,"resultado":"Red"},{"tipo":"Proteção duplo","casa":"Superbet","valor":200,"odd":1.62,"resultado":"Red"}]},{"jogo":"Liverpool","data":"2025-09-20","apostas":[{"tipo":"Casa","casa":"Superbet","valor":213.38,"odd":1.5,"resultado":"Green"},{"tipo":"Empate","casa":"Betbra","valor":48,"odd":6.672,"resultado":"Red"},{"tipo":"Fora","casa":"KTO","valor":50.01,"odd":6.4,"resultado":"Red"},{"tipo":"Proteção duplo","casa":"Betbra","valor":350,"odd":1.234,"resultado":"Green"}]},{"jogo":"Bayern","data":"2025-09-20","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":2.7,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":238,"odd":1.711,"resultado":"Green"}]},{"jogo":"Daej","data":"2025-09-20","apostas":[{"tipo":"Under ","casa":"BETesporte","valor":150,"odd":2.9,"resultado":"Red"},{"tipo":"Over","casa":"Luvabet","valor":269,"odd":1.67,"resultado":"Green"}]},{"jogo":"Liverpool","data":"2025-09-20","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.1,"resultado":"Red"},{"tipo":"Over","casa":"Vaidebet","valor":161.97,"odd":1.63,"resultado":"Green"},{"tipo":"Over","casa":"Stake","valor":120,"odd":1.7,"resultado":"Green"}]},{"jogo":"Tijuana","data":"2025-09-19","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":"3.2","resultado":"Red"},{"tipo":"Over ","casa":"Novibet","valor":310,"odd":"1.54","resultado":"Green"}]},{"jogo":"America cali","data":"2025-09-19","apostas":[{"tipo":"Over","casa":"BETesporte","valor":150,"odd":"4","resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":"459","odd":"1.39","resultado":"Green"}]},{"jogo":"Novorizontino","data":"2025-09-19","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":"3.7","resultado":"Green"},{"tipo":"Over","casa":"Sportingbet","valor":348.99,"odd":"1.47","resultado":"Red"},{"tipo":"Over","casa":"Vaidebet","valor":27.75,"odd":"1.46","resultado":"Red"}]},{"jogo":"Huracan","data":"2025-09-19","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":"2.8","resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":"260","odd":"1.699","resultado":"Green"}]},{"jogo":"Bingo","data":"2025-09-19","apostas":[{"tipo":"Bingo","casa":"Superbet","valor":2.5,"odd":"16.925","resultado":"Green"},{"tipo":"Bingo","casa":"Superbet","valor":3,"odd":"16.925","resultado":"Green"}]},{"jogo":"Stuttgart ","data":"2025-09-19","apostas":[{"tipo":"Over","casa":"BETesporte","valor":78,"odd":"2","resultado":"Red"},{"tipo":"Under","casa":"Betbra","valor":200,"odd":"2","resultado":"Red"}]},{"jogo":"Betis","data":"2025-09-19","apostas":[{"tipo":"Casa","casa":"Betano","valor":234.61,"odd":"1.93","resultado":"Red"},{"tipo":"Empate","casa":"Esportivabet","valor":113.2,"odd":"4","resultado":"Green"}]},{"jogo":"Bielefeld","data":"2025-09-19","apostas":[{"tipo":"Under ","casa":"BETesporte","valor":150,"odd":"3.5","resultado":"Red"},{"tipo":"Over","casa":"Rei do Pitaco","valor":"355","odd":"1.48","resultado":"Green"}]},{"jogo":"Khaleej","data":"2025-09-19","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":"3","resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":"278","odd":"1.626","resultado":"Green"}]},{"jogo":"Salpa","data":"2025-09-19","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":"3.6","resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":"393","odd":"1.458","resultado":"Green"}]},{"jogo":"Cassino","data":"2025-09-19","apostas":[{"tipo":"Cassino","casa":"bet365","valor":17,"odd":"2","resultado":"Green"},{"tipo":"Cassino","casa":"bet365","valor":0.75,"odd":"2","resultado":"Green"}]},{"jogo":"Dhafra","data":"2025-09-19","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":"4.3","resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":"461","odd":"1.409","resultado":"Green"}]},{"jogo":"Wuhan Three Towns","data":"2025-09-19","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":"3.2","resultado":"Red"},{"tipo":"Over ","casa":"Novibet","valor":201.61,"odd":"1.58","resultado":"Green"},{"tipo":"Over","casa":"Vaidebet","valor":93.25,"odd":"1.54","resultado":"Green"},{"tipo":"Over","casa":"bet365","valor":11.52,"odd":"1.55","resultado":"Green"}]},{"jogo":"Cartagines","data":"2025-09-18","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":"2.5","resultado":"Green"},{"tipo":"Over","casa":"Vaidebet","valor":203,"odd":"1.85","resultado":"Red"}]},{"jogo":"Flamengo","data":"2025-09-18","apostas":[{"tipo":"Under","casa":"BETesporte","valor":100,"odd":"3.5","resultado":"Red"},{"tipo":"Over","casa":"BETesporte","valor":50,"odd":"3.4","resultado":"Red"}]},{"jogo":"Alianza lima","data":"2025-09-18","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":"3.2","resultado":"Green"},{"tipo":"Over","casa":"Outra","valor":299,"odd":"1.586","resultado":"Red"}]},{"jogo":"Alianza lima","data":"2025-09-18","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":"3.1","resultado":"Red"},{"tipo":"Over","casa":"bet365","valor":280,"odd":1.663,"resultado":"Green"}]},{"jogo":"Goa FC","data":"2025-09-17","apostas":[{"tipo":"Under ","casa":"BETesporte","valor":150,"odd":2.3,"resultado":"Green"},{"tipo":"Over","casa":"bet365","valor":177,"odd":1.975,"resultado":"Red"}]},{"jogo":"PSG x Atalanta","data":"2025-09-17","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3,"resultado":"Red"},{"tipo":"Over","casa":"bet365","valor":280,"odd":1.604,"resultado":"Green"}]},{"jogo":"Ajax X Inter Milão ","data":"2025-09-17","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":2.9,"resultado":"Green"},{"tipo":"Over","casa":"bet365","valor":268,"odd":1.624,"resultado":"Red"}]},{"jogo":"Botafogo x Mirassol ","data":"2025-09-17","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":4.1,"resultado":"Red"},{"tipo":"Over","casa":"Outra","valor":431,"odd":1.43,"resultado":"Green"}]},{"jogo":"New York city","data":"2025-09-17","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.1,"resultado":"Red"},{"tipo":"Over","casa":"Outra","valor":290,"odd":1.595,"resultado":"Green"}]},{"jogo":"Liverpool ","data":"2025-09-17","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.3,"resultado":"Green"},{"tipo":"Over","casa":"bet365","valor":200,"odd":1.53,"resultado":"Red"},{"tipo":"Over","casa":"Outra","valor":123.63,"odd":1.52,"resultado":"Red"}]},{"jogo":"Palmeiras","data":"2025-09-17","apostas":[{"tipo":"Casa","casa":"Superbet","valor":120.25,"odd":2.1,"resultado":"Red"},{"tipo":"Fora","casa":"Superbet","valor":100,"odd":3.8,"resultado":"Green"},{"tipo":"Empate","casa":"bet365","valor":100,"odd":3.6,"resultado":"Red"}]},{"jogo":"Flamengo","data":"2025-09-17","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.1,"resultado":"Green"},{"tipo":"Over","casa":"Betano","valor":280,"odd":1.64,"resultado":"Red"}]},{"jogo":"Liverpool","data":"2025-09-16","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.1,"resultado":"Red"},{"tipo":"Over","casa":"Betano","valor":280,"odd":1.663,"resultado":"Green"}]},{"jogo":"Goa FC","data":"2025-09-16","apostas":[{"tipo":"Under ","casa":"BETesporte","valor":150,"odd":2.3,"resultado":"Green"},{"tipo":"Over","casa":"bet365","valor":177,"odd":1.975,"resultado":"Red"}]},{"jogo":"PSG x Atalanta","data":"2025-09-16","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3,"resultado":"Red"},{"tipo":"Over","casa":"bet365","valor":280,"odd":1.604,"resultado":"Green"}]},{"jogo":"Ajax X Inter Milão ","data":"2025-09-16","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":2.9,"resultado":"Green"},{"tipo":"Over","casa":"bet365","valor":268,"odd":1.624,"resultado":"Red"}]},{"jogo":"Botafogo x Mirassol ","data":"2025-09-16","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":4.1,"resultado":"Red"},{"tipo":"Over","casa":"Outra","valor":431,"odd":1.43,"resultado":"Green"}]},{"jogo":"New York city","data":"2025-09-16","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.1,"resultado":"Red"},{"tipo":"Over","casa":"Outra","valor":290,"odd":1.595,"resultado":"Green"}]},{"jogo":"Liverpool ","data":"2025-09-16","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.3,"resultado":"Green"},{"tipo":"Over","casa":"bet365","valor":200,"odd":1.53,"resultado":"Red"},{"tipo":"Over","casa":"Outra","valor":123.63,"odd":1.52,"resultado":"Red"}]},{"jogo":"Palmeiras","data":"2025-09-16","apostas":[{"tipo":"Casa","casa":"Superbet","valor":120.25,"odd":2.1,"resultado":"Red"},{"tipo":"Fora","casa":"Superbet","valor":100,"odd":3.8,"resultado":"Green"},{"tipo":"Empate","casa":"bet365","valor":100,"odd":3.6,"resultado":"Red"}]},{"jogo":"Flamengo","data":"2025-09-16","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.1,"resultado":"Green"},{"tipo":"Over","casa":"Betano","valor":280,"odd":1.64,"resultado":"Red"}]},{"jogo":"Liverpool","data":"2025-09-15","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.1,"resultado":"Red"},{"tipo":"Over","casa":"Betano","valor":280,"odd":1.663,"resultado":"Green"}]},{"jogo":"Goa FC","data":"2025-09-15","apostas":[{"tipo":"Under ","casa":"BETesporte","valor":150,"odd":2.3,"resultado":"Green"},{"tipo":"Over","casa":"bet365","valor":177,"odd":1.975,"resultado":"Red"}]},{"jogo":"PSG x Atalanta","data":"2025-09-15","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3,"resultado":"Red"},{"tipo":"Over","casa":"bet365","valor":280,"odd":1.604,"resultado":"Green"}]},{"jogo":"Ajax X Inter Milão ","data":"2025-09-15","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":2.9,"resultado":"Green"},{"tipo":"Over","casa":"bet365","valor":268,"odd":1.624,"resultado":"Red"}]},{"jogo":"Botafogo x Mirassol ","data":"2025-09-15","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":4.1,"resultado":"Red"},{"tipo":"Over","casa":"Outra","valor":431,"odd":1.43,"resultado":"Green"}]},{"jogo":"New York city","data":"2025-09-15","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.1,"resultado":"Red"},{"tipo":"Over","casa":"Outra","valor":290,"odd":1.595,"resultado":"Green"}]},{"jogo":"Liverpool ","data":"2025-09-15","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.3,"resultado":"Green"},{"tipo":"Over","casa":"bet365","valor":200,"odd":1.53,"resultado":"Red"},{"tipo":"Over","casa":"Outra","valor":123.63,"odd":1.52,"resultado":"Red"}]},{"jogo":"Palmeiras","data":"2025-09-15","apostas":[{"tipo":"Casa","casa":"Superbet","valor":120.25,"odd":2.1,"resultado":"Red"},{"tipo":"Fora","casa":"Superbet","valor":100,"odd":3.8,"resultado":"Green"},{"tipo":"Empate","casa":"bet365","valor":100,"odd":3.6,"resultado":"Red"}]},{"jogo":"Flamengo","data":"2025-09-15","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.1,"resultado":"Green"},{"tipo":"Over","casa":"Betano","valor":280,"odd":1.64,"resultado":"Red"}]}];


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
        <label for="tipo-aposta">Tipo de Aposta:</label>
        <input type="text" id="tipo-aposta" placeholder="Ex: Casa/Empate">
        <label for="casa-aposta">Casa de Aposta:</label>
        <select id="casa-aposta" class="select-casa"></select>
        <label for="valor-aposta">Valor Apostado:</label>
        <input type="number" id="valor-aposta" step="0.01" placeholder="R$ 0.00">
        <label for="odd-aposta">Odd:</label>
        <input type="number" id="odd-aposta" step="0.01" placeholder="1.50">
        <label for="resultado-aposta">Resultado:</label>
        <select id="resultado-aposta" class="select-resultado">
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
        const tipo = apostaDiv.querySelector('input[id="tipo-aposta"]').value;
        const casa = apostaDiv.querySelector('select[id="casa-aposta"]').value;
        const valor = parseFloat(apostaDiv.querySelector('input[id="valor-aposta"]').value);
        const odd = parseFloat(apostaDiv.querySelector('input[id="odd-aposta"]').value);
        const resultado = apostaDiv.querySelector('select[id="resultado-aposta"]').value;

        if (jogo && data && tipo && casa && valor && odd && resultado) {
            novasApostas.push({ tipo, casa, valor, odd, resultado });
        }
    });

    if (novasApostas.length > 0) {
        apostas.push({ jogo, data, apostas: novasApostas });
        localStorage.setItem("apostas", JSON.stringify(apostas));
        renderApostas();
        atualizarDashboard();
        closeModal('nova');
    } else {
        alert("Por favor, preencha todos os campos da aposta.");
    }
}

function renderApostas() {
    const container = document.getElementById("historico-container");
    container.innerHTML = "";

    const apostasOrdenadas = apostas.sort((a, b) => new Date(b.data) - new Date(a.data));

    apostasOrdenadas.forEach((aposta, index) => {
        aposta.apostas.forEach(ap => {
            const statusClass = ap.resultado === "Pendente" ? "status-pendente" : "status-finalizada";
            const lucro = ap.resultado === "Green" ? (ap.valor * ap.odd) - ap.valor : ap.resultado === "Red" ? -ap.valor : 0;
            const lucroFormatado = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(lucro);

            const apostaCard = document.createElement('div');
            apostaCard.classList.add('aposta-card');
            apostaCard.onclick = () => openEditModal(index, aposta.apostas.indexOf(ap));
            
            apostaCard.innerHTML = `
                <h3>${aposta.jogo}</h3>
                <p><strong>Data:</strong> ${new Date(aposta.data).toLocaleDateString('pt-BR', { year: 'numeric', month: '2-digit', day: '2-digit' })}</p>
                <p><strong>Tipo:</strong> ${ap.tipo}</p>
                <p><strong>Casa:</strong> ${ap.casa}</p>
                <p><strong>Valor:</strong> R$ ${ap.valor.toFixed(2).replace('.', ',')}</p>
                <p><strong>Odd:</strong> ${ap.odd.toFixed(2).replace('.', ',')}</p>
                <p><strong>Lucro:</strong> <span class="${lucro > 0 ? 'lucro-positive' : lucro < 0 ? 'lucro-negative' : 'lucro-zero'}">${lucroFormatado}</span></p>
                <div class="aposta-card-status ${statusClass}">${ap.resultado}</div>
            `;
            container.appendChild(apostaCard);
        });
    });
}

function openEditModal(jogoIndex, apostaIndex) {
    const apostaPrincipal = apostas[jogoIndex];
    const apostaUnica = apostaPrincipal.apostas[apostaIndex];
    
    document.getElementById('edicao-jogo').value = apostaPrincipal.jogo;
    document.getElementById('edicao-data').value = apostaPrincipal.data;

    const container = document.getElementById('edicao-apostas-container');
    container.innerHTML = "";
    
    const div = document.createElement('div');
    div.classList.add('aposta-input-group');
    div.innerHTML = `
        <label>Tipo de Aposta:</label>
        <input type="text" id="edicao-tipo-aposta" value="${apostaUnica.tipo}">
        <label>Casa de Aposta:</label>
        <select id="edicao-select-casa" class="select-casa">
            ${casasDeAposta.map(c => `<option value="${c}" ${c === apostaUnica.casa ? 'selected' : ''}>${c}</option>`).join('')}
        </select>
        <label>Valor Apostado:</label>
        <input type="number" id="edicao-valor-aposta" step="0.01" value="${apostaUnica.valor}">
        <label>Odd:</label>
        <input type="number" id="edicao-odd-aposta" step="0.01" value="${apostaUnica.odd}">
        <label>Resultado:</label>
        <select id="edicao-resultado-aposta" class="select-resultado">
            <option value="Pendente" ${apostaUnica.resultado === 'Pendente' ? 'selected' : ''}>Pendente</option>
            <option value="Green" ${apostaUnica.resultado === 'Green' ? 'selected' : ''}>Green</option>
            <option value="Red" ${apostaUnica.resultado === 'Red' ? 'selected' : ''}>Red</option>
        </select>
    `;
    container.appendChild(div);
    
    document.getElementById('btn-salvar-edicao').onclick = () => saveEdit(jogoIndex, apostaIndex);
    openModal('edicao');
}

function saveEdit(jogoIndex, apostaIndex) {
    const apostaPrincipal = apostas[jogoIndex];
    
    const tipo = document.getElementById('edicao-tipo-aposta').value;
    const casa = document.getElementById('edicao-select-casa').value;
    const valor = parseFloat(document.getElementById('edicao-valor-aposta').value);
    const odd = parseFloat(document.getElementById('edicao-odd-aposta').value);
    const resultado = document.getElementById('edicao-resultado-aposta').value;

    apostaPrincipal.apostas[apostaIndex] = { tipo, casa, valor, odd, resultado };
    apostas[jogoIndex] = apostaPrincipal;

    localStorage.setItem("apostas", JSON.stringify(apostas));
    renderApostas();
    atualizarDashboard();
    closeModal('edicao');
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
        const dataAposta = new Date(aposta.data);
        if (dataAposta >= primeiroDiaDoMes) {
            aposta.apostas.forEach(ap => {
                totalApostadoMes += ap.valor;
                if (ap.resultado === "Green") {
                    totalGanhosMes += 1;
                    lucroMes += (ap.valor * ap.odd) - ap.valor;
                } else if (ap.resultado === "Red") {
                    lucroMes -= ap.valor;
                } else if (ap.resultado === "Pendente") {
                    totalPendenteMes += 1;
                }
                
                if (dataAposta.toDateString() === hoje.toDateString()) {
                    if (ap.resultado === "Green") {
                        ganhoHoje += (ap.valor * ap.odd) - ap.valor;
                    } else if (ap.resultado === "Red") {
                        ganhoHoje -= ap.valor;
                    }
                }
            });
        }
    });

    const roiMes = totalApostadoMes > 0 ? (lucroMes / totalApostadoMes) * 100 : 0;
    
    document.getElementById("totalApostadoMes").textContent = `R$ ${totalApostadoMes.toFixed(2).replace('.', ',')}`;
    document.getElementById("ganhosMes").textContent = totalGanhosMes;
    document.getElementById("pendenteMes").textContent = totalPendenteMes;
    document.getElementById("lucroMes").textContent = `R$ ${lucroMes.toFixed(2).replace('.', ',')}`;
    document.getElementById("ganhoHoje").textContent = `R$ ${ganhoHoje.toFixed(2).replace('.', ',')}`;
    document.getElementById("roiMes").textContent = `${roiMes.toFixed(2).replace('.', ',')}%`;

    const lucroMesElement = document.getElementById("lucroMes");
    if (lucroMes > 0) {
        lucroMesElement.classList.remove('lucro-negative', 'lucro-zero');
        lucroMesElement.classList.add('lucro-positive');
    } else if (lucroMes < 0) {
        lucroMesElement.classList.remove('lucro-positive', 'lucro-zero');
        lucroMesElement.classList.add('lucro-negative');
    } else {
        lucroMesElement.classList.remove('lucro-positive', 'lucro-negative');
        lucroMesElement.classList.add('lucro-zero');
    }
}

const API_KEY = "SUA_CHAVE_AQUI"; 

async function searchTeamAndFixtures() {
    const teamName = document.getElementById("jogo-search").value;
    const selectJogo = document.getElementById("jogo-select");
    selectJogo.innerHTML = '<option value="">Buscando jogos...</option>';

    if (!teamName) {
        selectJogo.innerHTML = '<option value="">Digite o nome de um time.</option>';
        return;
    }

    const url = `https://v3.football.api-sports.io/fixtures?live=all&search=${teamName}`;

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
        console.error("Erro ao buscar jogos:", error);
        selectJogo.innerHTML = '<option value="">Erro ao carregar jogos.</option>';
    }
}


function renderGraficoLucroDiario() {
    const lucroDiario = {};
    apostas.forEach(aposta => {
        aposta.apostas.forEach(ap => {
            const data = aposta.data;
            const lucro = ap.resultado === "Green" ? (ap.valor * ap.odd) - ap.valor : ap.resultado === "Red" ? -ap.valor : 0;
            if (!lucroDiario[data]) {
                lucroDiario[data] = 0;
            }
            lucroDiario[data] += lucro;
        });
    });

    const datas = Object.keys(lucroDiario).sort();
    const acumulado = [];
    let totalAcumulado = 0;
    
    datas.forEach(data => {
        totalAcumulado += lucroDiario[data];
        acumulado.push(totalAcumulado);
    });

    const ctx = document.getElementById('lucroDiarioChart').getContext('2d');
    
    if (window.lucroDiarioChart instanceof Chart) {
        window.lucroDiarioChart.destroy();
    }

    window.lucroDiarioChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: datas,
            datasets: [{
                label: 'Lucro Acumulado Diário',
                data: acumulado,
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

// Verifica se o localStorage está vazio e, se sim, carrega os dados iniciais.
if (apostas.length === 0) {
    apostas = dadosIniciais;
    localStorage.setItem("apostas", JSON.stringify(apostas));
}

document.addEventListener('DOMContentLoaded', () => {
    renderApostas();
    atualizarDashboard();
    renderGraficoLucroDiario();
});

