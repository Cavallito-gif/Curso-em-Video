function insert(num) {
    let resultado = document.getElementById('resultado')
    let numero = resultado.innerHTML
    resultado.innerHTML = numero + num
    /*
    Também podemos fazer a mesma estrutura de uma forma diferente:
    
    let numero = document.getElementById('res').innerHTML
    ducument.getElementById('res').innerHTML = numero + num

    isso ira pegar os valores clicados na calculadora, colocando em sequêcia os números 
    */

}

function clean() {
    resultado.innerHTML = ''
}

function back() {
    let resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1)
}

function calcular() {
    let resultado = document.getElementById('resultado').innerHTML
    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado)
    } else {
        alert('nada para calcular')
    }
}