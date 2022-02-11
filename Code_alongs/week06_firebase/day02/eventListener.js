// DELETE food entry from table an DB
function deleteFoodEntry() {
    // $.delete(foodEntry.id)
    console.log(`will delete something`)

}

let deleteButtons = document.getElementsByClassName("deleteButton")
console.log(deleteButtons)

for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].getAttribute("id")
}

// deleteButton.addEventListener("click", () => {
//     console.log(`DELETE button was clicked`)

// })
// $("button").click(() => {
// })