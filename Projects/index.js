// Create a function that will take in an object as its argument and return that object as an array
function assessmentArgument(obj) {
  let endArray = []
  for (prop in obj){
      endArray.push([prop, obj[prop]]
      )}
  console.log(`endArray is: ${endArray}`)
  return endArray
}

var denzel = {name: "Denzel", group: "FED2201"} // => [["name", "Denzel"],["group", "FED2201"]]

// param: {state: "GA", city: "Atl"} => 
// return [["state", "GA"],["city", "Atl"]]

assessmentArgument(denzel)

// Using jQuery, add indexes to display a list in an HTML page

var aList = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange"
]

$(document).ready(() => {
  for (i=0; i < $(#aList).length; i++) {
      $(#aList)+='<li>'+aList[i]+'</li>'
  }

})