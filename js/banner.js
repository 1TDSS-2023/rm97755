
let tmp = "";

//ARROW FUNCTION
const mudaCor = ()=>{

    let r = Math.round(Math.random() *255);
    let g = Math.round(Math.random() *255);
    let b = Math.round(Math.random() *255);

    const elCabecalho = document.querySelector(".cabecalho");

    elCabecalho.style.backgroundColor = `rgb(${r},${g},${b})`;

    tmp = setTimeout(mudaCor, 1000);
}

mudaCor();
