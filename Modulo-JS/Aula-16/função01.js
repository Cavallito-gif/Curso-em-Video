function parimp(n) { //parâmetro
    if (n%2 == 0) { //ação
        return 'par' //retorno
    } else {
        return 'impar' //retorno
    }
}

let res = parimp(24) //chamada
console.log(res)