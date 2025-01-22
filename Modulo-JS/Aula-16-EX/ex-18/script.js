let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero (n) { //aqui estou verificando se o número é maior do que 0 e menor de 100
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista (n, l) { //verifica se o valor já esta na lista
    if (l.indexOf(Number(n)) != -1 ) { //se l receber um valor diferente de -1 vai constatar que ja tem o item na lista, senão retorna como false
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) { //se for um número e se for diferente de numero e valores que estão dentro do array
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''

    } else { //senão ocorre outro evento
        alert('[ERRO] Valores Inválidos ou Já Encontrado na Lista')
    }
    num.value = '' // aqui serve para toda vez o input ficar vazio
    num.focus() //para sempre deixar a aste de escrita no input
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0] //vai pegar o primeiro número
        let menor = valores[0]
        let sub = 0
        let soma = 0
        let media = 0

        for(let pos in valores) { //para cada posição em valores eu vou mostra um valores.pos
            soma += valores[pos]  // Sendo soma = 0 eu vou somar com os valores de cada posição
            sub -= valores[pos]
            media += valores[pos] / tot //Sendo a média = 0 vai somar todos os valores e dividir por tot
            if (valores[pos] > maior){ //se valores[pos] > maior do que o número
                maior = valores[pos] //o maior valor vai ser valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior número informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor número informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os número informado, teremos ${soma}</p>`
        res.innerHTML += `<p>subtraindo todos os número informado, teremos ${sub}</p>`
        res.innerHTML += `<p>A Média dos produtos será de  ${media}</p>`
    }
}