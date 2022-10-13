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
    const answer = document.querySelector('#' + question.getAttribute('aria-controls'));

    answer.classList.toggle('actived');
    question.setAttribute('aria-expanded', answer.classList.contains('actived'));
}

// Bike Gallery
const gallery = document.querySelectorAll('.bike-images img');
const galleryContainer = document.querySelector('.bike-images');

gallery.forEach(galleryEvents);

function galleryEvents(item) {
    item.addEventListener('click', changeImage);
}

function changeImage(e) {
    if (matchMedia('(min-width: 1000px)').matches) {
        galleryContainer.prepend(e.currentTarget);
    }
}

// Animation
if (window.SimpleAnime) {
    new SimpleAnime();
}
