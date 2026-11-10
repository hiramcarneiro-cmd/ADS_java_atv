document.addEventListener('DOMContentLoaded', () => {
    const btnCalcular = document.getElementById('calcular');
    const divResultado = document.getElementById('resultado');

    btnCalcular.addEventListener('click', () => {
        const input1 = document.getElementById('nota1').value.trim();
        const input2 = document.getElementById('nota2').value.trim();
        const input3 = document.getElementById('nota3').value.trim();

        // rejeição de campos vazios
        if (input1 === '' || input2 === '' || input3 === '') {
            divResultado.textContent = 'Preencha todas as notas!';
            divResultado.className = 'erro';
            return;
        }

        const n1 = parseFloat(input1);
        const n2 = parseFloat(input2);
        const n3 = parseFloat(input3);

        //notas somente entre 0 e 10
        if (n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10 || n3 < 0 || n3 > 10) {
            divResultado.textContent = 'As notas devem estar entre 0 e 10!';
            divResultado.className = 'erro';
            return;
        }

        //calculo da media
        const media = (n1 + n2 + n3) / 3;

        //exibição do resultado
        divResultado.textContent = `Média ${media.toFixed(1)}`;
        divResultado.className = 'sucesso';
    });
});