function verificar() {
    var data = new Date()
    var ano = data.getFullYear() //pegamos o ano com os 4 digitos
    var fano = document.getElementById('txtano') //Informações do ano que vc nasceu
    var res = document.getElementById('res') //onde vai colocar a resposta

    if (fano.value.length == 0 || fano.value > ano) { 
        alert('Verifiqueos dados e tente novamente')
        //Se fano com o valor for igual a 0 ou fano for maior do o ano, vai aparecer um alerta
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        //Se não for vai acontecer vamos criar um var fsex, em baixo vamos fazer o calculo da idade, o genero vai ficar vazio, criamos uma var para a imagem para inves de colocar o <img> no HTML colocamos o createElement e o setAttribute para colocar como id 
        if (fsex[0].checked) {
            //como tem dois tipos de sexos colocamos o [0] por se tratar de dois elementos com o mesmo nome
            genero = 'Homem'
            if (idade >= 0 && idade < 13) {
                //criança
                img.setAttribute('src', 'assets/c-h.png')
            } else if (idade < 18) {
                //jovem
                img.setAttribute('src', 'assets/a-h.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'assets/m-h.png')
            } else {
                //idoso
                img.setAttribute('src','assets/i-h.png')
            }
            //vamos verificar as idades colocando a imagem usando o img.setAttribute('src','nome do arquivo')
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 13) {
                //criança
                img.setAttribute('src','assets/c-m.png')
            } else if (idade < 18) {
                //jovem
                img.setAttribute('src','assets/a-m.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src','assets/m-m.png')
            } else {
                //idoso
                img.setAttribute('src','assets/i-m.png')
            }
        }
        img.style.width = '500px'
        img.style.paddingTop ='30px'
        res.style.textAlign = 'center'
        //defini a largura o paddingTop e textAlingn
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
        //para funcionar o setAttribute usamaos o appendChild
    }
}