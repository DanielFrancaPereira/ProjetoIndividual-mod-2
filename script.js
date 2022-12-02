const selection = document.querySelector(".select");
const adicionar = document.querySelector(".chave-container");
const radiobtn = document.querySelector(".radio-button");
const btn = document.querySelector("button");
const codigo = document.querySelector("#codificar");
const reverter = document.querySelector("#decodificar");

selection.addEventListener("click", function () {
  if (selection.value == "cifra") {
    adicionar.style.display = "block";
  } else {
    adicionar.style.display = "none";
  }
});


function base64() {
  let mensagem = document.querySelector("#mensagem").value;

  if (codigo.checked) {
    let codificado = btoa(mensagem);
    return codificado;
  } else if (reverter.checked) {
    let decodificado = atob(mensagem);
    return decodificado;
  }
}


function cifraCesar() {
  let msg = document.querySelector("#mensagem").value;
  let chave = parseInt(document.querySelector("#rangenumber").value);
  let saida = '';

  if (codigo.checked) {
    for (let i = 0; i < msg.length; i++) {
      if (msg[i] === msg[i].toUpperCase()) {
        saida += String.fromCharCode((msg.charCodeAt(i) + chave - 65) % 26 + 65); 
      } else {
        saida += String.fromCharCode((msg.charCodeAt(i) + chave - 97) % 26 + 97);
      }
    }
    return saida;

  } else if (reverter.checked) {
    for (let i = 0; i < msg.length; i++) {
      if (msg.charCodeAt(i) >= 97 && msg.charCodeAt(i) <= 122) {
        saida += String.fromCharCode((msg.charCodeAt(i) - 97 -  chave + 26) % 26 + 97);
      } else if (msg.charCodeAt(i) >= 65 && msg.charCodeAt(i) <= 90) {
        saida += String.fromCharCode((msg.charCodeAt(i) - 65 - chave + 26) % 26 + 65);
      } else {
        saida += String.fromCharCode(msg.charCodeAt(i));
      }
    }
    return saida;
  }
}

radiobtn.addEventListener("click", function () {
  if (codigo.checked) {
    btn.innerHTML = "Resultado";
  } else if (reverter.checked) {
    btn.innerHTML = "Resultado";
  }
});

btn.addEventListener("click", function (event) {
  event.preventDefault();
  if (selection.value === "base64") {
    resultado.innerText = base64();
  } else if (selection.value === "cifra") {
    resultado.innerText = cifraCesar();
  }
});
