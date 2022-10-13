// Active menu buttons

const links = document.querySelectorAll('.header-menu a');
const url = location.href;

if (links) {
    links.forEach(activeLink);
}

function activeLink(item) {
    if (url.includes(item.href)) {
        item.classList.add('active');
    }
}

// Active budget items

const parameters = new URLSearchParams(location.search);

if (parameters) {
    parameters.forEach(activeProducts);
}

function activeProducts(item) {
    const budgetProduct = document.querySelector('#'+item);
    if (budgetProduct) {
        budgetProduct.checked = true;
    }
}

// Often Questions
const questions = document.querySelectorAll('.questions button');

questions.forEach(questionsEvents);

function questionsEvents(item) {
    item.addEventListener('click', activeQuestions);
}

function activeQuestions(e) {
    const question = e.currentTarget;
    const controls = question.getAttribute('aria-controls');
    const answer = document.querySelector('#' + controls);

    answer.classList.toggle('actived');
    question.setAttribute('aria-expanded', answer.classList.contains('actived'));
}
