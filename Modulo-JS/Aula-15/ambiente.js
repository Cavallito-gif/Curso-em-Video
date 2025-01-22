let num = [7,5,3,1]
// num[10] = 21
num.push(2) // a sequencia sempre importa 
num.sort()

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O segundo número do vetor é ${num[1]}`)

for(let c = 0; c < num.length; c++) {
    console.log(num[c])
}
let pos = num.indexOf(1)
if (pos == -1){
    console.log('O valor não foi encontrado!!')
}else { 
    console.log(`O valor 3 está na posição ${pos}`)
}
