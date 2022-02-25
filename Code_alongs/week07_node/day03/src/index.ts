let listOfVehicles: string[] = ["car", "bike", "bus"];
let listOfFoods: string[] = ["milk", "steak", "cheese"];
let listOfGames: string[] = ["PS5", "Xbox", "Switch"];

// Interfaces and Objects
interface ObjectDetails {
  name: string;
  category: string;
}

let obj: ObjectDetails = {
  name: "",
  category: "",
};

let getArrayDetails = (arr: string[]): string[] => {
  const newArray: string[] = [];

  for (let i = 0; i < arr.length; i++) {
    newArray.push(
      `The array ${Object.keys({ arr })[0]} at index [${i}] is ${arr[i]}.`
    );
  }

  return newArray;
};

// create a function that will take in an array,
// figure out the category of the array based on the variable name
// create an object using the ObjectDetails interface
// for each index
// and return a array of those objects
let getObjectDetails = (arr: string[]): ObjectDetails[] => {
  const newArray: ObjectDetails[] = [];

  const arrName: string = Object.keys({ arr })[0];
  const category: string = arrName.split("listOf")[1];

  arr.forEach((thisObj) =>
    newArray.push({
      name: thisObj,
      category,
    })
  );

  return newArray;
};

getArrayDetails(listOfVehicles);
getArrayDetails(listOfFoods);
getArrayDetails(listOfGames);
