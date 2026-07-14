/* ==========================================================================
   ESTRUTURA DE DADOS (PERGUNTAS E RESPOSTAS - TEMA ANUSKA'S BIRTHDAY & DIVAS)
   5 Colunas (Categorias) x 6 Linhas (Valores de 200 a 1000 + Pergunta Especial -500)
   ========================================================================== */
const QUESTIONS_DATA = [
    {
        category: "BookTok",
        questions: [
            { id: "book-200", value: 200, question: "Ume médica rica da cidade grande e um prefeito de uma cidadezinha do interior que é o próprio golden retriever em forma de homem.", answer: "Parte do seu mundo" },
            { id: "book-400", value: 400, question: "Física de dia, namorada de aluguel à noite.", answer: "Amor, teoricamente" },
            { id: "book-600", value: 600, question: "O playboy jogador de hóquei fica viciado em uma amizade colorida com uma garota recém-solteira.", answer: "O jogo" },
            { id: "book-800", value: 800, question: "Ele tem um filho pequeno, é do agro e precisa de uma babá. Obs.: preferencialmente ruiva!", answer: "Sem coração" },
            { id: "book-1000", value: 1000, question: "Meu livro favorito que ainda vai virar uma tatuagem 🐉", answer: "Quarta Asa" },
            { id: "book-neg500", value: -500, question: "A maior lenda de Hollywood decide contar toda a verdade sobre sua vida glamourosa, escandalosa e  quem foi o seu verdadeiro amor.", answer: "Os 7 Maridos de Evelyn Hugo" }
        ]
    },
    {
        category: "Who is she?",
        questions: [
            { id: "eu-mesma-200", value: 200, question: "É conhecido que a aniversariante tem medo de palhaços, mas existe um que nunca despertou esse sentimento. Qual o nome dele?", answer: "Perolito" },
            { id: "eu-mesma-400", value: 400, question: "Quantos animais de estimação eu tenho e quais são eles?", answer: "6 (Sossego, Tati, Louro José, Bianca, Monalisa e Frederico" },
            { id: "eu-mesma-600", value: 600, question: "Quais foram os 4 cursos que eu tinha como opções principais no o 2º ano do ensino médio?", answer: "Psicologia, Gastronomia, Arquitetura e Publicidade & Propaganda" },
            { id: "eu-mesma-800", value: 800, question: "Qual meu jogo favorito?", answer: "The Sims 4" },
            { id: "eu-mesma-1000", value: 1000, question: "Quais foram as marcas que eu fiz publi em 2025 e postei no meu feed? (Pelo menos 4 das que ganhei algo)", answer: " Gitivi, Closet Fashion, Maria Cozinha Brasileira, Crochê com Fátima, BurgerWay, Blessed Choice, Health Labs" },
            { id: "eu-mesma-neg500", value: -500, question: "Em quantas escolas eu estudei?", answer: "5 (Monte Sião, Educar, CFCM, Chromos, M2)" }
        ]
    },
    {
        category: "T.I por Amor",
        questions: [
            { id: "tech-200", value: 200, question: " 🤖📚", answer: "Machine Learning" },
            { id: "tech-400", value: 400, question: "🏦🎲", answer: "Banco de Dados" },
            { id: "tech-600", value: 600, question: "☕🐍", answer: "Linguagens de Programação - Java/Python" },
            { id: "tech-800", value: 800, question: "🍪🌐", answer: "Cookies" },
            { id: "tech-1000", value: 1000, question: "🔥🧱", answer: "Firewall" },
            { id: "tech-neg500", value: -500, question: "☁️📦", answer: "Armazenamento em Nuvem" }
        ]
    },
    {
        category: "She Was a Fairy",
        questions: [
            { id: "filmes-200", value: 200, question: "🐝🍯☀️🌼💛", answer: "Bee Movie" },
            { id: "filmes-400", value: 400, question: "💖👸⚔️⚔️⚔️🎀", answer: "Barbie e as 3 Mosqueteiras" },
            { id: "filmes-600", value: 600, question: "🚀🌌🪐🕳️⏳", answer: "Interestelar" },
            { id: "filmes-800", value: 800, question: "🌙🧛🐺❤️🌲", answer: "Crepúsculo" },
            { id: "filmes-1000", value: 1000, question: "👨👨👨👨👨🏀🌊🏠", answer: "Gente Grande" },
            { id: "filmes-neg500", value: -500, question: "👸📖❓🪄🧙‍♀️🧹", answer: "Xuxa e o Mistério de Feiurinha" }
        ]
    },
    {
        category: "Séries Conforto",
        questions: [
            { id: "series-conforto-200", value: 200, question: "Hospital, médicos, drama, tragédias, romance", answer: "Grey's Anatomy" },
            { id: "series-conforto-400", value: 400, question: "Café, amigos, apartamento, namoro, comédia", answer: "Friends" },
            { id: "series-conforto-600", value: 600, question: "Mãe, filha, café, cidadezinha, Yale", answer: "Gilmore Girls" },
            { id: "series-conforto-800", value: 800, question: "Fofoca, elite, Nova York, segredos, moda", answer: "Gossip Girl" },
            { id: "series-conforto-1000", value: 1000, question: "Clones, irmãs, conspiração, ciência, suspense", answer: "Orphan Black" },
            { id: "series-conforto-neg500", value: -500, question: "Anos 80, monstros, crianças, superpoderes, mistério", answer: "Stranger Things" }
        ]
    }
];

// O total de perguntas agora é 5 categorias * 6 valores = 30 perguntas
const TOTAL_QUESTIONS = 30;
const HALF_QUESTIONS = 15;

/* ==========================================================================
   ESTADO DO JOGO (STATE MANAGEMENT)
   ========================================================================== */
let gameState = {
    teams: [],                 // Formato: { name: "Equipe X", score: 0 }
    answeredQuestions: [],     // Formato: ["divas-pop-200", "moda-estilo-400", ...]
    gameStarted: false,        // Indica se o jogo está ativo ou na tela de setup
    currentQuestion: null,     // Detalhes da pergunta ativa no modal
    revealState: false,        // Se a resposta correta já foi revelada no modal
    winnerRevealed: false      // Se a equipe vencedora já foi revelada ao final
};

// Chave para armazenamento no LocalStorage
const LOCAL_STORAGE_KEY = "anuska_birthday_jeopardy_state_v3";

/* ==========================================================================
   ELEMENTOS DO DOM
   ========================================================================== */
const setupScreen = document.getElementById("setup-screen");
const boardScreen = document.getElementById("board-screen");
const scoreboard = document.getElementById("scoreboard");
const secretBanner = document.getElementById("secret-banner");
const gridWrapper = document.getElementById("grid-wrapper");
const jeopardyGrid = document.getElementById("jeopardy-grid");
const startBtn = document.getElementById("start-game-btn");
const resetBtn = document.getElementById("reset-game-btn");

// Seção Final
const finalResults = document.getElementById("final-results");
const revealWinnerBtn = document.getElementById("reveal-winner-btn");
const winnerAnnouncement = document.getElementById("winner-announcement");
const confettiContainer = document.getElementById("confetti-container");

// Modal de Pergunta
const questionModal = document.getElementById("question-modal");
const modalCategory = document.getElementById("modal-category");
const modalValue = document.getElementById("modal-value");
const modalQuestion = document.getElementById("modal-question");
const revealBtn = document.getElementById("reveal-btn");
const answerBox = document.getElementById("answer-box");
const modalAnswer = document.getElementById("modal-answer");
const scoreAttributionContainer = document.getElementById("score-attribution-buttons");
const closeModalBtn = document.getElementById("close-modal-btn");

// Modal de Alerta Customizado
const customAlertModal = document.getElementById("custom-alert-modal");
const customAlertTitle = document.getElementById("custom-alert-title");
const customAlertMessage = document.getElementById("custom-alert-message");
const customAlertCloseBtn = document.getElementById("custom-alert-close-btn");

/* ==========================================================================
   INICIALIZAÇÃO DO JOGO
   ========================================================================== */
window.addEventListener("DOMContentLoaded", () => {
    loadGameState();
    setupEventListeners();
    renderGame();
    initAestheticSparkles();
});

/* ==========================================================================
   EVENT LISTENERS
   ========================================================================== */
function setupEventListeners() {
    startBtn.addEventListener("click", startGame);

    resetBtn.addEventListener("click", () => {
        if (confirm("Tem certeza que deseja reiniciar o jogo? Todos os pontos e perguntas respondidas serão perdidos.")) {
            resetGame();
        }
    });

    revealBtn.addEventListener("click", revealAnswer);

    closeModalBtn.addEventListener("click", () => {
        if (gameState.currentQuestion) {
            markQuestionAsAnswered(gameState.currentQuestion.id);
        }
        closeModal();
    });

    revealWinnerBtn.addEventListener("click", revealWinnerAndCelebrate);

    customAlertCloseBtn.addEventListener("click", () => {
        customAlertModal.classList.add("hidden");
    });

    // Event listener para controle de Tela Cheia
    const fullscreenBtn = document.getElementById("fullscreen-btn");
    fullscreenBtn.addEventListener("click", () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.error(`Erro ao ativar tela cheia: ${err.message}`);
            });
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    });
}

/* ==========================================================================
   LÓGICA DO ALERTA CUSTOMIZADO
   ========================================================================== */
function showCustomAlert(title, message, icon = "🔒") {
    customAlertTitle.innerText = title;
    customAlertMessage.innerText = message;
    document.querySelector(".alert-icon").innerText = icon;
    customAlertModal.classList.remove("hidden");
}

/* ==========================================================================
   LÓGICA PRINCIPAL DO FLUXO DO JOGO
   ========================================================================== */

function loadGameState() {
    const savedState = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedState) {
        try {
            gameState = JSON.parse(savedState);
        } catch (e) {
            console.error("Erro ao ler dados do LocalStorage, reiniciando estado.", e);
        }
    }
}

function saveGameState() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(gameState));
}

function startGame() {
    const teamNames = [];
    for (let i = 1; i <= 2; i++) {
        const inputVal = document.getElementById(`team-${i}-input`).value.trim();
        if (inputVal) {
            teamNames.push(inputVal);
        }
    }

    if (teamNames.length === 0) {
        alert("Por favor, digite o nome de pelo menos 1 equipe!");
        return;
    }

    gameState.teams = teamNames.map(name => ({ name, score: 0 }));
    gameState.answeredQuestions = [];
    gameState.gameStarted = true;
    gameState.currentQuestion = null;
    gameState.revealState = false;
    gameState.winnerRevealed = false;

    saveGameState();
    renderGame();
}

function resetGame() {
    gameState = {
        teams: [],
        answeredQuestions: [],
        gameStarted: false,
        currentQuestion: null,
        revealState: false,
        winnerRevealed: false
    };
    
    document.getElementById("team-1-input").value = "Alfa";
    document.getElementById("team-2-input").value = "Beta";

    // Para a chuva de confetes se estiver ativa
    confettiContainer.innerHTML = "";

    saveGameState();
    renderGame();
}

function renderGame() {
    if (gameState.gameStarted) {
        setupScreen.classList.add("hidden");
        setupScreen.classList.remove("active");
        boardScreen.classList.remove("hidden");
        boardScreen.classList.add("active");

        const isSecretMode = gameState.answeredQuestions.length >= HALF_QUESTIONS;

        if (isSecretMode && !gameState.winnerRevealed) {
            secretBanner.classList.remove("hidden");
        } else {
            secretBanner.classList.add("hidden");
        }

        renderScoreboard(isSecretMode && !gameState.winnerRevealed);

        const gameCompleted = gameState.answeredQuestions.length === TOTAL_QUESTIONS;

        if (gameCompleted) {
            gridWrapper.classList.add("hidden");
            finalResults.classList.remove("hidden");

            if (gameState.winnerRevealed) {
                revealWinnerBtn.classList.add("hidden");
                winnerAnnouncement.classList.remove("hidden");
                buildWinnerScreen();
                triggerConfetti();
            } else {
                revealWinnerBtn.classList.remove("hidden");
                winnerAnnouncement.classList.add("hidden");
            }
        } else {
            gridWrapper.classList.remove("hidden");
            finalResults.classList.add("hidden");
            renderGrid();
        }

        if (gameState.currentQuestion) {
            openQuestionModal(gameState.currentQuestion, true);
        } else {
            closeModal();
        }
    } else {
        boardScreen.classList.add("hidden");
        boardScreen.classList.remove("active");
        setupScreen.classList.remove("hidden");
        setupScreen.classList.add("active");
        closeModal();
    }
}

/* ==========================================================================
   RENDERIZADORES
   ========================================================================== */

function renderScoreboard(hideScores = false) {
    scoreboard.innerHTML = "";
    gameState.teams.forEach((team, index) => {
        const card = document.createElement("div");
        card.className = `team-score-card t-${index + 1} ${hideScores ? 'score-blur' : ''}`;
        
        const scoreClass = team.score >= 0 ? "positive" : "negative";

        card.innerHTML = `
            <div class="card-team-name">${team.name}</div>
            <div class="card-team-score ${scoreClass}">${team.score}</div>
        `;
        scoreboard.appendChild(card);
    });
}

function renderGrid() {
    jeopardyGrid.innerHTML = "";

    // 1. Cabeçalhos (5 Temas)
    QUESTIONS_DATA.forEach(cat => {
        const header = document.createElement("div");
        header.className = "category-header";
        header.innerText = cat.category;
        jeopardyGrid.appendChild(header);
    });

    // 2. Linhas de valores (6 linhas: 200, 400, 600, 800, 1000 e -500)
    for (let rIndex = 0; rIndex < 6; rIndex++) {
        QUESTIONS_DATA.forEach(cat => {
            const question = cat.questions[rIndex];
            const isAnswered = gameState.answeredQuestions.includes(question.id);

            const gridItem = document.createElement("button");
            gridItem.className = `grid-item ${isAnswered ? 'disabled' : ''}`;
            
            // Texto especial dramático para a rodada de penalidade -500
            let displayVal = question.value;
            if (question.value === -500) {
                displayVal = "💥 -500";
            }
            gridItem.innerHTML = `<span>${displayVal}</span>`;

            if (!isAnswered) {
                gridItem.addEventListener("click", () => {
                    const questionDetail = {
                        ...question,
                        category: cat.category
                    };
                    gameState.currentQuestion = questionDetail;
                    gameState.revealState = false;
                    saveGameState();
                    openQuestionModal(questionDetail);
                });
            } else {
                gridItem.disabled = true;
            }

            jeopardyGrid.appendChild(gridItem);
        });
    }
}

/* ==========================================================================
   MODAL DE PERGUNTAS E ATRIBUIÇÃO
   ========================================================================== */

function openQuestionModal(question, isRestore = false) {
    modalCategory.innerText = question.category;
    
    // Tratamento especial para o label de valor negativo
    if (question.value === -500) {
        modalValue.innerText = "💥 Rodada Especial (-500 Pts)";
        modalValue.style.borderColor = "#ef4444";
        modalValue.style.color = "#ef4444";
        modalValue.style.background = "rgba(239, 68, 68, 0.08)";
    } else {
        modalValue.innerText = `${question.value} Pts`;
        modalValue.style.borderColor = "rgba(255, 190, 11, 0.2)";
        modalValue.style.color = "var(--accent-gold)";
        modalValue.style.background = "rgba(255, 190, 11, 0.08)";
    }

    modalQuestion.innerText = question.question;
    modalAnswer.innerText = question.answer;

    if (isRestore && gameState.revealState) {
        revealAnswer();
    } else {
        revealBtn.classList.remove("hidden");
        answerBox.classList.add("hidden");
    }

    questionModal.classList.remove("hidden");
}

function revealAnswer() {
    gameState.revealState = true;
    saveGameState();

    revealBtn.classList.add("hidden");
    answerBox.classList.remove("hidden");

    scoreAttributionContainer.innerHTML = "";

    // LÓGICA DE PONTUAÇÃO ESPECIAL PARA A PERGUNTA -500
    if (gameState.currentQuestion.value === -500) {
        // Seção: Acertaram (Ganha 0 pontos)
        const hitTitle = document.createElement("div");
        hitTitle.className = "modal-sub-section-title";
        hitTitle.innerText = "Quem Acertou (Não perde nada):";
        scoreAttributionContainer.appendChild(hitTitle);

        const hitRow = document.createElement("div");
        hitRow.className = "score-row-container";
        gameState.teams.forEach((team, index) => {
            const btn = document.createElement("button");
            btn.className = `btn btn-team-score t-${index + 1}`;
            btn.innerText = `${team.name} (+0)`;
            btn.addEventListener("click", () => {
                attributePointsToTeam(index, 0); // Soma 0
            });
            hitRow.appendChild(btn);
        });
        scoreAttributionContainer.appendChild(hitRow);

        // Seção: Erraram (Perde 500 pontos)
        const missTitle = document.createElement("div");
        missTitle.className = "modal-sub-section-title error-text";
        missTitle.innerText = "Quem Errou (Perde 500 Pts):";
        scoreAttributionContainer.appendChild(missTitle);

        const missRow = document.createElement("div");
        missRow.className = "score-row-container";
        gameState.teams.forEach((team, index) => {
            const btn = document.createElement("button");
            btn.className = `btn btn-team-score btn-team-error t-${index + 1}`;
            btn.innerText = `${team.name} (-500)`;
            btn.addEventListener("click", () => {
                attributePointsToTeam(index, -500); // Subtrai 500
            });
            missRow.appendChild(btn);
        });
        scoreAttributionContainer.appendChild(missRow);

    } else {
        // PERGUNTA NORMAL: Soma os pontos à equipe selecionada
        gameState.teams.forEach((team, index) => {
            const teamBtn = document.createElement("button");
            teamBtn.className = `btn btn-team-score t-${index + 1}`;
            teamBtn.innerText = team.name;
            
            teamBtn.addEventListener("click", () => {
                attributePointsToTeam(index, gameState.currentQuestion.value);
            });
            
            scoreAttributionContainer.appendChild(teamBtn);
        });
    }
}

function closeModal() {
    questionModal.classList.add("hidden");
}

function markQuestionAsAnswered(questionId) {
    if (!gameState.answeredQuestions.includes(questionId)) {
        gameState.answeredQuestions.push(questionId);
    }
    gameState.currentQuestion = null;
    gameState.revealState = false;
    
    // Alerta estético customizado no meio da tela quando atinge metade (15 de 30)
    if (gameState.answeredQuestions.length === HALF_QUESTIONS) {
        setTimeout(() => {
            showCustomAlert(
                "Modo Secreto Ativado!",
                "🔒 ATENÇÃO! Metade das perguntas foram respondidas! Os placares foram congelados e agora os pontos são SECRETOS até o final!",
                "🔒"
            );
        }, 100);
    }

    saveGameState();
}

function attributePointsToTeam(teamIndex, value) {
    if (gameState.teams[teamIndex]) {
        gameState.teams[teamIndex].score += value;
        markQuestionAsAnswered(gameState.currentQuestion.id);
        
        renderGame();
        closeModal();
    }
}

/* ==========================================================================
   REVELAÇÃO DO VENCEDOR E CONFETES
   ========================================================================== */

function revealWinnerAndCelebrate() {
    gameState.winnerRevealed = true;
    saveGameState();

    revealWinnerBtn.classList.add("hidden");
    winnerAnnouncement.classList.remove("hidden");
    secretBanner.classList.add("hidden"); // Oculta o banner de modo secreto

    renderScoreboard(false);
    buildWinnerScreen();
    triggerConfetti();
}

function buildWinnerScreen() {
    const scores = gameState.teams.map(t => t.score);
    const maxScore = Math.max(...scores);
    
    const winners = gameState.teams.filter(t => t.score === maxScore);
    
    let winnerText = "";
    if (winners.length === 1) {
        winnerText = `
            <span class="winner-crown">👑</span>
            <h2 class="winner-title">${winners[0].name}</h2>
            <p class="winner-subtitle">É a grande campeã do jogo!</p>
            <div class="winner-score-highlight">${winners[0].score} Pontos</div>
        `;
    } else {
        const winnerNames = winners.map(w => w.name).join(" & ");
        winnerText = `
            <span class="winner-crown">🤝</span>
            <h2 class="winner-title">Empate!</h2>
            <p class="winner-subtitle">${winnerNames}</p>
            <div class="winner-score-highlight">${maxScore} Pontos</div>
        `;
    }

    winnerAnnouncement.innerHTML = winnerText;
}

function triggerConfetti() {
    confettiContainer.innerHTML = "";
    const colors = ["#ff006e", "#00f5d4", "#ffbe0b", "#a2d2ff", "#7b2cbf", "#06d6a0"];
    
    for (let i = 0; i < 120; i++) {
        const piece = document.createElement("div");
        piece.className = "confetti-piece";
        
        const left = Math.random() * 100; 
        const delay = Math.random() * 3; 
        const duration = Math.random() * 2 + 2; 
        const color = colors[Math.floor(Math.random() * colors.length)];
        const sizeWidth = Math.random() * 8 + 6;
        const sizeHeight = Math.random() * 12 + 10;

        piece.style.left = `${left}vw`;
        piece.style.backgroundColor = color;
        piece.style.width = `${sizeWidth}px`;
        piece.style.height = `${sizeHeight}px`;
        piece.style.animationDelay = `${delay}s`;
        piece.style.animationDuration = `${duration}s`;
        
        piece.style.transform = `rotate(${Math.random() * 360}deg)`;

        confettiContainer.appendChild(piece);
    }
}

/* ==========================================================================
   BRILHOS CINTILANTES DE FUNDO (AESTHETIC SPARKLES)
   ========================================================================== */
function initAestheticSparkles() {
    const container = document.getElementById("sparkles-background");
    if (!container) return;

    function createSparkle() {
        if (document.hidden) return;

        const sparkle = document.createElement("div");
        sparkle.className = "aesthetic-sparkle";

        const glowColors = ["#ffffff", "#ff006e", "#ffbe0b", "#00f5d4", "#7b2cbf"];
        const color = glowColors[Math.floor(Math.random() * glowColors.length)];
        const size = Math.random() * 20 + 15;
        const left = Math.random() * 100;
        const top = Math.random() * 100;

        sparkle.innerHTML = `
            <svg viewBox="0 0 48 48" fill="${color}" style="width: ${size}px; height: ${size}px; filter: drop-shadow(0 0 5px ${color}) drop-shadow(0 0 10px ${color});" xmlns="http://www.w3.org/2000/svg">
                <path d="M24,0 Q24,24 0,24 Q24,24 24,48 Q24,24 48,24 Q24,24 24,0 Z"/>
            </svg>
        `;

        sparkle.style.left = `${left}vw`;
        sparkle.style.top = `${top}vh`;

        container.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 2500);
    }

    for (let i = 0; i < 8; i++) {
        setTimeout(createSparkle, Math.random() * 2000);
    }

    setInterval(createSparkle, 350);
}
