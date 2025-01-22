function contar() {
    var ini = document.getElementById('txti').value
    var fim = document.getElementById('txtf').value
    var passo = document.getElementById('txtp').value
    var res = document.getElementById('res')

    if (ini === "" || fim === "" || passo === "") {
        window.alert('[ERRO] Certifique-se de que você colocou os números')
    } else {
        var i = Number(ini)
        var f = Number(fim)
        var p = Number(passo)

        if (p <= 0) {
            window.alert('[ERRO] Passo inválido!')
            return
        }

        res.innerHTML = ''
        for (var c = i; c <= f; c += p) {
            res.innerHTML += `${c} 👍`
        }
    }
}
//tenho que estudar mais sobre o for
