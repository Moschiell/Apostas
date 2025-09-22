const casasDeAposta = [
    "Aposta Ganha", "Apostatudo", "BateuBET", "bet365", "Betano", "Betbra", "Bet da Sorte", "BETesporte", "Betnacional", "BRBet", "BullSbet", "Esportes da Sorte", "Esportedasorte", "Estrelabet", "F12 bet", "Faz1bet", "FullBet", "KTO", "LuckBet", "Luvabet", "Novibet", "Outra", "Rei do Pitaco", "Sporty", "Stake", "Superbet", "Tivobet", "Vaidebet", "Vbet", "Verabet", "Outra"
];

let apostas = JSON.parse(localStorage.getItem("apostas")) || [];
let apostaCount = 2;
let apostaSendoEditadaIndex = -1;

const dadosIniciais = [{"jogo":"Coritba","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.3,"resultado":"Pendente"},{"tipo":"Over","casa":"Betano","valor":325.66,"odd":1.52,"resultado":"Pendente"}]},{"jogo":"Inter milao","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.3,"resultado":"Pendente"},{"tipo":"Over","casa":"Betbra","valor":320,"odd":1.565,"resultado":"Pendente"}]},{"jogo":"Faisaly","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3,"resultado":"Pendente"},{"tipo":"Over","casa":"Superbet","valor":269.46,"odd":1.67,"resultado":"Pendente"}]},{"jogo":"Arsenal","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":2.5,"resultado":"Green"},{"tipo":"Over","casa":"Betbra","valor":202,"odd":1.86,"resultado":"Red"}]},{"jogo":"Leverkusen ","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.3,"resultado":"Green"},{"tipo":"Over","casa":"Betbra","valor":305,"odd":1.625,"resultado":"Red"}]},{"jogo":"Bodo ","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.3,"resultado":"Green"},{"tipo":"Over ","casa":"BETesporte","valor":345,"odd":1.523,"resultado":"Red"}]},{"jogo":"Frankfurt","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":276,"odd":1.628,"resultado":"Green"}]},{"jogo":"Aston Villa ","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":4,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":423,"odd":1.42,"resultado":"Green"}]},{"jogo":"Monterrey ","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":2.7,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":231,"odd":1.757,"resultado":"Green"}]},{"jogo":"Deportivo cali","data":"2025-09-20","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.3,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":322,"odd":1.543,"resultado":"Green"}]}]; // cortei para caber, mas mantém tudo igual no original!

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
        renderGraficoLucroDiario();
        closeModal('nova');
    } else {
        alert("Por favor, preencha todos os campos da aposta.");
    }
}

function atualizarDashboard() {
    const agora = new Date();
    const primeiroDiaDoMes = new Date(agora.getFullYear(), agora.getMonth(), 1);
    const hoje = new Date(agora.getFullYear(), agora.getMonth(), agora.getDate());

    let totalApostadoMes = 0;
    let totalGanhosMes = 0;  // agora é lucro líquido
    let totalPendenteMes = 0;
    let lucroMes = 0;
    let ganhoHoje = 0;
    
    apostas.forEach(aposta => {
        const dataAposta = new Date(aposta.data);
        if (dataAposta >= primeiroDiaDoMes) {
            aposta.apostas.forEach(ap => {
                totalApostadoMes += ap.valor;

                if (ap.resultado === "Green") {
                    const ganho = ap.valor * ap.odd;
                    const lucro = ganho - ap.valor;
                    totalGanhosMes += lucro;   // ⬅️ agora soma apenas o lucro líquido
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
}

// (demais funções iguais: renderApostas, renderGraficoLucroDiario, etc... mantidas!)

document.addEventListener('DOMContentLoaded', () => {
    renderApostas();
    atualizarDashboard();
    renderGraficoLucroDiario();
});