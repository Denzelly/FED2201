// JavaScript Fundamentals

// // VAriable Declaration, Data Types
// var name = "Zelly";
// var nullValue = null;

// // Strings
// var aString = " A string of characters";
// // Numbers
// var aNumber = 5;
// // Booleans
// var aBoolean = true;

// // Collection of data
// // Arrays
// var anArray = [false, 1, "2", 3]
// // Objects
// var anObject = {
//     // key-value pairs
//     // properties
//     number: 1,
//     string: "something",
//     // methods
//     aMethod() {
//         console.log("This object holds a sting with the phrase: " + this.string)
//     }
// };

// // Functions
// function myFunc() {
//     console.log(aBoolean);
// };

// // Functions with Parameters
// function myParamFunc (arr) {

//     // For Loop
//     for(let index = 0; index < arr.length; index++) {
//         // Pseudocode: I want the phrase to be "The array at the index of ## is of type [data type of the index's value] with value of [whatever that index's value is]]"
//         console.log("The array at the index of " + index + " is of type: " + typeof arr[index] + " with a value of: ", arr[index]);
//     }

//     return arr
// }

// IIFEs: Immediately Invoked Function Expressions
// (function (){

    var name = "Zelly";
    var nullValue = null;
    var aString = " A string of characters";
    var aNumber = 5;
    var aBoolean = true;
    var anArray = [false, 1, "2", 3]
    var anObject = {
        number: 1,
        string: "something",
        aMethod() {
            console.log("This object holds a sting with the phrase: " + this.string)
        }
    };

    function myFunc() {
        "use strict"
        // console.log(aBoolean);
        var x = 0;
        return x;
    };

    function myParamFunc(arr) {

        for (let index = 0; index < arr.length; index++) {
            console.log("The array at the index of " + index + " is of type: " + typeof arr[index] + " with a vale of: " + arr[index]);
        }
        return arr
    }

    console.log("IIFE is now running!")

// })();