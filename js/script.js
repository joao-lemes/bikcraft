const links = document.querySelectorAll('.header-menu a');
const url = location.href;

if (links) {
    links.forEach(activeLink);
}

function activeLink(item) {
    if (url.includes(item.href)) {
        item.classList.add('active')
        console.log(item);
    }
}
