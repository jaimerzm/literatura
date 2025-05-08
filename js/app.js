document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Elements ---
    const appWrapper = document.getElementById('app-wrapper');
    const topicSelectionScreen = document.getElementById('topic-selection-screen');
    const topicsListContainer = document.getElementById('topics-list');
    const quizScreen = document.getElementById('quiz-screen');
    const quizTopicTitle = document.getElementById('quiz-topic-title');
    const progressBar = document.getElementById('progress-bar');
    const livesContainer = document.getElementById('lives-container');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    
    const bottomFeedbackBanner = document.getElementById('bottom-feedback-banner');
    const feedbackIconContainer = document.getElementById('feedback-icon');
    const feedbackTitle = document.getElementById('feedback-title');
    const feedbackExplanation = document.getElementById('feedback-explanation');
    const continueBtn = document.getElementById('continue-btn');
    // const checkAnswerBtn = document.getElementById('check-answer-btn'); // No longer a separate button, integrated into options or bottom banner
    
    const resultsScreen = document.getElementById('results-screen');
    const resultsTitle = document.getElementById('results-title');
    const resultsIconContainer = document.getElementById('results-icon');
    const resultsScore = document.getElementById('results-score');
    const resultsMessage = document.getElementById('results-message');
    const restartTopicBtn = document.getElementById('restart-topic-btn');
    const backToTopicsBtn = document.getElementById('back-to-topics-btn');
    const backToTopicsFromQuizBtn = document.getElementById('back-to-topics-from-quiz-btn');


    // --- SVG Icons (Duolingo-ish) ---
    const ICONS = {
        heart: '<svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>',
        lock: '<svg viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2z"/></svg>',
        play: '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>',
        check: '<svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>',
        cross: '<svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>',
        trophy: '<svg viewBox="0 0 24 24"><path d="M20.2,4H3.8C3.3,4,3,4.3,3,4.8v3.4C3,8.7,3.3,9,3.8,9H5v6.5c0,0.9,0.7,1.6,1.6,1.6h10.7c0.9,0,1.6-0.7,1.6-1.6V9h1.2c0.5,0,0.8-0.3,0.8-0.8V4.8C21,4.3,20.7,4,20.2,4z M18,8h-1.2V5h1.2V8z M6.2,8H5V5h1.2V8z M16.5,15.5H7.5V9h9V15.5z M12,1.5L9.5,5h5L12,1.5z"/></svg>',
        sadFace: '<svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/></svg>'
    };

    // --- Game State ---
    let currentTopicId = null;
    let currentQuestions = [];
    let currentQuestionIndex = 0;
    let score = 0;
    let lives = 5; // <<<<----- MODIFIED TO 5 LIVES
    const MAX_LIVES = 5; // <<<<----- MODIFIED TO 5 LIVES
    let userSelectedAnswers = []; 

    let playerProgress = JSON.parse(localStorage.getItem('litteraLudoProgress')) || {};

    function saveProgress() {
        localStorage.setItem('litteraLudoProgress', JSON.stringify(playerProgress));
    }

    function updateTopicProgress(topicId, completed, topicScore) {
        if (!playerProgress[topicId]) {
            playerProgress[topicId] = { completed: false, score: 0 };
        }
        // Only mark completed if it's a successful completion
        if (completed) {
            playerProgress[topicId].completed = true;
        }
        // Update score if it's higher or if it wasn't completed before
        if (topicScore > (playerProgress[topicId].score || 0) || !playerProgress[topicId].completed) {
            playerProgress[topicId].score = topicScore;
        }
        saveProgress();
    }

    function showScreen(screenElement) {
        topicSelectionScreen.classList.add('hidden');
        quizScreen.classList.add('hidden');
        resultsScreen.classList.add('hidden');
        screenElement.classList.remove('hidden');
        appWrapper.scrollTop = 0; // Scroll to top of new screen
    }

    function loadTopics() {
        topicsListContainer.innerHTML = ''; 
        const topicIds = Object.keys(DBLiteratura);

        topicIds.forEach((topicId) => {
            const topic = DBLiteratura[topicId];
            const topicCard = document.createElement('div');
            topicCard.classList.add('topic-card');
            
            const progress = playerProgress[topicId] || { completed: false, score: 0 };
            let isLocked = false;

            if (topicId === "T12" && (!playerProgress["T11"] || !playerProgress["T11"].completed)) {
                isLocked = true;
            }
            // Example for T13 if T12 needs to be completed
            // if (topicId === "T13" && (!playerProgress["T12"] || !playerProgress["T12"].completed)) {
            //     isLocked = true;
            // }

            topicCard.innerHTML = `
                <div class="topic-card-content">
                    <h3>${topic.title}</h3>
                    <p class="topic-progress">${isLocked ? "Bloqueado - Completa el tema anterior" : (progress.completed ? `Completado (Mejor: ${progress.score || 0}%)` : `Preguntas: ${topic.questions.length}`)}</p>
                </div>
                <div class="topic-card-action">
                    <span class="start-icon">${isLocked ? ICONS.lock : ICONS.play}</span>
                </div>
            `;

            if (isLocked) {
                topicCard.classList.add('locked');
            } else {
                topicCard.addEventListener('click', () => startQuiz(topicId));
            }
            topicsListContainer.appendChild(topicCard);
        });
        showScreen(topicSelectionScreen);
    }

    function startQuiz(topicId) {
        currentTopicId = topicId;
        currentQuestions = shuffleArray([...DBLiteratura[topicId].questions]);
        currentQuestionIndex = 0;
        score = 0;
        lives = MAX_LIVES;
        
        quizTopicTitle.textContent = DBLiteratura[topicId].title;
        updateLivesDisplay();
        loadQuestion();
        showScreen(quizScreen);
    }
    
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function updateLivesDisplay() {
        livesContainer.innerHTML = '';
        for (let i = 0; i < MAX_LIVES; i++) {
            const heartSpan = document.createElement('span');
            heartSpan.classList.add('life-heart');
            heartSpan.innerHTML = ICONS.heart;
            if (i >= lives) {
                heartSpan.classList.add('lost');
            }
            livesContainer.appendChild(heartSpan);
        }
    }

    function loadQuestion() {
        if (currentQuestionIndex >= currentQuestions.length) {
            endQuiz(true); 
            return;
        }

        const questionData = currentQuestions[currentQuestionIndex];
        questionText.textContent = questionData.question;
        optionsContainer.innerHTML = '';
        userSelectedAnswers = [];

        // Determine options based on type for true/false
        const optionsToShow = questionData.type === "true-false" ? ["Verdadero", "Falso"] : questionData.options;

        optionsToShow.forEach(optionText => {
            const optionElementIsButton = questionData.type !== "multi-select";
            let element;

            if (optionElementIsButton) {
                element = document.createElement('button');
                element.classList.add('option-btn');
                element.textContent = optionText;

                // Store the actual value to compare, especially for true/false
                if (questionData.type === "true-false") {
                    element.dataset.value = (optionText === "Verdadero"); // Store boolean true or false
                } else {
                    element.dataset.value = optionText; // For MCQ, value is the text itself
                }

                element.addEventListener('click', (e) => {
                    handleOptionSelection(e.currentTarget, questionData.type);
                    // For single choice, immediately check answer
                    processAnswer(); 
                });
            } else { // multi-select
                element = document.createElement('label');
                element.classList.add('option-checkbox-label');
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.value = optionText;
                checkbox.name = 'option';
                
                checkbox.addEventListener('change', (e) => {
                    const label = e.target.closest('.option-checkbox-label');
                    if (e.target.checked) {
                        userSelectedAnswers.push(optionText);
                        label.classList.add('selected');
                    } else {
                        userSelectedAnswers = userSelectedAnswers.filter(ans => ans !== optionText);
                        label.classList.remove('selected');
                    }
                    // For multi-select, we need a separate "check" button or logic
                    // For now, let's assume multi-select also auto-submits for simplicity,
                    // or we add a check button ONLY for multi-select later.
                    // For this version, let's make multi-select require a "continue" click from banner
                });
                element.appendChild(checkbox);
                element.appendChild(document.createTextNode(optionText));
                // For multi-select, we won't auto-process on click, user will click "Continue"
            }
            optionsContainer.appendChild(element);
        });

        // If it's multi-select, add a specific "Comprobar" button for it.
        if (questionData.type === "multi-select") {
            const checkMultiSelectBtn = document.createElement('button');
            checkMultiSelectBtn.textContent = "Comprobar Selección";
            checkMultiSelectBtn.classList.add('action-btn', 'primary'); // Use existing styles
            checkMultiSelectBtn.style.marginTop = "1rem";
            checkMultiSelectBtn.addEventListener('click', () => {
                processAnswer();
                checkMultiSelectBtn.remove(); // Remove after click
            });
            optionsContainer.appendChild(checkMultiSelectBtn);
        }


        updateProgressBar();
        bottomFeedbackBanner.classList.add('hidden');
        bottomFeedbackBanner.classList.remove('visible', 'correct-banner', 'incorrect-banner');
    }

    function handleOptionSelection(selectedElement, questionType) {
        if (questionType !== "multi-select") {
            // Deselect other buttons for single choice
            optionsContainer.querySelectorAll('.option-btn.selected').forEach(btn => btn.classList.remove('selected'));
            selectedElement.classList.add('selected');
            
            if (questionType === "true-false") {
                userSelectedAnswers = [selectedElement.dataset.value === 'true']; // Get boolean
            } else { // MCQ, MCQ-fill
                userSelectedAnswers = [selectedElement.dataset.value];
            }
        }
        // For multi-select, selection is handled by checkbox change listener
    }

    function processAnswer() {
        const questionData = currentQuestions[currentQuestionIndex];
        let isCorrect = false;

        if (questionData.type === "multi-select") {
            const correctAnswers = questionData.answer;
            isCorrect = userSelectedAnswers.length === correctAnswers.length &&
                        userSelectedAnswers.every(ans => correctAnswers.includes(ans)) &&
                        correctAnswers.every(ans => userSelectedAnswers.includes(ans));
        } else { // mcq, true-false, mcq-fill
            // userSelectedAnswers[0] should now correctly be a boolean for true-false
            // and a string for MCQ types
            isCorrect = userSelectedAnswers.length === 1 && userSelectedAnswers[0] === questionData.answer;
        }

        // Disable options after checking
        optionsContainer.querySelectorAll('button, input').forEach(el => el.disabled = true);
        // Remove selection styles if any applied before feedback
        optionsContainer.querySelectorAll('.selected').forEach(el => el.classList.remove('selected'));

        if (isCorrect) {
            score++;
            feedbackTitle.textContent = "¡Correcto!";
            feedbackIconContainer.innerHTML = ICONS.check;
            bottomFeedbackBanner.className = 'correct-banner'; // Reset classes then add
            feedbackExplanation.textContent = questionData.explanation || "¡Buen trabajo!";
            
            // Highlight selected correct options
            optionsContainer.querySelectorAll('.option-btn, .option-checkbox-label').forEach(optEl => {
                let optValue = questionData.type === "true-false" && optEl.matches('.option-btn') ? (optEl.dataset.value === 'true') 
                             : (optEl.matches('.option-btn') ? optEl.dataset.value : optEl.querySelector('input').value);
                
                const isUserChoice = userSelectedAnswers.includes(optValue);
                if (isUserChoice) {
                    optEl.classList.add('correct');
                }
            });

        } else {
            lives--;
            updateLivesDisplay();
            feedbackTitle.textContent = "Incorrecto";
            feedbackIconContainer.innerHTML = ICONS.cross;
            bottomFeedbackBanner.className = 'incorrect-banner'; // Reset classes then add
            
            let explanation = `La respuesta correcta era: `;
            if (Array.isArray(questionData.answer)) { // Multi-select
                explanation += questionData.answer.join(', ');
            } else if (typeof questionData.answer === 'boolean') { // True/False
                explanation += questionData.answer ? "Verdadero" : "Falso";
            } else { // MCQ
                explanation += questionData.answer;
            }
            if (questionData.explanation) {
                explanation += `. ${questionData.explanation}`;
            }
            feedbackExplanation.textContent = explanation;
            
            // Highlight user's incorrect choices and the correct ones
            optionsContainer.querySelectorAll('.option-btn, .option-checkbox-label').forEach(optEl => {
                let optValue;
                let isCheckboxLabel = optEl.matches('.option-checkbox-label');

                if (questionData.type === "true-false" && !isCheckboxLabel) { // Button for T/F
                    optValue = (optEl.dataset.value === 'true');
                } else if (!isCheckboxLabel) { // Button for MCQ
                    optValue = optEl.dataset.value;
                } else { // Checkbox label for multi-select
                    optValue = optEl.querySelector('input').value;
                }
                
                const isUserSelection = userSelectedAnswers.includes(optValue);
                const isActuallyCorrect = Array.isArray(questionData.answer) ? questionData.answer.includes(optValue) : questionData.answer === optValue;

                if(isUserSelection && !isActuallyCorrect) {
                    optEl.classList.add('incorrect');
                }
                if(isActuallyCorrect){
                    optEl.classList.add('reveal-correct'); 
                }
            });

            if (lives <= 0) {
                continueBtn.textContent = "Ver Resultados"; // Change button text
            }
        }
        bottomFeedbackBanner.classList.add('visible');
    }


    continueBtn.addEventListener('click', () => {
        bottomFeedbackBanner.classList.remove('visible');
        // A small delay for the banner to hide before loading next question or ending quiz
        setTimeout(() => {
            if (lives <= 0) {
                endQuiz(false);
                continueBtn.textContent = "Continuar"; // Reset button text
                return;
            }
            currentQuestionIndex++;
            loadQuestion();
        }, 300);
    });


    function updateProgressBar() {
        const progressPercentage = (currentQuestionIndex / currentQuestions.length) * 100;
        progressBar.style.width = `${progressPercentage}%`;
    }

    function endQuiz(completedSuccessfully) {
        showScreen(resultsScreen);
        const topicScorePercentage = currentQuestions.length > 0 ? Math.round((score / currentQuestions.length) * 100) : 0;

        if (completedSuccessfully) {
            resultsTitle.textContent = `¡Lección Completada!`;
            resultsIconContainer.innerHTML = ICONS.trophy;
            resultsScore.textContent = `Tu puntuación: ${score}/${currentQuestions.length} (${topicScorePercentage}%)`;
            resultsMessage.textContent = topicScorePercentage >= 70 ? "¡Impresionante! Has dominado este tema." : "¡Buen trabajo! Sigue practicando para mejorar.";
            updateTopicProgress(currentTopicId, true, topicScorePercentage);
        } else { // Ran out of lives
            resultsTitle.textContent = `¡Oh no! Fin de la partida`;
            resultsIconContainer.innerHTML = ICONS.sadFace;
            resultsScore.textContent = `Puntuación: ${score}/${currentQuestions.length} (${topicScorePercentage}%)`;
            resultsMessage.textContent = "No te desanimes, ¡cada intento es un aprendizaje!";
            // Update progress even on failure if it's a new high score for an uncompleted topic
            const oldProgress = playerProgress[currentTopicId] || { score: 0, completed: false };
            if (!oldProgress.completed && topicScorePercentage > (oldProgress.score || 0)) {
                 updateTopicProgress(currentTopicId, false, topicScorePercentage);
            }
        }
    }

    restartTopicBtn.addEventListener('click', () => {
        startQuiz(currentTopicId);
    });

    backToTopicsBtn.addEventListener('click', () => {
        loadTopics();
    });
    backToTopicsFromQuizBtn.addEventListener('click', () => {
        // Maybe add a confirmation: "Are you sure you want to leave? Progress will be lost."
        loadTopics();
    });

    // --- Initial Load ---
    loadTopics();
});