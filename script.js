let scrCanvas = document.getElementById("snake");
let scrContext = scrCanvas.getContext("2d");
let nBox = 32;
let oCobra = [];
oCobra[0] = {
    x: 8 * nBox,
    y: 8 * nBox
}

function fnCriarBG() {
    scrContext.fillStyle = "blue";
    scrContext.fillRect(0, 0, 16 * nBox, 16 * nBox);
}

function fnCobrinha()
{
    for(i=0; i < oCobra.length; i++)
    {
        scrContext.fillStyle = "green";
        scrContext.fillRect(oCobra[i].x, oCobra[i].y, nBox, nBox);
    }
}

fnCriarBG();
fnCobrinha();