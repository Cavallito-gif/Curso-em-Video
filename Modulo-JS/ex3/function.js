function conversorFahrenheitCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32)
    }

let res1 = conversorFahrenheitCelsius;
console.log(res1)
console.log(typeof conversorFahrenheitCelsius)
console.log('-----------------------')
let res2 = conversorFahrenheitCelsius(10)
console.log(res2)
console.log(typeof conversorFahrenheitCelsius())