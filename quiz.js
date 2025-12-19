document.addEventListener('DOMContentLoaded', () => {
    
    // --- PERGUNTAS FORMATADAS ---
    const questions = [
        {
            question: "Qual foi a data do nosso primeiro encontro?",
            options: ["09/11", "10/11", "01/11", "08/11"],
            answer: 0 // 09/11
        },
        {
            question: "Qual foi o dia que a gente se viu pela primeira vez?",
            options: ["30/10", "01/11", "02/11", "09/11"],
            answer: 1 // 01/11
        },
        {
            question: "Onde foi nosso primeiro beijo?",
            options: ["Cinema", "Praia", "Parque", "Teatro"],
            answer: 1 // Praia
        },
        {
            question: "Onde foi o nosso primeiro encontro?",
            options: ["Apresentação de teatro", "Praia", "Pizzaria", "Cinema"],
            answer: 0 // Apresentação de teatro
        },
        {
            question: "Qual foi a cantora que marcou a gente desde o primeiro encontro?",
            options: ["Marisa Monte", "Carol Biazin", "ANAVITÓRIA", "Ana Castela"],
            answer: 0 // Marisa Monte
        },
        {
            question: "Quem eu amo mais? 😌",
            options: ["Mailo", "Cristiele"],
            answer: 0 // Mailo
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const questionNumber = document.getElementById('question-number');
    const progressBar = document.getElementById('progress-bar');
    const scoreDisplay = document.getElementById('score');

    function loadQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        
        questionText.innerText = currentQuestion.question;
        questionNumber.innerText = `Pergunta ${currentQuestionIndex + 1} de ${questions.length}`;
        
        // Atualiza a barra de progresso conforme o seu design
        const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
        progressBar.style.width = `${progress}%`;

        optionsContainer.innerHTML = '';
        currentQuestion.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.innerText = option;
            button.classList.add('option-btn');
            button.onclick = () => checkAnswer(index, button);
            optionsContainer.appendChild(button);
        });
    }

    function checkAnswer(selectedIndex, button) {
        const correctIndex = questions[currentQuestionIndex].answer;
        const allButtons = document.querySelectorAll('.option-btn');

        allButtons.forEach(btn => btn.style.pointerEvents = 'none');

        if (selectedIndex === correctIndex) {
            button.classList.add('correct'); // Verde
            score++;
            scoreDisplay.innerText = score;
        } else {
            button.classList.add('wrong'); // Vermelho
            allButtons[correctIndex].classList.add('correct'); // Mostra a certa
        }

        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                loadQuestion();
            } else {
                showResults();
            }
        }, 1500);
    }

    function showResults() {
        questionText.innerText = `Fim do Quiz! ❤️ \n Você acertou ${score} de ${questions.length}.`;
        optionsContainer.innerHTML = `
            <button onclick="location.reload()" class="option-btn" style="text-align:center">
                Tentar Novamente
            </button>
        `;
    }

    loadQuestion();
});