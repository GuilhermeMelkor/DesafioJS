var table = document.querySelector("#tabela");
var nomes = [];
nomes.push("João");
nomes.push("Maria");

for (var i = 4; i <= 30; i++) {
    var objDia = criaObj(i);
    var frutas = populaFruta(objDia);   
    objDia.fruta1 = frutas[0];
    objDia.fruta2 = frutas[1];
    objDia.fruta3 = frutas[2];
    var diaTr = montaTr(objDia);
    table.appendChild(diaTr);
}


function montaTr(objDia) {
    var diaTr = document.createElement("tr");
    diaTr.classList.add("dia");
    diaTr.appendChild(montaTd(objDia.dia,"info-dia"));
    diaTr.appendChild(montaTd(objDia.peras,"info-peras"));
    diaTr.appendChild(montaTd(objDia.macas,"info-macas"));
    diaTr.appendChild(montaTd(objDia.melhorAluno,"info-aluno"));
    diaTr.appendChild(montaTd(objDia.fruta1,"info-fruta1"));
    diaTr.appendChild(montaTd(objDia.fruta2,"info-fruta2"));
    diaTr.appendChild(montaTd(objDia.fruta3,"info-fruta3"));
    return diaTr;
}
function montaTd(dado,classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;
    return td;
}

function QtdAleatorio() {
    limite = 5;
    n = parseInt(Math.random() * limite);
    return n;
}
function sorteiaNomes(nomes) {
    var n = Math.round(Math.random() * (nomes.length - 1));
    return nomes[n];
}
function populaFruta(objDia) {
    var frutas = [];

    if (objDia.melhorAluno == "Maria" && objDia.peras > 0) {
        for (let i = 0; i < objDia.peras; i++) {
            frutas[i] = "Pera";
        }
    }
    if (objDia.melhorAluno == "João" && objDia.macas > 0) {
        for (let i = 0; i < objDia.macas; i++) {
            frutas[i] = "Maçã";
        }
    }
    if (frutas.length <= 0) {
       
        if (objDia.peras > 0) {
            for (let i = 0; i < objDia.peras; i++) {
                frutas[i] = "Peras";
            }
        }
        if (objDia.macas > 0) {
            for (let i = 0; i < objDia.macas; i++) {
                frutas[i] = "Maçã";
            }
        }
    }
    if (frutas.length < 3) {
  
       
        if (frutas[frutas.length - 1] == "Pera") {
            
            
            if (objDia.macas > 0) {
                              
                for (let i = frutas.length; i <= objDia.macas; i++) {
                    frutas[i] = "Maçã";                    
                }
                if (objDia.macas<frutas.length) {
                    frutas[frutas.length] = "Maçã"; 
                }
            }
        }
        if (frutas[frutas.length - 1] == "Maçã") {        
            
            if (objDia.peras > 0) {                
                for (let i = frutas.length; i <= objDia.peras; i++) {
                    frutas[i] = "Pera";                   
                }
                if (objDia.peras<frutas.length) {
                    frutas[frutas.length] = "Pera"; 
                }
            }
        }

    }
    return frutas;
}
function criaObj(intDia) {
    var linha = {
        dia: intDia,
        peras: QtdAleatorio(),
        macas: QtdAleatorio(),
        melhorAluno: sorteiaNomes(nomes),
        fruta1: 0,
        fruta2: 0,
        fruta3: 0
    }
    return linha;
}
