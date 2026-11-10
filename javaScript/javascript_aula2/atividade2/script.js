const botao = document.getElementById("calcular");
const saida = document.getElementById("resultado");
botao.addEventListener("click", function () {
 const t1 = document.getElementById("n1").value.trim();
 const t2 = document.getElementById("n2").value.trim();
 const t3 = document.getElementById("n3").value.trim();
 // TODO 1: verifique se algum campo está vazio.
 if (t1 === "" || t2 === "" || t3 === "") {
    saida.textContent = "Preencha todas as notas.";
    return;
}
 // TODO 2: converta t1, t2 e t3 com Number().
const n1 = Number(t1);
const n2 = Number(t2);
const n3 = Number(t3);
 // TODO 3: valide as notas entre 0 e 10.
 if (!Number.isFinite(t1) || t1 < 0 || t1 > 10 ||!Number.isFinite(t2) || t2 < 0 || t2 > 10 || !Number.isFinite(t3) || t3 < 0 || t3 > 10) {
    saida.textContent = "As notas devem estar entre 0 e 10.";
    return;
}
 // TODO 4: calcule a média.
const media = (n1 + n2 + n3) / 3;
 // TODO 5: use if/else para definir a situação.
 let situacao;

if (media >= 6) {
    situacao = "Aprovado";
} else {
    situacao = "Reprovado";
}
 // TODO 6: mostre média e situação em saida.textContent.
saida.textContent = "Média: " + media.toFixed(2) + " - " + situacao;
//saida.textContent = `Média: ${media.toFixed(2)} - ${situacao}`;
//a de cima é mais legal hehehe 
//mas eu vou seguir o padrão T_T
});