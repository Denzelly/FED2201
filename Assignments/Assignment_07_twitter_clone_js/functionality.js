export default (function functionality() {
    $(document).ready(() => {

        var firebaseUrl = 'https://fed2201-twitty-default-rtdb.firebaseio.com/'
        var jsonExt = '.json'

        var signUpButton = document.getElementById('signUpButton')

        var newName = document.getElementById('name')
        var newEmailPhone = document.getElementById('email_phone')
        var newUsername = document.getElementById('username')
        var newAboutMe = document.getElementById('about_me')
        var newPassword = document.getElementById('password')
        var confirmPassword = document.getElementById('cPassword')

        var tweet = document.getElementById('tweetPost')

        // verify password confirmation
        if (newPassword.value === confirmPassword.value) {
            console.log('passwords match')
        } else {
            alert('passwords do NOT match!')
            console.log('passwords do not match')
        }

        // users I plan to store
        var listOfUsers = []

        // // retrieve database data
        // $.get(`${firebaseUrl}/users${jsonExt}`)
        //     .then((data) => {
        //         console.dir(data)
        //         for (user in data) {
        //             listOfUsers.push(user)
        //             console.log(`Successful!! ${data[user].username} loaded!`)
        //         }
        //     })

        // post user sign up to DB
        function signUserUp() {
            $.post(`${firebaseUrl}/users${jsonExt}`, JSON.stringify({
                    name: newName.value,
                    email_phone: newEmailPhone.value,
                    username: newUsername.value,
                    about_me: newAboutMe.value,
                    password: newPassword.value
                }))
                .then(console.log('You have just successfully signed up for Twitty Twit!'))
        }
        // sign user up
        $(`#signUpButton`).click((e) => {
            // e.preventDefault()
            signUserUp()
            alert('button clicked')
        })

        // Login Placeholder
        $(`#twitPost`).click((e) => {
            // e.preventDefault()
            signUserUp()
            alert('Cool, you just tweeted!')
        })

        // post users tweet to DB
        function postTweet() {
            preventDefault()
            $.post(`${firebaseUrl}/users/${newUsername}${jsonExt}`, JSON.stringify({
                tweet: tweet.value
            }))

            // post tweet
            $(`#twitPost`).click((e) => {
                e.preventDefault()
                signUserUp()
                alert('Cool, you just tweeted!')
            })
        }
    })
})();