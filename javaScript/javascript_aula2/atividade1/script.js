const campoIdade = document.getElementById("idade");
const botao = document.getElementById("verificar");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", function () {
    const texto = campoIdade.value.trim();
    const idade = Number(texto);

    console.log("Entrada:", texto);
    console.log(typeof texto);
    console.log(typeof idade);

    if (texto === "") {
        resultado.textContent = "Informe sua idade.";
    } else if (idade >= 18) {
        resultado.textContent = "Você é maior de idade.";
    } else {
        resultado.textContent = "Você é menor de idade.";
    } if (idade < 0) {
        resultado.textContent = "Idade invalida"
    } else if (!Number.isInteger(idade)) {
        resultado.textContent = "Idade invalida"
    }
});
