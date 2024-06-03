const btnTheme = document.getElementById('btnToggleTheme');
const body = document.body;
const menu = document.getElementById('menu');
const motivation = document.getElementById('motivation');
const cv = document.getElementById('cv');
const titre = document.getElementById('titre');
const paragraphe = document.getElementById('paragraphe');

btnTheme.addEventListener('click', () => {
    body.classList.toggle('dark-theme-background');

    menu.classList.toggle('dark-theme');
    motivation.classList.toggle('dark-theme');
    cv.classList.toggle('dark-theme');

    titre.classList.toggle('dark-theme');
    paragraphe.classList.toggle('dark-theme');
});


document.querySelectorAll('.projets').forEach(projet => {
    const ratingContainer = document.createElement('div');
    ratingContainer.classList.add('rating');
    
    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('span');
        star.classList.add('star');
        star.textContent = '★';
        star.setAttribute('data-rating', i);
        ratingContainer.appendChild(star);
    }
    projet.appendChild(ratingContainer);
});

