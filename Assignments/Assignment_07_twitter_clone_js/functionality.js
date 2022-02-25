// import { signUserUp } from './dbModules.js'
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

        // users I plan to store
        var listOfUsers = []
        
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
        // verify password confirmation
        function passwordConfirmation() {
            if (newPassword.value === confirmPassword.value) {
                console.log('passwords match');
            } else {
                alert('passwords do NOT match!');
                console.log('passwords do not match');
                return e;
                e.preventDefault();
            }
        }

        // verify email or phone number
        function emailOrPhone() {
            var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            var phoneFormat1 = /^\d{9}$/;
            var phoneFormat2 = /^\d{10}$/;
                if (newEmailPhone.value.match(mailFormat)) {
                } 
                else if (newEmailPhone.value.match(phoneFormat1)){
                } 
                else if (newEmailPhone.value.match(phoneFormat2)){
                } 
                else {
                alert('Invalid Email or Phone-number!!');
                console.log('Invalid Email or Phone-number!!');
                return e;
                e.preventDefault();
            }
        }

        // user already exists
        function alreadyExists() {

        }


        // sign user up
        $(`#signUpButton`).click((e) => {
            emailOrPhone(e)
            passwordConfirmation(e)
            signUserUp()
            // alreadyExists()
            alert('You have just successfully signed up for Twitty Twit!')
        })
        
        // pull user info from db
        function logUserIn() {

        }


        // log user in
        $(`#loginButton`).click((e) => {
            logUserIn()
            alert('You have just successfully signed up for Twitty Twit!')
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
                postTweet()
                alert('Cool, you just tweeted!')
            })
        }
    })
})();