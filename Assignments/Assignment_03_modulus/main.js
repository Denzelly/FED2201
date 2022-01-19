var n1 = prompt('What number would you like to divide?')
console.log('n1 = ' + n1);
var n2 = prompt('And what number would you like it divided by?')
console.log('n2 = ' + n2);
// var n = (n1-n2);
var n=n1-n2;

(function () {
    for (let i = 0;;i++) {
        if (n > 0) {
            n=n1
            n1-=n2
        }
        else {break}
        console.log('Result: ' + i + '; Remainder: ' + n)
    } 
})();

// let n1=15
// let n2=2

// iterate while n > 0
// n -> n1

// n1-n2 = n
// 1. n = 13 >= 0
// 2. n = 11 >= 0
// 3. n = 9 >= 0
// 4. n = 7 >= 0
// 5. n = 5 >= 0
// 6. n = 3 >= 0
// 7. n = 1 >= 0

// 8. n = -1 < 0

// result: # of iterations (7)
// remainder: value of n on last acceptable iteration (1)