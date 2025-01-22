var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()
console.log(`Agora são ${hora}:${min} horas`)

if (hora == 0 || hora < 6) {
    console.log('Tá acordado ainda')
} else if (hora < 12) {
    console.log('Bom Dia')
} else if (hora > 12 && hora < 18) {
    console.log('Boa Tarde')
} else {
    console.log('Boa Noite')
}