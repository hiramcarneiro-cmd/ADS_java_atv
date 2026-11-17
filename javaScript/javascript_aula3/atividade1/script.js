const titulo =
document.querySelector('#titulo');
const resultado = document.querySelector('#resultado');
const botao = document.querySelector('#calcular');

botao.addEventListener('click', () => {

const estudante = nome.value.trim();
const n1 = Number(nota1.value);
const n2 = Number(nota2.value);
const n3 = Number(nota3.value);

if (!estudante || nota1.value === ''
    ||
    nota2.value === ''
    ||
    nota3.value === '') {
    resultado.textContent =
    'Preencha todos os campos.';
    return;
}

const valores = [n1, n2, n3];

const invalida = valores.some(nota =>
 Number.isNaN(nota) ||
 nota < 0 || nota > 10
);

if (invalida) {
 resultado.textContent =
 'Use notas entre 0 e 10.';
 return;
}

function calcularMedia(a, b, c)
    {return (a + b + c) / 3;}

function classificar(media)
{
    if (media >= 7) return 'Aprovado';
    if (media >= 5) return 'Recuperação';
    return 'Reprovado';
}

const media = calcularMedia(n1, n2, n3);
const situacao = classificar(media);

resultado.textContent =
`${estudante}: média ${media.toFixed(1)}. ` +
`Situação: ${situacao}.`;

});