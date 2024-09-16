let btnmenu = document.getElementById('btn_abrir')
let menu = document.getElementById('menumoba')
let overlay = document.getElementById('overlay-menu')


btnmenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

//carousel sobre nos
let currentImageIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const descriptions = [
    "Kaique Lemos, um dos fundadores da Guarani Games,  está responsável pela equipe do desenvolvimento de Chronicles of Litterarium, fazendo parte do design gráfico e jogabilidade.",

    "Nicolas Ruivo, um dos fundadores da Guarani Games, está responsável pela parte de marketing, sendo o administrador das redes sociais e o desenvolvedor da documentação do projeto, fazendo parte do desenvolvimento do design do jogo.",

    "Victor Ricardo, um dos fundadores da Guarani Games,  comanda o desenvolvimento web, integrando a parte criativa do design gráfico e também a criação da logo da empresa e o nome do jogo.",

    "Gabriel Almeida está responsável pelo design gráfico, composição de efeitos sonoros e desenvolvimento web. Responsável pela criação da logo da empresa e do jogo.",

    "Marcelo Jesus, responsável pela pesquisa e ambientação do jogo, integra também o grupo de design gráfico, documentação do projeto e efeitos sonoros.",

    "Gabriel Rufino atua no desenvolvimento da jogabilidade da plataforma abrangendo o design gráfico e é compositor da trilha sonora, além de ser integrante da documentação.",
    
    "Felippe Guizze é responsável pela criação do jogo, desenvolvendo desde sua jogabilidade até seu design.",
];
const descriptionElement = document.getElementById('description');

function showImage(index) {
    images.forEach(img => img.classList.remove('active'));
    images[index].classList.add('active');
    descriptionElement.textContent = descriptions[index];
}

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    showImage(currentImageIndex);
}

showImage(currentImageIndex);