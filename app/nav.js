const btn = document.querySelector("#btn");
const item = document.querySelectorAll(".menu__item");

let showCard = (event) => {
    btn.classList.toggle("is-rotate");
    for (var i = 0; i < item.length; i++) {
        item[i].classList.toggle(`item-${i}`);
    }
}

btn.addEventListener("click", showCard);

function mapa() {window.location.href="mapa.html"}
function home() {window.location.href="index.html"}
function previsao() {window.location.href="previsao.html"}
