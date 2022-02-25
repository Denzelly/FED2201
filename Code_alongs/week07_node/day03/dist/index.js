let listOfVehicles = ["car", "bike", "bus"];
let listOfFoods = ["milk", "steak", "cheese"];
let listOfGames = ["PS5", "Xbox", "Switch"];
let obj = {
    name: "",
    category: "",
};
let getArrayDetails = (arr) => {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray.push(`The array ${Object.keys({ arr })[0]} at index [${i}] is ${arr[i]}.`);
    }
    return newArray;
};
// create a function that will take in an array,
// figure out the category of the array based on the variable name
// create an object using the ObjectDetails interface
// for each index
// and return a array of those objects
let getObjectDetails = (arr) => {
    const newArray = [];
    const arrName = Object.keys({ arr })[0];
    const category = arrName.split("listOf")[1];
    arr.forEach((thisObj) => newArray.push({
        name: thisObj,
        category,
    }));
    return newArray;
};
getArrayDetails(listOfVehicles);
getArrayDetails(listOfFoods);
getArrayDetails(listOfGames);
//# sourceMappingURL=index.js.map