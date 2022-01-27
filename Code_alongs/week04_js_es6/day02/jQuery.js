$(document).ready(() => {
    // jQuery code goes here

    // Constructor Function
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    var listOfCars = []

    // var submitCarButton2 = document.getElementById('submit-cars')
    var submitCarButton = $('#submit-cars');

    // var carMakeInput = document.getElementById('car-make')
    // var carModelInput = document.getElementById('car-model')
    // var carYearInput = document.getElementById('car-year')
    var carMakeInput = $('#car-make')
    var carModelInput = $('#car-model')
    var carYearInput = $('#car-year')

    // var carsSubmittedElement = document.getElementById('list-of-cars-submitted')
    var carsSubmittedElement = $('#list-of-cars-submitted')

    // console.dir(submitCarButton)

    submitCarButton.click(() => {
        // create an boject to hold all the values
        let submittedCar = {
            make: carMakeInput.val(),
            model: carModelInput.val(),
            year: carYearInput.val()
        }
        //something happens
        e.preventDefault();
        alert('submit button clicked');

        //print the data submitted to the console
        console.log(`Car Information submitted: \nMake: ${submitteCar.make} \nModel: ${submittedCar.model} \nYear: ${submittedCar.year}`)

        // attach to some stored value
        listOfCars.push(new Car(submitCar.make, submittedCar.model, submittedCar.year))

        console.log(`Array of cars changed...`)
        console.log(listOfCars)

        // add the sumbitted car to the OL in the HTML
        // pull the innerHTML 
        let existingListOfCars = carsSubmittedElement.html()

        // now add in new data
        carsSubmittedElement.html(`
    ${existingListOfCarsHTML}
    <li> 
        <ul>
            <li> <strong>Year: </strong> ${submittedCar.make} </li>
            <li> <strong>Make: </strong> ${submittedCar.model} </li>
            <li> <strong>Model: </strong> ${submittedCar.year}</li>
        </ul> 
    </li>
    `)

    // clear the input fields
    carYearInput.val("")
    carMakeInput.val("")
    carModelInput.val("")
    })

    // Old-fashioned XMLHTTP Request format. Contains deprecated practices
    // varxhttp = new
    // XMLHttpRequest();
    // xhttp.onreadystatechange = 
    // () => {
    //     if (this.readyState == 4) {
    //             && this.statusbar == 200)
    //             console.log(`Call was made...`)
    //             console.log(xhttp.responseText)
    //         }
    // }

    // xhttp.open("GET", "./car-data.json", true);
    // xhttp.send();

    // JS Fetch
    fetch("./car-data.json")
    .then(response => response.json())

});