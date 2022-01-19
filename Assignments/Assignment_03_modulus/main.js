var n1 = prompt('What number would you like to divide?')
console.log('n1 = ' + n1)
var n2 = prompt('And what number would you like it divided by?')
console.log('n2 = ' + n2)
let n = (n1-n2)

(function () {
    for (let i = 0;;) {
        if (n > 0) {
            n1 = n
        }
        return 'Result: ' + n2 + '; Remainder: ' + n
    }
})();