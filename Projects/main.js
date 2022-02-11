//DOM Manipulation
var interviewees = []
let interviewForm = document.querySelector(".interview-form");
var submitInfo = document.getElementById('submit-info')
var deleteInfo = document.getElementById('delete-info')

var fnameInput = document.getElementById('fname')
var mnameInput = document.getElementById('mname')
var lnameInput = document.getElementById('lname')

var editButton = document.getElementById('editInfo')
var deleteButton = document.getElementById('deleteInfo')

var informationSubmittedElement = document.getElementById('information-submitted')


interviewForm.addEventListener('submit', (event) => {
  event.preventDefault()

  // print info in the console
  console.log(`Interviewee Information submitted: \nFirst Name: ${fnameInput.value} \nMiddle Name: ${mnameInput.value} \nLast Name: ${lnameInput.value}`)

  // attach to some stored value
  interviewees.push(new Interviewee(fnameInput.value, mnameInput.value, lnameInput.value))


  // pull the innerHTML 
  let existingIntervieweesHTML = informationSubmittedElement.innerHTML

  // adding new data
  informationSubmittedElement.innerHTML = `
    ${existingIntervieweesHTML}
    <li> 
        <ul>
            <li id='newFname'> <strong>First Name </strong> ${fnameInput.value} </li>
            <li> <strong>Last Name: </strong> ${lnameInput.value} </li>
                <li class='indent'> <strong> Middle Name: </strong> ${mnameInput.value} </li>

                <li class='indent'> <strong>${editButton}.innerHTML <${deleteButton}.innerHTML</li>
            </ul> 
    </li>
    `
  // add the submitted car to the OL in the HTML

  // clear the input fields
  fnameInput.value = "";
  mnameInput.value = "";
  lnameInput.value = "";

  alert('Submit was clicked!')
})

// Edit Info
function edit() {
  // Create var for list element
  var fnameInputNew = document.getElementById(newFname)
  fnameInputNew.innerHTML = prompt('Edited First Name?');
}

// Delete Info
function cleanReset() {
  informationSubmittedElement.innerHTML = "";
  alert("Listed Interviewees & Info Cleared!")
}

// Constructor Function
function Interviewee(fname, mname, lname) {
  this.fname = fname;
  this.mname = mname;
  this.lname = lname;
}