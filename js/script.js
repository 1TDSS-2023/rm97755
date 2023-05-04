"use strict"; //Não será mais possivel criar uma variavel sem valor atribuido.
// console.log("Olá Mundo!!");

// var nr1 = "10";
// var nr2 = "5";

// //Realizando oprerações com Strings e realizando o parse;
// //função parseInt...;
// console.log(parseInt(nr1) + parseInt(nr2));

// var nome1 = "Dubas";
// // let nome2 = "Serbato";
// // const nome3 = "Julia";

// if(nome1 != "") {
//     let nome1 = "Julia";//hoisnting
// }

// var nome

// console.log(nome1);

/* <button value="click" id="meu-btn">Click</button> */
const btn = document.getElementById("meu-btn");

//Primeiro passo para a transformação em rgb...
btn.addEventListener("click", function(){
    // console.log(this.textContent);

    //Função matemática math
    //Random = retorna um número aleatório entre 0 e 1
    //floor = Arredonda o numero pra baixo
    //cell = Arredonda o numero para cima
    //round = Arredonda número aleatório

    let r=0,g=0,b=0;

    r = Math.round(Math.random() * 255);
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);
    
    // this.setAttribute("style", "background-color:rgb("+r+","+g+","+b+");");
    this.setAttribute("style", 'background-color:rgb(${r},${g},${b});');
} );


/* <h2 class="tit-sec">Seçao de fotos</h2> */

const h2Element = document.querySelector(".tit-sec");

console.log(h2Element);

//querySelectorALL()