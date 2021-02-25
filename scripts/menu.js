let button = document.getElementById('menubtn');
let width = window.innerWidth;
button.addEventListener('click', toggle);

if (width > 1281) {
    button.classList.add('none')
}

function toggle() {
    let nav = document.getElementById('nav');
    nav.classList.toggle('mobile');
    button.classList.toggle('cross');
}