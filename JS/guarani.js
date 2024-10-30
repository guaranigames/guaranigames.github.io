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