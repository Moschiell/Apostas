const casasDeAposta = [
    "Aposta Ganha", "Apostatudo", "BateuBET", "bet365", "Betano", "Betbra", "Bet da Sorte", "BETesporte", "Betnacional", "BRBet", "BullSbet", "Esportes da Sorte", "Esportedasorte", "Estrelabet", "F12 bet", "Faz1bet", "FullBet", "KTO", "LuckBet", "Luvabet", "Novibet", "Outra", "Rei do Pitaco", "Sporty", "Stake", "Superbet", "Tivobet", "Vaidebet", "Vbet", "Verabet", "Outra"
];

const dadosIniciais = [
    {"jogo":"Coritba","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.3,"resultado":"Pendente"},{"tipo":"Over","casa":"Betano","valor":325.66,"odd":1.52,"resultado":"Pendente"}]},{"jogo":"Inter milao","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.3,"resultado":"Pendente"},{"tipo":"Over","casa":"Betbra","valor":320,"odd":1.565,"resultado":"Pendente"}]},{"jogo":"Faisaly","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3,"resultado":"Pendente"},{"tipo":"Over","casa":"Superbet","valor":269.46,"odd":1.67,"resultado":"Pendente"}]},{"jogo":"Arsenal","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":2.5,"resultado":"Green"},{"tipo":"Over","casa":"Betbra","valor":202,"odd":1.86,"resultado":"Red"}]},{"jogo":"Leverkusen ","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.3,"resultado":"Green"},{"tipo":"Over","casa":"Betbra","valor":305,"odd":1.625,"resultado":"Red"}]},{"jogo":"Bodo ","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.3,"resultado":"Green"},{"tipo":"Over ","casa":"BETesporte","valor":345,"odd":1.523,"resultado":"Red"}]},{"jogo":"Frankfurt","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":276,"odd":1.628,"resultado":"Green"}]},{"jogo":"Aston Villa ","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":4,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":423,"odd":1.42,"resultado":"Green"}]},{"jogo":"Monterrey ","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":2.7,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":231,"odd":1.757,"resultado":"Green"}]},{"jogo":"Deportivo cali","data":"2025-09-20","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.3,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":322,"odd":1.543,"resultado":"Green"}]},{"jogo":"Guadalajara","data":"2025-09-20","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":2.6,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":212,"odd":1.819,"resultado":"Green"}]},{"jogo":"Deportivo","data":"2025-09-20","apostas":[{"tipo":"Over","casa":"BETesporte","valor":150,"odd":3.2,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":310,"odd":1.546,"resultado":"Green"}]},{"jogo":"Chelsea Duplo","data":"2025-09-20","apostas":[{"tipo":"Casa","casa":"Superbet","valor":93.64,"odd":2.67,"resultado":"Green"},{"tipo":"Empate","casa":"bet365","valor":64.44,"odd":3.88,"resultado":"Red"},{"tipo":"Fora","casa":"Superbet","valor":100,"odd":2.5,"resultado":"Red"},{"tipo":"Proteção","casa":"Superbet","valor":342.59,"odd":1.2,"resultado":"Green"}]},{"jogo":"Fluminense ","data":"2025-09-20","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.4,"resultado":"Green"},{"tipo":"Over","casa":"Sportingbet","valor":319,"odd":1.6,"resultado":"Red"}]},{"jogo":"Philadelphia","data":"2025-09-20","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.3,"resultado":"Green"},{"tipo":"Over","casa":"Betbra","valor":321,"odd":1.546,"resultado":"Red"}]},{"jogo":"Benfica","data":"2025-09-20","apostas":[{"tipo":"Under","casa":"BETesporte","valor":100,"odd":3.2,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":167.05,"odd":1.753,"resultado":"Green"},{"tipo":"Over","casa":"Betbra","valor":17.95,"odd":1.76,"resultado":"Green"}]},{"jogo":"Midj","data":"2025-09-20","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.5,"resultado":"Green"},{"tipo":"Over","casa":"Betbra","valor":349,"odd":1.507,"resultado":"Red"}]},{"jogo":"Tottenham Duplo","data":"2025-09-20","apostas":[{"tipo":"Casa","casa":"Superbet","valor":142,"odd":2.17,"resultado":"Green"},{"tipo":"Fora","casa":"Betano","valor":100,"odd":3.05,"resultado":"Red"},{"tipo":"Empate","casa":"bet365","valor":79.43,"odd":3.82,"resultado":"Green"},{"tipo":"Empate","casa":"Betbra","valor":81,"odd":3.787,"resultado":"Green"},{"tipo":"Proteção duplo","casa":"Betano","valor":400,"odd":1.62,"resultado":"Red"},{"tipo":"Proteção duplo","casa":"Superbet","valor":200,"odd":1.62,"resultado":"Red"}]},{"jogo":"Liverpool","data":"2025-09-20","apostas":[{"tipo":"Casa","casa":"Superbet","valor":213.38,"odd":1.5,"resultado":"Green"},{"tipo":"Empate","casa":"Betbra","valor":48,"odd":6.672,"resultado":"Red"},{"tipo":"Fora","casa":"KTO","valor":50.01,"odd":6.4,"resultado":"Red"},{"tipo":"Proteção duplo","casa":"Betbra","valor":350,"odd":1.234,"resultado":"Green"}]},{"jogo":"Bayern","data":"2025-09-20","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":2.7,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":238,"odd":1.711,"resultado":"Green"}]},{"jogo":"Daej","data":"2025-09-20","apostas":[{"tipo":"Under ","casa":"BETesporte","valor":150,\"odd\":2.9,\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"Luvabet\",\"valor\":269,\"odd\":1.67,\"resultado\":\"Green\"}]},{\"jogo\":\"Liverpool\",\"data\":\"2025-09-20\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":3.1,\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"Vaidebet\",\"valor\":161.97,\"odd\":1.63,\"resultado\":\"Green\"},{\"tipo\":\"Over\",\"casa\":\"Stake\",\"valor\":120,\"odd\":1.7,\"resultado\":\"Green\"}]},{\"jogo\":\"Tijuana\",\"data\":\"2025-09-19\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":3.2,\"resultado\":\"Red\"},{\"tipo\":\"Over \",\"casa\":\"Novibet\",\"valor\":310,\"odd\":1.54,\"resultado\":\"Green\"}]},{\"jogo\":\"America cali\",\"data\":\"2025-09-19\",\"apostas\":[{\"tipo\":\"Over\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":4,\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"Betbra\",\"valor\":459,\"odd\":1.39,\"resultado\":\"Green\"}]},{\"jogo\":\"Novorizontino\",\"data\":\"2025-09-19\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":3.7,\"resultado\":\"Green\"},{\"tipo\":\"Over\",\"casa\":\"Sportingbet\",\"valor\":348.99,\"odd\":1.47,\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"Vaidebet\",\"valor\":27.75,\"odd\":1.46,\"resultado\":\"Red\"}]},{\"jogo\":\"Huracan\",\"data\":\"2025-09-19\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":2.8,\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"Betbra\",\"valor\":260,\"odd\":1.699,\"resultado\":\"Green\"}]},{\"jogo\":\"Bingo\",\"data\":\"2025-09-19\",\"apostas\":[{\"tipo\":\"Bingo\",\"casa\":\"Superbet\",\"valor\":2.5,\"odd\":16.925,\"resultado\":\"Green\"},{\"tipo\":\"Bingo\",\"casa\":\"Superbet\",\"valor\":3,\"odd\":16.925,\"resultado\":\"Green\"}]},{\"jogo\":\"Stuttgart \",\"data\":\"2025-09-19\",\"apostas\":[{\"tipo\":\"Over\",\"casa\":\"BETesporte\",\"valor\":78,\"odd\":2,\"resultado\":\"Red\"},{\"tipo\":\"Under\",\"casa\":\"Betbra\",\"valor\":200,\"odd\":2,\"resultado\":\"Red\"}]},{\"jogo\":\"Betis\",\"data\":\"2025-09-19\",\"apostas\":[{\"tipo\":\"Casa\",\"casa\":\"Betano\",\"valor\":234.61,\"odd\":1.93,\"resultado\":\"Red\"},{\"tipo\":\"Empate\",\"casa\":\"Esportivabet\",\"valor\":113.2,\"odd\":4,\"resultado\":\"Green\"}]},{\"jogo\":\"Bielefeld\",\"data\":\"2025-09-19\",\"apostas\":[{\"tipo\":\"Under \",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":3.5,\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"Rei do Pitaco\",\"valor\":355,\"odd\":1.48,\"resultado\":\"Green\"}]},{\"jogo\":\"Khaleej\",\"data\":\"2025-09-19\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":3,\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"Betbra\",\"valor\":278,\"odd\":1.626,\"resultado\":\"Green\"}]},{\"jogo\":\"Salpa\",\"data\":\"2025-09-19\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":3.6,\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"Betbra\",\"valor\":393,\"odd\":1.458,\"resultado\":\"Green\"}]},{\"jogo\":\"Cassino\",\"data\":\"2025-09-19\",\"apostas\":[{\"tipo\":\"Cassino\",\"casa\":\"bet365\",\"valor\":17,\"odd\":2,\"resultado\":\"Green\"},{\"tipo\":\"Cassino\",\"casa\":\"bet365\",\"valor\":0.75,\"odd\":2,\"resultado\":\"Green\"}]},{\"jogo\":\"Dhafra\",\"data\":\"2025-09-19\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":4.3,\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"Betbra\",\"valor\":461,\"odd\":1.409,\"resultado\":\"Green\"}]},{\"jogo\":\"Wuhan Three Towns\",\"data\":\"2025-09-19\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":3.2,\"resultado\":\"Red\"},{\"tipo\":\"Over \",\"casa\":\"Novibet\",\"valor\":201.61,\"odd\":1.58,\"resultado\":\"Green\"},{\"tipo\":\"Over\",\"casa\":\"Vaidebet\",\"valor\":93.25,\"odd\":1.54,\"resultado\":\"Green\"},{\"tipo\":\"Over\",\"casa\":\"bet365\",\"valor\":11.52,\"odd\":1.55,\"resultado\":\"Green\"}]},{\"jogo\":\"Cartagines\",\"data\":\"2025-09-18\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":2.5,\"resultado\":\"Green\"},{\"tipo\":\"Over\",\"casa\":\"Vaidebet\",\"valor\":203,\"odd\":1.85,\"resultado\":\"Red\"}]},{\"jogo\":\"Flamengo\",\"data\":\"2025-09-18\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":100,\"odd\":3.5,\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"BETesporte\",\"valor\":50,\"odd\":3.4,\"resultado\":\"Red\"}]},{\"jogo\":\"Alianza lima\",\"data\":\"2025-09-18\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":3.2,\"resultado\":\"Green\"},{\"tipo\":\"Over\",\"casa\":\"Betano\",\"valor\":309.68,\"odd\":1.55,\"resultado\":\"Red\"}]},{\"jogo\":\"Botafogo SP\",\"data\":\"2025-09-18\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":2.9,\"resultado\":\"Red\"},{\"tipo\":\"Over \",\"casa\":\"Aposta Ganha\",\"valor\":264,\"odd\":1.65,\"resultado\":\"Green\"}]},{\"jogo\":\"Barcelona\",\"data\":\"2025-09-18\",\"apostas\":[{\"tipo\":\"Fora\",\"casa\":\"Rei do Pitaco\",\"valor\":120.35,\"odd\":2.65,\"resultado\":\"Green\"},{\"tipo\":\"Empate\",\"casa\":\"Betano\",\"valor\":82.84,\"odd\":3.85,\"resultado\":\"Red\"},{\"tipo\":\"Casa\",\"casa\":\"Betano\",\"valor\":125.07,\"odd\":1.55,\"resultado\":\"Red\"},{\"tipo\":\"Fora\",\"casa\":\"Betano\",\"valor\":207,\"odd\":1.1,\"resultado\":\"Green\"}]},{\"jogo\":\"Barcelona\",\"data\":\"2025-09-18\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"bet365\",\"valor\":150,\"odd\":3,\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"bet365\",\"valor\":284,\"odd\":1.585,\"resultado\":\"Green\"}]},{\"jogo\":\"Brugge \",\"data\":\"2025-09-18\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":2.9,\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"bet365\",\"valor\":265,\"odd\":1.643,\"resultado\":\"Green\"}]},{\"jogo\":\"Liep\",\"data\":\"2025-09-18\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":3,\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"Vaidebet\",\"valor\":281.25,\"odd\":1.6,\"resultado\":\"Green\"}]},{\"jogo\":\"Beijin\",\"data\":\"2025-09-18\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":3.3,\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"Outra\",\"valor\":326,\"odd\":1.52,\"resultado\":\"Green\"}]},{\"jogo\":\"São Paulo \",\"data\":\"2025-09-18\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":3.6,\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"Outra\",\"valor\":343,\"odd\":1.575,\"resultado\":\"Green\"}]},{\"jogo\":\"Cassino\",\"data\":\"2025-09-18\",\"apostas\":[{\"tipo\":\"Cassino\",\"casa\":\"bet365\",\"valor\":55,\"odd\":2,\"resultado\":\"Green\"},{\"tipo\":\"Cassino\",\"casa\":\"bet365\",\"valor\":0,\"odd\":1,\"resultado\":\"Red\"}]},{\"jogo\":\"Cassino\",\"data\":\"2025-09-17\",\"apostas\":[{\"tipo\":\"Cassino\",\"casa\":\"Luva.bet\",\"valor\":60,\"odd\":2.084,\"resultado\":\"Green\"},{\"tipo\":\"Jjh\",\"casa\":\"bet365\",\"valor\":0,\"odd\":1,\"resultado\":\"Green\"}]},{\"jogo\":\"Chelsea \",\"data\":\"2025-09-17\",\"apostas\":[{\"tipo\":\"Fora\",\"casa\":\"Rei do Pitaco\",\"valor\":20,\"odd\":4.85,\"resultado\":\"Red\"},{\"tipo\":\"Casa\",\"casa\":\"Betano\",\"valor\":55.43,\"odd\":1.75,\"resultado\":\"Green\"},{\"tipo\":\"Empate \",\"casa\":\"bet365\",\"valor\":22.56,\"odd\":4.3,\"resultado\":\"Red\"}]},{\"jogo\":\"Liverpool\",\"data\":\"2025-09-17\",\"apostas\":[{\"tipo\":\"Casa\",\"casa\":\"Betano\",\"valor\":87.33,\"odd\":1.5,\"resultado\":\"Green\"},{\"tipo\":\"Fora\",\"casa\":\"Rei do Pitaco\",\"valor\":20,\"odd\":6.55,\"resultado\":\"Red\"},{\"tipo\":\"Empate\",\"casa\":\"Betano\",\"valor\":27.29,\"odd\":4.8,\"resultado\":\"Red\"}]},{\"jogo\":\"Slavia \",\"data\":\"2025-09-17\",\"apostas\":[{\"tipo\":\"Fora\",\"casa\":\"Rei do Pitaco\",\"valor\":20,\"odd\":5.36,\"resultado\":\"Red\"},{\"tipo\":\"Empate\",\"casa\":\"Outra\",\"valor\":27,\"odd\":4,\"resultado\":\"Green\"},{\"tipo\":\"Fora\",\"casa\":\"Betano\",\"valor\":56,\"odd\":1.93,\"resultado\":\"Green\"}]},{\"jogo\":\"Tai po\",\"data\":\"2025-09-18\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":4.7,\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"bet365\",\"valor\":518.38,\"odd\":1.36,\"resultado\":\"Green\"}]},{\"jogo\":\"Slavia\",\"data\":\"2025-09-17\",\"apostas\":[{\"tipo\":\"Under \",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":3,\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"bet365\",\"valor\":253,\"odd\":1.78,\"resultado\":\"Green\"}]},{\"jogo\":\"Atlético\",\"data\":\"2025-09-17\",\"apostas\":[{\"tipo\":\"Chance dupla \",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":2.6,\"resultado\":\"Green\"},{\"tipo\":\"Casa\",\"casa\":\"bet365\",\"valor\":212,\"odd\":1.841,\"resultado\":\"Red\"}]},{\"jogo\":\"Real salt\",\"data\":\"2025-09-17\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"bet365\",\"valor\":150,\"odd\":2.9,\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"bet365\",\"valor\":147,\"odd\":1.645,\"resultado\":\"Green\"},{\"tipo\":\"Over\",\"casa\":\"bet365\",\"valor\":115.28,\"odd\":1.68,\"resultado\":\"Green\"}]},{\"jogo\":\"Ulsan\",\"data\":\"2025-09-17\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":3,\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"bet365\",\"valor\":268,\"odd\":1.682,\"resultado\":\"Green\"}]},{\"jogo\":\"Gamba\",\"data\":\"2025-09-17\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":3.3,\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"bet365\",\"valor\":164,\"odd\":1.643,\"resultado\":\"Green\"},{\"tipo\":\"Over\",\"casa\":\"bet365\",\"valor\":80.54,\"odd\":1.603,\"resultado\":\"Green\"},{\"tipo\":\"Over\",\"casa\":\"bet365\",\"valor\":60.4,\"odd\":1.611,\"resultado\":\"Green\"}]},{\"jogo\":\"Shangai\",\"data\":\"2025-09-17\",\"apostas\":[{\"tipo\":\"Under \",\"casa\":\"bet365\",\"valor\":150,\"odd\":3.1,\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"bet365\",\"valor\":280,\"odd\":1.663,\"resultado\":\"Green\"}]},{\"jogo\":\"Goa FC\",\"data\":\"2025-09-17\",\"apostas\":[{\"tipo\":\"Under \",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":2.3,\"resultado\":\"Green\"},{\"tipo\":\"Over\",\"casa\":\"bet365\",\"valor\":177,\"odd\":1.975,\"resultado\":\"Red\"}]},{\"jogo\":\"PSG x Atalanta\",\"data\":\"2025-09-17\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":3,\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"bet365\",\"valor\":280,\"odd\":1.604,\"resultado\":\"Green\"}]},{\"jogo\":\"Ajax X Inter Milão \",\"data\":\"2025-09-17\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":2.9,\"resultado\":\"Green\"},{\"tipo\":\"Over\",\"casa\":\"bet365\",\"valor\":268,\"odd\":1.624,\"resultado\":\"Red\"}]},{\"jogo\":\"Botafogo x Mirassol \",\"data\":\"2025-09-17\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":4.1,\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"Outra\",\"valor\":431,\"odd\":1.43,\"resultado\":\"Green\"}]},{\"jogo\":\"New York city\",\"data\":\"2025-09-17\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":3.1,\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"bet365\",\"valor\":300,\"odd\":1.55,\"resultado\":\"Green\"}]},{"jogo\":\"River x Palmeiras\",\"data\":\"2025-09-17\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":2.6,\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"Betano\",\"valor\":213.11,\"odd\":1.83,\"resultado\":\"Green\"}]}
];

let apostas = JSON.parse(localStorage.getItem("apostas"));

if (!apostas || apostas.length === 0) {
    apostas = dadosIniciais;
    localStorage.setItem("apostas", JSON.stringify(apostas));
}

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
    document.getElementById("aposta-form").reset();
    document.getElementById("aposta-extras-container").innerHTML = '';
    apostaCount = 2;
    popularCasas();
}

function popularCasas() {
    const selects = document.querySelectorAll('.select-casa');
    selects.forEach(select => {
        select.innerHTML = '';
        casasDeAposta.forEach(casa => {
            const option = document.createElement('option');
            option.value = casa;
            option.textContent = casa;
            select.appendChild(option);
        });
    });
}

function adicionarApostaExtra() {
    if (apostaCount >= 4) {
        alert("Máximo de 4 apostas por evento.");
        return;
    }

    const container = document.getElementById("aposta-extras-container");
    const novoCampo = document.createElement("div");
    novoCampo.className = "aposta-extra";
    novoCampo.innerHTML = `
        <label for="tipo-${apostaCount}">Tipo de Aposta:</label>
        <input type="text" id="tipo-${apostaCount}" class="input-tipo" required>
        <label for="casa-${apostaCount}">Casa de Aposta:</label>
        <select id="casa-${apostaCount}" class="select-casa" required></select>
        <label for="valor-${apostaCount}">Valor Apostado:</label>
        <input type="number" id="valor-${apostaCount}" class="input-valor" step="0.01" required>
        <label for="odd-${apostaCount}">Odd:</label>
        <input type="number" id="odd-${apostaCount}" class="input-odd" step="0.001" required>
    `;
    container.appendChild(novoCampo);
    apostaCount++;
    popularCasas();
}

function adicionarAposta(event) {
    event.preventDefault();
    const form = document.getElementById("aposta-form");

    const jogo = form.querySelector("#jogo").value;
    const data = form.querySelector("#data").value;

    const apostasEvento = [];
    const apostaPrincipal = {
        tipo: form.querySelector("#tipo-1").value,
        casa: form.querySelector("#casa-1").value,
        valor: parseFloat(form.querySelector("#valor-1").value),
        odd: parseFloat(form.querySelector("#odd-1").value),
        resultado: "Pendente"
    };
    apostasEvento.push(apostaPrincipal);

    const camposExtras = document.querySelectorAll(".aposta-extra");
    camposExtras.forEach(campo => {
        const tipo = campo.querySelector(".input-tipo").value;
        const casa = campo.querySelector(".select-casa").value;
        const valor = parseFloat(campo.querySelector(".input-valor").value);
        const odd = parseFloat(campo.querySelector(".input-odd").value);
        apostasEvento.push({ tipo, casa, valor, odd, resultado: "Pendente" });
    });

    apostas.push({
        jogo: jogo,
        data: data,
        apostas: apostasEvento
    });

    salvarApostas();
    renderApostas();
    atualizarDashboard();
    fecharModal('nova');
        }

function salvarApostas() {
    localStorage.setItem("apostas", JSON.stringify(apostas));
}

function renderApostas() {
    const historico = document.getElementById("historico-container");
    historico.innerHTML = '';
    
    apostas.sort((a, b) => new Date(b.data) - new Date(a.data));

    apostas.forEach((aposta, index) => {
        const card = document.createElement("div");
        card.className = "aposta-card";
        card.innerHTML = `
            <h3>${aposta.jogo}</h3>
            <p>Data: ${aposta.data}</p>
        `;
        
        aposta.apostas.forEach(detalhe => {
            const statusClass = detalhe.resultado === "Pendente" ? "status-pendente" : "status-finalizada";
            card.innerHTML += `<p>Tipo: ${detalhe.tipo} | Casa: ${detalhe.casa} | Valor: R$ ${detalhe.valor.toFixed(2)} | Odd: ${detalhe.odd} | <span class="aposta-card-status ${detalhe.resultado.toLowerCase()}">${detalhe.resultado}</span></p>`;
        });

        const btnAcoes = document.createElement("div");
        btnAcoes.className = "botoes-acao";
        btnAcoes.innerHTML = `
            <button class="btn-editar" onclick="abrirEdicao(${index})">Editar</button>
            <button class="btn-deletar" onclick="deletarAposta(${index})">Deletar</button>
        `;
        card.appendChild(btnAcoes);
        historico.appendChild(card);
    });
}

function abrirEdicao(index) {
    apostaSendoEditadaIndex = index;
    const aposta = apostas[index];

    document.getElementById('edit-jogo').value = aposta.jogo;
    document.getElementById('edit-data').value = aposta.data;
    
    const container = document.getElementById('edit-apostas-container');
    container.innerHTML = '';
    
    aposta.apostas.forEach((detalhe, i) => {
        const campo = document.createElement("div");
        campo.className = "aposta-extra-edicao";
        campo.innerHTML = `
            <label>Aposta ${i + 1}:</label>
            <input type="text" class="input-tipo" value="${detalhe.tipo}" required>
            <select class="select-casa" required></select>
            <input type="number" class="input-valor" step="0.01" value="${detalhe.valor}" required>
            <input type="number" class="input-odd" step="0.001" value="${detalhe.odd}" required>
            <label>Resultado:</label>
            <select class="select-resultado" required>
                <option value="Pendente" ${detalhe.resultado === "Pendente" ? "selected" : ""}>Pendente</option>
                <option value="Green" ${detalhe.resultado === "Green" ? "selected" : ""}>Green</option>
                <option value="Red" ${detalhe.resultado === "Red" ? "selected" : ""}>Red</option>
            </select>
        `;
        container.appendChild(campo);
        
        const selectCasa = campo.querySelector('.select-casa');
        casasDeAposta.forEach(casa => {
            const option = document.createElement('option');
            option.value = casa;
            option.textContent = casa;
            if (casa === detalhe.casa) {
                option.selected = true;
            }
            selectCasa.appendChild(option);
        });
    });

    abrirModal('edicao');
}

function salvarEdicao() {
    const aposta = apostas[apostaSendoEditadaIndex];
    aposta.jogo = document.getElementById('edit-jogo').value;
    aposta.data = document.getElementById('edit-data').value;

    const campos = document.querySelectorAll('#edit-apostas-container .aposta-extra-edicao');
    campos.forEach((campo, i) => {
        const detalhe = aposta.apostas[i];
        detalhe.tipo = campo.querySelector('.input-tipo').value;
        detalhe.casa = campo.querySelector('.select-casa').value;
        detalhe.valor = parseFloat(campo.querySelector('.input-valor').value);
        detalhe.odd = parseFloat(campo.querySelector('.input-odd').value);
        detalhe.resultado = campo.querySelector('.select-resultado').value;
    });

    salvarApostas();
    renderApostas();
    atualizarDashboard();
    renderGraficoLucroDiario();
    fecharModal('edicao');
}

function deletarAposta(index) {
    if (confirm("Tem certeza que deseja deletar esta aposta?")) {
        apostas.splice(index, 1);
        salvarApostas();
        renderApostas();
        atualizarDashboard();
        renderGraficoLucroDiario();
    }
}

function atualizarDashboard() {
    const totais = {
        totalApostadoMes: 0,
        totalLucroMes: 0,
        totalLucroHoje: 0,
        totalGreens: 0,
        totalPendente: 0
    };

    const hoje = new Date().toISOString().split('T')[0];

    apostas.forEach(aposta => {
        aposta.apostas.forEach(detalhe => {
            totais.totalApostadoMes += detalhe.valor;

            if (detalhe.resultado === "Green") {
                totais.totalLucroMes += (detalhe.valor * detalhe.odd) - detalhe.valor;
                totais.totalGreens++;
                if (aposta.data === hoje) {
                    totais.totalLucroHoje += (detalhe.valor * detalhe.odd) - detalhe.valor;
                }
            } else if (detalhe.resultado === "Red") {
                totais.totalLucroMes -= detalhe.valor;
                if (aposta.data === hoje) {
                    totais.totalLucroHoje -= detalhe.valor;
                }
            } else if (detalhe.resultado === "Pendente") {
                totais.totalPendente++;
            }
        });
    });

    const roi = totais.totalApostadoMes > 0 ? ((totais.totalLucroMes / totais.totalApostadoMes) * 100).toFixed(2) : 0;
    
    document.getElementById("totalApostadoMes").innerText = `R$ ${totais.totalApostadoMes.toFixed(2)}`;
    document.getElementById("ganhosMes").innerText = totais.totalGreens;
    document.getElementById("pendenteMes").innerText = totais.totalPendente;
    
    const lucroMesElemento = document.getElementById("lucroMes");
    lucroMesElemento.innerText = `R$ ${totais.totalLucroMes.toFixed(2)}`;
    lucroMesElemento.className = totais.totalLucroMes > 0 ? 'lucro-positive' : (totais.totalLucroMes < 0 ? 'lucro-negative' : 'lucro-zero');

    const ganhoHojeElemento = document.getElementById("ganhoHoje");
    ganhoHojeElemento.innerText = `R$ ${totais.totalLucroHoje.toFixed(2)}`;
    ganhoHojeElemento.className = totais.totalLucroHoje > 0 ? 'lucro-positive' : (totais.totalLucroHoje < 0 ? 'lucro-negative' : 'lucro-zero');
    
    document.getElementById("roiMes").innerText = `${roi}%`;
}

function renderGraficoLucroDiario() {
    const lucroPorData = apostas.reduce((acc, aposta) => {
        if (!acc[aposta.data]) {
            acc[aposta.data] = 0;
        }
        aposta.apostas.forEach(detalhe => {
            if (detalhe.resultado === "Green") {
                acc[aposta.data] += (detalhe.valor * detalhe.odd) - detalhe.valor;
            } else if (detalhe.resultado === "Red") {
                acc[aposta.data] -= detalhe.valor;
            }
        });
        return acc;
    }, {});

    const sortedDates = Object.keys(lucroPorData).sort();
    const dataPontos = sortedDates.map(date => ({
        x: date,
        y: lucroPorData[date]
    }));

    const ctx = document.getElementById('lucroDiarioChart').getContext('2d');
    const chartStatus = Chart.getChart("lucroDiarioChart");
    if (chartStatus) {
        chartStatus.destroy();
    }

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: sortedDates,
            datasets: [{
                label: 'Lucro Diário (R$)',
                data: dataPontos,
                borderColor: 'rgb(59, 185, 80)',
                backgroundColor: 'rgba(59, 185, 80, 0.2)',
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

// Inicialização da página
document.addEventListener('DOMContentLoaded', () => {
    renderApostas();
    atualizarDashboard();
    renderGraficoLucroDiario();
    popularCasas();
});


// Funções para carregar jogos online (API)
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
        selectJogo.innerHTML = '<option value="">Erro ao carregar jogos.</option>';
    }
                    }
