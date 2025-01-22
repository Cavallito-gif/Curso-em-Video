function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    //criamos variaves que capturava os id, pegamos o horario e os minutos

    msg.innerHTML = `Agora são ${hora}:${min} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'f1.png'
        document.body.style.background = '#515154'
        //bom dia, para colocar a imagem colocamos o img.src => caminho do arquivo
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'f2.png'
        //boa tarde
    } else {
        img.src = 'f3.png'
        document.body.style.background = '#515154'
        //boa noire
    }
} 