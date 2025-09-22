const casasDeAposta = [
    "Aposta Ganha", "Apostatudo", "BateuBET", "bet365", "Betano", "Betbra", "Bet da Sorte", "BETesporte", "Betnacional", "BRBet", "BullSbet", "Esportes da Sorte", "Esportedasorte", "Estrelabet", "F12 bet", "Faz1bet", "FullBet", "KTO", "LuckBet", "Luvabet", "Novibet", "Outra", "Rei do Pitaco", "Sporty", "Stake", "Superbet", "Tivobet", "Vaidebet", "Vbet", "Verabet", "Outra"
];

const dadosIniciais = [
    {"jogo":"Coritba","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.3,"resultado":"Pendente"},{"tipo":"Over","casa":"Betano","valor":325.66,"odd":1.52,"resultado":"Pendente"}]},{"jogo":"Inter milao","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.3,"resultado":"Pendente"},{"tipo":"Over","casa":"Betbra","valor":320,"odd":1.565,"resultado":"Pendente"}]},{"jogo":"Faisaly","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3,"resultado":"Pendente"},{"tipo":"Over","casa":"Superbet","valor":269.46,"odd":1.67,"resultado":"Pendente"}]},{"jogo":"Arsenal","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":2.5,"resultado":"Green"},{"tipo":"Over","casa":"Betbra","valor":202,"odd":1.86,"resultado":"Red"}]},{"jogo":"Leverkusen ","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.3,"resultado":"Green"},{"tipo":"Over","casa":"Betbra","valor":305,"odd":1.625,"resultado":"Red"}]},{"jogo":"Bodo ","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.3,"resultado":"Green"},{"tipo":"Over ","casa":"BETesporte","valor":345,"odd":1.523,"resultado":"Red"}]},{"jogo":"Frankfurt","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":276,"odd":1.628,"resultado":"Green"}]},{"jogo":"Aston Villa ","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":4,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":423,"odd":1.42,"resultado":"Green"}]},{"jogo":"Monterrey ","data":"2025-09-21","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":2.7,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":231,"odd":1.757,"resultado":"Green"}]},{"jogo":"Deportivo cali","data":"2025-09-20","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.3,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":322,"odd":1.543,"resultado":"Green"}]},{"jogo":"Guadalajara","data":"2025-09-20","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":2.6,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":212,"odd":1.819,"resultado":"Green"}]},{"jogo":"Deportivo","data":"2025-09-20","apostas":[{"tipo":"Over","casa":"BETesporte","valor":150,"odd":3.2,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":310,"odd":1.546,"resultado":"Green"}]},{"jogo":"Chelsea Duplo","data":"2025-09-20","apostas":[{"tipo":"Casa","casa":"Superbet","valor":93.64,"odd":2.67,"resultado":"Green"},{"tipo":"Empate","casa":"bet365","valor":64.44,"odd":3.88,"resultado":"Red"},{"tipo":"Fora","casa":"Superbet","valor":100,"odd":2.5,"resultado":"Red"},{"tipo":"Proteção","casa":"Superbet","valor":342.59,"odd":1.2,"resultado":"Green"}]},{"jogo":"Fluminense ","data":"2025-09-20","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.4,"resultado":"Green"},{"tipo":"Over","casa":"Sportingbet","valor":319,"odd":1.6,"resultado":"Red"}]},{"jogo":"Philadelphia","data":"2025-09-20","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.3,"resultado":"Green"},{"tipo":"Over","casa":"Betbra","valor":321,"odd":1.546,"resultado":"Red"}]},{"jogo":"Benfica","data":"2025-09-20","apostas":[{"tipo":"Under","casa":"BETesporte","valor":100,"odd":3.2,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":167.05,"odd":1.753,"resultado":"Green"},{"tipo":"Over","casa":"Betbra","valor":17.95,"odd":1.76,"resultado":"Green"}]},{"jogo":"Midj","data":"2025-09-20","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":3.5,"resultado":"Green"},{"tipo":"Over","casa":"Betbra","valor":349,"odd":1.507,"resultado":"Red"}]},{"jogo":"Tottenham Duplo","data":"2025-09-20","apostas":[{"tipo":"Casa","casa":"Superbet","valor":142,"odd":2.17,"resultado":"Green"},{"tipo":"Fora","casa":"Betano","valor":100,"odd":3.05,"resultado":"Red"},{"tipo":"Empate","casa":"bet365","valor":79.43,"odd":3.82,"resultado":"Green"},{"tipo":"Empate","casa":"Betbra","valor":81,"odd":3.787,"resultado":"Green"},{"tipo":"Proteção duplo","casa":"Betano","valor":400,"odd":1.62,"resultado":"Red"},{"tipo":"Proteção duplo","casa":"Superbet","valor":200,"odd":1.62,"resultado":"Red"}]},{"jogo":"Liverpool","data":"2025-09-20","apostas":[{"tipo":"Casa","casa":"Superbet","valor":213.38,"odd":1.5,"resultado":"Green"},{"tipo":"Empate","casa":"Betbra","valor":48,"odd":6.672,"resultado":"Red"},{"tipo":"Fora","casa":"KTO","valor":50.01,"odd":6.4,"resultado":"Red"},{"tipo":"Proteção duplo","casa":"Betbra","valor":350,"odd":1.234,"resultado":"Green"}]},{"jogo":"Bayern","data":"2025-09-20","apostas":[{"tipo":"Under","casa":"BETesporte","valor":150,"odd":2.7,"resultado":"Red"},{"tipo":"Over","casa":"Betbra","valor":238,"odd":1.711,"resultado":"Green"}]},{"jogo":"Daej","data":"2025-09-20","apostas":[{"tipo":"Under ","casa":"BETesporte","valor":150,\"odd\":2.9,\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"Luvabet\",\"valor\":269,\"odd\":1.67,\"resultado\":\"Green\"}]},{\"jogo\":\"Liverpool\",\"data\":\"2025-09-20\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":3.1,\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"Vaidebet\",\"valor\":161.97,\"odd\":1.63,\"resultado\":\"Green\"},{\"tipo\":\"Over\",\"casa\":\"Stake\",\"valor\":120,\"odd\":1.7,\"resultado\":\"Green\"}]},{\"jogo\":\"Tijuana\",\"data\":\"2025-09-19\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":3.2,\"resultado\":\"Red\"},{\"tipo\":\"Over \",\"casa\":\"Novibet\",\"valor\":310,\"odd\":\"1.54\",\"resultado\":\"Green\"}]},{\"jogo\":\"America cali\",\"data\":\"2025-09-19\",\"apostas\":[{\"tipo\":\"Over\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":\"4\",\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"Betbra\",\"valor\":\"459\",\"odd\":\"1.39\",\"resultado\":\"Green\"}]},{\"jogo\":\"Novorizontino\",\"data\":\"2025-09-19\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":\"3.7\",\"resultado\":\"Green\"},{\"tipo\":\"Over\",\"casa\":\"Sportingbet\",\"valor\":348.99,\"odd\":\"1.47\",\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"Vaidebet\",\"valor\":27.75,\"odd\":\"1.46\",\"resultado\":\"Red\"}]},{\"jogo\":\"Huracan\",\"data\":\"2025-09-19\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":\"2.8\",\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"Betbra\",\"valor\":\"260\",\"odd\":\"1.699\",\"resultado\":\"Green\"}]},{\"jogo\":\"Bingo\",\"data\":\"2025-09-19\",\"apostas\":[{\"tipo\":\"Bingo\",\"casa\":\"Superbet\",\"valor\":2.5,\"odd\":\"16.925\",\"resultado\":\"Green\"},{\"tipo\":\"Bingo\",\"casa\":\"Superbet\",\"valor\":3,\"odd\":\"16.925\",\"resultado\":\"Green\"}]},{\"jogo\":\"Stuttgart \",\"data\":\"2025-09-19\",\"apostas\":[{\"tipo\":\"Over\",\"casa\":\"BETesporte\",\"valor\":78,\"odd\":\"2\",\"resultado\":\"Red\"},{\"tipo\":\"Under\",\"casa\":\"Betbra\",\"valor\":200,\"odd\":\"2\",\"resultado\":\"Red\"}]},{\"jogo\":\"Betis\",\"data\":\"2025-09-19\",\"apostas\":[{\"tipo\":\"Casa\",\"casa\":\"Betano\",\"valor\":234.61,\"odd\":\"1.93\",\"resultado\":\"Red\"},{\"tipo\":\"Empate\",\"casa\":\"Esportivabet\",\"valor\":113.2,\"odd\":\"4\",\"resultado\":\"Green\"}]},{\"jogo\":\"Bielefeld\",\"data\":\"2025-09-19\",\"apostas\":[{\"tipo\":\"Under \",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":\"3.5\",\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"Rei do Pitaco\",\"valor\":355,\"odd\":\"1.48\",\"resultado\":\"Green\"}]},{\"jogo\":\"Khaleej\",\"data\":\"2025-09-19\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":\"3\",\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"Betbra\",\"valor\":278,\"odd\":\"1.626\",\"resultado\":\"Green\"}]},{\"jogo\":\"Salpa\",\"data\":\"2025-09-19\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":\"3.6\",\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"Betbra\",\"valor\":393,\"odd\":\"1.458\",\"resultado\":\"Green\"}]},{\"jogo\":\"Cassino\",\"data\":\"2025-09-19\",\"apostas\":[{\"tipo\":\"Cassino\",\"casa\":\"bet365\",\"valor\":17,\"odd\":\"2\",\"resultado\":\"Green\"},{\"tipo\":\"Cassino\",\"casa\":\"bet365\",\"valor\":0.75,\"odd\":\"2\",\"resultado\":\"Green\"}]},{\"jogo\":\"Dhafra\",\"data\":\"2025-09-19\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":\"4.3\",\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"Betbra\",\"valor\":461,\"odd\":\"1.409\",\"resultado\":\"Green\"}]},{\"jogo\":\"Wuhan Three Towns\",\"data\":\"2025-09-19\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":\"3.2\",\"resultado\":\"Red\"},{\"tipo\":\"Over \",\"casa\":\"Novibet\",\"valor\":201.61,\"odd\":\"1.58\",\"resultado\":\"Green\"},{\"tipo\":\"Over\",\"casa\":\"Vaidebet\",\"valor\":93.25,\"odd\":\"1.54\",\"resultado\":\"Green\"},{\"tipo\":\"Over\",\"casa\":\"bet365\",\"valor\":11.52,\"odd\":\"1.55\",\"resultado\":\"Green\"}]},{\"jogo\":\"Cartagines\",\"data\":\"2025-09-18\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":\"2.5\",\"resultado\":\"Green\"},{\"tipo\":\"Over\",\"casa\":\"Vaidebet\",\"valor\":203,\"odd\":\"1.85\",\"resultado\":\"Red\"}]},{\"jogo\":\"Flamengo\",\"data\":\"2025-09-18\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":100,\"odd\":\"3.5\",\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"BETesporte\",\"valor\":50,\"odd\":\"3.4\",\"resultado\":\"Red\"}]},{\"jogo\":\"Alianza lima\",\"data\":\"2025-09-18\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":\"3.2\",\"resultado\":\"Green\"},{\"tipo\":\"Over\",\"casa\":\"Betano\",\"valor\":309.68,\"odd\":\"1.55\",\"resultado\":\"Red\"}]},{\"jogo\":\"Botafogo SP\",\"data\":\"2025-09-18\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":\"2.9\",\"resultado\":\"Red\"},{\"tipo\":\"Over \",\"casa\":\"Aposta Ganha\",\"valor\":264,\"odd\":\"1.65\",\"resultado\":\"Green\"}]},{\"jogo\":\"Barcelona\",\"data\":\"2025-09-18\",\"apostas\":[{\"tipo\":\"Fora\",\"casa\":\"Rei do Pitaco\",\"valor\":120.35,\"odd\":\"2.65\",\"resultado\":\"Green\"},{\"tipo\":\"Empate\",\"casa\":\"Betano\",\"valor\":82.84,\"odd\":\"3.85\",\"resultado\":\"Red\"},{\"tipo\":\"Casa\",\"casa\":\"Betano\",\"valor\":125.07,\"odd\":\"1.55\",\"resultado\":\"Red\"},{\"tipo\":\"Fora\",\"casa\":\"Betano\",\"valor\":207,\"odd\":\"1.1\",\"resultado\":\"Green\"}]},{\"jogo\":\"Barcelona\",\"data\":\"2025-09-18\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"bet365\",\"valor\":150,\"odd\":\"3\",\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"bet365\",\"valor\":284,\"odd\":\"1.585\",\"resultado\":\"Green\"}]},{\"jogo\":\"Brugge \",\"data\":\"2025-09-18\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":\"2.9\",\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"bet365\",\"valor\":265,\"odd\":\"1.643\",\"resultado\":\"Green\"}]},{\"jogo\":\"Liep\",\"data\":\"2025-09-18\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":\"3\",\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"Vaidebet\",\"valor\":281.25,\"odd\":\"1.61\",\"resultado\":\"Green\"}]},{\"jogo\":\"Betis\",\"data\":\"2025-09-18\",\"apostas\":[{\"tipo\":\"Casa\",\"casa\":\"Estrelabet\",\"valor\":200,\"odd\":\"2.7\",\"resultado\":\"Green\"},{\"tipo\":\"Fora\",\"casa\":\"Betano\",\"valor\":100,\"odd\":\"2.75\",\"resultado\":\"Red\"}]},{\"jogo\":\"Bragantino\",\"data\":\"2025-09-18\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":\"3.3\",\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"Betbra\",\"valor\":322,\"odd\":\"1.543\",\"resultado\":\"Green\"}]},{\"jogo\":\"Botafogo\",\"data\":\"2025-09-18\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":\"3.4\",\"resultado\":\"Green\"},{\"tipo\":\"Over\",\"casa\":\"Betbra\",\"valor\":328,\"odd\":\"1.52\",\"resultado\":\"Red\"}]},{\"jogo\":\"Espanha\",\"data\":\"2025-09-18\",\"apostas\":[{\"tipo\":\"Casa\",\"casa\":\"Superbet\",\"valor\":120,\"odd\":\"2.1\",\"resultado\":\"Red\"},{\"tipo\":\"Empate\",\"casa\":\"Betbra\",\"valor\":72,\"odd\":\"3.58\",\"resultado\":\"Red\"},{\"tipo\":\"Fora\",\"casa\":\"Betano\",\"valor\":100,\"odd\":\"3.2\",\"resultado\":\"Green\"}]},{\"jogo\":\"Bélgica\",\"data\":\"2025-09-17\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":\"3\",\"resultado\":\"Green\"},{\"tipo\":\"Over\",\"casa\":\"bet365\",\"valor\":280,\"odd\":\"1.663\",\"resultado\":\"Red\"},{\"tipo\":\"Under\",\"casa\":\"bet365\",\"valor\":150,\"odd\":\"3.1\",\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"bet365\",\"valor\":280,\"odd\":\"1.663\",\"resultado\":\"Green\"}]},{\"jogo\":\"Goa FC\",\"data\":\"2025-09-17\",\"apostas\":[{\"tipo\":\"Under \",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":\"2.3\",\"resultado\":\"Green\"},{\"tipo\":\"Over\",\"casa\":\"bet365\",\"valor\":177,\"odd\":\"1.975\",\"resultado\":\"Red\"}]},{\"jogo\":\"PSG x Atalanta\",\"data\":\"2025-09-17\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":\"3\",\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"bet365\",\"valor\":280,\"odd\":\"1.604\",\"resultado\":\"Green\"}]},{\"jogo\":\"Ajax X Inter Milão \",\"data\":\"2025-09-17\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":\"2.9\",\"resultado\":\"Green\"},{\"tipo\":\"Over\",\"casa\":\"bet365\",\"valor\":268,\"odd\":\"1.624\",\"resultado\":\"Red\"}]},{\"jogo\":\"Botafogo x Mirassol \",\"data\":\"2025-09-17\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":\"4.1\",\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"Outra\",\"valor\":431,\"odd\":\"1.43\",\"resultado\":\"Green\"}]},{\"jogo\":\"New York city\",\"data\":\"2025-09-17\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":\"3.3\",\"resultado\":\"Green\"},{\"tipo\":\"Over\",\"casa\":\"Betbra\",\"valor\":319.5,\"odd\":\"1.56\",\"resultado\":\"Red\"}]},{"jogo\":\"Sporting\",\"data\":\"2025-09-17\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":\"3.1\",\"resultado\":\"Green\"},{\"tipo\":\"Over\",\"casa\":\"Betano\",\"valor\":300,\"odd\":\"1.56\",\"resultado\":\"Red\"}]},{\"jogo\":\"Barcelona\",\"data\":\"2025-09-17\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":\"2.8\",\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"Betbra\",\"valor\":250,\"odd\":\"1.71\",\"resultado\":\"Green\"}]},{\"jogo\":\"Vasco\",\"data\":\"2025-09-17\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":\"2.9\",\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"Novibet\",\"valor\":262,\"odd\":\"1.67\",\"resultado\":\"Green\"}]},{\"jogo\":\"Flamengo\",\"data\":\"2025-09-17\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":\"3\",\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"Betbra\",\"valor\":280,\"odd\":\"1.604\",\"resultado\":\"Green\"}]},{\"jogo\":\"Real Madrid\",\"data\":\"2025-09-17\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":\"3.2\",\"resultado\":\"Green\"},{\"tipo\":\"Over\",\"casa\":\"Betano\",\"valor\":310,\"odd\":\"1.54\",\"resultado\":\"Red\"}]},{\"jogo\":\"Tigre\",\"data\":\"2025-09-17\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":\"2.8\",\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"Betbra\",\"valor\":260,\"odd\":\"1.699\",\"resultado\":\"Green\"}]},{\"jogo\":\"Palmeiras\",\"data\":\"2025-09-17\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":\"3.1\",\"resultado\":\"Green\"},{\"tipo\":\"Over\",\"casa\":\"Betano\",\"valor\":298,\"odd\":\"1.57\",\"resultado\":\"Red\"}]},{\"jogo\":\"Goa FC\",\"data\":\"2025-09-17\",\"apostas\":[{\"tipo\":\"Under \",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":\"2.3\",\"resultado\":\"Green\"},{\"tipo\":\"Over\",\"casa\":\"bet365\",\"valor\":177,\"odd\":\"1.975\",\"resultado\":\"Red\"}]},{\"jogo\":\"PSG x Atalanta\",\"data\":\"2025-09-17\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":\"3\",\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"bet365\",\"valor\":280,\"odd\":\"1.604\",\"resultado\":\"Green\"}]},{\"jogo\":\"Ajax X Inter Milão \",\"data\":\"2025-09-17\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":\"2.9\",\"resultado\":\"Green\"},{\"tipo\":\"Over\",\"casa\":\"bet365\",\"valor\":268,\"odd\":\"1.624\",\"resultado\":\"Red\"}]},{\"jogo\":\"Botafogo x Mirassol \",\"data\":\"2025-09-17\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":\"4.1\",\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"Outra\",\"valor\":431,\"odd\":\"1.43\",\"resultado\":\"Green\"}]},{\"jogo\":\"New York city\",\"data\":\"2025-09-17\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":\"3.3\",\"resultado\":\"Green\"},{\"tipo\":\"Over\",\"casa\":\"Betbra\",\"valor\":319.5,\"odd\":\"1.56\",\"resultado\":\"Red\"}]},{\"jogo\":\"Sporting\",\"data\":\"2025-09-17\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":\"3.1\",\"resultado\":\"Green\"},{\"tipo\":\"Over\",\"casa\":\"Betano\",\"valor\":300,\"odd\":\"1.56\",\"resultado\":\"Red\"}]},{\"jogo\":\"Barcelona\",\"data\":\"2025-09-17\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":\"2.8\",\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"Betbra\",\"valor\":250,\"odd\":\"1.71\",\"resultado\":\"Green\"}]},{\"jogo\":\"Vasco\",\"data\":\"2025-09-17\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":\"2.9\",\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"Novibet\",\"valor\":262,\"odd\":\"1.67\",\"resultado\":\"Green\"}]},{\"jogo\":\"Flamengo\",\"data\":\"2025-09-17\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":\"3\",\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"Betbra\",\"valor\":280,\"odd\":\"1.604\",\"resultado\":\"Green\"}]},{\"jogo\":\"Real Madrid\",\"data\":\"2025-09-17\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":\"3.2\",\"resultado\":\"Green\"},{\"tipo\":\"Over\",\"casa\":\"Betano\",\"valor\":310,\"odd\":\"1.54\",\"resultado\":\"Red\"}]},{\"jogo\":\"Tigre\",\"data\":\"2025-09-17\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":\"2.8\",\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"Betbra\",\"valor\":260,\"odd\":\"1.699\",\"resultado\":\"Green\"}]},{\"jogo\":\"Palmeiras\",\"data\":\"2025-09-17\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":\"3.1\",\"resultado\":\"Green\"},{\"tipo\":\"Over\",\"casa\":\"Betano\",\"valor\":298,\"odd\":\"1.57\",\"resultado\":\"Red\"}]},{"jogo\":\"Goa FC\",\"data\":\"2025-09-17\",\"apostas\":[{\"tipo\":\"Under \",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":\"2.3\",\"resultado\":\"Green\"},{\"tipo\":\"Over\",\"casa\":\"bet365\",\"valor\":177,\"odd\":\"1.975\",\"resultado\":\"Red\"}]},{\"jogo\":\"PSG x Atalanta\",\"data\":\"2025-09-17\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":\"3\",\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"bet365\",\"valor\":280,\"odd\":\"1.604\",\"resultado\":\"Green\"}]},{\"jogo\":\"Ajax X Inter Milão \",\"data\":\"2025-09-17\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":\"2.9\",\"resultado\":\"Green\"},{\"tipo\":\"Over\",\"casa\":\"bet365\",\"valor\":268,\"odd\":\"1.624\",\"resultado\":\"Red\"}]},{\"jogo\":\"Botafogo x Mirassol \",\"data\":\"2025-09-17\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":\"4.1\",\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"Outra\",\"valor\":431,\"odd\":\"1.43\",\"resultado\":\"Green\"}]},{\"jogo\":\"New York city\",\"data\":\"2025-09-17\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":\"3.3\",\"resultado\":\"Green\"},{\"tipo\":\"Over\",\"casa\":\"Betbra\",\"valor\":319.5,\"odd\":\"1.56\",\"resultado\":\"Red\"}]},{\"jogo\":\"Sporting\",\"data\":\"2025-09-17\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":\"3.1\",\"resultado\":\"Green\"},{\"tipo\":\"Over\",\"casa\":\"Betano\",\"valor\":300,\"odd\":\"1.56\",\"resultado\":\"Red\"}]},{\"jogo\":\"Barcelona\",\"data\":\"2025-09-17\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":\"2.8\",\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"Betbra\",\"valor\":250,\"odd\":\"1.71\",\"resultado\":\"Green\"}]},{\"jogo\":\"Vasco\",\"data\":\"2025-09-17\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":\"2.9\",\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"Novibet\",\"valor\":262,\"odd\":\"1.67\",\"resultado\":\"Green\"}]},{\"jogo\":\"Flamengo\",\"data\":\"2025-09-17\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":\"3\",\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"Betbra\",\"valor\":280,\"odd\":\"1.604\",\"resultado\":\"Green\"}]},{\"jogo\":\"Real Madrid\",\"data\":\"2025-09-17\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":\"3.2\",\"resultado\":\"Green\"},{\"tipo\":\"Over\",\"casa\":\"Betano\",\"valor\":310,\"odd\":\"1.54\",\"resultado\":\"Red\"}]},{\"jogo\":\"Tigre\",\"data\":\"2025-09-17\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":\"2.8\",\"resultado\":\"Red\"},{\"tipo\":\"Over\",\"casa\":\"Betbra\",\"valor\":260,\"odd\":\"1.699\",\"resultado\":\"Green\"}]},{\"jogo\":\"Palmeiras\",\"data\":\"2025-09-17\",\"apostas\":[{\"tipo\":\"Under\",\"casa\":\"BETesporte\",\"valor\":150,\"odd\":\"3.1\",\"resultado\":\"Green\"},{\"tipo\":\"Over\",\"casa\":\"Betano\",\"valor\":298,\"odd\":\"1.57\",\"resultado\":\"Red\"}]}
];

// Checa se há dados no localStorage. Se não, usa os dados iniciais.
let apostas = JSON.parse(localStorage.getItem("apostas")) || dadosIniciais;
let apostaCount = apostas.length > 0 ? apostas[apostas.length - 1].apostas.length : 0;
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
    document.getElementById("jogo").value = "";
    document.getElementById("data").value = "";
    document.getElementById("apostasContainer").innerHTML = "";
    adicionarAposta();
}

function popularCasas() {
    const selectCasas = document.querySelectorAll('.casa');
    selectCasas.forEach(select => {
        select.innerHTML = '<option value="">Selecione a casa...</option>';
        casasDeAposta.forEach(casa => {
            const option = document.createElement("option");
            option.value = casa;
            option.textContent = casa;
            select.appendChild(option);
        });
    });
}

function adicionarAposta(aposta) {
    const container = document.getElementById("apostasContainer");
    const div = document.createElement("div");
    div.classList.add("aposta-item");
    div.innerHTML = `
        <label for="tipo-${apostaCount}">Tipo de Aposta:</label>
        <input type="text" id="tipo-${apostaCount}" class="tipo" placeholder="Ex: Casa, Fora, Over, Under" value="${aposta ? aposta.tipo : ''}">
        <label for="casa-${apostaCount}">Casa de Aposta:</label>
        <select id="casa-${apostaCount}" class="casa">
            <option value="">Carregando...</option>
        </select>
        <label for="valor-${apostaCount}">Valor Apostado (R$):</label>
        <input type="number" id="valor-${apostaCount}" class="valor" step="0.01" value="${aposta ? aposta.valor : ''}">
        <label for="odd-${apostaCount}">Odd:</label>
        <input type="number" id="odd-${apostaCount}" class="odd" step="0.01" value="${aposta ? aposta.odd : ''}">
        <label for="resultado-${apostaCount}">Resultado:</label>
        <select id="resultado-${apostaCount}" class="resultado">
            <option value="Pendente" ${aposta && aposta.resultado === 'Pendente' ? 'selected' : ''}>Pendente</option>
            <option value="Green" ${aposta && aposta.resultado === 'Green' ? 'selected' : ''}>Green</option>
            <option value="Red" ${aposta && aposta.resultado === 'Red' ? 'selected' : ''}>Red</option>
        </select>
        <button type="button" class="btn-remover-aposta" onclick="removerAposta(this)">Remover</button>
    `;
    container.appendChild(div);
    popularCasas();
    const selectCasa = div.querySelector('.casa');
    if (aposta && aposta.casa) {
        selectCasa.value = aposta.casa;
    }
    apostaCount++;
}

function removerAposta(btn) {
    const apostaItem = btn.parentNode;
    apostaItem.parentNode.removeChild(apostaItem);
}

function salvarAposta() {
    const jogo = document.getElementById("jogo").value;
    const data = document.getElementById("data").value;
    const apostaItems = document.querySelectorAll(".aposta-item");
    const novasApostas = [];

    if (!jogo || !data) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    apostaItems.forEach(item => {
        const tipo = item.querySelector(".tipo").value;
        const casa = item.querySelector(".casa").value;
        const valor = parseFloat(item.querySelector(".valor").value);
        const odd = parseFloat(item.querySelector(".odd").value);
        const resultado = item.querySelector(".resultado").value;

        if (tipo && casa && valor && odd) {
            novasApostas.push({ jogo, data, apostas: [{ tipo, casa, valor, odd, resultado }] });
        }
    });

    if (novasApostas.length > 0) {
        apostas.push(...novasApostas);
        localStorage.setItem("apostas", JSON.stringify(apostas));
        fecharModal('nova');
        renderApostas();
        atualizarDashboard();
        renderGraficoLucroDiario();
    } else {
        alert("Adicione pelo menos uma aposta válida.");
    }
}

function renderApostas() {
    const historicoContainer = document.getElementById("historicoContainer");
    historicoContainer.innerHTML = "";
    if (apostas.length === 0) {
        historicoContainer.innerHTML = "<p>Nenhuma aposta registrada ainda.</p>";
        return;
    }

    apostas.forEach((item, index) => {
        const apostaCard = document.createElement("div");
        apostaCard.classList.add("aposta-card");
        let apostaDetails = `<h3 onclick="toggleDetalhes(${index})">${item.jogo} - ${item.data}</h3><div class="detalhes" id="detalhes-${index}">`;
        item.apostas.forEach(aposta => {
            const statusClass = aposta.resultado === 'Green' ? 'status-finalizada' : 'status-pendente';
            const statusText = aposta.resultado === 'Green' ? 'Green' : 'Pendente';
            apostaDetails += `
                <p><strong>Tipo:</strong> ${aposta.tipo}</p>
                <p><strong>Casa:</strong> ${aposta.casa}</p>
                <p><strong>Valor:</strong> R$ ${aposta.valor.toFixed(2)}</p>
                <p><strong>Odd:</strong> ${aposta.odd.toFixed(2)}</p>
                <p><strong>Resultado:</strong> <span class="aposta-card-status ${statusClass}">${statusText}</span></p>
            `;
        });
        apostaDetails += `</div>
            <button class="btn-editar" onclick="editarAposta(${index})">Editar</button>
            <button class="btn-excluir" onclick="excluirAposta(${index})">Excluir</button>
        `;
        apostaCard.innerHTML = apostaDetails;
        historicoContainer.appendChild(apostaCard);
    });
}

function toggleDetalhes(index) {
    const detalhes = document.getElementById(`detalhes-${index}`);
    if (detalhes.style.display === "block") {
        detalhes.style.display = "none";
    } else {
        detalhes.style.display = "block";
    }
}

function editarAposta(index) {
    apostaSendoEditadaIndex = index;
    const apostaOriginal = apostas[index];
    document.getElementById('edit-jogo').value = apostaOriginal.jogo;
    document.getElementById('edit-data').value = apostaOriginal.data;
    const editContainer = document.getElementById('editApostasContainer');
    editContainer.innerHTML = '';
    apostaOriginal.apostas.forEach(aposta => {
        adicionarApostaEdicao(aposta);
    });
    abrirModal('edicao');
}

function adicionarApostaEdicao(aposta) {
    const container = document.getElementById("editApostasContainer");
    const div = document.createElement("div");
    div.classList.add("aposta-item");
    div.innerHTML = `
        <label for="edit-tipo-${apostaCount}">Tipo de Aposta:</label>
        <input type="text" id="edit-tipo-${apostaCount}" class="edit-tipo" placeholder="Ex: Casa, Fora, Over, Under" value="${aposta ? aposta.tipo : ''}">
        <label for="edit-casa-${apostaCount}">Casa de Aposta:</label>
        <select id="edit-casa-${apostaCount}" class="edit-casa">
            <option value="">Carregando...</option>
        </select>
        <label for="edit-valor-${apostaCount}">Valor Apostado (R$):</label>
        <input type="number" id="edit-valor-${apostaCount}" class="edit-valor" step="0.01" value="${aposta ? aposta.valor : ''}">
        <label for="edit-odd-${apostaCount}">Odd:</label>
        <input type="number" id="edit-odd-${apostaCount}" class="edit-odd" step="0.01" value="${aposta ? aposta.odd : ''}">
        <label for="edit-resultado-${apostaCount}">Resultado:</label>
        <select id="edit-resultado-${apostaCount}" class="edit-resultado">
            <option value="Pendente" ${aposta && aposta.resultado === 'Pendente' ? 'selected' : ''}>Pendente</option>
            <option value="Green" ${aposta && aposta.resultado === 'Green' ? 'selected' : ''}>Green</option>
            <option value="Red" ${aposta && aposta.resultado === 'Red' ? 'selected' : ''}>Red</option>
        </select>
        <button type="button" class="btn-remover-aposta" onclick="removerAposta(this)">Remover</button>
    `;
    container.appendChild(div);
    popularCasasEdicao();
    const selectCasa = div.querySelector('.edit-casa');
    if (aposta && aposta.casa) {
        selectCasa.value = aposta.casa;
    }
    apostaCount++;
}

function popularCasasEdicao() {
    const selectCasas = document.querySelectorAll('.edit-casa');
    selectCasas.forEach(select => {
        select.innerHTML = '<option value="">Selecione a casa...</option>';
        casasDeAposta.forEach(casa => {
            const option = document.createElement("option");
            option.value = casa;
            option.textContent = casa;
            select.appendChild(option);
        });
    });
}

function salvarEdicao() {
    const jogo = document.getElementById('edit-jogo').value;
    const data = document.getElementById('edit-data').value;
    const apostaItems = document.querySelectorAll("#editApostasContainer .aposta-item");
    const novasApostas = [];

    if (!jogo || !data) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    apostaItems.forEach(item => {
        const tipo = item.querySelector(".edit-tipo").value;
        const casa = item.querySelector(".edit-casa").value;
        const valor = parseFloat(item.querySelector(".edit-valor").value);
        const odd = parseFloat(item.querySelector(".edit-odd").value);
        const resultado = item.querySelector(".edit-resultado").value;

        if (tipo && casa && valor && odd) {
            novasApostas.push({ tipo, casa, valor, odd, resultado });
        }
    });

    if (novasApostas.length > 0) {
        apostas[apostaSendoEditadaIndex] = { jogo, data, apostas: novasApostas };
        localStorage.setItem("apostas", JSON.stringify(apostas));
        fecharModal('edicao');
        renderApostas();
        atualizarDashboard();
        renderGraficoLucroDiario();
    } else {
        alert("Adicione pelo menos uma aposta válida.");
    }
}

function excluirAposta(index) {
    if (confirm("Tem certeza que deseja excluir esta aposta?")) {
        apostas.splice(index, 1);
        localStorage.setItem("apostas", JSON.stringify(apostas));
        renderApostas();
        atualizarDashboard();
        renderGraficoLucroDiario();
    }
}

function atualizarDashboard() {
    const dadosFiltrados = apostas.filter(item => {
        const dataAposta = new Date(item.data);
        const hoje = new Date();
        const umMesAtras = new Date();
        umMesAtras.setMonth(hoje.getMonth() - 1);
        return dataAposta >= umMesAtras && dataAposta <= hoje;
    });

    let totalApostadoMes = 0;
    let totalGanhosMes = 0;
    let totalPendenteMes = 0;
    let lucroMes = 0;
    let lucroHoje = 0;
    let totalApostadoHoje = 0;

    const hoje = new Date().toISOString().slice(0, 10);

    dadosFiltrados.forEach(item => {
        item.apostas.forEach(aposta => {
            totalApostadoMes += aposta.valor;
            if (item.data === hoje) {
                totalApostadoHoje += aposta.valor;
            }
            if (aposta.resultado === 'Green') {
                const ganho = aposta.valor * aposta.odd;
                totalGanhosMes += ganho;
                lucroMes += ganho - aposta.valor;
                if (item.data === hoje) {
                    lucroHoje += ganho - aposta.valor;
                }
            } else if (aposta.resultado === 'Pendente') {
                totalPendenteMes += aposta.valor;
            } else if (aposta.resultado === 'Red') {
                lucroMes -= aposta.valor;
                if (item.data === hoje) {
                    lucroHoje -= aposta.valor;
                }
            }
        });
    });

    const roiMes = totalApostadoMes > 0 ? (lucroMes / totalApostadoMes) * 100 : 0;

    document.getElementById("totalApostadoMes").textContent = `R$ ${totalApostadoMes.toFixed(2)}`;
    document.getElementById("ganhosMes").textContent = `R$ ${totalGanhosMes.toFixed(2)}`;
    document.getElementById("pendenteMes").textContent = `R$ ${totalPendenteMes.toFixed(2)}`;
    document.getElementById("lucroMes").textContent = `R$ ${lucroMes.toFixed(2)}`;
    document.getElementById("ganhoHoje").textContent = `R$ ${lucroHoje.toFixed(2)}`;
    document.getElementById("roiMes").textContent = `${roiMes.toFixed(2)}%`;
}

// Configuração para carregar jogos online (API)
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

function renderGraficoLucroDiario() {
    const graficoCanvas = document.getElementById("lucroDiarioChart");
    if (!graficoCanvas) return;
    const ctx = graficoCanvas.getContext('2d');
    if (window.chart) {
        window.chart.destroy();
    }

    const lucroPorDia = {};
    apostas.forEach(item => {
        if (!lucroPorDia[item.data]) {
            lucroPorDia[item.data] = 0;
        }
        item.apostas.forEach(aposta => {
            if (aposta.resultado === 'Green') {
                lucroPorDia[item.data] += (aposta.valor * aposta.odd) - aposta.valor;
            } else if (aposta.resultado === 'Red') {
                lucroPorDia[item.data] -= aposta.valor;
            }
        });
    });

    const labels = Object.keys(lucroPorDia).sort();
    const data = labels.map(data => lucroPorDia[data]);

    window.chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Lucro Diário (R$)',
                data: data,
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
