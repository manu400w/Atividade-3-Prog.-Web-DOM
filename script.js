// Contador:
let contador = 0;
let contadorSpan = document.getElementById("contador");

let btnIncrementa = document.getElementById("incrementa");

btnIncrementa.onclick = function(){
    contador++;
    contadorSpan.textContent = contador;
}

let btnDecrementa = document.getElementById("decrementa");

btnDecrementa.onclick = function(){
  if (contador > 0) {
    contador--;
    contadorSpan.textContent = contador;
  } else {
    alert("O contador já está em zero!");
  }
};

//Texto Dinâmico:

let inputTexto = document.getElementById("texto");
let paragrafo = document.getElementById("paragrafo");

inputTexto.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        let texto = inputTexto.value.trim();

    if (texto !== "") {
      let p = document.createElement("p");
      p.textContent = texto;

      paragrafo.appendChild(p);
      inputTexto.value = "";
    }
}
});

// Contador de carecteres:

let input = document.getElementById("input");
let contadorResultado = document.getElementById("contadorResultado");

input.addEventListener("input", function() {
    let texto = input.value.replace(/\s/g, '');

    contadorResultado.textContent = texto.length;
}); 

// Listas - Adicionar itens:

let tipoLista = document.getElementById("tipoLista");
let btnLista  = document.getElementById("btnLista");
let divLista = document.getElementById("listas")

btnLista.onclick = function () {
      let tipo = tipoLista.value;
      let lista = document.createElement(tipo);

      for (let i = 1; i <= 3; i++) {
        let item = document.createElement("li");
        item.textContent = "Item " + i;
        lista.appendChild(item);
      }

      divLista.appendChild(lista);
    };


// Reset na página:  
let btnReset = document.getElementById("reset");

btnReset.onclick = function () {
    contador = 0;
    contadorSpan.textContent = 0;
    paragrafo.innerHTML = "";
    contadorResultado.textContent = "";
    inputTexto.value = "";
    input.value = "";
    divLista.innerHTML = "";
    
}