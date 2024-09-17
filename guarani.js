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
//
let ImageIndex = 0;
const imagems = document.querySelectorAll('.carousel-imagems img');
const descricao = [
    "Essa foi a primeira versão da logo da Guarani Games, inspirada na bandeira do Brasil.",
    "Essa é a segunda versão da logo da Guarani Games, focando em um visual mais minimalista sem sair da inspiração.",
    "A versão final da logo da Guarani Games dando destaque as cores preta e azul focando em seu design minimalista.",
    "Esboço inicial do protagonista do jogo, inspirado na vestimenta tradicional da época.",
    "Protótipo inicial do cenário da taberna, contendo a formação original dos objetos.",
    "Panorama da disposição dos objetos do cenário do quarto da Agatha, personagem do jogo que disponibilizará a cantiga de amor ao player.",
    "Primeiro storyboard do Chronicles of Litterarium, contendo registros, desde a formação do menu até o desenvolvimento da narrativa do jogo.",
];
const descricaoElemento = document.getElementById('mamamia');

function showImage(index) {
    imagems.forEach(img => img.classList.remove('active'));
    imagems[index].classList.add('active');
    descricaoElemento.textContent = descricao[index];
}

function changeImage(direction) {
    ImageIndex += direction;
    if (ImageIndex < 0) {
        ImageIndex = imagems.length - 1;
    } else if (ImageIndex >= imagems.length) {
        ImageIndex = 0;
    }
    showImage(ImageIndex);
}

showImage(ImageIndex);
//
