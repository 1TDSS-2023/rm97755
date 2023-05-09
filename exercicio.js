"use strict";

const button = [...document.getElementsByTagName("button")];
const body = [...document.getElementsByTagName("body")];
const input = [...document.getElementsByTagName("input")];
const list = [...document.getElementsByTagName("ul")];
const img = [...document.getElementsByTagName("img")];
const h2 = [...document.getElementsByTagName("h2")];

// 1-Crie um botão que, quando clicado, muda a cor do background do body da página exercicio-1.html

button[0].addEventListener("click", () =>{
    let r = 0, g = 0, b = 0;
    r =Math.round(Math.random() * 255);
    g =Math.round(Math.random() * 255);
    b =Math.round(Math.random() * 255);

    body[0].setAttribute("style", `background-color: rgb(${r},${g},${b});`);
});

// 2-Crie um formulário com um campo de entrada de texto e um botão "Enviar". Quando o botão for clicado, o valor do campo de entrada deve ser adicionado como um novo item em uma lista na página.

const newItem = document.createElement('li');

button[1].addEventListener("click", () =>{
    let conteudo = input[0].value;
    console.log(conteudo);
    list[0].appendChild(newItem).innerHTML = conteudo;
});

// 3-Crie uma imagem com um botão que, quando clicado, troca a imagem por outra.

button[2].addEventListener("click", () =>{
    img[0].src ="../img/social-2.png";
});

// 4-Crie um botão e um elemento qualquer html, quandoo botão é clicado, exibe uma mensagem neste elemento html na página.

button[3].addEventListener("click", () =>{
    h2[0].innerHTML ="pfv quero férias";
});

// 5-Crie um botão que, quando clicado, oculta um elemento HTML.

button[4].addEventListener("click", () =>{
    img[1].hidden = true;
});