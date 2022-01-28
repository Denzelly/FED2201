//DOM Manipulation
var interviewees = []
var submitInfo = document.getElementById('submit-info')

var fnameInput = document.getElementById('fname')
var mnameInput = document.getElementById('mname')
var lnameInput = document.getElementById('lname')

var emailInput = document.getElementById('email')
var addressInput = document.getElementById('address')

var dobInput = document.getElementById('dob')
var cityInput = document.getElementById('city')
var stateInput = document.getElementById('state')
var zipInput = document.getElementById('zip')

var informationSubmittedElement = document.getElementById('information-submitted')


submitInfo.addEventListener('click', (event) => {
    event.preventDefault()

    // print info in the console
    console.log(`Interviewee Information submitted: \nFirst Name: ${fnameInput.value} \nMiddle Name: ${mnameInput.value} \nLast Name: ${lnameInput.value} 
    \nEmail Address: ${emailInput.value} \nMailing Address: ${addressInput.value} 
    \nDate of Birth: ${dobInput.value} \nCity: ${cityInput.value} \nState: ${stateInput.value} \nZip Code: ${zipInput.value}`)

    // attach to some stored value
    interviewees.push(new Interviewee(fnameInput.value, mnameInput.value, lnameInput.value, emailInput.value, addressInput.value, dobInput.value, cityInput.value, stateInput.value, zipInput.value))


    // pull the innerHTML 
    let existingIntervieweesHTML = informationSubmittedElement.innerHTML

    // adding new data
    informationSubmittedElement.innerHTML = `
    ${existingIntervieweesHTML}
    <li> 
    <ul>
    <li> <strong>First Name </strong> ${fnameInput.value} </li>
    <li> <strong>Last Name: </strong> ${lnameInput.value} </li>
    </ul> 
    </li>
    `
    // add the submitted car to the OL in the HTML

    // clear the input fields
    fnameInput.value = "";
    mnameInput.value = "";
    lnameInput.value = "";
    emailInput.value = "";
    addressInput.value = "";
    dobInput.value = "";
    cityInput.value = "";
    stateInput.value = "";
    zipInput.value = "";

    alert('Submit was clicked!')
})

// Constructor Function
function Interviewee(fname, mname, lname, email, address, dob, city, state, zip) {
    this.fname = fname;
    this.mname = mname;
    this.lname = lname;

    this.email = lname;
    this.address = lname;

    this.dob = dob;
    this.city = city;
    this.state = state;
    this.zip = zip;
}