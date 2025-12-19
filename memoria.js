const gameBoard = document.getElementById('game-board');
const movesDisplay = document.getElementById('moves');
const resetBtn = document.getElementById('reset-btn');

// 1. LISTA DE FOTOS (Substitua pelos nomes dos seus arquivos)
const photos = [
    'imgs/img1.jpeg', 'imgs/img2.jpeg',  
    'imgs/img4.jpeg', 'imgs/img5.jpeg', 'imgs/img6.jpeg',
    'imgs/img7.jpeg', 'imgs/img8.jpeg', 'imgs/img9.jpeg',
    'imgs/img10.jpeg', 'imgs/img13.jpeg',
];

let cards = [...photos, ...photos]; // Duplica para criar pares
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let moves = 0;

function createBoard() {
    gameBoard.innerHTML = '';
    // Embaralhar cartas
    cards.sort(() => Math.random() - 0.5);

    cards.forEach(photo => {
        const card = document.createElement('div');
        card.classList.add('memory-card');
        card.dataset.photo = photo;

        // CORREÇÃO AQUI: Removido o "img/" antes de ${photo}
        card.innerHTML = `
            <div class="front-face">
                <img src="${photo}" alt="Nossa Memória">
            </div>
            <div class="back-face">
                <i class="fa-solid fa-heart"></i>
            </div>
        `;

        card.addEventListener('click', flipCard);
        gameBoard.appendChild(card);
    });
}

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.photo === secondCard.dataset.photo;
    
    moves++;
    movesDisplay.innerText = moves;

    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1000);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

resetBtn.addEventListener('click', () => {
    moves = 0;
    movesDisplay.innerText = moves;
    createBoard();
});

// Iniciar o jogo
createBoard();