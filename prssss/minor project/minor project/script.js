document.addEventListener('DOMContentLoaded', function () {
    const subscribeForm = document.getElementById('subscribeForm');

    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const emailInput = document.getElementById('email');
            const enteredEmail = emailInput.value;

            alert(`Thank you for subscribing!\nEmail: ${enteredEmail}`);

            emailInput.value = '';
        });
    }

    const quizContainer = document.getElementById('quiz-container');
    const questions = document.querySelectorAll('.question');
    const submitButton = document.getElementById('quiz-submit');

    let currentQuestionIndex = 0;

    function showQuestion(index) {
        questions.forEach((question, i) => {
            question.style.display = i === index ? 'block' : 'none';
        });
    }

    function showNextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion(currentQuestionIndex);
        } else {
            alert('Quiz completed! Check your answers.');
            resetQuiz();
        }
    }

    function resetQuiz() {
        currentQuestionIndex = 0;
        showQuestion(currentQuestionIndex);
    }

    if (submitButton) {
        submitButton.addEventListener('click', function () {
            alert('Quiz submitted! Check your answers.');
            resetQuiz();
        });
    }

    resetQuiz();
});
document.addEventListener('DOMContentLoaded', function () {
    // ... (previous script.js code) ...

    // Trigger animation for About Us text on scroll
    const aboutSection = document.getElementById('about');
    const aboutText = document.querySelector('.about-text');

    function checkAboutVisibility() {
        const bounding = aboutSection.getBoundingClientRect();

        if (bounding.top >= 0 && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
            aboutText.classList.add('show');
        } else {
            aboutText.classList.remove('show');
        }
    }

    window.addEventListener('scroll', checkAboutVisibility);
    window.addEventListener('resize', checkAboutVisibility);

    checkAboutVisibility(); // Trigger on page load
});
