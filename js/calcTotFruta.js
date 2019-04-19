var frutas = document.querySelectorAll(".dia");

var qdtMaca = 0;
var qtdPera = 0;
for (let i = 0; i < frutas.length; i++) {    
    var fruta = frutas[i];
   
    var tdfruta1 = fruta.querySelector(".info-fruta1");
    var tdfruta2 = fruta.querySelector(".info-fruta2");
    var tdfruta3 = fruta.querySelector(".info-fruta3");

    var fruta1 = tdfruta1.textContent;
    var fruta2 = tdfruta2.textContent;
    var fruta3 = tdfruta3.textContent;

    if (fruta1 == "Pera") {
        qtdPera++;
    }
    if (fruta2 == "Pera") {
        qtdPera++;
    }
    if (fruta3 == "Pera") {
        qtdPera++;
    }
    if (fruta1 == "Maçã") {
        qdtMaca++;
    }
    if (fruta2 == "Maçã") {
        qdtMaca++;
    }
    if (fruta3 == "Maçã") {
        qdtMaca++;
    }   
    
}
var body = document.querySelector("body");
var p = document.createElement("P");
p.classList.add("mensagem");
p.textContent= "Este mês a professora levou "+ qdtMaca +" maçãs e "+qtdPera+" peras."
body.appendChild(p);

