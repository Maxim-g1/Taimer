console.log('до setTimeout')

setTimeout(() => {
    console.log('Сработал таймер на 3000')
}, 3000)

setTimeout(() => {
    console.log('Сработал таймер на 500')
    setTimeout(() => {
        console.log('Таймиер на 5000')
    }, 5000)
    console.log('внутри таймера на 500 после срабатывания на 5000')
}, 500)

console.log('после setTimeout')
console.log('до цикла')

console.time('tmr')
for (let i = 1; i < 2000000000; i++) {
    let a = i / i
}
console.timeEnd('tmr')
console.log('После цикла')
//*************************************************************************************************** */
const queue = [
    {
        fn: function () {
            console.log('Сработал таймер на 3000')
        },
        delay: 3000,
        start: 5476877643565
    },
    {
        fn: function () {
            console.log('Сработал таймер на 1000')
        },
        delay: 500,
        start: 5476877643565
    }
]