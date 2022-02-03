$(document).ready(() => {

    var firebaseUrl = ""
    var jsonExt = '.json'

    // data planned to be stored
    var fullFirebase;
    var listOfFBUsers = []


    // post data to DB
    function postUserToFB() {
        $.post(`${firebaseUrl}/users${jsonExt}`, JSON.stringify({
            name: "example",
            username: "ex001"
        })).then(console.log('data created!"'))
    }
    // set up jQuery to listen for button's click event
    $("#postToFB").click((e) => {
        e.preventDefault()
        console.log("button clicked!!")
        postUserToFB()
    })


    // function getUsers() {
    // }
    // READ/get data from a database
    $("#GETfirebaseData ").click((e) => {
        $.get(`${firebaseUrl}/users${jsonExt}`)
            .then((data) => {
                console.dir(data)
                fullFirebase = data
                console.dir(data)

                // for each property returned from the fullFirebase object,
                // add each on to array of objects where an ID is now listed.
                for (user in fullFirebase) {
                    if (listOfFBUsers.includes(user)) {
                        // don't do anything
                    } else {
                        listOfFBUsers.push({
                            id: user, // user's ID
                            user: [data].name,
                            username: data[user].username
                        })
                    }
                }
                // for (user in data) {
                //     listOfFBUsers = (data[user].username)
                //     console.log(`Success!!! ${data[user].username} loaded!`)
                // }
            }).then(console.log(listOfFBUsers))
            // getUsers()
            .then(listOfFBUsers.forEach((singleUser) => {
                console.log(singleUser)
                // $("#list-of-users").append(`<a>${user.username}</a>)`)
            }))
    })


    // Delete functionality
    // recall GET method to re-check our DB
    function deleteUser(username) {

        // find the user based on the username entered in the input field
        let foundUser = listOfFBUsers.find(user => user.username === username)
        // console.log(foundUser)
        console.log(`USER: ${username} was ${foundUser === undefined ? "NOT found":"FOUND" }`)

        // check if ANY data exists in the listOfFBUsers array
        let listCheck = listOfFBUsers === [] ? true : false

        console.log(`the array that holds the Firebase usernames is: ${! listCheck ? 'occupied' : 'empty' }`)
        // console.log(`from within the "deleteUser" function, the current list of Users is ${listOfFBUsers}`)
        if (foundUser !== undefined) {
            console.log(`user: ${username} found!`)
            $.ajax({
                url: `${firebaseUrl}/users/${foundUser.id}${jsonExt}`,
                type: `DELETE`,
                success: console.log(`DELETE was successful`)
            }).then(getUsers())
        } else {
            console.log(`user: ${username} CANNOT be found!`)
        }

        // make AJAX call to delete the user

        // username will be taken from the DOM input field
        // JS will check that input field's text against what's in/from our DB
        // If it exists, we can prompt the user to make sure that they want to delete it (Yes: delete, No: cancel operation)
        // If it doesn't exist, alert the user that the user doesn't exist and thus can't be deleted
    }

    $("#delete-user-button").click(() => {
        let userToBeDeleted = $("#delete-user").val()
        e.preventDefault()
        deleteUser('ex001')

        //
    })

    // updating a user



})