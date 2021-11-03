function limpar() {
    let nota1 = document.getElementById('nota1')
    let nota2 = document.getElementById('nota2')
    let nota3 = document.getElementById('nota3')
    let nota4 = document.getElementById('nota4')
    let resultadoMedia = document.getElementById('verMedia');
    let statusAluno = document.getElementById('status');

    nota1.value = null
    nota2.value = null
    nota3.value = null
    nota4.value = null

    resultadoMedia.innerHTML = "A média aparecerá aqui"
    statusAluno.innerHTML = "Status do aluno"

}
function calcularMedia() {
    let nota1 = Number(document.getElementById('nota1').value);
    let nota2 = Number(document.getElementById('nota2').value);
    let nota3 = Number(document.getElementById('nota3').value);
    let nota4 = Number(document.getElementById('nota4').value);
    let resultadoMedia = document.getElementById('verMedia');
    let statusAluno = document.getElementById('status');


    if (nota1 <= 0 || nota1 > 10 || nota2 <= 0 || nota2 > 10 || nota3 <= 0 || nota3 > 10 || nota4 <= 0 || nota4 > 10) {
        alert("Favor, verificar os valores informados para nota. Utilizar valores maior que 0 e menor que 10")
        limpar()
    } else {
        var calcular = parseFloat((nota1 + nota2 + nota3 + nota4) / 4)

        resultadoMedia.innerHTML = `Média: ${calcular}`

        if (calcular >= 5 && calcular < 7) {
            statusAluno.innerHTML = "Aluno aprovado com recuperação"
        } else if (calcular >= 7) {
            statusAluno.innerHTML = "Aluno aprovado"
        } else {
            statusAluno.innerHTML = "Aluno reprovado"
        }
    }

}
