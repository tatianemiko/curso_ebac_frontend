const form = document.getElementById('formulario')
const valorA = document.getElementById('valor-a')
const valorB = document.getElementById('valor-b')
/*console.log('oi')*/
function validaValor(valorA , valorB){
    const valorValido = valorA < valorB;
    return valorValido;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const menssagemSucesso = `Valor A: <b> ${valorA.value} </b> < Valor B: <b> ${valorB.value} </b>. Parabéns, o valor iserido é valido!`;
    const menssagemError = `Valor de <b>B</b> deve ser maior que valor de <b>A</b>`;

    /*console.log(typeof valorA.value)*/
    if (!validaValor(parseInt(valorA.value) , parseInt(valorB.value))){
        const containerMenssagemError = document.querySelector('.error-message');
        containerMenssagemError.innerHTML = menssagemError
        containerMenssagemError.style.display = 'block';
        valorB.style.border = '1px solid red';
    } else {
        containerMenssagemSucesso = document.querySelector('.sucess-message');
        containerMenssagemSucesso.innerHTML = menssagemSucesso
        containerMenssagemSucesso.style.display = 'block';

        valorA.value = '';
        valorB.value = '';
    }
})


